import { getVault } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const res = await getVault(746498651)
    return Response.json({res: JSON.parse(res)});
}