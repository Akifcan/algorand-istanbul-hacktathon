import algosdk from 'algosdk';
const getNft = async (assetId) => {
    const indexerToken = '';
    const indexerServer = 'https://testnet-idx.algonode.cloud';
    const indexerPort = '';
    const indexerClient = new algosdk.Indexer(indexerToken, indexerServer, indexerPort);
    const assetInfo = await indexerClient.lookupAssetByID(assetId).do();
    return assetInfo;
};
export default getNft;
//# sourceMappingURL=get-nft.js.map