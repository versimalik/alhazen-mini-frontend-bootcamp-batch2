number = prompt("Masukkan angka")

result = number % 2

switch(result){
    case 0:
        alert(number + " adalah angka genap")
        break;
    case 1:
        alert(number + " adalah angka ganjil")
        break;
    default:
        alert("Masukkan angka yang valid!")
        break;
}