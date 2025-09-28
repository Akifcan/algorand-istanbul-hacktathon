import { AlgorandClient } from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
const optIn = async (mnemonic, assetId) => {
    const account = algosdk.mnemonicToSecretKey(mnemonic);
    const algorand = AlgorandClient.testNet();
    algorand.account.setSigner(account.addr, algosdk.makeBasicAccountTransactionSigner(account));
    const receiverSigner = algorand.account.getSigner(account.addr);
    const receiverOptIn = await algorand.send.assetOptIn({
        sender: account.addr,
        assetId: BigInt(assetId),
        signer: receiverSigner
    });
    return receiverOptIn.txIds[0];
};
export default optIn;
//# sourceMappingURL=opt-in.js.map