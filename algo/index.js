const turmas = [
    [
        { nome: 'João Eduardo' }, 
        { nome: 'João Carlos' }, 
        { nome: 'Tiago André Moreira' }, 
        { nome: 'João Emanuel' }],
    [
      { nome: 'Maria Clara' },
      { nome: 'Maria Antônia' },
      { nome: 'Antônia Josefa da Silva' },
      { nome: 'Luiza da Silva' },
      { nome: 'Maria Emanuela de Sousa' }
    ],
    [
      { nome: 'Francisca da Silva de Sousa' },
      { nome: 'Eduarda Oliveira Ferreirana' },
      { nome: 'Isabela Azevedo Rodrigues' },
      { nome: 'Luiza Andrande de Sousa' },
      { nome: 'Jaqueline da Silva e Silva' },
      { nome: 'Luiza de Melo' }
    ],
    [
      { nome: 'Karla Magna' },
      { nome: 'Joana de Sousa' },
      { nome: 'Francisca da Silva' },
      { nome: 'Fabiana Albuquerque Xavier' },
      { nome: 'Iara Amorim' },
      { nome: 'Joana Brito de Melo' }
    ]
  ]

  const listaDeAlunos = ( turmasAtuais ) => {
      const alunos = [ ]
      turmasAtuais.forEach( turma =>{
           alunos.push( ...turma )
        })

      return alunos
  }

  const verficarPrimeiroNomeNaTurma = ( turma, nome ) => {
    let resultado = false

    turma.forEach( aluno => {

        aluno = aluno.nome ? aluno : { nome: 'test test' }

         if ( aluno.nome.split( ' ' )[0] === nome.split( ' ' )[0] ){
             resultado = true
         }
      } )

    return resultado
  }
 
  const turmasNovas = ( alunos, quantidadeDeTurmas ) => {
        const turmas= []
        const maximoDeAlunosPorTurma = Math.round(alunos.length / quantidadeDeTurmas)

        for( let i =0; i < quantidadeDeTurmas; i++ ){
             turmas[i] = []
        }

        alunos.forEach( aluno => {
            for( let i =0; i < quantidadeDeTurmas; i++ ){  
                
            const nTurmas = turmas[i].length

             if( nTurmas < maximoDeAlunosPorTurma || i === 3 ) {  
                if(verficarPrimeiroNomeNaTurma( turmas[i], aluno.nome )){
                    for( let i =0; i < quantidadeDeTurmas; i++ ){
                        if(verficarPrimeiroNomeNaTurma( turmas[i], aluno.nome )){
                         
                        }else{
                            turmas[i].push(aluno)
                            i=10
                        }
                    }
                }else{
                    turmas[i].push(aluno)
                    i=10
                }}
            }


        } )

        return turmas
  }


console.log(turmasNovas( listaDeAlunos( turmas ), 3))