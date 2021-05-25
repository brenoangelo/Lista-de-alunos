const alunos = [
    {nome: "Breno Angelo", mat: "202101", nota: "938"},
    {nome: "Ana Júlia", mat: "202104", nota: "860"},
    {nome: "Guilherme", mat: "202103", nota: "750"},
    {nome: "Saul Goodman", mat: "202102", nota: "960"},
]

let table = document.querySelector('table')

alunos.map((aluno)=>{
    let tr = document.createElement('tr')

    tr.innerHTML = `<td>${aluno.nome}</td>
                    <td>${aluno.mat}</td>
                    <td>${aluno.nota}</td>`

    table.appendChild(tr)

})