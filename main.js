const form = document.querySelector('#form-atividade');
const imgAprovado = '<img src="./images/check.png" alt="Emoji check" />';
const imgReprovado = '<img src="./images/disapproved.png" alt="Emoji disapproved " />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span> '
const spanReprovado = '<span class="resultado reprovado">Reprovado</span> '
const notaMinima = Number(prompt('Digita a nota mínima:'))

let linhas = ' ';

form.addEventListener('submit' , function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
    
})

function adicionaLinha(){
    const inputNomeAtividade = document.querySelector('#nome-atividade')
    const inputNotaAtividade = document.querySelector('#nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value} </td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        // 1 - retornar com as variavéis imgAprovado e imgDesaprovado - linha += `<td> ${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'} </td>`
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}`
        linha += `</tr>`
    
        linhas += linha;
    }
    
    inputNomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length

}
