import { getVault } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const res = await getVault()
    return Response.json({res: res});
}