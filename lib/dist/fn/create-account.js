// import { AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client';
import algosdk from 'algosdk';
import dotenv from 'dotenv';
import { saveTransaction } from '../api/supabase.js';
const createAccount = async () => {
    try {
        dotenv.config();
        let funded = false;
        const account = algosdk.generateAccount();
        const mnemonic = algosdk.secretKeyToMnemonic(account.sk);
        // const algorand = AlgorandClient.testNet();
        // if(process.env.ALGOKIT_DISPENSER_ACCESS_TOKEN){
        //     const dispenserClient = algorand.client.getTestNetDispenserFromEnvironment();
        //     await dispenserClient.fund(account.addr, 1_000_000);
        //     funded = true
        // }
        await saveTransaction(account.addr.toString(), "account-create", account.addr.toString());
        return {
            account,
            mnemonic,
            funded
        };
    }
    catch (e) {
        return e;
    }
};
export default createAccount;
//# sourceMappingURL=create-account.js.map