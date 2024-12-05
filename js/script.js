// ini file js

// Fungsi untuk menghitung BMI
function hitungbmi(event) {
    event.preventDefault(); // Mencegah form melakukan submit

    // Ambil data input dari form
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    const beratBadan = parseFloat(document.getElementById("berat-badan-input").value);
    const tinggiBadan = parseFloat(document.getElementById("tinggi-badan-input").value) / 100; // Konversi cm ke meter
    const usia = parseInt(document.getElementById("usia-input").value);

    // Validasi input
    if (!jenisKelamin || isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(usia) || beratBadan <= 0 || tinggiBadan <= 0 || usia <= 0) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    // Menghitung BMI
    const bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(2);

    // Tentukan kategori BMI
    let kategori = "";
    let infoContent = ""; // Informasi tambahan
    if (bmi < 18.5) {
        kategori = "Kekurangan berat badan";
        infoContent = `
            Anda berada dalam kategori kekurangan berat badan. 
            Penting untuk meningkatkan asupan nutrisi Anda.
            Pastikan untuk makan dengan pola yang sehat dan berkonsultasi dengan ahli gizi.
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Normal (ideal)";
        infoContent = `
            Selamat! Anda berada dalam kategori berat badan ideal. 
            Pertahankan gaya hidup sehat Anda dengan pola makan seimbang dan rutin berolahraga.
        `;
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = "Kelebihan berat badan";
        infoContent = `
            Anda berada dalam kategori kelebihan berat badan. 
            Pertimbangkan pola makan sehat, kurangi makanan berkalori tinggi, dan lakukan olahraga secara teratur.
        `;
    } else {
        kategori = "Kegemukan (Obesitas)";
        infoContent = `
            Anda berada dalam kategori obesitas. 
            Sebaiknya konsultasikan dengan ahli gizi untuk mendapatkan panduan yang sesuai guna menurunkan berat badan.
        `;
    }

    // Update hasil BMI
    document.getElementById("result-calculation").innerText = `${bmi}`;
    document.querySelector(".hasil-content p:nth-child(3)").innerText = `${kategori}`;

    // Update info-content dengan informasi tambahan
    const infoContentElement = document.querySelector(".info-content p");
    infoContentElement.innerHTML = infoContent;
}

function resetbmi(event) {
    event.preventDefault(); // Mencegah form melakukan submit

    // Reset semua input
    document.getElementById("berat-badan-input").value = "";
    document.getElementById("tinggi-badan-input").value = "";
    document.getElementById("usia-input").value = "";
    document.querySelectorAll('input[name="jenis-kelamin"]').forEach(input => input.checked = false);

    // Reset hasil
    document.getElementById("result-calculation").innerText = "0";
    document.querySelector(".hasil-content p:nth-child(3)").innerText = "Silahkan isi form nya dulu yaa";

    // Reset info-content
    const infoContentElement = document.querySelector(".info-content p");
    infoContentElement.innerHTML = `
        Akan ada sedikit saran dan penjelasan mengenai hasil BMI Anda disini!
    `;
}

// Menambahkan event listener ke tombol
document.getElementById("hitung-hasil").addEventListener("click", hitungbmi);
document.getElementById("reset-hasil").addEventListener("click", resetbmi);
