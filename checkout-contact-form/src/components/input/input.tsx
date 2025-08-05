import { type FC } from "react"
import type { InputProps } from "./input.types"
import styles from "./input-styles.module.css"
import { useInputLogic } from "./use-input-logic"

export const Input: FC<InputProps> = ({ label, name, type }) => {
    const { isFocused, handleFocus, handleBlur, handleOnChange, inputValue } = useInputLogic()

    return (
        <div className={styles["input-container"]}>
            <label className={`${styles["label"]} ${isFocused ? styles["focused"] : ""}`} htmlFor={name}>{label}</label>
            <input className={styles["input"]} type={type} name={name} onFocus={handleFocus} onBlur={handleBlur} onChange={handleOnChange} value={inputValue}/>
        </div>
    )
}