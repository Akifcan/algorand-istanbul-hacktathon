import { writeVault } from "algoflow-sdk";

const track = [
    {lat: 38.4237, long: 27.1428}, 
    {lat: 40.193298, long: 	29.074202},
    {lat: 41.0082, long: 28.9784}
]

export async function GET(req: Request, context: any) {
        const res = await writeVault(
        746525050,
        "column adapt aerobic picture actual gravity case digital guess purpose exhaust rifle mix possible midnight car crime evil ritual whale mercy december wool above broom", 
        JSON.stringify(track),
    )

    return Response.json(res);
}