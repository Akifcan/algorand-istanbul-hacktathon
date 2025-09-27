import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
    return <div className="min-h-screen bg-background">
        <Navbar />
        {children}
        <Footer />
    </div>
}