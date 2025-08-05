import { Navbar } from "@/components/navbar/navbar"
import styles from "./checkout-info-styles.module.css"

export const CheckoutInfo = () => {
    return (
        <section className={styles["checkout-info-container"]}>
            <Navbar />
        </section>
    )
}