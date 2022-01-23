const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")
app.use(cors());
app.get("/api", async (req,res)=>{
    axios.get("https://www.fruityvice.com/api/fruit/all")
    .then(resposta=>res.send(resposta.data))
    .catch(erro=>res.send(erro));
});
app.listen(process.env.PORT || 8000);
