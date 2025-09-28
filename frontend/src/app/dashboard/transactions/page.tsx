"use client"
import { supabase } from "@/config/supabase";
import DashboardLayout from "@/layouts/dashboard-layout";
import useUserStore from "@/store/user";
import { useEffect, useState } from "react";
import { Wallet, ArrowRight } from "lucide-react";

export default function Transactions(){

    const { user } = useUserStore()
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [hasWallet, setHasWallet] = useState<boolean | null>(null)

    const getExplorerUrl = (transaction: Transaction) => {
        const baseUrl = "https://testnet.explorer.perawallet.app"
        switch (transaction.type) {
            case "send-token":
                return `${baseUrl}/tx/${transaction.tx_id}`
            case "nft-create":
                return `${baseUrl}/asset/${transaction.tx_id}`
            case "account-create":
                return `${baseUrl}/address/${transaction.tx_id}`
            case "transaction":
                return `${baseUrl}/tx/${transaction.tx_id}`
            default:
                return `${baseUrl}/tx/${transaction.tx_id}`
        }
    }

    const handleTransactions = async () => {
        if(!user){
            return
        }

        setLoading(true)
        try {
            const {data} = await supabase.from('accounts').select('*').eq('user_id', user!.id)
            if(!data || data.length === 0){
                setHasWallet(false)
                setLoading(false)
                return
            }
            const currentUser = data[0]

            if (!currentUser.wallet) {
                setHasWallet(false)
                setLoading(false)
                return
            }

            setHasWallet(true)
            const { data: transactionData } = await supabase.from('transaction').select('*').eq('wallet', currentUser.wallet).order('created_at', {ascending: false})
            if (transactionData) {
                setTransactions(transactionData)
            }
        } catch (error) {
            console.error('Error fetching transactions:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleTransactions()
    }, [user])

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Transactions</h1>
                    <div>Loading...</div>
                </div>
            </DashboardLayout>
        )
    }

    // Show wallet creation message if user doesn't have a wallet
    if (hasWallet === false) {
        return (
            <DashboardLayout>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Transactions</h1>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <div className="flex items-center justify-center flex-col text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                                <Wallet className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                You haven&apos;t created a wallet yet
                            </h3>
                            <p className="text-blue-700 dark:text-blue-300 mb-4 max-w-md">
                                To view your transaction history, you need to create a wallet first.
                                You can create a wallet from the Dashboard page.
                            </p>
                            <button
                                onClick={() => window.location.href = '/dashboard'}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                            >
                                <span>Create Wallet</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Transactions</h1>

                {transactions.length === 0 ? (
                    <div className="text-gray-500">No transactions found</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Transaction ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {transaction.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {new Date(transaction.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                transaction.type === 'send-token' ? 'bg-blue-100 text-blue-800' :
                                                transaction.type === 'nft-create' ? 'bg-purple-100 text-purple-800' :
                                                transaction.type === 'account-create' ? 'bg-green-100 text-green-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                                {transaction.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                            {transaction.tx_id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <a
                                                href={getExplorerUrl(transaction)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                View on Explorer
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}