import Image from "next/image";
import Logo from '@/icons/Logo.png';

export default function Header() {
    return (
        <div>
            <Image src={Logo} width={100} height={100} alt="CWHlogo" />
            <h1>Check Weat-HER</h1>
        </div>
    )
}