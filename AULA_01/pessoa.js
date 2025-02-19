/*
    CRUD
    CREATE - CRIAR
    READER - LER
    UPDATE - ATUALIZAR
    DELETE - DELETAR
*/  

// ID, NOME, IDADE
const pessoas = [];
var idSeq = 1;

//Cadastra uma pessoa com nome e idade
function cadastraPessoa(nome, idade)
{
    var pessoa = 
    {
        id: idSeq++,
        nome: nome,
        idade: idade
    }

    pessoas.push(pessoa);
    return pessoa;
}


//função que apresenta a lista de pessoas
function listaPessoas()
{
    return pessoas;
}


//função que deleta uma pessoa atraves do id
function DeletaPessoa(id)
{
    //Encontra o index da pessoa com o id passado
    for(let i = 0; i < pessoas.length; i++)
    {
        if(pessoas[i].id == id)
        {
            pessoas.splice(i, 1);
            console.log("Pessoa deletada com sucesso!");
            return true;
        }
    }
    return false;
}


function AtualizaPessoas(id, nome, idade)
{
    for(let i = 0; i < pessoas.length; i++)
    {
        if(pessoas[i].id == id)
        {
            pessoas[i].nome = nome;
            pessoas[i].idade = idade;
            console.log("Pessoa atualizada com sucesso!");
            return true;
        }
        else{
            console.log("Pessoa não encontrada!");
            return false;
        }
    }
}

//Exporta as funções para serem utilizadas em outros arquivos
module.exports = {
    cadastraPessoa,
    listaPessoas, 
    DeletaPessoa,
    AtualizaPessoas
};