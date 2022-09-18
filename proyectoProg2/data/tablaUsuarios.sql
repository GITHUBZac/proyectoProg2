create schema proyectoProg;
use proyectoProg;

create table usuarios(
id int unsigned primary key auto_increment,
mail varchar(500) not null unique,
nombre varchar(500) not null,
foto varchar(500) not null,
contrasenia varchar(500) not null,
fecha date not null,
dni int not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
);
create table posteos(
id int unsigned primary key auto_increment,
foto varchar(500) not null,
descripcion varchar(500) not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
fkUserId int unsigned,
foreign key (fkUserId) references usuarios (id)
);
create table comentarios(
id int unsigned primary key auto_increment,
descripcion varchar(500) not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
fkUserId int unsigned,
foreign key (fkUserId) references usuarios (id),
fkUserIdPost int unsigned,
foreign key (fkUserIdPost) references posteos (id)
);
/* CREAR 5 REGISTROS DE USUARIOS*/
INSERT INTO usuarios VALUES (DEFAULT, 'liomessi@gmail.com', 'Lionel Messi', 'https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg', 'MESSI', '1987-6-24', '10193007', DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'lautamartinez@gmail.com', 'Lautaro Martinez', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU', 'toro', '1997-8-22', '10072002', DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'fideodima@gmail.com','Angel Di Maria','https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg', 'fideo.corazon', '1988-2-14', '12345678', DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'rodridepa@gmail.com', 'Rodrigo De Paul', 'https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg', 'TripleT', '1994-5-24', '87654321', DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'cutiro@gmail.com', 'Cristian Romero', 'https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg', 'Cutineta1', '1998-4-27', '45678900', DEFAULT, DEFAULT);


/* CREAR 10 REGISTROS DE POST                   					Aqui va el id del un usuario existente  | |*/
INSERT INTO posteos VALUES (DEFAULT, '/https://s.yimg.com/ny/api/res/1.2/HznAPEj0pALjSDoJvIZbbA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/bOfEcq9vz.qsO.EPs5jZpQ--~B/aD03OTA7dz03OTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/iprofesional_650/d136ca4f47faeb3c2a21f5e1eac21628', 'Un permitido con luchito', DEFAULT, DEFAULT,  1);
INSERT INTO posteos VALUES (DEFAULT, 'https://i.pinimg.com/564x/08/4a/31/084a31e43f4ff868084619388e0970b0.jpg', 'Una en Paris', DEFAULT, DEFAULT,  1);
INSERT INTO posteos VALUES (DEFAULT, 'https://www.deporfama.com/asset/thumbnail,992,558,center,center//media/deporfama/images/2021/02/02/2021020208371848465.jpg', 'Toco con la jefa', DEFAULT, DEFAULT,  2);
INSERT INTO posteos VALUES (DEFAULT, 'https://static.eldiario.es/clip/625b3896-1b85-4a89-9b93-d9e279534d02_16-9-discover-aspect-ratio_default_0.jpg', 'Con la mas linda', DEFAULT, DEFAULT,  2);
INSERT INTO posteos VALUES (DEFAULT, 'https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/06/06/16545234672806.jpg', 'Te lo dedico a vos mi amor', DEFAULT, DEFAULT,  3);
INSERT INTO posteos VALUES (DEFAULT, 'https://tntsports.com.ar/__export/1650121047459/sites/tntsports/img/2022/04/16/dimariaok.png_2144282214.png', 'Siempre recordando de donde sali, vamo arriba a toda la gente canalla', DEFAULT, DEFAULT,  3);
INSERT INTO posteos VALUES (DEFAULT, 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VT4N7DR7MVFP3NCQK4LWJENJAU.jpg', 'Dia de playa con la reina', DEFAULT, DEFAULT,  4);
INSERT INTO posteos VALUES (DEFAULT, 'https://tn.com.ar/resizer/djRoaghiCkemAXkJ9UiM0ZQ4rrs=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/AOJGZUL465BAHEZZGDQZ2UU4QE.jpg', 'Siempre juntos', DEFAULT, DEFAULT,  4);
INSERT INTO posteos VALUES (DEFAULT, 'https://www.lavoz.com.ar/resizer/5o8MhazQOUKj3oZmMMROhvflrCg=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2W726LTDDZB2HG53XB6LOIJO5Y.jpg', 'Cumpliendo objetivos, muy agradecido con este plantel', DEFAULT, DEFAULT,  5);
INSERT INTO posteos VALUES (DEFAULT, 'https://tn.com.ar/resizer/pY2iY2VUif5dw2gSBQHVSKZwILQ=/arc-anglerfish-arc2-prod-artear/public/DCRNTR7E3PNCTHJU7N4AL275M4.jpg', 'Demostrando quien manda, que lindo ser argentino', DEFAULT, DEFAULT,  5);



/* CREAR 10 REGISTROS DE COMENTARIOS                   			ID usuario existente  | | ID post existente  | |*/
INSERT INTO comentarios VALUES (DEFAULT, 'Muy buena foto tomaste', DEFAULT, DEFAULT,   1, 					  1);


