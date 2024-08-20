function AdiconarCarro(modelo, marca, ano) {

    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;

}

function VenderCarro(modelo, marca, ano, valorVenda, parcela) {

    this.valorVenda = valorVenda;
    this.parcela = parcela;

    AdiconarCarro.call(this, modelo)
    AdiconarCarro.call(this, marca)
    AdiconarCarro.call(this, ano)

    if (parcela > 0) {

        const valorParcelado = valorVenda / parcela;


        console.log(`Vendido:
            ${modelo}
            ${marca}
            ${ano}
            ${Math.round(valorParcelado)}R$ x ${parcela} parcelas, valor total aproxiamdo de ${valorVenda}R$`);
    } else {
        console.log(`Vendido:
            ${modelo}
            ${marca}
            ${ano}
            valor total  ${valorVenda}R$`);
    }
}

function Lucro(marca, modelo, ano, valorEntrada, valorVenda) {

    this.valorEntrada = valorEntrada;
    this.valorVenda = valorVenda;

    AdiconarCarro.call(this, modelo)
    AdiconarCarro.call(this, marca)
    AdiconarCarro.call(this, ano)




    if (valorEntrada < valorVenda) {
        console.log(`Vendido:
            ${modelo}
            ${marca}
            ${ano}
            Com lucro de  ${valorVenda - valorEntrada}`);
    } else {
        console.log(`Vendido:
            ${modelo}
            ${marca}
            ${ano}
            Com prejuízo de  ${valorEntrada - valorVenda}`);
    }


}





const Carro1 = new VenderCarro("gol", "volkswagen", 2006, 16000, 0);
const Carro2 = new VenderCarro("gol", "volkswagen", 2006, 16000, 36);
const Carro3 = new Lucro("gol", "volkswagen", 2006, 20000, 16000);
const Carro4 = new Lucro("gol", "volkswagen", 2006, 14000, 20000);



