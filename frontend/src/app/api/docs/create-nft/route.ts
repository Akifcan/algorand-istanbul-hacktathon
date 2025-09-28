import { createNft } from 'algoflow-sdk'

export async function GET(req: Request, context: any) {
    const newNft = await createNft("column adapt aerobic picture actual gravity case digital guess purpose exhaust rifle mix possible midnight car crime evil ritual whale mercy december wool above broom", {
        metadata: {
            "name": "Shipment Cert, iz-ist",
            "description": "AlgoFlow Trusted",
            "image": "https://mzgwvhcqcerpenoipbqh.supabase.co/storage/v1/object/public/meta/freight-cert-dsv.webp",
            "image_mimetype": "image/png",
            "unitname": "AF"
        }, metadataURL: "https://mzgwvhcqcerpenoipbqh.supabase.co/storage/v1/object/public/meta/cert.json"
    })
    console.log(newNft.assetId)
    console.log(newNft.txIds)
    return Response.json({ ok: true });
}