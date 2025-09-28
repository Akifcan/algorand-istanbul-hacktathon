"use client"
import { useState } from "react";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, CheckCircle, CreditCard, DollarSign, Calendar, Zap } from "lucide-react";
import useUserStore from "@/store/user";
import { supabase } from "@/config/supabase";

export default function Settings() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const { user } = useUserStore()

    const handleDeleteWallet = async () => {
        setIsDeleting(true);
        await supabase.from('accounts').delete().eq('user_id', user!.id)
        setIsDeleting(false);
        setShowSuccessAlert(true);

        // Hide success alert after 5 seconds
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 5000);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6 pb-10">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                    <p className="text-muted-foreground">Manage your account and wallet settings</p>
                </div>

                {/* Success Alert */}
                {showSuccessAlert && (
                    <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <AlertDescription className="text-green-800 dark:text-green-200">
                            <strong>Wallet deleted successfully!</strong> Your wallet has been permanently removed.
                            You can create a new wallet from the dashboard if needed.
                        </AlertDescription>
                    </Alert>
                )}

                {/* Billing Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Billing & Usage
                        </CardTitle>
                        <CardDescription>
                            Manage your billing information and view usage charges
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Current Bill */}
                        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Current Bill</h3>
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">
                                    Due: Dec 31, 2024
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-2 rounded-lg">
                                        <DollarSign className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">$100.00 USDC</p>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">Pay-as-you-go charges</p>
                                    </div>
                                </div>
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Pay Now
                                </Button>
                            </div>
                        </div>

                        {/* Usage Breakdown */}
                        <div className="space-y-4">
                            <h4 className="font-medium text-foreground">Usage Breakdown</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap className="h-4 w-4 text-yellow-600" />
                                        <span className="font-medium">API Calls</span>
                                    </div>
                                    <p className="text-2xl font-bold">12,450</p>
                                    <p className="text-sm text-muted-foreground">$0.005 per call = $62.25</p>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <CreditCard className="h-4 w-4 text-purple-600" />
                                        <span className="font-medium">Transactions</span>
                                    </div>
                                    <p className="text-2xl font-bold">250</p>
                                    <p className="text-sm text-muted-foreground">$0.01 per tx = $2.50</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-3">Payment Method</h4>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                        <CreditCard className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">USDC Wallet</p>
                                        <p className="text-sm text-muted-foreground">Auto-pay enabled</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">
                                    Change
                                </Button>
                            </div>
                        </div>

                        {/* Billing History */}
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-3">Recent Billing History</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                                    <div>
                                        <p className="font-medium">November 2024</p>
                                        <p className="text-sm text-muted-foreground">Paid on Dec 1, 2024</p>
                                    </div>
                                    <span className="font-medium text-green-600">$89.75 USDC</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                                    <div>
                                        <p className="font-medium">October 2024</p>
                                        <p className="text-sm text-muted-foreground">Paid on Nov 1, 2024</p>
                                    </div>
                                    <span className="font-medium text-green-600">$156.20 USDC</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="font-medium">September 2024</p>
                                        <p className="text-sm text-muted-foreground">Paid on Oct 1, 2024</p>
                                    </div>
                                    <span className="font-medium text-green-600">$203.45 USDC</span>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-4">
                                View All History
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="border-red-200 dark:border-red-800">
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
                        <CardDescription>
                            Irreversible actions that will permanently affect your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/20">
                            <div>
                                <h3 className="font-medium text-red-900 dark:text-red-100">Delete Wallet</h3>
                                <p className="text-sm text-red-700 dark:text-red-300">
                                    Permanently remove your wallet and all associated data
                                </p>
                            </div>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" size="sm">
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Delete Wallet
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure you want to delete your wallet?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your wallet
                                            and remove all associated data from our servers. Make sure you have
                                            backed up your recovery phrase before proceeding.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleDeleteWallet}
                                            disabled={isDeleting}
                                            className="bg-red-600 hover:bg-red-700"
                                        >
                                            {isDeleting ? "Deleting..." : "Yes, delete wallet"}
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}