// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga yang berisi angka
const printSegitiga = 5;

str = "";
function printTriangle(num) {
  for (i = 0; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      str += `${i}`;
    }
    str += "\n";
  }
  console.log(str);
}

printTriangle(printSegitiga);
