"use client"
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layouts/dashboard-layout";
import { UserPlus, Send, Image, FileText, Database } from "lucide-react";

export default function Demo() {

    const handleCreateAccount = () => {
        fetch('/api/docs/create-account')
    }

    const handleSendToken = () => {
        fetch('/api/docs/send-token')
    }

    const handleCreateNFT = () => {
        fetch('/api/docs/create-nft')
    }

    const handleWrite = () => {
        fetch('/api/docs/write-data')
    }

    const getData = () => {
        fetch('/api/docs/get-data')
    }

    const demoFeatures = [
        {
            title: "Create Account",
            description: "Generate a new Algorand account with wallet integration",
            icon: UserPlus,
            onClick: handleCreateAccount,
            color: "bg-blue-500 hover:bg-blue-600"
        },
        {
            title: "Send Token",
            description: "Transfer ALGO tokens between accounts",
            icon: Send,
            onClick: handleSendToken,
            color: "bg-green-500 hover:bg-green-600"
        },
        {
            title: "Create NFT",
            description: "Mint unique digital assets on Algorand",
            icon: Image,
            onClick: handleCreateNFT,
            color: "bg-purple-500 hover:bg-purple-600"
        },
        {
            title: "Write Data",
            description: "Store information on the blockchain",
            icon: FileText,
            onClick: handleWrite,
            color: "bg-orange-500 hover:bg-orange-600"
        },
        {
            title: "Get Data",
            description: "Retrieve stored blockchain information",
            icon: Database,
            onClick: getData,
            color: "bg-teal-500 hover:bg-teal-600"
        }
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
                                onClick={(e) => {
                                    e.stopPropagation();
                                    feature.onClick();
                                }}
                            >
                                Try Demo
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
                        Check your browser's developer console for API responses
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Monitor the Network tab in Developer Tools to see the API requests
                    </li>
                </ul>
            </div>
        </div>
    </DashboardLayout>
}