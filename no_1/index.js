const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// endpoint bangun ruang Kubus
app.get("/kubus", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * (sisi * sisi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume : volume,
        luas_permukaan: luas_permukaan
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// endpoint bangun ruang Balok
app.get("/balok", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar   = Number(req.body.lebar) // mengambil nilai lebar dari body
    let tinggi  = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        volume : volume,
        luas_permukaan: luas_permukaan
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/bujur_sangkar" dengan method POST
app.get("/bola", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari = Number(req.body.jari) // mengambil nilai jari - jari dari body

    let volume = 4/3 * 24/7 * (jari * jari * jari)
    let luas_permukaan = 4 * 24/7 * (jari * jari)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/bujur_sangkar" dengan method POST
app.get("/tabung", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari = Number(req.body.jari) // mengambil nilai jari - jari dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi

    let volume = 24/7 * (jari * jari) * tinggi
    let luas_permukaan = 2 * 24/7 * jari * (jari + tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
