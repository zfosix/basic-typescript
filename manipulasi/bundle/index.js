"use strict";
// ==============================
// 1. MANIPULASI ARRAY ANGKA
// ==============================
console.log("\n=== 1. MANIPULASI ARRAY ANGKA ===");
const angka = [1, 2, 3, 4, 5];
console.log("Awal:", angka);
angka.push(6);
console.log("Setelah push(6):", angka);
angka.pop();
console.log("Setelah pop():", angka);
const genap = angka.filter((n) => n % 2 === 0);
console.log("Angka genap:", genap);
const hasilKali = angka.map((n) => n * 2);
console.log("Dikali 2:", hasilKali);
// ==============================
// 2. MANIPULASI OBJEK USER
// ==============================
console.log("\n=== 2. MANIPULASI OBJEK USER ===");
const user = {
    name: "Fajar",
    age: 17,
};
user.age = 18;
console.log("Setelah update umur:", user);
user.email = "fajar@example.com";
console.log("Setelah tambah email:", user);
// ==============================
// 3. MANIPULASI DATA PRODUK
// ==============================
console.log("\n=== 3. MANIPULASI DATA PRODUK ===");
const produkList = [
    { id: 1, nama: "Baju", harga: 100000 },
    { id: 2, nama: "Celana", harga: 150000 },
];
const updatedProdukList = produkList.map((item) => item.id === 1 ? Object.assign(Object.assign({}, item), { harga: 110000 }) : item);
console.log("Setelah update harga ID 1:", updatedProdukList);
const produkMahal = produkList.filter((item) => item.harga > 100000);
console.log("Produk dengan harga > 100000:", produkMahal);
// ==============================
// 4. GABUNG ARRAY & OBJECT
// ==============================
console.log("\n=== 4. GABUNG ARRAY & OBJECT ===");
const a = [1, 2];
const b = [3, 4];
const gabung = [...a, ...b];
console.log("Gabung array:", gabung);
const obj1 = { name: "Fajar" };
const obj2 = { age: 17 };
const gabungObj = Object.assign(Object.assign({}, obj1), obj2);
console.log("Gabung object:", gabungObj);
// ==============================
// 5. HITUNG TOTAL HARGA PRODUK
// ==============================
console.log("\n=== 5. HITUNG TOTAL HARGA PRODUK ===");
const totalHarga = produkList.reduce((total, produk) => {
    return total + produk.harga;
}, 0);
console.log("Total harga semua produk:", totalHarga);
