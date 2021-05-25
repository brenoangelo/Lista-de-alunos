/* VARIÁVEIS */
let table = document.querySelector('table')
let btnNome = document.querySelector('button:nth-of-type(1)')
let btnMat = document.querySelector('button:nth-of-type(2)')
let btnNota = document.querySelector('button:nth-of-type(3)')


/* DATA */
const alunos = [
    {nome: "Breno Angelo", mat: "202101", nota: "938"},
    {nome: "Ana Júlia", mat: "202104", nota: "860"},
    {nome: "Guilherme", mat: "202103", nota: "750"},
    {nome: "Saul Goodman", mat: "202102", nota: "960"},
]

/*EXIBINDO */

exibir()

/* FUNÇÕES */

function exibir(){
    
    limpar()
    alunos.map((aluno)=>{
        let tr = document.createElement('tr')


        tr.innerHTML = `<td>${aluno.nome}</td>
                        <td>${aluno.mat}</td>
                        <td>${aluno.nota}</td>`
    
        table.appendChild(tr)
    
    })
    
}

function limpar(){
    table.innerHTML = `<tr>
                            <th>NOME</th>
                            <th>MATRICULA</th>
                            <th>NOTA</th>
                        </tr>`
}



/* EVENTOS */

    /*ORDENA POR NOME*/
btnNome.addEventListener("click", ()=>{
    
    if(alunos[0].nome > alunos[alunos.length-1].nome){
        btnNota.innerHTML = "Ord Nota"
        btnNome.innerHTML = "Ord Nome"
        btnMat.innerHTML = "Ord Matricula"
        btnNome.innerHTML += ` <i class="fas fa-arrow-up"></i>`

        alunos.sort((a,b)=>{
            if(a.nome.toLowerCase() < b.nome.toLowerCase()){
                return -1
            }
        
            if(a.nome.toLowerCase() > b.nome.toLowerCase()){
                return 1
            }
        
            return 0
        })

        
    }else{
        btnNota.innerHTML = "Ord Nota"
        btnNome.innerHTML = "Ord Nome"
        btnMat.innerHTML = "Ord Matricula"
        btnNome.innerHTML += ` <i class="fas fa-arrow-down"></i>`
        alunos.sort((a,b)=>{
            if(a.nome.toLowerCase() > b.nome.toLowerCase()){
                return -1
            }
        
            if(a.nome.toLowerCase() < b.nome.toLowerCase()){
                return 1
            }
        
            return 0
        })

        
    }
        exibir()
})

    /*ORDENA POR MATRICULA*/
btnMat.addEventListener("click", ()=>{

    
    if(alunos[0].mat > alunos[alunos.length-1].mat){
        btnNota.innerHTML = "Ord Nota"
        btnNome.innerHTML = "Ord Nome"
        btnMat.innerHTML = "Ord Matricula"
        btnMat.innerHTML += ` <i class="fas fa-arrow-up"></i>`
        alunos.sort((a,b)=>{
            if(a.mat < b.mat){
                return -1
            }
        
            if(a.mat > b.mat){
                return 1
            }
        
            return 0
        })

        
    }else{
        alunos.sort((a,b)=>{
            btnNota.innerHTML = "Ord Nota"
            btnNome.innerHTML = "Ord Nome"
            btnMat.innerHTML = "Ord Matricula"
            btnMat.innerHTML += ` <i class="fas fa-arrow-down"></i>`
            if(a.mat > b.mat){
                return -1
            }
        
            if(a.mat < b.mat){
                return 1
            }
        
            return 0
        })

        
    }

    exibir()
})

    /*ORDENA POR NOTA*/
btnNota.addEventListener("click", ()=>{

    if(alunos[0].nota > alunos[alunos.length-1].nota){
        btnNota.innerHTML = "Ord Nota"
        btnNome.innerHTML = "Ord Nome"
        btnMat.innerHTML = "Ord Matricula"
        btnNota.innerHTML += ` <i class="fas fa-arrow-up"></i>`
        alunos.sort((a,b)=>{
            if(a.nota < b.nota){
                return -1
            }
        
            if(a.nota > b.nota){
                return 1
            }
        
            return 0
        })

        
    }else{
        alunos.sort((a,b)=>{
            btnNota.innerHTML = "Ord Nota"
            btnNome.innerHTML = "Ord Nome"
            btnMat.innerHTML = "Ord Matricula"
            btnNota.innerHTML += ` <i class="fas fa-arrow-down"></i>`
            if(a.nota > b.nota){
                return -1
            }
        
            if(a.nota < b.nota){
                return 1
            }
        
            return 0
        })

        
    }

    exibir()
})