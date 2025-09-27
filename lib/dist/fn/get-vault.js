import algosdk from 'algosdk';
const getVault = async () => {
    const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
    const appId = 746498651;
    const app = await algod.getApplicationByID(appId).do();
    const globalState = app.params.globalState[0].value;
    const decodedValue = Buffer.from(globalState.bytes, 'base64').toString('utf8');
    return decodedValue;
};
export default getVault;
//# sourceMappingURL=get-vault.js.map