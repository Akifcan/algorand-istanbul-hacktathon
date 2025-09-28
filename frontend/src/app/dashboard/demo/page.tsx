"use client"
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction
} from "@/components/ui/alert-dialog";
import DashboardLayout from "@/layouts/dashboard-layout";
import { UserPlus, Send, Image, FileText, Database, GalleryHorizontal, Key, Loader2, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import RedirectButton from "@/components/RedirectButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/config/supabase";
import useUserStore from "@/store/user";

export default function Demo() {
    const { user } = useUserStore();
    const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState<{title: string, message: string}>({title: '', message: ''});
    const [hasWallet, setHasWallet] = useState<boolean | null>(null);

    // Check if user has a wallet
    const checkWallet = async () => {
        if (!user) {
            return;
        }

        try {
            const { data } = await supabase.from('accounts').select('*').eq('user_id', user.id);
            if (!data || data.length === 0 || !data[0].wallet) {
                setHasWallet(false);
            } else {
                setHasWallet(true);
            }
        } catch (error) {
            console.error('Error checking wallet:', error);
            setHasWallet(false);
        }
    };

    useEffect(() => {
        checkWallet();
    }, [user]);

    const handleApiCall = async (endpoint: string, title: string) => {
        setLoadingStates(prev => ({...prev, [endpoint]: true}));

        try {
            const response = await fetch(endpoint);
            const data = await response.text();

            setDialogContent({
                title: `${title} Response`,
                message: response.ok ? data || 'Request completed successfully' : `Error: ${response.status} - ${data}`
            });
            setDialogOpen(true);
        } catch (error) {
            setDialogContent({
                title: 'Network Error',
                message: `Failed to reach the endpoint: ${error instanceof Error ? error.message : 'Unknown error'}`
            });
            setDialogOpen(true);
        } finally {
            setLoadingStates(prev => ({...prev, [endpoint]: false}));
        }
    };

    const handleCreateAccount = () => {
        handleApiCall('/api/docs/create-account', 'Create Account');
    }

    const handleSendToken = () => {
        handleApiCall('/api/docs/send-token', 'Send Token');
    }

    const handleCreateNFT = () => {
        handleApiCall('/api/docs/create-nft', 'Create NFT');
    }

    const handleWrite = () => {
        handleApiCall('/api/docs/write-data', 'Write Data');
    }

    const handleOptIn = () => {
        handleApiCall('/api/docs/opt-in', 'Opt In');
    }

    const handleGetNft = () => {
        handleApiCall('/api/docs/get-nft', 'Get NFT');
    }

    const getData = () => {
        handleApiCall('/api/docs/get-data', 'Get Data');
    }

    const demoFeatures = [
        {
            title: "Create Account",
            description: "Generate a new Algorand account with wallet integration",
            icon: UserPlus,
            onClick: handleCreateAccount,
            color: "bg-blue-500 hover:bg-blue-600",
            endpoint: "/api/docs/create-account"
        },
        {
            title: "Send Token",
            description: "Transfer ALGO tokens between accounts",
            icon: Send,
            onClick: handleSendToken,
            color: "bg-green-500 hover:bg-green-600",
            endpoint: "/api/docs/send-token"
        },
        {
            title: "Create NFT",
            description: "Mint unique digital assets on Algorand",
            icon: Image,
            onClick: handleCreateNFT,
            color: "bg-purple-500 hover:bg-purple-600",
            endpoint: "/api/docs/create-nft"
        },
        {
            title: "Write Data",
            description: "Store information on the blockchain",
            icon: FileText,
            onClick: handleWrite,
            color: "bg-orange-500 hover:bg-orange-600",
            endpoint: "/api/docs/write-data"
        },
        {
            title: "Get Data",
            description: "Retrieve stored blockchain information",
            icon: Database,
            onClick: getData,
            color: "bg-teal-500 hover:bg-teal-600",
            endpoint: "/api/docs/get-data"
        },
        {
            title: "Opt in",
            description: "Opt in before receive an asset",
            icon: Key,
            onClick: handleOptIn,
            color: "bg-blue-500 hover:bg-teal-600",
            endpoint: "/api/docs/opt-in"
        },
        {
            title: "Get NFT",
            description: "Get NFT Details",
            icon: GalleryHorizontal,
            onClick: handleGetNft,
            color: "bg-green-500 hover:bg-teal-600",
            endpoint: "/api/docs/get-nft"
        },
    ];

    return <DashboardLayout>
        <div className="container mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Algorand Demo Features
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Explore blockchain functionality with these interactive demos
                </p>
            </div>

            {/* Wallet Error Alert */}
            {hasWallet === false && (
                <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20 mb-6">
                    <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">No wallet found</p>
                                <p className="text-sm text-red-700 dark:text-red-300">
                                    You need to create a wallet first to use these demo features. Some functions may not work properly.
                                </p>
                            </div>
                            <Button
                                onClick={() => window.location.href = '/dashboard'}
                                variant="outline"
                                size="sm"
                                className="bg-red-100 border-red-300 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200 dark:hover:bg-red-900/50"
                            >
                                Create Wallet
                            </Button>
                        </div>
                    </AlertDescription>
                </Alert>
            )}

                        <div className="flex gap-2 flex-wrap mb-2">
                          <RedirectButton />
                        </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                            onClick={feature.onClick}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className={`p-3 rounded-full ${feature.color} text-white transition-transform group-hover:scale-110`}>
                                    <Icon size={24} />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">
                                {feature.description}
                            </p>

                            <Button
                                className="w-full hover:text-white"
                                variant="outline"
                                disabled={loadingStates[feature.endpoint]}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    feature.onClick();
                                }}
                            >
                                {loadingStates[feature.endpoint] ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    'Try Demo'
                                )}
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    How to Use
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Click on any card to run the corresponding demo
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Each demo showcases different Algorand blockchain capabilities
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Check your browser&apos;s developer console for API responses
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Monitor the Network tab in Developer Tools to see the API requests
                    </li>
                </ul>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{dialogContent.title} -  <small>(CHECK THE NETWORK TAB FOR MORE DETAIL)</small></AlertDialogTitle>
                        <AlertDialogDescription className="max-h-60 overflow-y-auto" style={{whiteSpace: 'normal', wordBreak: 'break-all'}}>
                            {dialogContent.message} 
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setDialogOpen(false)}>
                            Close
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    </DashboardLayout>
}