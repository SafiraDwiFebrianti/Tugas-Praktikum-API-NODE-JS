const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/bmi", (req, res) => {
  //menampung data yang akan dikirimkan
  let tinggi = Number(req.body.tinggi) // satuan meter
  let berat  = Number(req.body.berat)  // satuan kg
  // menampung data untuk dikonverensi
  let bmi    = berat / (tinggi * tinggi)

    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
    }
    else if (bmi <= 24.9) {
      status = "Normal (ideal)";
    }
    else if (bmi <= 29.9) {
      status = "Kelebihan Berat Badan";
    }
    else {
      status = "Kegemukan (obesitas)";
    }

  let response = {
    tinggi : tinggi,
    berat : berat,
    bmi : bmi,
    status : status
  }
  res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
