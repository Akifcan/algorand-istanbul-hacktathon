"use client"
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ExternalLink, Coins, Info } from "lucide-react";

export default function TestAlgoNotification() {
    const handleOpenAlgoBank = () => {
        window.open('https://bank.testnet.algorand.network', '_blank');
    };

    return (
        <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20 mb-6">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Coins className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                            <p className="font-medium">Need test ALGO for transactions?</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                Load test ALGO from the Algorand testnet bank to start using your wallet
                            </p>
                        </div>
                    </div>
                    <Button
                        onClick={handleOpenAlgoBank}
                        variant="outline"
                        size="sm"
                        className="bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-200 dark:hover:bg-blue-900/50"
                    >
                        <span>Get Test ALGO</span>
                        <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </AlertDescription>
        </Alert>
    );
}