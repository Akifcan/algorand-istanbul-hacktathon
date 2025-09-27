import { sendToken } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const res = await sendToken(
        "column adapt aerobic picture actual gravity case digital guess purpose exhaust rifle mix possible midnight car crime evil ritual whale mercy december wool above broom", 
        "ZHLMVED6S6SH3QLI6YYO2ZD6SVASWM6SDYK545PQ3232PTJWKAIR4FIWUU",
        100_000
    )
    return Response.json(res);
}