"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Loader2, AlertTriangle } from "lucide-react";
import useUserStore from "@/store/user";
import ViewWalletButton from "./ViewWalletButton";

interface WalletResponse {
    mnemonic: string;
    address: string;
}

export default function WalletCreation() {
    const [isLoading, setIsLoading] = useState(false);
    const [walletData, setWalletData] = useState<WalletResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUserStore()

    const createWallet = async () => {
        setIsLoading(true);
        setError(null);
        setWalletData(null);

        try {
            const response = await fetch('/api/create-wallet', {
                method: 'POST',
                body: JSON.stringify({user_id: user!.id}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to create wallet');
            }

            const data: WalletResponse = await response.json();
            setWalletData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="w-full max-w-6xl space-y-8">
            {!walletData ? (
                <>
                    {/* Hero Section - Terminal Style */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 text-white">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat'
                            }}></div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold font-mono">$ create-wallet</h1>
                                    <p className="text-gray-300 font-mono text-sm">
                                        Initialize new Algorand wallet
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-400 font-mono text-sm ml-2">wallet-setup.terminal</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-green-400 font-mono">→</span>
                                            <span className="text-gray-300 font-mono text-sm">Network:</span>
                                            <span className="text-green-400 font-mono">TESTNET</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-blue-400 font-mono">→</span>
                                            <span className="text-gray-300 font-mono text-sm">Security:</span>
                                            <span className="text-blue-400 font-mono">QUANTUM-SAFE</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-purple-400 font-mono">→</span>
                                            <span className="text-gray-300 font-mono text-sm">Speed:</span>
                                            <span className="text-purple-400 font-mono">10K TPS</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-400 font-mono text-sm ml-2">actions.terminal</span>
                                    </div>
                                    <Button
                                        onClick={createWallet}
                                        disabled={isLoading}
                                        className="w-full bg-accent hover:bg-accent/90 text-white"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating...
                                            </>
                                        ) : (
                                            'Initialize Wallet'
                                        )}
                                    </Button>

                                    {error && (
                                        <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg">
                                            <p className="text-red-300 text-xs font-mono">ERROR: {error}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards - Neumorphism Style */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <div className="w-4 h-4 bg-white rounded-lg"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Secure Generation</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Military-grade encryption</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Your wallet will be generated using cryptographically secure random number generation with quantum-resistant algorithms.
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <div className="w-4 h-4 bg-white rounded-lg"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Instant Setup</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Ready in seconds</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                No waiting periods or verification delays. Your wallet will be ready to use immediately after creation.
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Success Hero */}
                    <div className="text-center space-y-6">
                        <div className="relative">
                            <div className="w-20 h-20 mx-auto bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold text-foreground">Wallet Created!</h1>
                            <p className="text-muted-foreground">
                                Save your credentials securely
                            </p>
                        </div>
                    </div>

                    {/* Warning Alert */}
                    <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            <p className="text-amber-800 dark:text-amber-200 text-sm">
                                <strong>Important:</strong> Save this information immediately. It will not be shown again.
                            </p>
                        </div>
                    </div>

                    {/* Wallet Information - Neumorphism Style */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Wallet Address Card */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Wallet Address</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Public identifier</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 mb-6 shadow-inner">
                                <code className="text-xs break-all font-mono text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {walletData.address}
                                </code>
                            </div>

                            <div className="space-y-2">
                                <Button
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
                                    onClick={() => copyToClipboard(walletData.address)}
                                >
                                    <Copy className="h-4 w-4 mr-2" />
                                    Copy Address
                                </Button>
                                <ViewWalletButton wallet={walletData.address} />
                            </div>
                        </div>

                        {/* Recovery Phrase Card */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Recovery Phrase</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Private access key</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 mb-6 shadow-inner">
                                <code className="text-xs break-all font-mono text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {walletData.mnemonic}
                                </code>
                            </div>

                            <Button
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg"
                                onClick={() => copyToClipboard(walletData.mnemonic)}
                            >
                                <Copy className="h-4 w-4 mr-2" />
                                Copy Recovery Phrase
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
