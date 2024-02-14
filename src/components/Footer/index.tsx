import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Created by Lauryn Kung</h1>
            <h3 className={styles.copyright}>© 2022 - 2024 - Check Weat-HER</h3>
        </div>
    )
}