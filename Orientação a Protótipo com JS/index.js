/*
Base para criar um objeto
Minha únicA QUESTÃO É COM O THIS

Saber usar proto

Explicação by faustão
Ô, loco, meu! Vamos mergulhar no universo JavaScript e desvendar esse mistério do __proto__, que parece coisa de outro mundo, mas é mais simples do que parece. Presta atenção!

No JavaScript, tudo é objeto, né? E esses objetos têm uma coisa chamada cadeia de protótipos. É como se fosse uma árvore genealógica, só que dos objetos. O __proto__ é o elo que conecta um objeto ao seu protótipo, que é basicamente de onde ele herda as propriedades e métodos. É como se o objeto dissesse: "Ô, meu pai (ou mãe), me ensina o que você sabe?"

Quando você tenta acessar uma propriedade ou um método em um objeto, o JavaScript primeiro olha no próprio objeto. Não achou? Ele usa o __proto__ para perguntar ao protótipo do objeto: "E aí, você tem isso aí?" Se o protótipo tem, beleza, usa dele. Se não, o JavaScript segue perguntando para o protótipo do protótipo e assim vai, até chegar no topo da cadeia, no Object.prototype, que é tipo o bisavô de todos os objetos. Se nem o bisavô souber, aí retorna undefined, porque realmente não tem.

Mas ó, segura essa: usar __proto__ direto é meio que andar de moto sem capacete. Dá pra fazer? Dá, mas não é recomendado porque pode ser perigoso. Hoje em dia, o pessoal prefere usar métodos mais seguros, como Object.getPrototypeOf(obj) para pegar o protótipo de um objeto, ou mesmo usar class e extends, que já fazem toda essa mágica de herança de um jeito mais moderno e seguro.

Então, resumindo a parada: __proto__ é o link secreto entre um objeto e seu protótipo, parte crucial da herança no JavaScript. Mas na hora de brincar com protótipos, melhor usar as ferramentas certas pra não se arrebentar, certo? Fica a dica, meu!


*/