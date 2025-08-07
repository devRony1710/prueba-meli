// Aqui estamos obteniendo la info del checkout
export const getCheckoutInfo = (req, res) => {
    const {referrer, token} = req.query

    if(!referrer && typeof referrer !== "string") {
        return res.status(400).json({
            success: false,
            message: "Missing referrer or invalid referrer"
        })
    }

    if(!token && typeof token !== "string" && token.length < 10) {
        return res.status(400).json({
            success: false,
            message: "Missing token or invalid token"
        })
    }

    const checkoutInfo = {
        referrer,
        token
    }

    res.json({
        success: true,
        message: "Checkout info received",
        data: checkoutInfo
    })
}

// Aqui estamos redirigiendo al usuario al siguiente paso
export const nextStep = (req, res) => {
    const {referrer, token} = req.query
    const {name, address, phone, country, captchaToken} = req.body

    if(!referrer || !token) {
        return res.status(400).json({
            success: false,
            message: "Missing referrer or token"
        })
    }

    res.json({
        success: true,
        message: "Checkout success",
        data: {
            referrer,
            token,
            name,
            address,
            phone,
            country,
            captchaToken
        }
    })
}