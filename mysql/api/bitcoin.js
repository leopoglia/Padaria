inserirRota('/adicionar_btc', function name(dados, resposta) {
    database(`INSERT INTO MOEDA (
        NOME, VALORUSD, ID_USUARIO) VALUES
        ("bitcoin", "${dados.valorAdd}", "${dados.idPessoa}")
        `).then(result => {
        console.log('MOEDA INSERIDO COM SUCESSO')
        resposta({ message: 'MOEDA INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('MOEDA NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o MOEDA!' })
    });
})


inserirRota('/buscar_btc', function(dados, resposta) {
    database(`SELECT SUM(MOEDA.VALORUSD) as SOMA, MOEDA.ID_USUARIO FROM MOEDA
    INNER JOIN USER
    ON MOEDA.ID_USUARIO = USER.ID
    where USER.ID  == "${dados.idPessoa}";`).then(result => {
        console.log('MOEDA BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('MOEDA NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o MOEDA!' })
    });
});