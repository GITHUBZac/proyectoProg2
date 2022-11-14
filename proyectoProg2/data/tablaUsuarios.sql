create schema proyectoprog;

use proyectoprog;

create table usuarios(
id int unsigned primary key not null auto_increment,
mail varchar(500) not null,
nombre varchar(500) not null,
img varchar(500) not null,
contrasenia varchar(500) not null,
fecha date not null,
dni int not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);


create table posteos(
id int unsigned primary key not null auto_increment,
imagen varchar(100) not null,
usuario_id int unsigned not null ,
comentario varchar(500) not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (usuario_id) references usuarios(id)
);


create table comentarios(
id int unsigned primary key not null auto_increment,
comentario varchar(500) not null ,
posteo_id int unsigned not null ,
usuario_id int unsigned not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (posteo_id) references posteos(id),
foreign key (usuario_id) references usuarios(id)
);

create table seguidores(
id int unsigned primary key not null auto_increment,
seguido_id int unsigned not null ,
seguidor_id int unsigned not null ,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (seguido_id) references usuarios(id),
foreign key (seguidor_id) references usuarios(id)
);
