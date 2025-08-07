export const getUserInfo = (req, res) => {
    const { token } = req.query;

    const userInfo = {
        name: "John Doe",
        phone: "1234567891",
        address: "123 Main St, Anytown, BR",
        country: {
            value: "BR",
            label: "Brazil"
        },
        token: token
    };
        
    res.json(userInfo);
};