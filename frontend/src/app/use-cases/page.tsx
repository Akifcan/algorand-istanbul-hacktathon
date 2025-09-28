import LandingLayout from "@/layouts/landing-layout";
import { ArrowRight, Package, Shield, CheckCircle, Truck } from "lucide-react";
import Link from "next/link";

export default function UseCases() {
    return <LandingLayout>
        <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    🚀 Algoflow Use Cases
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover real-world applications of blockchain technology with Algoflow SDK.
                    From supply chain transparency to digital certificate verification.
                </p>
            </div>

            {/* Use Cases Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* Cargo Tracking Use Case */}
                <Link href={'/use-cases/cargo-track'}>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 group">

                        <video src="/videos/supply-chain.mp4" className="mb-5 rounded-lg" autoPlay muted width={'100%'} height={200}></video>

                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-xl mr-4">
                                <Package className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                                Cargo Tracking
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            Track your shipments with complete transparency and immutability on the blockchain.
                            Monitor cargo location, status updates, and delivery confirmations in real-time.
                        </p>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center group-hover:scale-105 transform transition-transform">
                            <Truck className="h-5 w-5 mr-2" />
                            View Demo
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </Link>

<Link href={'/use-cases/certificate-verification'}>
                {/* Certificate Verification Use Case */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/30 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300 group">

                    <video src="/videos/data.mp4" className="mb-5 rounded-lg" autoPlay muted width={'100%'} height={200}></video>


                    <div className="flex items-center mb-6">
                        <div className="bg-emerald-600 p-3 rounded-xl mr-4">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
                            Certificate Verification
                        </h2>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        Secure digital certificate verification system with tamper-proof records.
                        Issue, verify, and manage certificates with blockchain-backed authenticity.
                    </p>

                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center group-hover:scale-105 transform transition-transform">
                        <Shield className="h-5 w-5 mr-2" />
                        View Demo
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                </div>
                </Link>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-2xl font-bold mb-4">Ready to Build Your Own Use Case?</h3>
                    <p className="text-muted-foreground mb-6">
                        Start building with Algoflow SDK and create innovative blockchain solutions for your business needs.
                    </p>
                    <Link href={'/docs'}>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200">
                            Get Started with SDK
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </LandingLayout>
}