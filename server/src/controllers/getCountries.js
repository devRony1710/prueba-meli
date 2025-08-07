export const getCountries = (req, res) => {
    const { token } = req.query;

    const countries = [
            { id: 1, name: "Argentina", code: "AR" },
            { id: 2, name: "Brazil", code: "BR" },
            { id: 3, name: "Chile", code: "CL" },
            { id: 4, name: "Peru", code: "PE" },
            { id: 5, name: "Colombia", code: "CO" }
        ];
        
    res.json(countries);
};
