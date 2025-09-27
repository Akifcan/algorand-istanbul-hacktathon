import { createNft } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const newNft = await createNft("column adapt aerobic picture actual gravity case digital guess purpose exhaust rifle mix possible midnight car crime evil ritual whale mercy december wool above broom", {
        metadata: {
            "name": "Algoflow APP",
            "description": "created via algoflow",
            "image": "https://images.unsplash.com/photo-1758654307553-f067f0367f13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "image_mimetype": "image/png",
            "unitname": "AFA"
        }, metadataURL: "https://mzgwvhcqcerpenoipbqh.supabase.co/storage/v1/object/public/meta/algoflowmeta.json"
    })
    console.log(newNft.assetId)
    console.log(newNft.txIds)
    return Response.json({ok: true});
}