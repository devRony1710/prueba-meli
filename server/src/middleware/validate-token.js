export const validateToken = (req, res, next) => {
    const {token} = req.query

    if(!token && typeof token !== "string" && token.length < 10) {
        return res.status(403).json({
            success: false,
            message: "Missing token or invalid token"
        })
    }

    next()
}