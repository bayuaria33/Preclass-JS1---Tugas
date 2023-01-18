// Buatlah program yang memiliki satu variabel dengan nama “printGenapGajil” yg berisi tipe data number yang menghasilkan output seperti dibawah

const printGenapGanjil = 5;

for (let index = 1; index <= printGenapGanjil; index++) {
  const oddEvenTernary =
    index % 2 == 0
      ? console.log(`${index} merupakan bilangan genap`)
      : console.log(`${index} merupakan bilangan ganjil`);
}

// for (let index = 1; index <= printGenapGanjil; index++) {
//   if (index % 2 == 0) {
//     console.log(`${index} merupakan bilangan genap`);
//   } else {
//     console.log(`${index} merupakan bilangan ganjil`);
//   }
// }
