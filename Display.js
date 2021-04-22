class Display{
    constructor(displayValorActual, displayValorAnterior){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this-calculador  new Calculadora ();
        this.valorActual ='';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        if(numero=='.' && this.valorActual.includes('.')) return
        this.valorActual= this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.tetContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;

    }

}

