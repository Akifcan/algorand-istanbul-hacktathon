"use client"
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layouts/dashboard-layout";

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

    return <DashboardLayout>
        <div className="flex gap-2">
            <Button onClick={handleCreateAccount}>create account</Button>
            <Button onClick={handleSendToken}>send token</Button>
            <Button onClick={handleCreateNFT}>create nft</Button>
        </div>
    </DashboardLayout>
}