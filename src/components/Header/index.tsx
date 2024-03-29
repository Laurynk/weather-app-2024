import Image from "next/image";
import Logo from '@/icons/Logo.png';
import styles from './header.module.css'
import { useState } from "react";

export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.branding}>
                <Image src={Logo} width={100} height={100} alt="CWHlogo" />
                <h1 className={styles.title}>Check Weat-HER</h1>
            </div>

            
        </div>
    )
}