const Miguel = {
    nome:'Miguel',
    idade: 20,
    politica: 'centro',

    apresentar: function(){
    
        console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};


Miguel.apresentar();