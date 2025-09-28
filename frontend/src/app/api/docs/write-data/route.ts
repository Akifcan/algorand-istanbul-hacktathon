import { writeVault } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const res = await writeVault(
        "column adapt aerobic picture actual gravity case digital guess purpose exhaust rifle mix possible midnight car crime evil ritual whale mercy december wool above broom", 
        `${Math.random()} 1from algoflow app!`,
    )
    return Response.json(res);
}