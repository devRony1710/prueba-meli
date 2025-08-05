import { useState } from "react"
import type { InputLogicInterface } from "./input.types"

export const useInputLogic = (): InputLogicInterface => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }
    return {
        isFocused,
        handleFocus,
        handleBlur
    }
}
