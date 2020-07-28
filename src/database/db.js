// Importar a dependência do SQLite 3
const SQLite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operações no banco de dados
const db = new SQLite3.Database("./src/database/database.db") 

module.exports = db //Exportando o arquivo db para outras pastas
// Criando um objeto para a variável db

// Utilizar o objeto de banco de dados, para as operações

//db.serialize(() => {
    //Criar uma tabela com comandos SQL
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES ( ?, ?, ?, ?, ?, ?, ? );
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    //     "Papersider", 
    //     "Guilherme Gemballa, Jardim América", 
    //     "N° 264",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this) //this = referencia ao método run
    // }

    // db.run(query, values, afterInsertData) 
    //Se colocar os parenteses na função, ela executará imediatamente. Já se estiver sem eles, ele executará em outro momento.

    //Consultar os dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registros: ")
    //     console.log(rows)
    // })

    //Deletar dados na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [10], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Deletado")
    // })
//}) //Roda uma sequência de dados