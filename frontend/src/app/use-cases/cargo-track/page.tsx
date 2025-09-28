"use client"
import { Package, MapPin, CheckCircle, Truck, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"
import 'leaflet/dist/leaflet.css'
import LandingLayout from "@/layouts/landing-layout";
const TrackMap = dynamic(() => import("../../../components/Map"), { ssr:false })

export default function CargoTrack() {
  const [shipmentStatuses, setShipmentStatuses] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const handleStatus = async () => {
    try {
      const response = await fetch('/api/cargo-track/status');
      const data = await response.json();
      setShipmentStatuses(data.res || []);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  }

  const handleCoords = async () => {
    try {
      const response = await fetch('/api/cargo-track/coords');
      const data = await response.json();
      console.log(data)
      setCoordinates(data.res || []);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  }

  useEffect(() => {
    handleStatus()
    handleCoords()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'received':
        return Package;
      case 'in shipment':
        return Truck;
      case 'delivered':
        return CheckCircle;
      default:
        return MapPin;
    }
  }

  const getStatusColor = (index: number, total: number) => {
    // Last item is current, others before are completed
    if (index === total - 1) {
      return 'bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-800'; // Current
    } else {
      return 'bg-green-500'; // Completed
    }
  }

  const getTextColor = (index: number, total: number) => {
    if (index === total - 1) {
      return 'text-blue-600 dark:text-blue-400'; // Current
    } else {
      return 'text-green-600 dark:text-green-400'; // Completed
    }
  }

  return (
    <LandingLayout>
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                CargoTrack Pro
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Secure Package Tracking System
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* On-Chain Simplicity Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-xl p-6 border border-green-200 dark:border-green-700">
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                  Blockchain-Powered Simplicity
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  All cargo tracking data is stored on-chain using Algorand blockchain. With our algoflow-sdk, complex blockchain operations become incredibly simple.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      Coordinates Tracking
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        <span className="text-blue-600 dark:text-blue-400">import</span> {"{ getVault }"} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;algoflow-sdk&apos;</span>
                        <br />
                        <span className="text-blue-600 dark:text-blue-400 mt-1">const</span> coords = <span className="text-blue-600 dark:text-blue-400">await</span> <span className="text-purple-600 dark:text-purple-400">getVault</span>(746525050)
                      </code>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Truck className="h-4 w-4 mr-2 text-green-600" />
                      Shipment Status
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        <span className="text-blue-600 dark:text-blue-400">import</span> {"{ getVault }"} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;algoflow-sdk&apos;</span>
                        <br />
                        <span className="text-blue-600 dark:text-blue-400 mt-1">const</span> shipmentState = <span className="text-blue-600 dark:text-blue-400">await</span> <span className="text-purple-600 dark:text-purple-400">getVault</span>(746498651)
                      </code>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-green-700 dark:text-green-300">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Decentralized & Secure
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Developer-friendly
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

          {/* Package Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tracking ID: ALG-2024-002
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">From:</span>
                    <p className="font-semibold">İzmir</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">To:</span>
                    <p className="font-semibold">İstanbul</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Content:</span>
                    <p className="font-semibold">Clothing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">

            <div className="flex-1">
                      <TrackMap coordinates={coordinates} />
            </div>

          {/* Timeline */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Package Timeline
            </h4>

            <div className="relative">
              {shipmentStatuses.map((shipment: any, index: number) => {
                const Icon = getStatusIcon(shipment.status);
                const isLast = index === shipmentStatuses.length - 1;
                const isCurrent = index === shipmentStatuses.length - 1;

                return (
                  <div key={index} className="relative flex items-start pb-8">
                    {!isLast && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-green-500" />
                    )}

                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(index, shipmentStatuses.length)}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-semibold ${getTextColor(index, shipmentStatuses.length)}`}>
                          {shipment.status}
                        </h5>
                        {isCurrent && (
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                        {shipment.date}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Package status updated
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}