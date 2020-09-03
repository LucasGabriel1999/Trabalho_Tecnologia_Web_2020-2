const mensagem = new Array("", "É fácil achar que não nos importamos com a opinião dos outros quando elas nos são sempre favoráveis. Será que ele ignoraria com tanta facilidade o que os membros da sociedade achavam se eles o tratassem da maneira como tratavam Penélope?",
"Sempre penso em quão ridículo é um homem pedir a mão de uma mulher ao pai dela antes de pedir à própria moça. O pai não terá que viver com ele.",
"Dizer que os homens podem ser teimosos como mulas seria um insulto às mulas.",
"Em toda vida ocorre um momento decisivo. Um instante tão extraordinário, tão claro e tão nítido que temos a sensação de havermos sido golpeados no peito, deixados sem fôlego, sabendo, sem a menor sombra de dúvida, que nossa vida jamais será a mesma.",
"Mas amor era uma complicação que ele preferia evitar. Não tinha desejo algum de presenciar esse milagre em particular na própria vida.",
"Ele simplesmente queria que ela fosse dele. Ele queria olhar para ela e saber. Saber que ela carregaria seu nome e teria os seus filhos e olharia apaixonadamente para ele todas as manhãs sobre uma xícara de chocolate quente.",
"Alguma coisa importante está sempre prestes a acontecer, minha querida menina. E, se não estiver, é uma boa ideia agir como se estivesse. Dessa forma, você aproveitará melhor a vida.",
"Um homem charmoso é muito agradável e um homem de boa aparência é, sem dúvida, uma visão que vale a pena, mas um homem honrado, ah, querida leitora, é para ele que as jovens deveriam correr.",
"Era engraçado, refletiu mais tarde, como a vida de alguém podia mudar num único instante, como tudo podia ser de um jeito num minuto e, no seguinte, simplesmente se transformar em algo... diferente.",
"Nunca teria se permitido, nem em um milhão de anos, escolhê-la como esposa. Ela era perigosa demais para sua paz de espírito.",
"Colin decidiu, naquele momento, que a mente feminina era algo estranho e incompreensível – algo que um homem jamais deveria tentar compreender. Não havia uma única mulher viva que conseguisse ir do ponto A ao B sem parar diversas vezes pelo caminho.",
"Quando as pessoas se convenciam de que tinham problemas, a última coisa que desejavam era ouvir uma solução óbvia e objetiva",
"Não é ótimo descobrirmos que não somos exatamente o que pensávamos ser?",
"Há momentos na vida de uma mulher em que seu coração dá uma cambalhota no peito, em que o mundo parece atipicamente cor-de-rosa e perfeito, em que uma sinfonia pode ser ouvida no toque de uma campainha.",
"Sempre pensara que o amor caísse sobre as pessoas como um raio, que um dia, ao flanar por um salão em uma festa, morto de tédio, um homem deparasse com uma mulher e soubesse, no mesmo instante, que sua vida estava mudada para sempre.",
"Homens são criaturas contraditórias. A mente e o coração nunca estão de acordo. E, como sabem muito bem as mulheres suas ações costumam ser governadas por um aspecto completamente diferente.",
"Às vezes… – disse Anthony com a voz hesitante – … às vezes, existem razões para os nossos medos que nós não conseguimos explicar. Pode ser só uma sensação, algo que sabemos que é verdade mas que pareceria infantil a outra pessoa.",
"Seria possível apaixonar-se pela mesma pessoa sempre, todos os dias?",
"Mas querer cortejar uma mulher não significa que a pessoa de fato saiba o que fazer.",
"Homens… No dia em que aprendessem a admitir um erro virariam mulheres.",
"O amor às vezes chega sem ser notado, sabe?",
"Não, ela não precisava de ninguém perfeito. Só precisava de alguém perfeito para ela.",
"Não afirmo saber ou compreender o amor que existe entre marido e mulher, mas não pode ser tão grande que a perda de um destrua o outro",
"Sempre penso em quão ridículo é um homem pedir a mão de uma mulher ao pai dela antes de pedir à própria moça. O pai não terá que viver com ele.",
"Às vezes… – disse Anthony com a voz hesitante – … às vezes, existem razões para os nossos medos que nós não conseguimos explicar. Pode ser só uma sensação, algo que sabemos que é verdade mas que pareceria infantil a outra pessoa.",
"Alguma coisa importante está sempre prestes a acontecer, minha querida menina. E, se não estiver, é uma boa ideia agir como se estivesse. Dessa forma, você aproveitará melhor a vida.",
"Quando as pessoas se convenciam de que tinham problemas, a última coisa que desejavam era ouvir uma solução óbvia e objetiva",
"Mas amor era uma complicação que ele preferia evitar. Não tinha desejo algum de presenciar esse milagre em particular na própria vida.",
"Seria possível apaixonar-se pela mesma pessoa sempre, todos os dias?",
"á momentos na vida de uma mulher em que seu coração dá uma cambalhota no peito, em que o mundo parece atipicamente cor-de-rosa e perfeito, em que uma sinfonia pode ser ouvida no toque de uma campainha.",
"Não é ótimo descobrirmos que não somos exatamente o que pensávamos ser?"
)

function mostarFrase(){
    
    let today = new Date();

    document.getElementById("frase").innerHTML = '"' + mensagem[today.getDate()]+ '"';

}

function mostrarData(){

    now = new Date;
    let today = new Date;

    d = today.getDate();
    m = (today.getMonth())+1;
    y = today.getFullYear();

    document.getElementById("data").innerHTML = d+"/"+m+"/"+y;
}

function mens_opi(){

    window.alert("Obrigado pela sua participação!!!");
}