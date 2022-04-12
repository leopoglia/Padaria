inserirRota('/adicionar_btc', function name(dados, resposta) {
    database(`INSERT INTO MOEDA (
        NOME, VALORUSD, ID_USUARIO) VALUES
        ("bitcoin", 0, "${dados.idPessoa}")
        `).then(result => {
        console.log('MOEDA INSERIDO COM SUCESSO')
        resposta({ message: 'MOEDA INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('MOEDA NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o MOEDA!' })
    });
})

inserirRota('/adicionarmais_btc', function name(dados, resposta) {
    database(`UPDATE MOEDA SET VALORUSD = VALORUSD + ${dados.valorAdd} WHERE ID_USUARIO == "${dados.idPessoa}";
        `).then(result => {
        console.log('MOEDA ADICIONADA COM SUCESSO')
        resposta({ message: 'MOEDA ADICIONADA COM SUCESSO!' })
    }).catch(erro => {
        console.log('MOEDA NÃO ADICIONADA')
        resposta({ erro: 'Erro ao ADICIONAr o MOEDA!' })
    });
})

inserirRota('/adicionarmenos_btc', function name(dados, resposta) {
    database(`UPDATE MOEDA SET VALORUSD = VALORUSD - ${dados.valorAdd} WHERE ID_USUARIO == "${dados.idPessoa}";
        `).then(result => {
        console.log('MOEDA ADICIONADA COM SUCESSO')
        resposta({ message: 'MOEDA ADICIONADA COM SUCESSO!' })
    }).catch(erro => {
        console.log('MOEDA NÃO ADICIONADA')
        resposta({ erro: 'Erro ao ADICIONAr o MOEDA!' })
    });
})


inserirRota('/buscar_btc', function(dados, resposta) {
    database(`SELECT MOEDA.VALORUSD, MOEDA.ID_USUARIO FROM MOEDA
    INNER JOIN USER
    ON MOEDA.ID_USUARIO = USER.ID
    where USER.ID  == "${dados.idPessoa}"`).then(result => {
        console.log('MOEDA BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('MOEDA NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o MOEDA!' })
    });
});