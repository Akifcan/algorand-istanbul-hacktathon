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
import { Trash2, CheckCircle } from "lucide-react";
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
            <div className="space-y-6">
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