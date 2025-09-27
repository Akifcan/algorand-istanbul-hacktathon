import { createAccount } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const newAccount = await createAccount()
    return Response.json(newAccount);
}