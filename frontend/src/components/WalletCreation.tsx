"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Loader2, AlertTriangle } from "lucide-react";
import useUserStore from "@/store/user";

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
        <div className="w-full max-w-lg text-center space-y-8">
            {!walletData ? (
                <>
                    {/* Wallet Icon */}
                    <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-muted-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>

                    {/* Welcome Text */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-foreground">You haven't created your wallet yet</h1>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Create your first Algorand wallet to start using your AlgoPOS system
                        </p>
                    </div>

                    {/* Create Wallet Card */}
                    <Card className="w-full">
                        <CardContent className="pt-6 space-y-4">
                            <Button
                                onClick={createWallet}
                                disabled={isLoading}
                                className="w-full h-12 text-lg"
                                size="lg"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Creating Wallet...
                                    </>
                                ) : (
                                    'Create My First Wallet'
                                )}
                            </Button>

                            {error && (
                                <Alert variant="destructive">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>• Your wallet will be created securely</p>
                                <p>• Save your mnemonic words in a safe place</p>
                                <p>• This process will take a few seconds</p>
                            </div>
                        </CardContent>
                    </Card>
                </>
            ) : (
                <>
                    {/* Success State */}
                    <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-foreground">Wallet successfully created!</h1>
                        <p className="text-lg text-muted-foreground">
                            Please save the following information securely
                        </p>
                    </div>

                    <Alert className="text-left">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                            <strong>IMPORTANT:</strong> This mnemonic will not be shown again.
                            Save it securely in your .env file immediately.
                        </AlertDescription>
                    </Alert>

                    <div className="space-y-4 text-left">
                        <div>
                            <label className="text-sm font-medium">Wallet Address:</label>
                            <div className="flex items-center space-x-2 mt-1">
                                <code className="flex-1 p-3 bg-muted rounded text-sm break-all">
                                    {walletData.address}
                                </code>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(walletData.address)}
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Mnemonic (Save to .env file):</label>
                            <div className="flex items-center space-x-2 mt-1">
                                <code className="flex-1 p-3 bg-muted rounded text-sm break-all">
                                    {walletData.mnemonic}
                                </code>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(walletData.mnemonic)}
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
