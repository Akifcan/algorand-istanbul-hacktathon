"use client"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import LandingLayout from "@/layouts/landing-layout";
import { Menu, X } from "lucide-react";

export default function Docs() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: "🌟" },
    { id: "installation", label: "Installation", icon: "📦" },
    { id: "create-account", label: "Create Account", icon: "🔑" },
    { id: "send-token", label: "Send Token", icon: "💸" },
    { id: "create-nft", label: "Create NFT", icon: "🎨" },
    { id: "write-vault", label: "Write Data", icon: "📝" },
    { id: "get-vault", label: "Get Data", icon: "📥" },
    { id: "error-handling", label: "Error Handling", icon: "⚠️" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Algoflow SDK
            </h1>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  🌟 Overview
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Algoflow SDK</strong> is an innovative development toolkit that simplifies data storage and access processes for developers using the Algorand blockchain infrastructure.
                </p>
                <p className="text-muted-foreground">
                  By automating the complexity of traditional blockchain operations (wallet connections, gas fees, private key management) in the background, it enables data to be written to and read from the blockchain with just a few function calls.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">✨ Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>🔐 Account creation and management</li>
                    <li>💰 Token transfers on Algorand TestNet</li>
                    <li>🎨 NFT creation with metadata support</li>
                    <li>📦 Data storage and retrieval via smart contracts</li>
                    <li>🔗 Interact with blockchain infrastructure via Algorand</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">🌐 Network Configuration</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Network:</strong> Algorand TestNet</li>
                    <li><strong>Endpoint:</strong> testnet-api.algonode.cloud</li>
                    <li><strong>Smart Contract:</strong> AlgoflowVault</li>
                    <li><strong>App ID:</strong> 746498651</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  💡 <strong>Perfect for developers who want to integrate blockchain functionality without the complexity!</strong>
                </p>
              </div>
            </div>
          </div>
        );

      case "installation":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">📦 Installation</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🛠️ Local Development</h3>
                <p className="text-muted-foreground mb-4">
                  Install the Algoflow SDK from the local package:
                </p>
                <div className="code-block p-3 sm:p-4">
                  <pre className="text-xs sm:text-sm overflow-x-auto">
{`# Install from local package
yarn add algoflow-sdk`}
                  </pre>
                </div>
              </div>

              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📄 Package.json Reference</h3>
                <div className="code-block p-3 sm:p-4">
                  <pre className="text-xs sm:text-sm overflow-x-auto">
{`{
  "dependencies": {
    "algoflow-sdk": "2.0.0"
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📚 Import Functions</h3>
                <div className="code-block p-3 sm:p-4">
                  <pre className="text-xs sm:text-sm overflow-x-auto">
{`import {
  createAccount,
  sendToken,
  createNft,
  writeVault,
  getVault
} from 'algoflow-sdk'`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      case "create-account":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">🔑 Create Account</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Creates a new Algorand account with secure mnemonic and address generation.
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Function Signature</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`function createAccount(): Promise<{
  mnemonic: string;
  address: string;
}>`}
                </pre>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Usage Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`const newAccount = await createAccount()
console.log('New Account:', newAccount.address)
console.log('Mnemonic:', newAccount.mnemonic)`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Returns</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>mnemonic</strong> (string): 25-word mnemonic phrase</li>
                  <li>• <strong>address</strong> (string): Algorand wallet address</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "send-token":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">💸 Send Token</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Transfers ALGO tokens between accounts on TestNet.
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Usage Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`const result = await sendToken(
    "your 25-word mnemonic phrase here",
    "RECIPIENT_ADDRESS_HERE",
    100_000 // 0.1 ALGO
)`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Parameters</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>mnemonic</strong> (string): Sender's 25-word mnemonic phrase</li>
                  <li>• <strong>recipient</strong> (string): Recipient's Algorand address</li>
                  <li>• <strong>amount</strong> (number): Amount in microALGOs (1 ALGO = 1,000,000 microALGOs)</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "create-nft":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">🎨 Create NFT</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Creates an NFT with metadata stored on Supabase.
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Usage Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`const newNft = await createNft("your-mnemonic", {
    metadata: {
        "name": "Your NFT Name",
        "description": "NFT Description",
        "image": "https://your-image-url.com/image.png",
        "image_mimetype": "image/png",
        "unitname": "SYMBOL"
    },
    metadataURL: "https://your-metadata-url.json"
})

// Returns: { assetId: number, txIds: string[] }`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Parameters</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>mnemonic</strong> (string): Creator's 25-word mnemonic phrase</li>
                  <li>• <strong>options</strong> (object): NFT configuration with metadata and URL</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "write-vault":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">📝 Write Data</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Stores data in Algorand smart contract (AlgoflowVault).
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Usage Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`const result = await writeVault(
    "your-mnemonic",
    "Your data to store"
)`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Parameters</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>mnemonic</strong> (string): Account's 25-word mnemonic phrase</li>
                  <li>• <strong>data</strong> (string): Data to store in the vault</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "get-vault":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">📥 Get Data</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Retrieves stored data from the smart contract.
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Usage Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`const storedData = await getVault()
// Returns: string`}
                </pre>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">API Route Example</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`export async function GET(req: Request, context: any) {
    const res = await getVault()
    return Response.json({res: res});
}`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Returns</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>string</strong>: The stored data from the vault</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "error-handling":
        return (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">⚠️ Error Handling</h1>
            <div className="space-y-6">
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
                <p className="text-muted-foreground">
                  All SDK functions return promises and should be wrapped in try-catch blocks for proper error handling:
                </p>
              </div>

              <div className="code-block p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Error Handling</h3>
                <pre className="text-xs sm:text-sm overflow-x-auto">
{`try {
    const account = await createAccount()
    console.log('✅ Account created:', account.address)
} catch (error) {
    console.error('❌ Error creating account:', error.message)
}`}
                </pre>
              </div>

              <div className="border-l-4 border-red-500 pl-3 sm:pl-4">
                <h4 className="font-semibold mb-2">Common Error Types</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    <p className="font-medium text-red-800 dark:text-red-200">NetworkError</p>
                    <p className="text-sm text-red-600 dark:text-red-300">Connection issues with Algorand node - Check internet connection</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <p className="font-medium text-orange-800 dark:text-orange-200">InsufficientFunds</p>
                    <p className="text-sm text-orange-600 dark:text-orange-300">Not enough ALGO for transaction - Add funds to account</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">InvalidMnemonic</p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">Malformed mnemonic phrase - Verify 25-word mnemonic</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="font-medium text-blue-800 dark:text-blue-200">TransactionFailed</p>
                    <p className="text-sm text-blue-600 dark:text-blue-300">Blockchain transaction error - Check transaction parameters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <LandingLayout>
      <div className="relative">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">🚀 Algoflow SDK</h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="flex relative">
          {/* Sidebar */}
          <div className={`fixed lg:sticky top-0 z-40 w-64 h-screen bg-muted/30 border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6 hidden lg:block">🚀 Algoflow SDK</h2>
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === item.id
                        ? "bg-accent text-white"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
              <div className="max-w-4xl mx-auto">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
     </LandingLayout>
  );
}