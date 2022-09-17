const data = {
    usuarios: [
        {
            id_usuario:1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg" ,
            mail: 'liomessi@gmail.com',
            contrasenia: 'MESSI',
            fecha: '1987-6-24',
            dni: 10193007,
            posteos: '150 posteos',
            seguidores: '200 seguidores',
            seguidos: '1007 seguidos',
        },

        {
            id_usuario:2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            mail: 'lautamartinez@gmail.com',
            contrasenia: 'toro',
            fecha: '1997-8-22',
            dni: 10072002,
            posteos: '168 posteos',
            seguidores: '200054 seguidores',
            seguidos: '984 seguidos',
        },

        {
            id_usuario:3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            mail: 'fideodima@gmail.com',
            contrasenia: 'fideo.corazon',
            fecha: '1988-2-14',
            dni: 12345678,
            posteos: '300 posteos',
            seguidores: '20002430 seguidores',
            seguidos: '1548 seguidos',
        },

        {
            id_usuario: 4,
            nombre: 'Rodrigo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            mail: 'rodridepa@gmail.com',
            contrasenia: 'TripleT',
            fecha: '1994-5-24',
            dni: 87654321,
            posteos: '183 posteos',
            seguidores: '2503050 seguidores',
            seguidos: '3875 seguidos',
        },

        {
            id_usuario:5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            mail: 'cutiro@gmail.com',
            contrasenia: 'Cutineta1',
            fecha: '1998-4-27',
            dni: 45678900,
            posteos: '875 posteos',
            seguidores: '260130310 seguidores',
            seguidos: '15448 seguidos',
        },

    ],

    posteos: [
        {
            id_usuario:1,
            idPosteo: 1,
            nombre: "Lionel Messi",
            foto: 'https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg',
            texto: 'Foto 1',
            post: 'https://s.yimg.com/ny/api/res/1.2/HznAPEj0pALjSDoJvIZbbA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/bOfEcq9vz.qsO.EPs5jZpQ--~B/aD03OTA7dz03OTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/iprofesional_650/d136ca4f47faeb3c2a21f5e1eac21628',
            comentarios: {
                idUsuarios: 4,
                nombreUsuario: 'Rodrigo De Paul',
                texto: 'TE AMO'
            }
        },

        {
            id_usuario: 1,
            idPosteo: 2,
            nombre: "Lionel Messi",
            foto: 'https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg',
            texto: 'Foto 2',
            post: 'https://i.pinimg.com/564x/08/4a/31/084a31e43f4ff868084619388e0970b0.jpg',
            comentarios: {
                idUsuarios: 3,
                nombreUsuario: 'Angel Di Maria',
                texto: 'JAJAJA terrible dolape'
            }
        },

        {
            id_usuario: 2,
            idPosteo: 3,
            nombre: "Lautaro Martinez",
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU',
            texto: 'Foto 3',
            post: 'https://www.deporfama.com/asset/thumbnail,992,558,center,center//media/deporfama/images/2021/02/02/2021020208371848465.jpg',
            comentarios: {
                idUsuarios: 1,
                nombreUsuario: 'Lionel',
                texto: 'Buena toro'
            }

        },

        {
            id_usuario: 2,
            idPosteo: 4,
            nombre: "Lautaro Martinez",
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU',
            texto: 'Foto 4',
            post: 'https://static.eldiario.es/clip/625b3896-1b85-4a89-9b93-d9e279534d02_16-9-discover-aspect-ratio_default_0.jpg',
            comentarios: {
                idUsuarios: 5,
                nombreUsuario: 'Cuti Romero',
                texto: 'QUE ALEGRIA, CAMPEON'
            }

        },
        {
            id_usuario:3,
            idPosteo : 5,
            nombre: "Angel Di Maria",
            foto: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg',
            texto: 'Foto 5',
            post: 'https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/06/06/16545234672806.jpg',
            comentarios: {
                idUsuarios: 4,
                nombreUsuario: 'Rodrigo De PAUL',
                texto: 'El corazon de mi vida! TTT'
            }

        },

        {
            id_usuario:3,
            idPosteo: 6,
            nombre: "Angel Di Maria",
            foto: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg',
            texto: 'Foto 6',
            post: 'https://tntsports.com.ar/__export/1650121047459/sites/tntsports/img/2022/04/16/dimariaok.png_2144282214.png',
            comentarios: {
                idUsuarios: 3,
                nombreUsuario: 'Lautaro Martinez',
                texto: 'el carbonero di maria'
            }
        },

        {
            id_usuario: 4,
            idPosteo: 7,
            nombre: "Rodrigo De Paul",
            foto: 'https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg',
            texto: 'Foto 7',
            post:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VT4N7DR7MVFP3NCQK4LWJENJAU.jpg',
            comentarios: {
                idUsuarios: 1,
                nombreUsuario: 'Lionel',
                texto: 'Buena RODRI. Cuida a la piba'
            }
        },

        {
            id_usuario: 4,
            idPosteo: 8,
            nombre:"Rodrigo De Paul",
            foto: 'https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg',
            texto: 'Foto 8',
            post:'https://tn.com.ar/resizer/djRoaghiCkemAXkJ9UiM0ZQ4rrs=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/AOJGZUL465BAHEZZGDQZ2UU4QE.jpg',
            comentarios: {
                idUsuarios: 2,
                nombreUsuario: 'Lautaro Martinez',
                texto: 'La Triple T'
            }

        },
        {
            id_usuario: 5,
            idPosteo: 9,
            nombre: "Cristian Romero",
            foto: 'https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg',
            texto: 'Foto 9',
            post:'https://www.lavoz.com.ar/resizer/5o8MhazQOUKj3oZmMMROhvflrCg=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2W726LTDDZB2HG53XB6LOIJO5Y.jpg',
            comentarios: {
                idUsuarios: 3,
                nombreUsuario: 'Angel Di Maria',
                texto: 'Dale Campeon!'
            }
        },

        {
            id_usuario: 5,
            idPosteo: 10,
            nombre: "Cristian Romero",
            foto: 'https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg',
            texto: 'Foto 10',
            post:'https://tn.com.ar/resizer/pY2iY2VUif5dw2gSBQHVSKZwILQ=/arc-anglerfish-arc2-prod-artear/public/DCRNTR7E3PNCTHJU7N4AL275M4.jpg',
            comentarios: {
                idUsuarios: 4,
                nombreUsuario: 'Rodrigo De Paul',
                texto: 'DEFENDEME LA VIDA'
            }
        }



    ],


    comentarios: [
        //Fotos MESSI
        {
            idPosteo: 1,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Felicitaciones pulga querido. Que lindo verte asi',
        },
        {
            idPosteo: 1,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Terrible burga leito... aflojale que tenes que llegar bien al mundial jeje',
        },
        {
            idPosteo: 1,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'Crack!! Como te quiero!!! Dirigime la vida',
        },
        {
            idPosteo: 1,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Felicitaciones Leo. A seguir asi!',
        },

        {
            idPosteo: 2,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Juju alguien se pelo',
        },
        {
            idPosteo: 2,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'EEEE tobogan de piojoooo',
        },
        {
            idPosteo: 2,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'Que bien te queda la pelada LEOOOO',
        },
        {
            idPosteo: 2,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Buena pelada fiera',
        },


        //FOTOS LAUTARO
        {
            idPosteo: 3,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Que fachero mi goleador!',
        },
        {
            idPosteo: 3,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Sacate la pollera gobernado!',
        },
        {
            idPosteo: 3,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'JUJU como juega esteeee',
        },
        {
            idPosteo: 3,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'TORO!',
        },

        {
            idPosteo: 4,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'CAMPEONES!! Que alegria!',
        },
        {
            idPosteo: 4,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'SIIII TORITOOOO',
        },
        {
            idPosteo: 4,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'DALE CHEEE! VAMOS POR EL MUNDIAL! TTT',
        },
        {
            idPosteo: 4,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Buena torero!',
        },

        // FOTOS DI MARIA
        
        {
            idPosteo: 5,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'El corazon de mi vida!',
        },
        {
            idPosteo: 5,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'TE AMO!',
        },
        {
            idPosteo: 5,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'PICAME LA VIDA',
        },
        {
            idPosteo: 5,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Vamos fide!',
        },

        {
            idPosteo: 6,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'que recuerdo! aguante newells',
        },
        {
            idPosteo: 6,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'CARBONEEEE!',
        },
        {
            idPosteo: 6,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'JAJAJA que bien te hizo europa!',
        },
        {
            idPosteo: 6,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Que chico eras fide. Saludos!',
        },

        // FOTOS DE PAUL

        {
            idPosteo: 7,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Buena rodri! Soltala un poco a la Tini',
        },
        {
            idPosteo: 7,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'QUE JUGADOR! Deja de afanar jajaja',
        },
        {
            idPosteo: 7,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Sacate la pollera gobernado!',
        },
        {
            idPosteo: 7,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Buena rodri!',
        },

        {
            idPosteo: 8,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Basta gobernado! Concentrate en el mundial',
        },
        {
            idPosteo: 8,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Larga la POLLERA! TTT',
        },
        {
            idPosteo: 8,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'pollerudo. toma nota Scaloni!',
        },
        {
            idPosteo: 8,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg",
            comentario: 'Rodri, concentrate en el mundial por favor.',
        },

        // FOTOS CUTI ROMERO

        {
            idPosteo: 9,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'GRACIAS POR TODO CUTI!!! TE AMO',
        },
        {
            idPosteo: 9,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'MARCHO LA CUTINETAAAA',
        },
        {
            idPosteo: 9,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'VAMOS CUTIIIIII!!! GRACIAS HERMANOOOOO',
        },
        {
            idPosteo: 9,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'WOOOW! QUE CRACK SOS!!!',
        },

        {
            idPosteo: 10,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'ANIMAL! TE AMO',
        },
        {
            idPosteo: 10,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'MIRA LO QUE SOS TOOOROOOOO',
        },
        {
            idPosteo: 10,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Yo me subi a la cutineta, y ustedes?',
        },
        {
            idPosteo: 10,
            id_usuario: 4,
            nombre: 'Rodirgo De Paul',
            foto: "https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg",
            comentario: 'DEFENDEME LA VIDA, ANIMAL!',
        },




    ],


    /*  metodos de busqueda por ID Posteo  */

    postsByID: function (idPosteo) {
        let posteoEncontrado = null;

        for (let i = 0; i < this.posteos.length; i++) {
            if (this.posteos[i].idPosteo == idPosteo) {
                posteoEncontrado = this.posteos[i];
            }
            
            
        }
        return posteoEncontrado

    },

    comentarioByIdPosteo : function (idPosteo) {
        let comentariosEncontrado = [];

        for (let i = 0; i < this.comentarios.length; i++) {
            if (this.comentarios[i].idPosteo == idPosteo) {
                comentariosEncontrado.push(this.comentarios[i]);
            }
            
            
        }
        
        return comentariosEncontrado
    },

}

module.exports = data