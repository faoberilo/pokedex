//npm run dev
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
var pokedex = [];
var mensagem = "";
var index = 0;




app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.set("view engine", "ejs");



app.get("/", (req, res) => {

  setTimeout(() => {
    mensagem = "";
  }, 100);
  
  res.render("index", { titulo: "POKEDÉX", pokedex:pokedex,mensagem});
   
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { titulo: "CADASTRO" });
});

app.post("/new", (req, res) => {
  const {numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  pokedex.push({ numero:numero, nome:nome,tipo:tipo,imagem:imagem,descricao:descricao,altura:altura,peso:peso,categoria:categoria,habilidade:habilidade,index:index});
  mensagem = `Parabéns ${nome}, foi cadastrado!!!`;
  index++;
  res.redirect(`/`);
});


app.get("/detalhes/:id", (req, res) => {
  const id = req.params['id'];
  res.render("detalhes", { titulo: "DETALHES",pokedex:pokedex,id:id});
  

 });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);