import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t-2 border-t-black p-2 bg-amber-700 text-center text-amber-50 text-lg">
            <div>
                <Link href="/termeni" className="text-lg mb-2 inline-block">Termeni și Condiții</Link>
            </div>
            <p>Copyright ©️ {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;