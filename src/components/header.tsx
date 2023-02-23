import Image from "next/image";

import LogoTransparent from '../../public/logo_transparent.png';
import Link from "next/link";

const Header = () => {
    return (
        <header className="py-2 px-5 bg-amber-700 text-amber-50 border-b-2 border-b-black flex">
            <Link href="/" className="py-4 px-7 bg-black rounded flex-none">
                <Image src={LogoTransparent} alt="go back home" width={48} className="inline-block"/> Acasa
            </Link>

            <div className="grow h-px-80 py-6 text-center">
                {/*Despre noi / Preturi*/}
            </div>

            <Link href="/programare" className="py-6 px-7 bg-black rounded flex-none text-lg">
                Programare 24H
            </Link>
        </header>
    );
}

export default Header;