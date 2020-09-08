const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// endpoint konversi bilangan dari bilangan decimal
app.get("/decimal", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let decimal     = Number(req.body.decimal)
  let biner       = parseInt(decimal, 10).toString(2);
  let octal       = parseInt(decimal, 10).toString(8);
  let hexadecimal = parseInt(decimal, 10).toString(16);
  // menampung data tujuan konversi
  let response = {
    decimal: decimal,
    result: {
      biner: biner,
      octal: octal,
      hexadecimal: hexadecimal
    }
  }
  res.json(response)
})


// endpoint konversi bilangan dari bilangan biner
app.get("/biner", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let biner       = Number(req.body.biner)
  let decimal     = parseInt(biner, 2).toString(10);
  let octal       = parseInt(biner, 2).toString(8);
  let hexadecimal = parseInt(biner, 2).toString(16);
  // menampung data tujuan konversi
  let response = {
    biner: biner,
    result: {
      decimal: decimal,
      octal: octal,
      hexadecimal: hexadecimal
    }
  }
  res.json(response)
})


// endpoint konversi bilangan dari bilangan octal
app.get("/octal", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let octal       = Number(req.body.octal)
  let decimal     = parseInt(octal, 8).toString(10);
  let biner       = parseInt(octal, 8).toString(2);
  let hexadecimal = parseInt(octal, 8).toString(16);
  // menampung data tujuan konversi
  let response = {
    octal: octal,
    result: {
      decimal: decimal,
      biner: biner,
      hexadecimal: hexadecimal
    }
  }
  res.json(response)
})


// endpoint konversi bilangan dari bilangan hexadecimal
app.get("/hexadecimal", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let hexadecimal = req.body.hexadecimal
  let decimal     = parseInt(hexadecimal, 16).toString(10);
  let biner       = parseInt(hexadecimal, 16).toString(2);
  let octal       = parseInt(hexadecimal, 16).toString(8);
  // menampung data tujuan konversi
  let response = {
    hexadecimal: hexadecimal,
    result: {
      decimal: decimal,
      biner: biner,
      octal: octal
    }
  }
  res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
