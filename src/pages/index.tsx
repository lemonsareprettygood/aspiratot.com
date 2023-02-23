import Image from 'next/image'
import {Inter} from '@next/font/google'

import Logo from "../../public/pinterest_board_photo.png";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className="flex-1 p-2 bg-black">
            <div className="mb-20 text-center">
                <Image src={Logo} alt={"Logo"} className="inline-block" width={500}/>

                <div>
                    <Link className="bg-amber-700 p-5 rounded-2xl text-amber-50" href="/programare">Programeaza o
                        curatare</Link>
                </div>
            </div>
        </div>
    )
}
