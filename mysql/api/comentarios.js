inserirRota('/criar_comentario', function name(dados, resposta) {
    database(`INSERT INTO COMENTARIOS (
        COMENTARIO, ID_USUARIO, ID_PRODUTO) VALUES
        ("${dados.comentario}", "${dados.id}", "${dados.idProduto}")
        `).then(result => {
        console.log('COMENTÁRIO INSERIDO COM SUCESSO')
        resposta({ message: 'COMNETÁRIO INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('COMENTÁRIO NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o comentário!' })
    });
})


inserirRota('/buscar_comentario', function(dados, resposta) {
    database(`SELECT COMENTARIOS.COMENTARIO, COMENTARIOS.ID_PRODUTO, COMENTARIOS.ID_USUARIO, USER.NICKNAME, USER.IMG FROM COMENTARIOS
    LEFT JOIN USER
    ON COMENTARIOS.ID_USUARIO = USER.ID
    WHERE COMENTARIOS.ID_PRODUTO == ${dados.idProduto};`).then(result => {
        console.log('COMENTARIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('COMENTARIO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o COMENTARIO!' })
    });
});