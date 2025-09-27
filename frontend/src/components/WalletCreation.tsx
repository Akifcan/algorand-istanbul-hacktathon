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
        <div className="w-80">
            {!walletData ? (
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center rounded-xl">
                    <div className="mb-6">
                        <div className="w-20 h-20 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl">💳</span>
                        </div>
                        <h3 className="text-xl font-medium mb-2">No Wallet Yet</h3>
                        <p className="text-gray-500 text-sm">Create your first Algorand wallet</p>
                    </div>

                    <Button
                        onClick={createWallet}
                        disabled={isLoading}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating...
                            </>
                        ) : (
                            'Create Wallet'
                        )}
                    </Button>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded">
                            {error}
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                            <span className="text-2xl">✓</span>
                        </div>
                        <h3 className="text-lg font-medium">Wallet Ready!</h3>
                        <p className="text-gray-500 text-sm">Save these details now</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-3 rounded mb-4">
                        <p className="text-orange-800 dark:text-orange-200 text-sm font-medium">
                            ⚠️ Save immediately - won't be shown again
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                                <span>🏠</span> Wallet Address
                            </h4>
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mb-3 font-mono text-sm break-all">
                                {walletData.address}
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => copyToClipboard(walletData.address)}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1"
                                >
                                    <Copy className="h-3 w-3 mr-1" />
                                    Copy
                                </Button>
                                <ViewWalletButton wallet={walletData.address} />
                            </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                                <span>🔐</span> Recovery Phrase
                            </h4>
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mb-3 font-mono text-sm break-all">
                                {walletData.mnemonic}
                            </div>
                            <Button
                                onClick={() => copyToClipboard(walletData.mnemonic)}
                                variant="outline"
                                size="sm"
                                className="w-full"
                            >
                                <Copy className="h-3 w-3 mr-1" />
                                Copy Recovery Phrase
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
