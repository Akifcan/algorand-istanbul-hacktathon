"use client"
import { supabase } from "@/config/supabase";
import DashboardLayout from "@/layouts/dashboard-layout";
import useUserStore from "@/store/user";
import { useEffect, useState } from "react";

export default function Transactions(){

    const { user } = useUserStore()
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)

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
            if(!data){
                return
            }
            const currentUser = data[0]
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