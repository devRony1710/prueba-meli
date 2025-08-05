import { useState } from "react"
import type { InputLogicInterface } from "./input.types"

export const useInputLogic = (): InputLogicInterface => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string | number>("")

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
}

    return {
        isFocused,
        handleFocus,
        handleBlur,
        handleOnChange,
        inputValue
    }
}
