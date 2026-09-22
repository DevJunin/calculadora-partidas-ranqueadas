const vitorias = 53;
const derrotas = 16;

const saldo = calcularSaldoVitorias(vitorias, derrotas);
const nivelHeroi = nivel(saldo);

console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivelHeroi}.`);

function calcularSaldoVitorias(vitoriasTotais, derrotasTotais) {
  return vitoriasTotais - derrotasTotais;
}

function nivel(saldoRankeada) {
    if (saldoRankeada <= 10) {
            return "Ferro"
        } else if (saldoRankeada <= 20) {
            return "Bronze"
        } else if (saldoRankeada <= 50) {
            return "Prata"
        } else if (saldoRankeada <= 80) {
            return "Ouro"
        } else if (saldoRankeada <= 90) {
            return "Diamante"
        } else if (saldoRankeada <= 100) {
            return "Lendario"
        } else {
            return "Imortal"
        };
}