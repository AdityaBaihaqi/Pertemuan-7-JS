const maverick_vinales = {
    "nama" : "Maverick Vinales",
    "tim" : "Aprilia Racing Team",
    "debut" : "2015",
    "kebangsaan" : "Spanyol"
}
const marc_marquez = {
    "nama" : "Marc Marquez",
    "tim" : "Repsol Honda",
    "debut" : "2013",
    "kebangsaan" : "Spanyol"
}
const aleix_espargaro = {
    "nama" : "Aleix Espargaro",
    "tim" : "Aprilia Racing Team",
    "debut" : "2009",
    "kebangsaan" : "Spanyol"
}
const alex_rins = {
    "nama" : "Alex Rins",
    "tim" : "LCR Honda Castrol",
    "debut" : "2017",
    "kebangsaan" : "Spanyol"
}
const joan_mir = {
    "nama" : "Joan Mir",
    "tim" : "Repsol Honda",
    "debut" : "2019",
    "kebangsaan" : "Spanyol"
}

const pebalap_motogp = [maverick_vinales, aleix_espargaro, marc_marquez, alex_rins, joan_mir]

for (let pebalap of pebalap_motogp) {
    console.log(pebalap.tim);
}

for (let pebalap in maverick_vinales) {
    console.log(pebalap + " : " + maverick_vinales[pebalap]);
}
for (let pebalap in marc_marquez) {
    console.log(pebalap + " : " + marc_marquez[pebalap]);
}
for (let pebalap in aleix_espargaro) {
    console.log(pebalap + " : " + aleix_espargaro[pebalap]);
}
for (let pebalap in alex_rins) {
    console.log(pebalap + " : " + alex_rins[pebalap]);
}
for (let pebalap in joan_mir) {
    console.log(pebalap + " : " + joan_mir[pebalap]);
}
