const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/cnpj/:cnpj", async (req, res) => {
    try {
        const {cnpj} = req.params;
        const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CNPJ" });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});