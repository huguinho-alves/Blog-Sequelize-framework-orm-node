

	// iniciando a conexão com o banco de dados
	var Sequelize = require("sequelize");
	var sequelize = new Sequelize("database", "username", "password", {
		"host" : "localhost",
		dialect : "mysql"
	});
	
	// definindo um modelo
	var Client = sequelize.define("CLIENT", {
		
		"id" : {
			type : Sequelize.INTEGER,
			primaryKey : true,
			autoIncrement : true
		},
		"ds_client" : Sequelize.STRING,
		"ds_mail" : Sequelize.STRING,
		"dt_birthday" : Sequelize.DATE
	});

	// sincronizando o modelo com o banco
	Client.sync();
	

	// criando um novo registro
	var newClient = {
		"ds_client" : "Hugo Oliveira Alves",
		"ds_mail" : "o.hugo.santos@gmail.com"
	}
	
	Client.create( newClient );
	
	// atualizando um registro
	var updateClient = {
		"id" : 2,
		"ds_client" : "Outro registro"
	}
	
	Client.update( updateClient, { where : { "id" : 2 } } )
	
	// removendo um registro
	Client.destroy( { where : { "id" : 2} } );
	
	// consultando todos os registros do banco
	Client.findAll().then(list => {
		console.log( list );
	});