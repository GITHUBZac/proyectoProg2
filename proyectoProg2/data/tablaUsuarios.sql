create schema proyectoprog;

use proyectoprog;

create table usuarios(
id int unsigned primary key not null auto_increment,
mail varchar(500) not null unique,
nombre varchar(500) not null unique,
img varchar(500) not null,
contrasenia varchar(500) not null,
fecha date not null,
dni int not null unique,
createdat timestamp default current_timestamp,
updatedat timestamp default current_timestamp on update current_timestamp
);

create table comentarios(
id int unsigned primary key not null auto_increment,
comentario varchar(500) not null ,
posteos_id int not null ,
usuarios_id int not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);

create table posteos(
id int unsigned primary key not null auto_increment,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);