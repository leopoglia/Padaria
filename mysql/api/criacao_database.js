database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null,
    NICKNAME varchar(30) UNIQUE not null,
    PASSWORD varchar(30) not null,
    IMG LONGTEXT(4294967295)
    )`).then(result => {
    console.log('TABELA USER CRIADA =)')
}).catch(erro => {
    console.log('TABELA USER NÃO CRIADA =(')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) UNIQUE not null,
    IMG LONGTEXT(4294967295),
    PRECO int not null,
    DESCRICAO varchar(300)
    )`).then(result => {
    console.log('TABELA PRODUTO CRIADA')
}).catch(erro => {
    console.log('TABELA PRODUTO NÃO CRIADA')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    ID_PRODUTO int,
    ID_USUARIO int,
    FOREIGN KEY(ID_PRODUTO) REFERENCES PRODUTO(ID),
    FOREIGN KEY(ID_USUARIO) REFERENCES USER(ID) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA CARRINHO CRIADA =)')
}).catch(erro => {
    console.log('TABELA CARRINHO NÃO CRIADA =(')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS COMPRA (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_PRODUTO int,
    ID_USUARIO int,
    cep int,
    FOREIGN KEY(ID_PRODUTO) REFERENCES PRODUTO(ID),
    FOREIGN KEY(ID_USUARIO) REFERENCES USER(ID) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA COMPRA CRIADA =)')
}).catch(erro => {
    console.log('TABELA COMPRA NÃO CRIADA =(')
    console.log(erro)
});


database(`CREATE TABLE IF NOT EXISTS MOEDA (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(200) not null,
    VALORUSD double not null,
    ID_USUARIO int UNIQUE,
    FOREIGN KEY(ID_USUARIO) REFERENCES USER(ID) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA MOEDA CRIADA =)')
}).catch(erro => {
    console.log('TABELA MOEDA NÃO CRIADA =(')
    console.log(erro)
});


database(`CREATE TABLE IF NOT EXISTS COMENTARIOS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    COMENTARIO VARCHAR(500),
    ID_USUARIO int,
    ID_PRODUTO int,
    FOREIGN KEY(ID_PRODUTO) REFERENCES PRODUTO(ID),
    FOREIGN KEY(ID_USUARIO) REFERENCES USER(ID) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA COMENTARIO CRIADA =)')
}).catch(erro => {
    console.log('TABELA COMENTARIO NÃO CRIADA =(')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS ADMIN (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_USUARIO int,
    FOREIGN KEY(ID_USUARIO) REFERENCES USER(ID) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA ADMIN CRIADA =)')
}).catch(erro => {
    console.log('TABELA ADMIN NÃO CRIADA =(')
    console.log(erro)
});
