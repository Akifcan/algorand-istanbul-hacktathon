import algosdk from 'algosdk';
import { saveTransaction } from '../api/supabase.js';
const sendToken = async (senderMnemonic, receiver, amount) => {
    const algodToken = '';
    const algodServer = 'https://testnet-api.algonode.cloud';
    const algodPort = '';
    const senderAccount = algosdk.mnemonicToSecretKey(senderMnemonic);
    // Adresleri string formatına çevir
    const fromAddr = algosdk.encodeAddress(senderAccount.addr.publicKey);
    // Validasyon
    if (!algosdk.isValidAddress(fromAddr)) {
        throw new Error('Sender address is invalid');
    }
    if (!algosdk.isValidAddress(receiver)) {
        throw new Error('Receiver address is invalid');
    }
    try {
        const client = new algosdk.Algodv2(algodToken, algodServer, algodPort);
        const suggestedParams = await client.getTransactionParams().do();
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            sender: senderAccount.addr,
            receiver,
            amount: amount,
            note: Uint8Array.from([1, 2, 3]),
            suggestedParams,
        });
        const signedTxn = txn.signTxn(senderAccount.sk);
        const res = await client.sendRawTransaction(signedTxn).do();
        await algosdk.waitForConfirmation(client, res.txid, 4);
        saveTransaction(senderAccount.addr.toString(), "nft-create", res.txid);
        return res;
    }
    catch (err) {
        console.error("HATA:", err);
    }
};
export default sendToken;
//# sourceMappingURL=send-token.js.map