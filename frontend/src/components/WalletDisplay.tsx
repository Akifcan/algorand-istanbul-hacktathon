"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Eye, EyeOff } from "lucide-react";
import ViewWalletButton from "./ViewWalletButton";
import Wallet from "./icons/Wallet";

interface WalletData {
    id: number;
    user_id: string;
    wallet: string;
    api_secret: string;
    created_at: string;
}

interface WalletDisplayProps {
    walletData: WalletData;
}

export default function WalletDisplay({ walletData }: WalletDisplayProps) {
    const [showSecret, setShowSecret] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="w-full max-w-6xl space-y-8">
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
                            <Wallet />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold font-mono">$ algo-wallet</h1>
                            <p className="text-gray-300 font-mono text-sm">
                                Created: {formatDate(walletData.created_at)}
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-gray-400 font-mono text-sm ml-2">Terminal</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400 font-mono">→</span>
                                    <span className="text-gray-300 font-mono text-sm">Status:</span>
                                    <span className="text-green-400 font-mono">ONLINE</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400 font-mono">→</span>
                                    <span className="text-gray-300 font-mono text-sm">Type:</span>
                                    <span className="text-purple-400 font-mono">ALGORAND</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-gray-400 font-mono text-sm ml-2">View on Explorer</span>
                            </div>
                            <ViewWalletButton wallet={walletData.wallet} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Cards - Neumorphism Style */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Wallet Address - Neumorphism Card */}
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
                            {walletData.wallet}
                        </code>
                    </div>
                    
                    <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
                        onClick={() => copyToClipboard(walletData.wallet)}
                    >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Address
                    </Button>
                </div>

                {/* API Secret - Neumorphism Card */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="w-6 h-6 bg-white rounded-lg"></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">API Secret</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Private access key</p>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 mb-6 shadow-inner">
                        <code className="text-xs break-all font-mono text-gray-700 dark:text-gray-300 leading-relaxed">
                            {showSecret ? walletData.api_secret : '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'}
                        </code>
                    </div>
                    
                    <div className="flex gap-3">
                        <Button 
                            variant="outline"
                            className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 border-0 shadow-lg"
                            onClick={() => setShowSecret(!showSecret)}
                        >
                            {showSecret ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                            {showSecret ? 'Hide' : 'Show'}
                        </Button>
                        <Button 
                            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg"
                            onClick={() => copyToClipboard(walletData.api_secret)}
                        >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                        </Button>
                    </div>
                </div>
            </div>

            {/* Floating Action Panel */}
            <div className="fixed bottom-8 right-8 z-50">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Wallet Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
