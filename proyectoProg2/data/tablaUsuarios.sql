create schema proyectoRedSocial;

use proyectoRedSocial;

create table usuarios(
id int unsigned primary key not null auto_increment,
mail varchar(500) not null unique,
nombre varchar(500) not null unique,
foto varchar(500) not null,
contrasenia varchar(500) not null,
fecha date not null,
dni int not null unique,
createdat timestamp default current_timestamp,
updatedat timestamp default current_timestamp on update current_timestamp
);

DROP TABLE IF EXISTS `comentarios` ;
FLUSH TABLES `comentarios` ;
create table comentarios(
id int unsigned primary key not null auto_increment,
comentario varchar(500) not null ,
posteo_id int not null ,
usuarios_id int not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);
