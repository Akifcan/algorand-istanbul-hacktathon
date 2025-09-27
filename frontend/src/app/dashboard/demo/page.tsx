"use client"
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layouts/dashboard-layout";

export default function Demo() {

    const handleCreateAccount = () => {
        fetch('/api/docs/create-account')
    }

    return <DashboardLayout>
        <Button onClick={handleCreateAccount}>create account</Button>
    </DashboardLayout>
}