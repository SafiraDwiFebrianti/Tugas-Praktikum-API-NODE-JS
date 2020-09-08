const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// endpoint convert dari celcius
app.get("/celcius", (req, res) => {
  // menampung data yang akan dikirimkan
  let celcius    = Number (req.body.celcius)
  // menampung data tujuan konverensi
  let reamur     = 4/5 * celcius
  let fahrenheit = (9/5 * celcius) + 32
  let kelvin     = celcius + 273

  // membuat objek untuk dijadikan response
  let response = {
      celcius : celcius,
      result : {
        reamur : reamur,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    }
  }
  // memberikan response dengan format JSON
  res.json(response)
})



// endpoint convert dari reamur
app.get("/reamur", (req, res) => {
  // menampung data yang akan dikirimkan
  let reamur     = Number (req.body.reamur)
  // menampung data tujuan konverensi
  let celcius    = 5/4 * reamur
  let fahrenheit = (9/4 * reamur) + 32
  let kelvin     = (5/4 * reamur) + 273

  // membuat objek untuk dijadikan response
  let response = {
      reamur : reamur,
      result : {
        celcius : celcius,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    }
  }
  // memberikan response dengan format JSON
  res.json(response)
})



// endpoint convert dari kelvin
app.get("/kelvin", (req, res) => {
  // menampung data yang akan dikirimkan
  let kelvin     = Number (req.body.kelvin)
  // menampung data tujuan konverensi
  let celcius    = kelvin - 273
  let fahrenheit = 9/5 * (kelvin - 273) + 32
  let reamur     = 4/5 * (kelvin - 273)

  // membuat objek untuk dijadikan response
  let response = {
      kelvin : kelvin,
      result : {
        celcius : celcius,
        fahrenheit : fahrenheit,
        reamur : reamur
    }
  }
  // memberikan response dengan format JSON
  res.json(response)
})



// endpoint convert dari fahrenheit
app.get("/fahrenheit", (req, res) => {
  // menampung data yang akan dikirimkan
  let fahrenheit = Number (req.body.fahrenheit)
  // menampung data tujuan konverensi
  let celcius    = 5/9 * (fahrenheit - 32)
  let reamur     = 4/9 * (fahrenheit - 32)
  let kelvin     = 5/9 * (fahrenheit - 32) + 273

  // membuat objek untuk dijadikan response
  let response = {
      fahrenheit : fahrenheit,
      result : {
        celcius : celcius,
        reamur : reamur,
        kelvin : kelvin
    }
  }
  // memberikan response dengan format JSON
  res.json(response)
})



// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
