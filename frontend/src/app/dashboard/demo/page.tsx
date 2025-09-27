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

    const handleWrite = () => {
        fetch('/api/docs/write-data')
    }

    const getData = () => {
        fetch('/api/docs/get-data')
    }

    return <DashboardLayout>
        <div className="flex gap-2 flex-wrap">
            <Button onClick={handleCreateAccount}>create account</Button>
            <Button onClick={handleSendToken}>send token</Button>
            <Button onClick={handleCreateNFT}>create nft</Button>
            <Button onClick={handleWrite}>write data</Button>
            <Button onClick={getData}>get data</Button>
        </div>
    </DashboardLayout>
}