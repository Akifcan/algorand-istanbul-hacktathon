"use client"
import DashboardLayout from "@/layouts/dashboard-layout";

export default function Dashboard() {
    return <DashboardLayout>
        <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your AlgoPOS dashboard</p>
        </div>
    </DashboardLayout>
}