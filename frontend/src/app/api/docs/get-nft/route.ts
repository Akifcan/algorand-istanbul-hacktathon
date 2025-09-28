import { getNft } from "algoflow-sdk";

export async function GET(req: Request, context: any) {
    const res = await getNft(746497619)
    return Response.json({res: res.asset.params.url});
}