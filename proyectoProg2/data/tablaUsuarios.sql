create schema proyectoProg;

use proyectoRedSocial;

create table usuarios(
id int unsigned primary key not null auto_increment,
mail varchar(500) not null unique,
nombre varchar(500) not null unique,
foto varchar(500) not null,
contrasenia varchar(500) not null unique,
fecha date not null,
dni int not null,
createdat timestamp default current_timestamp,
updatedat timestamp default current_timestamp on update current_timestamp,
deletedat TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


use proyectoRedSocial;

create table posteos(
id int unsigned primary key not null auto_increment,
foto varchar(500) not null,
descripcion varchar(500) not null,
createdat timestamp default current_timestamp,
updatedat timestamp default current_timestamp on update current_timestamp,
deletedat TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

fkUserId int unsigned,
foreign key (fkUserId) references usuarios (id)
);

use proyectoRedSocial;

create table comentarios(
id int unsigned primary key not null auto_increment,
descripcion varchar(500) not null,



createdat timestamp default current_timestamp,
updatedat timestamp default current_timestamp on update current_timestamp,
deletedat TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

fkUserId int unsigned,
foreign key (fkUserId) references usuarios (id),

fkUserIdPost int unsigned,
foreign key (fkUserIdPost) references posteos (id)
);
