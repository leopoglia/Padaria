inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM USER`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/login', function(dados, resposta) {
    database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1`).then(result => {
        console.log('result:', result)
        resposta({ user: result[0] })
    }).catch(erro => {
        resposta({ erro: 'Erro ao LOGAR o usuário!' })
    });
});

inserirRota('/criar_usuario', function(dados, resposta) {
    if (!dados.nome) {
        return resposta({ erro: 'É nesecessário preencher o nome!' })
    }

    if (!dados.nickname) {
        return resposta({ erro: 'É nesecessário preencher o Nickname!' })
    }

    database(`INSERT INTO USER (
        NOME, NICKNAME, PASSWORD, IMG) VALUES
        ("${dados.nome}", "${dados.nickname}", "${dados.password}", "${dados.img}")
        `).then(result => {
        console.log('USUÁRIO INSERIDO COM SUCESSO')
        resposta({ message: 'USUARIO INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o usuário!' })
    });
})

//fetch('/api/buscar_usuario', {method: 'POST', body: JSON.stringify({produtoId: 1, pessoaId: 1}), headers: { 'Content-Type': 'application/json'}}).then(function(result){return result.json();}).then(function(dados){console.log(dados)}).catch(function(erro){console.log(erro);})