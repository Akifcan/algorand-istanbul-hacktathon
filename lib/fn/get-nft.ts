import algosdk from 'algosdk';


const getNft = async (assetId: number) => {
    const indexerToken = '';
    const indexerServer = 'https://testnet-idx.algonode.cloud';
    const indexerPort = '';

    const indexerClient = new algosdk.Indexer(indexerToken, indexerServer, indexerPort);

    const assetInfo = await indexerClient.lookupAssetByID(assetId).do();

    return assetInfo
}

export default getNft