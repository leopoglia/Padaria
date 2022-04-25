inserirRota('/criar_produto', function name(dados, resposta) {
    database(`INSERT INTO PRODUTO (
        NOME, IMG, PRECO, DESCRICAO) VALUES
        ("${dados.nome}", "${dados.img}", "${dados.preco}", "${dados.descricao}")
        `).then(result => {
        console.log('PRODUTO INSERIDO COM SUCESSO')
        resposta({ message: 'PRODUTO INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('PRODUTO NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o produto!' })
    });
})

inserirRota('/buscar_produto', function(dados, resposta) {
    database(`SELECT * FROM PRODUTO`).then(result => {
        console.log('PRODUTO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('PRODUTO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o produto!' })
    });
});

inserirRota('/buscar_produto_especifico', function(dados, resposta) {
    database(`SELECT * FROM PRODUTO WHERE ID == ${dados.ID}`).then(result => {
        console.log('PRODUTO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('PRODUTO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o produto!' })
    });
});

inserirRota('/buscar_pesquisa', function(dados, resposta) {
    database(`SELECT * FROM PRODUTO WHERE NOME LIKE "%${dados.pesquisa}%"`).then(result => {
        console.log('PRODUTO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('PRODUTO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o produto!' })
    });
});


inserirRota('/excluir_produto', function name(dados, resposta) {

    database(`DELETE FROM PRODUTO WHERE ID == ${dados.ID}`).then(result => {
        console.log('PRODUTO REMOVIDO COM SUCESSO')
        resposta({ message: 'PRODUTO REMOVIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('PRODUTO NÃO REMOVIDO')
        resposta({ erro: 'Erro ao remover o PRODUTO!' })
    });
})


inserirRota('/adicionar_produto_carrinho', function name(dados, resposta) {

    database(`INSERT INTO CARRINHO(ID_PRODUTO, ID_USUARIO) VALUES ("${dados.idProduto}", "${dados.idPessoa}")`)
        .then(result => {
            console.log('PRODUTO INSERIDO NO CARRINHO COM SUCESSO')
            resposta({ message: 'PRODUTO INSERIDO NO CARRINHO COM SUCESSO!' })
        }).catch(erro => {
            console.log('PRODUTO NÃO INSERIDO NO CARRINHO')
            resposta({ erro: 'Erro ao inserir o no carrinho produto!' })
        });
})

inserirRota('/excluir_produto_carrinho', function name(dados, resposta) {

    database(`DELETE FROM CARRINHO WHERE ID == ${dados.ID}`).then(result => {
        console.log('PRODUTO REMOVIDO DO CARRINHO COM SUCESSO')
        resposta({ message: 'PRODUTO REMOVIDO DO CARRINHO COM SUCESSO!' })
    }).catch(erro => {
        console.log('PRODUTO NÃO REMOVIDO')
        resposta({ erro: 'Erro ao remover o PRODUTO!' })
    });
})


inserirRota('/buscar_produto_carrinho', function(dados, resposta) {
    database(`SELECT CARRINHO.ID, CARRINHO.ID_USUARIO, CARRINHO.ID_PRODUTO, PRODUTO.NOME, PRODUTO.IMG, PRODUTO.PRECO, PRODUTO.DESCRICAO FROM CARRINHO 
    LEFT JOIN PRODUTO
    ON CARRINHO.ID_PRODUTO == PRODUTO.ID
    WHERE ID_USUARIO == "${dados.idPessoa}"`).then(result => {
        console.log('CARRINHO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('CARRINHO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o carrinho!' })
    });
});

inserirRota('/buscar_produto_carrinhos', function(dados, resposta) {
    database(`SELECT * FROM CARRINHO`).then(result => {
        console.log('CARRINHO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('CARRINHO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o carrinho!' })
    });
});

inserirRota('/buscar_total_carrinho', function(dados, resposta) {
    database(`SELECT SUM(PRODUTO.PRECO) AS PRECOTOTAL FROM CARRINHO 
    INNER JOIN PRODUTO
    ON CARRINHO.ID_PRODUTO == PRODUTO.ID
    WHERE ID_USUARIO == "${dados.idPessoa}"`).then(result => {
        console.log('CARRINHO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('CARRINHO NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o carrinho!' })
    });
});


inserirRota('/adicionar_compra', function name(dados, resposta) {

    database(`INSERT INTO COMPRA(ID_PRODUTO, ID_USUARIO, cep) VALUES ("${dados.idProduto}", "${dados.idPessoa}", "${dados.cep}")`)
        .then(result => {
            console.log('PRODUTO COMPRADO COM SUCESSO')
            resposta({ message: 'PRODUTO COMPRADO COM SUCESSO!' })
        }).catch(erro => {
            console.log('PRODUTO NÃO COMPRADO')
            resposta({ erro: 'Erro ao COMPRAR produto!' })
        });
})

inserirRota('/buscar_compra', function(dados, resposta) {
    database(`SELECT PRODUTO.ID, PRODUTO.NOME, PRODUTO.PRECO, PRODUTO.IMG, COMPRA.cep FROM COMPRA
    INNER JOIN PRODUTO
    ON COMPRA.ID_PRODUTO = PRODUTO.ID
    INNER JOIN USER
    ON COMPRA.ID_USUARIO = USER.ID
    where USER.ID  == "${dados.idPessoa}";`).then(result => {
        console.log('COMPRA BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('COMPRA NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o compra!' })
    });
});


inserirRota('/editar_produto_nome', function name(dados, resposta) {

    database(`UPDATE PRODUTO SET NOME = "${dados.nomeProduto}" WHERE ID = "${dados.ID}"`)
        .then(result => {
            console.log('PRODUTO COMPRADO COM SUCESSO')
            resposta({ message: 'PRODUTO COMPRADO COM SUCESSO!' })
        }).catch(erro => {
            console.log('PRODUTO NÃO COMPRADO')
            resposta({ erro: 'Erro ao COMPRAR produto!' })
        });
})

inserirRota('/editar_produto_descricao', function name(dados, resposta) {

    database(`UPDATE PRODUTO SET DESCRICAO = "${dados.descricaoProduto}" WHERE ID = "${dados.ID}"`)
        .then(result => {
            console.log('PRODUTO COMPRADO COM SUCESSO')
            resposta({ message: 'PRODUTO COMPRADO COM SUCESSO!' })
        }).catch(erro => {
            console.log('PRODUTO NÃO COMPRADO')
            resposta({ erro: 'Erro ao COMPRAR produto!' })
        });
})

inserirRota('/editar_produto_preco', function name(dados, resposta) {

    database(`UPDATE PRODUTO SET PRECO = "${dados.precoProduto}" WHERE ID = "${dados.ID}"`)
        .then(result => {
            console.log('PRODUTO COMPRADO COM SUCESSO')
            resposta({ message: 'PRODUTO COMPRADO COM SUCESSO!' })
        }).catch(erro => {
            console.log('PRODUTO NÃO COMPRADO')
            resposta({ erro: 'Erro ao COMPRAR produto!' })
        });
})