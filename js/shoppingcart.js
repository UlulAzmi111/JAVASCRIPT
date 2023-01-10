let tblmenu = [
    {idmenu:35, idkategori:14, menu:"Apel Manalagi", gambar:"apell.jpg", harga:3000},
    {idmenu:36, idkategori:14, menu:"Pisang Raja", gambar:"piisang.jpg", harga:5000},
    {idmenu:39, idkategori:1, menu:"Nasi Padang", gambar:"nasi padang.jpeg", harga:20000},
    {idmenu:40, idkategori:1, menu:"Nasi Ayam", gambar:"nasi ayam.jpg", harga:15000},
    {idmenu:43, idkategori:2, menu:"Es Teh", gambar:"es teeh.jpg", harga:5000},
    {idmenu:44, idkategori:2, menu:"Es Jeruk", gambar:"es jeeruk.jpg", harga:7000},
]

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
        <img src="./images/${kolom.gambar}" alt="">
    </div>
    <div class="titel">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2>
    </div>
</div>`;
})

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;
