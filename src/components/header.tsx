import Image from "next/image";

import LogoTransparent from '../../public/logo_transparent.png';
import Link from "next/link";

const Header = () => {
    return (
        <header className="p-2 bg-amber-700 text-amber-50 border-b-2 border-b-black">
            <Link href="/" className="p-4 bg-black rounded">
                <Image src={LogoTransparent} alt="go back home" width={48} className="inline-block"/> Acasa
            </Link>
        </header>
    );
}

export default Header;