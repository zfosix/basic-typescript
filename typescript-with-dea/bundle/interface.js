"use strict";
function createIntel(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand} ❤️,
    ----
    anda telah berhasil membuat prosesor dengan detail berikut: ❤️
        
    nama base model: ${processor.baseModel}❤️
    nama model: ${processor.modelName}❤️
    total core: ${processor.coreTotal}❤️
    kecepatan clock: ${processor.clockSpeed}❤️
    turbo boost enable? ${processor.turboBoost}❤️
    `);
}
function createAMD(processor) {
    console.log(`
    ----
    terimakasih ${processor.brand} ❤️,
    ----
    anda telah berhasil membuat prosesor dengan detail berikut: ❤️
        
    nama base model: ${processor.baseModel}❤️
    nama model: ${processor.modelName}❤️
    total core: ${processor.coreTotal}❤️
    kecepatan clock: ${processor.clockSpeed}❤️
    precision boost enable? ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"}❤️
    `);
}
const coreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-10400",
    clockSpeed: 4,
    coreTotal: 2,
    turboBoost: true,
};
const ryzen1 = {
    brand: "AMD",
    baseModel: "ryzen 1",
    modelName: "r-1111x",
    clockSpeed: 4,
    coreTotal: 12,
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r-3000",
    clockSpeed: 6,
    coreTotal: "Dual Core",
    precisionBoost: "yes, ready to overclock",
};
createIntel(coreI5);
createAMD(ryzen1);
createAMD(ryzen3);
