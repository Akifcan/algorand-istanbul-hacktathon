"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Eye, EyeOff } from "lucide-react";

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
        return new Date(dateString).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="w-full max-w-2xl text-center space-y-8">
            {/* Wallet Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            </div>

            {/* Title */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-foreground">Your Algorand Wallet</h1>
                <p className="text-lg text-muted-foreground">
                    Wallet created on {formatDate(walletData.created_at)}
                </p>
            </div>

            {/* Wallet Information Card */}
            <Card className="w-full text-left">
                <CardHeader>
                    <CardTitle>Wallet Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Wallet Address */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Wallet Address:</label>
                        <div className="flex items-center space-x-2">
                            <code className="flex-1 p-3 bg-muted rounded text-sm break-all font-mono">
                                {walletData.wallet}
                            </code>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(walletData.wallet)}
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* API Secret */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">API Secret Key:</label>
                        <div className="flex items-center space-x-2">
                            <code className="flex-1 p-3 bg-muted rounded text-sm break-all font-mono">
                                {showSecret ? walletData.api_secret : '••••••••••••••••••••'}
                            </code>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowSecret(!showSecret)}
                            >
                                {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(walletData.api_secret)}
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                            className="flex-1"
                            onClick={() => {
                                // Perawallet görüntüleme fonksiyonu buraya eklenecek
                                console.log('Perawallet görüntüleme');
                            }}
                        >
                            Perawallet Üzerinde Görüntüle
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
