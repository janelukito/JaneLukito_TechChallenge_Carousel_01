let index = 0; 

// ambil semua elemen dengan class 'slides'
let slides = document.getElementsByClassName("slides");

// arrow button
let nextArrow = document.getElementById("next");
let previousArrow = document.getElementById("previous");

// array nama buat tiap slide, chiikawa (1/2/3/4/dst) dari sini
let names = Array.from({ length: slides.length }, (_, i) => `Chiikawa ${i + 1}`);

// elemen untuk nampilin slides
let place = document.getElementById("place");

// elemen untuk nampilin dotsnya
let dotsContainer = document.getElementById("dots-container");

// ambil semua dot (terisi setelah fungsi init terjalankan)
let dotArray = document.getElementsByClassName("dots");

// fungsi init() untuk dot navigasi sesuai dgn jumlah slide
function init() {
    for (i = 0; i < slides.length; i++) {
        let dot = document.createElement("span"); // buat elemen dot
        dot.className = "dots"; // tambah class
        dotsContainer.appendChild(dot); // masuk ke container
    }
}

// fungsi untuk tampilnya slide based on index 'x'
function showSlides(x) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // hide semua slide
        dotArray[i].className = "dots"; // reset semua dot to default
    }
    slides[index].style.display = "block"; // tampilin slide sesuai index
    dotArray[index].className += " active-dot"; // aktifkin dot sesuai index
    place.textContent = names[index]; // tampilin nama slide
}

// jalanin semua saat page ke load
document.addEventListener('DOMContentLoaded', () => {
    init(); // Buat dots

    // event klik right arrow button
    nextArrow.addEventListener('click', () => {
        index += 1;
        if (index >= slides.length) index = 0; // Kembali ke awal jika sudah di akhir
        showSlides(index); // Tampilkan slide sesuai index
    })

    // event klik left arrow button
    previousArrow.addEventListener('click', () => {
        index -= 1;
        if (index < 0) index = slides.length - 1; // kalau posisi di 1, lompat ke akhir yaitu in this context 4
        showSlides(index); // show slide sesuai index
    })

    dotArray[0].onclick = () => showSlides(0); 
});
