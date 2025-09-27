import { createClient } from "@supabase/supabase-js";
const supabase = createClient('https://mzgwvhcqcerpenoipbqh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z3d2aGNxY2VycGVub2lwYnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5ODA4MzksImV4cCI6MjA3NDU1NjgzOX0.L4YqdPkYhRk86qtP5fLJ3dorDMy8yN5yJFt7Ig9iI78')

const saveTransaction = async(wallet:string, type: 'account-create' | 'send-token' | 'nft-create', txId: string) => {
    const {data, error} = await supabase.from('transaction').insert({
        wallet,
        type,
        tx_id: txId
    })
    console.log(data)
    console.log(error)
}

export {
    saveTransaction
}