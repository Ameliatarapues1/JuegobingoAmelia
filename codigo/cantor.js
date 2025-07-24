function Cantor() {
    this.balotasSacados = new Array(75).fill(false)

    this.tabla = [];
    for (var f = 0; f < 15; f++) {
        this.tabla[f] = [];
        for (var c = 0; c < 5; c++) {
            this.tabla[f][c] = c * 15 + f + 1;
        }

    }
    // metodo para iniciar
    this.inicar = function (){
        this.balotasSacadas = new Array (75).fill (false);

    }
    //metodo para sacar balotas
    this.sacarBalotas = function(){
        let balota = Math.floor(Math.random()*75) + 1; //funcion para que saque las balotas
        while(this.balotasSacadas[balota-1]) {
            balota = Math.floor(Math.random()*75) + 1; //funcion para que saque las balotas

        }
        this.balotasSacadas[balota-1] = true;
        this.ultimaBalota = balota;
        
    }
}