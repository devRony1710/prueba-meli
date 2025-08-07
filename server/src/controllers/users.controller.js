export const getUserInfo = (req, res) => {
    const { token } = req.query;

    const userInfo = {
        name: "John Doe",
        phone: "123456789",
        address: "123 Main St, Anytown, BR",
        country: "BR",
        token: token
    };
        
    res.json(userInfo);
};