import DashboardLayout from "@/layouts/dashboard-layout";
import WalletCreation from "@/components/WalletCreation";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="flex items-center justify-center min-h-full">
                <WalletCreation />
            </div>
        </DashboardLayout>
    );
}