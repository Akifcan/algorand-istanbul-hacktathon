"use client"
import { Package, MapPin, CheckCircle, Truck, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function CargoTrack() {
  const [shipmentStatuses, setShipmentStatuses] = useState([]);

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
      // setShipmentStatuses(data.res || []);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
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

          {/* Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
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
  );
}