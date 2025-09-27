import algosdk from 'algosdk';
import { createHash } from 'crypto';
import { AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client';
import { saveTransaction } from '../api/supabase.js';
const createNft = async (senderMnemonic, meta) => {
    const senderAccount = algosdk.mnemonicToSecretKey(senderMnemonic);
    const metadataHash = createHash('sha256').update(JSON.stringify(meta.metadata)).digest();
    const algorand = AlgorandClient.testNet();
    algorand.account.setSigner(senderAccount.addr, algosdk.makeBasicAccountTransactionSigner(senderAccount));
    const createNFTResult = await algorand.send.assetCreate({
        sender: senderAccount.addr,
        total: 1n,
        assetName: meta.metadata.name,
        unitName: meta.metadata.unitname,
        decimals: 0,
        url: meta.metadataURL,
        metadataHash: metadataHash,
    });
    saveTransaction(senderAccount.addr.toString(), "nft-create", createNFTResult.assetId.toString());
    return createNFTResult;
};
export default createNft;
//# sourceMappingURL=create-nft.js.map