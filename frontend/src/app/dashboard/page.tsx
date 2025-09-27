"use client"
import DashboardLayout from "@/layouts/dashboard-layout";
import WalletCreation from "@/components/WalletCreation";
import WalletDisplay from "@/components/WalletDisplay";
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";
import useUserStore from "@/store/user";

export default function Dashboard() {
    const { user } = useUserStore();
    const [walletData, setWalletData] = useState<WalletData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleCurrentWallet = async () => {
        if (!user) {
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('accounts')
                .select('*')
                .eq('user_id', user.id);

            if (error) {
                console.error('Error fetching wallet:', error);
                return;
            }

            if (data && data.length > 0) {
                setWalletData(data[0]);
            }
        } catch (err) {
            console.error('Error in handleCurrentWallet:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleCurrentWallet();
    }, [user]);

    if (isLoading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-full">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Loading wallet information...</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="flex items-center justify-center min-h-full">
                {walletData ? (
                    <WalletDisplay walletData={walletData} />
                ) : (
                    <WalletCreation />
                )}
            </div>
        </DashboardLayout>
    );
}