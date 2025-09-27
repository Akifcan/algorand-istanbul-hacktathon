import Link from "next/link";
import { Button } from "./ui/button";

export default function ViewWalletButton({wallet}: {wallet: string}) {
    return <Link target="_blank" href={`https://testnet.explorer.perawallet.app/address/${wallet}`}> <div className="flex flex-col w-full gap-2">
        <img src={'/images/pera.png'} className="bg-[#0D0D0D] rounded-lg" style={{ width: 90 }} />
        <Button
            className="flex-1 bg-[#FE6746]"
            onClick={() => {
                // Perawallet görüntüleme fonksiyonu buraya eklenecek
                console.log('Perawallet görüntüleme');
            }}
        >
            View on Pera Explorer
        </Button>
    </div></Link>
}