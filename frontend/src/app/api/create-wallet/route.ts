import { supabase } from "@/config/supabase";
import { AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client';
import algosdk from 'algosdk'
import {nanoid} from 'nanoid'

export async function POST(req: Request, context: any) {
    const body = await req.json();

    const algorand = AlgorandClient.testNet();

    const account = algosdk.generateAccount();
    const dispenserClient = algorand.client.getTestNetDispenserFromEnvironment();

    const mnemonic = algosdk.secretKeyToMnemonic(account.sk);

    // await dispenserClient.fund(account.addr, 1_000_000);

    const { error: insertError } = await supabase
        .from('accounts')
        .insert({ 
            wallet: account.addr.toString(),
            user_id: body.user_id,
            api_secret: `algo-app-${nanoid(10)}`
        })

    if(insertError){
        console.log(insertError)
        throw new Error(insertError.details)
    }

    return Response.json({ mnemonic, address: account.addr.toString() });
}