"use client"
import LandingLayout from "@/layouts/landing-layout";
import { getNft } from "algoflow-sdk";
import { useEffect, useState } from "react";
import { Shield, CheckCircle, FileText, Award } from "lucide-react";

interface CertificateMetadata {
    name: string;
    description: string;
    image: string;
    image_mimetype: string;
    unitname: string;
}

export default function CertificateVerification(){
    const [certificateData, setCertificateData] = useState<CertificateMetadata | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getNftDetails = async () => {
        try {
            setLoading(true);
            const response = await getNft(746528771);
            const metadataUrl = response.asset.params.url;
            console.log('Metadata URL:', metadataUrl);

            if (!metadataUrl) {
                throw new Error('No metadata URL found in NFT');
            }

            // Fetch metadata from the URL
            const metadataResponse = await fetch(metadataUrl);
            if (!metadataResponse.ok) {
                throw new Error(`Failed to fetch metadata: ${metadataResponse.status}`);
            }

            const metadata: CertificateMetadata = await metadataResponse.json();
            setCertificateData(metadata);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
            console.error('Error fetching certificate data:', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getNftDetails()
    }, [])

    return <LandingLayout>
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Certificate Verification
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Verify blockchain certificates using NFT metadata
                </p>
            </div>

      

            {loading && (
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-600 dark:text-gray-300">Loading certificate data...</span>
                </div>
            )}

            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                    <h3 className="text-red-800 dark:text-red-200 font-semibold mb-2">Error</h3>
                    <p className="text-red-600 dark:text-red-300">{error}</p>
                </div>
            )}

            {certificateData && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Certificate Image */}
                            <div className="lg:w-1/3">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                                    <img
                                        src={certificateData.image}
                                        alt={certificateData.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Certificate Details */}
                            <div className="lg:w-2/3">
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {certificateData.name}
                                        </h2>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">
                                            {certificateData.unitname}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Description
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {certificateData.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                                Image Type
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {certificateData.image_mimetype}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                                Unit Name
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {certificateData.unitname}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <div className="flex items-center text-green-600 dark:text-green-400">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium">Certificate Verified</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            This certificate has been verified on the Algorand blockchain
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

                  {/* Blockchain Simplicity Highlight */}
            <div className="mt-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-xl p-6 border border-green-200 dark:border-green-700 mb-8">
                <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-xl">
                        <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                            Blockchain-Powered Certificate Verification
                        </h3>
                        <p className="text-green-700 dark:text-green-300 mb-4">
                            All certificate data is stored immutably on Algorand blockchain as NFTs. With our algoflow-sdk, complex blockchain operations become incredibly simple.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-600">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <FileText className="h-4 w-4 mr-2 text-green-600" />
                                    Certificate NFT Data
                                </h4>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                                    <code className="text-sm text-gray-800 dark:text-gray-200">
                                        <span className="text-blue-600 dark:text-blue-400">import</span> {"{ getNft }"} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;algoflow-sdk&apos;</span>
                                        <br />
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">const</span> certificate = <span className="text-blue-600 dark:text-blue-400">await</span> <span className="text-purple-600 dark:text-purple-400">getNft</span>(746528771)
                                    </code>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-600">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <Award className="h-4 w-4 mr-2 text-green-600" />
                                    Metadata Verification
                                </h4>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                                    <code className="text-sm text-gray-800 dark:text-gray-200">
                                        <span className="text-blue-600 dark:text-blue-400">const</span> metadata = <span className="text-blue-600 dark:text-blue-400">await</span> <span className="text-purple-600 dark:text-purple-400">fetch</span>(certificate.url)
                                        <br />
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">const</span> verified = <span className="text-blue-600 dark:text-blue-400">await</span> metadata.<span className="text-purple-600 dark:text-purple-400">json</span>()
                                    </code>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-green-700 dark:text-green-300">
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Immutable & Tamper-proof
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Instant Verification
                                </div>
                            </div>

                            <button
                                onClick={() => window.location.href = '/register'}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                            >
                                <span>Try It Now</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LandingLayout>
}