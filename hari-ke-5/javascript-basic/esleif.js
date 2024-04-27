alert("Selamat datang")

let score = prompt("Masukkan angka score Anda")

if(score >= 80 && score <=100){
    alert("Selamat! Anda mendapatkan nilai A");
} else if(score >=65 && score <=79){
    alert("Selamat! Anda mendapatkan nilai B");
} else if(score <= 64){
    alert("Sayang sekali! Anda mendapatkan C");
} else {
    alert("Anda salah memasukkan format nilai!")
}