"use client"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import LandingLayout from "@/layouts/landing-layout";

export default function Docs() {
  const [activeSection, setActiveSection] = useState("send-pay");

  const sidebarItems = [
    { id: "send-pay", label: "Send Payment", icon: "💸" },
    { id: "receive", label: "Receive Payment", icon: "📥" },
    { id: "write", label: "Write Transaction", icon: "✍️" },
    { id: "get", label: "Get Transaction", icon: "🔍" },
    { id: "create-nft", label: "Create NFT", icon: "🎨" },
    { id: "send-nft", label: "Send NFT", icon: "🖼️" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "send-pay":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Send Payment</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Send ALGO or ASA tokens to any Algorand address. This function allows you to transfer native ALGO or Algorand Standard Assets to recipients on the Algorand blockchain.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Send ALGO payment
import { AlgorandSDK } from '@algorand/sdk';

const sendPayment = async (recipientAddress, amount) => {
  try {
    const txn = {
      to: recipientAddress,
      amount: amount * 1000000, // Convert to microAlgos
      fee: 1000,
      type: 'pay'
    };

    const signedTxn = await wallet.signTransaction(txn);
    const result = await client.sendRawTransaction(signedTxn);

    console.log('Transaction ID:', result.txId);
    return result;
  } catch (error) {
    console.error('Payment failed:', error);
  }
};`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold mb-2">Parameters</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>recipientAddress:</strong> The destination Algorand address</li>
                  <li>• <strong>amount:</strong> Amount in ALGO (will be converted to microAlgos)</li>
                  <li>• <strong>note:</strong> Optional transaction note</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "receive":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Receive Payment</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Monitor and receive payments to your Algorand address. This section covers how to listen for incoming transactions and handle payment confirmations.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Monitor incoming payments
import { AlgorandSDK } from '@algorand/sdk';

const monitorPayments = async (walletAddress) => {
  try {
    const transactions = await client.accountInformation(walletAddress);

    // Filter for recent transactions
    const recentTxns = transactions.filter(txn =>
      txn.type === 'pay' &&
      txn.receiver === walletAddress
    );

    return recentTxns;
  } catch (error) {
    console.error('Failed to fetch payments:', error);
  }
};

// Generate QR code for payments
const generatePaymentQR = (address, amount, note) => {
  const paymentURL = \`algorand://\${address}?amount=\${amount}&note=\${note}\`;
  return paymentURL;
};`}
                </pre>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Real-time payment monitoring</li>
                  <li>• QR code generation for easy payments</li>
                  <li>• Transaction confirmation tracking</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "write":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Write Transaction</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Create and submit custom transactions to the Algorand blockchain. This includes payment transactions, asset transfers, and smart contract calls.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Write custom transaction
import { AlgorandSDK } from '@algorand/sdk';

const writeTransaction = async (txnParams) => {
  try {
    // Get suggested parameters
    const suggestedParams = await client.getTransactionParams().do();

    // Create transaction
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: txnParams.sender,
      to: txnParams.receiver,
      amount: txnParams.amount,
      note: new Uint8Array(Buffer.from(txnParams.note || '')),
      suggestedParams
    });

    // Sign transaction
    const signedTxn = txn.signTxn(privateKey);

    // Submit to network
    const response = await client.sendRawTransaction(signedTxn).do();

    return response;
  } catch (error) {
    console.error('Transaction failed:', error);
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        );

      case "get":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Get Transaction</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Retrieve transaction details from the Algorand blockchain. Query transactions by ID, account, or other criteria.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Get transaction by ID
import { AlgorandSDK } from '@algorand/sdk';

const getTransaction = async (txnId) => {
  try {
    const transaction = await client.pendingTransactionInformation(txnId).do();
    return transaction;
  } catch (error) {
    console.error('Failed to fetch transaction:', error);
  }
};

// Get account transactions
const getAccountTransactions = async (address, limit = 50) => {
  try {
    const transactions = await indexer.lookupAccountTransactions(address)
      .limit(limit)
      .do();

    return transactions.transactions;
  } catch (error) {
    console.error('Failed to fetch account transactions:', error);
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        );

      case "create-nft":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Create NFT</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Create Non-Fungible Tokens (NFTs) on the Algorand blockchain. This involves creating ASA tokens with specific properties for NFTs.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Create NFT
import { AlgorandSDK } from '@algorand/sdk';

const createNFT = async (nftData) => {
  try {
    const suggestedParams = await client.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
      from: nftData.creator,
      total: 1, // NFT has total supply of 1
      decimals: 0,
      assetName: nftData.name,
      unitName: nftData.unitName,
      assetURL: nftData.url,
      assetMetadataHash: nftData.metadataHash,
      defaultFrozen: false,
      freeze: nftData.creator,
      manager: nftData.creator,
      clawback: nftData.creator,
      reserve: nftData.creator,
      suggestedParams
    });

    const signedTxn = txn.signTxn(privateKey);
    const response = await client.sendRawTransaction(signedTxn).do();

    return response;
  } catch (error) {
    console.error('NFT creation failed:', error);
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        );

      case "send-nft":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Send NFT</h1>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Transfer NFTs between Algorand addresses. This involves asset transfer transactions for Algorand Standard Assets.
                </p>
              </div>

              <div className="code-block p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Example Code</h3>
                <pre className="text-sm overflow-x-auto">
{`// Send NFT
import { AlgorandSDK } from '@algorand/sdk';

const sendNFT = async (assetId, from, to, amount = 1) => {
  try {
    const suggestedParams = await client.getTransactionParams().do();

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: from,
      to: to,
      assetIndex: assetId,
      amount: amount,
      suggestedParams
    });

    const signedTxn = txn.signTxn(privateKey);
    const response = await client.sendRawTransaction(signedTxn).do();

    return response;
  } catch (error) {
    console.error('NFT transfer failed:', error);
  }
};

// Opt-in to receive NFT
const optInToNFT = async (assetId, account) => {
  try {
    const suggestedParams = await client.getTransactionParams().do();

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: account,
      to: account,
      assetIndex: assetId,
      amount: 0,
      suggestedParams
    });

    const signedTxn = txn.signTxn(privateKey);
    const response = await client.sendRawTransaction(signedTxn).do();

    return response;
  } catch (error) {
    console.error('Opt-in failed:', error);
  }
};`}
                </pre>
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
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-muted/30 border-r">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Documentation</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
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

        {/* Main Content */}
        <div className="flex-1">
          <div className="container mx-auto px-8 py-8">
            <div className="max-w-4xl">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
     </LandingLayout>
  );
}