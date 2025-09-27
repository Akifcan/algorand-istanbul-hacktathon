import algosdk from 'algosdk';
declare const createNft: (senderMnemonic: string, meta: {
    metadata: Record<string, any>;
    metadataURL: string;
}) => Promise<{
    assetId: bigint;
    groupId: string;
    txIds: string[];
    returns?: import("@algorandfoundation/algokit-utils/types/app").ABIReturn[] | undefined;
    confirmations: algosdk.modelsv2.PendingTransactionResponse[];
    transactions: algosdk.Transaction[];
    confirmation: algosdk.modelsv2.PendingTransactionResponse;
    transaction: algosdk.Transaction;
}>;
export default createNft;
//# sourceMappingURL=create-nft.d.ts.map