import { Package, MapPin, CheckCircle, Truck, AlertCircle } from "lucide-react";

export default function CargoTrack() {
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
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <p className="font-semibold text-blue-600">In Transit</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">From:</span>
                    <p className="font-semibold">San Francisco, CA</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">To:</span>
                    <p className="font-semibold">Los Angeles, CA</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Content:</span>
                    <p className="font-semibold">Clothing</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Weight:</span>
                    <p className="font-semibold">1.2 kg</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Est. Delivery:</span>
                    <p className="font-semibold">September 30, 2024</p>
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
              {/* Order Received */}
              <div className="relative flex items-start pb-8">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-green-500" />
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-green-500">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-green-600 dark:text-green-400">
                      Order Received
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    San Francisco Warehouse
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    September 27, 2024 11:20
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Order confirmed and packaged
                  </p>
                </div>
              </div>

              {/* Transfer Hub */}
              <div className="relative flex items-start pb-8">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-green-500" />
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-green-500">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-green-600 dark:text-green-400">
                      Transfer Hub
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    California Central Hub
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    September 27, 2024 18:00
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Loaded for interstate transport
                  </p>
                </div>
              </div>

              {/* In Transit - Current */}
              <div className="relative flex items-start pb-8">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300 dark:bg-gray-600" />
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-800">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">
                      In Transit
                    </h5>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                      Current
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    En route to Los Angeles
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    September 28, 2024 02:15
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Package is on the way to Los Angeles
                  </p>
                </div>
              </div>

              {/* Arrival Hub */}
              <div className="relative flex items-start pb-8">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300 dark:bg-gray-600" />
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
                  <MapPin className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-gray-500 dark:text-gray-400">
                      Arrival Hub
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Los Angeles Distribution Center
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    September 29, 2024 (Estimated)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Expected arrival at LA center
                  </p>
                </div>
              </div>

              {/* Delivery */}
              <div className="relative flex items-start">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
                  <CheckCircle className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-gray-500 dark:text-gray-400">
                      Delivery
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Los Angeles, CA
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    September 30, 2024 (Estimated)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Package will be delivered to recipient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}