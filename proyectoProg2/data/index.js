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
            seguidores: '2000000 seguidores',
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
            post: 'https://s.yimg.com/ny/api/res/1.2/HznAPEj0pALjSDoJvIZbbA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/bOfEcq9vz.qsO.EPs5jZpQ--~B/aD03OTA7dz03OTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/iprofesional_650/d136ca4f47faeb3c2a21f5e1eac21628'
        },

        {
            id_usuario: 1,
            idPosteo: 2,
            nombre: "Lionel Messi",
            foto: 'https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg',
            texto: 'Foto 2',
            post: 'https://i.pinimg.com/564x/08/4a/31/084a31e43f4ff868084619388e0970b0.jpg'
        },

        {
            id_usuario: 2,
            idPosteo: 3,
            nombre: "Lautaro Martinez",
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU',
            texto: 'Foto 3',
            post: 'https://www.deporfama.com/asset/thumbnail,992,558,center,center//media/deporfama/images/2021/02/02/2021020208371848465.jpg'

        },

        {
            id_usuario: 2,
            idPosteo: 4,
            nombre: "Lautaro Martinez",
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU',
            texto: 'Foto 4',
            post: 'https://static.eldiario.es/clip/625b3896-1b85-4a89-9b93-d9e279534d02_16-9-discover-aspect-ratio_default_0.jpg'

        },
        {
            id_usuario:3,
            idPosteo : 5,
            nombre: "Angel Di Maria",
            foto: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg',
            texto: 'Foto 5',
            post: 'https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/06/06/16545234672806.jpg'

        },

        {
            id_usuario:3,
            idPosteo: 6,
            nombre: "Angel Di Maria",
            foto: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg',
            texto: 'Foto 6',
            post: 'https://tntsports.com.ar/__export/1650121047459/sites/tntsports/img/2022/04/16/dimariaok.png_2144282214.png'
        },

        {
            id_usuario: 4,
            idPosteo: 7,
            nombre: "Rodrigo De Paul",
            foto: 'https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg',
            texto: 'Foto 7',
            post:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VT4N7DR7MVFP3NCQK4LWJENJAU.jpg'
        },

        {
            id_usuario: 4,
            idPosteo: 8,
            nombre:"Rodrigo De Paul",
            foto: 'https://images.ole.com.ar/2021/11/16/yKKpjQujC_2000x1500__1.jpg',
            texto: 'Foto 8',
            post:'https://tn.com.ar/resizer/djRoaghiCkemAXkJ9UiM0ZQ4rrs=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/AOJGZUL465BAHEZZGDQZ2UU4QE.jpg'

        },
        {
            id_usuario: 5,
            idPosteo: 9,
            nombre: "Cristian Romero",
            foto: 'https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg',
            texto: 'Foto 9',
            post:'https://www.lavoz.com.ar/resizer/5o8MhazQOUKj3oZmMMROhvflrCg=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2W726LTDDZB2HG53XB6LOIJO5Y.jpg'
        },

        {
            id_usuario: 5,
            idPosteo: 10,
            nombre: "Cristian Romero",
            foto: 'https://images.ole.com.ar/2021/07/12/3tMEaKvze_340x340__1.jpg',
            texto: 'Foto 10',
            post:'https://tn.com.ar/resizer/pY2iY2VUif5dw2gSBQHVSKZwILQ=/arc-anglerfish-arc2-prod-artear/public/DCRNTR7E3PNCTHJU7N4AL275M4.jpg'
        }



    ],


    comentarios: [
        {
            idPosteo: 3,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Terrible torito',
        },
        {
            idPosteo: 10,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Mi comandante',
        },
        {
            idPosteo: 4,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Que fachero estas angelito',
        },
        {
            idPosteo: 7,
            id_usuario: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Que pollera Rodri',
        },
        {
            idPosteo: 1,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Vamos Pulgita querido!!',
        },
        {
            idPosteo: 5,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Que fresco se te ve fide!',
        },
        {
            idPosteo: 7,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Larga la novia un segundo',
        },
        {
            idPosteo: 9,
            id_usuario: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Marcha la CUTINETA!!',
        },
        {
            idPosteo: 1,
            id_usuario: 2,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Te seguimos a vos mi capitan',
        },
        {
            idPosteo: 4,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'El rey de Italia demostrando siempre',
        },
        {
            idPosteo: 8,
            id_usuario: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Que linda la parejita',
        },
        {
            idPosteo: 4,
            id_usuario: 4,
            nombre: 'Rodrigo De Paul',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Ese es mi goleadorrr!!',
        },
        {
            idPosteo: 1,
            id_usuario: 4,
            nombre: 'Rodrigo De Paul',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Que rico una burga leito',
        },
        {
            idPosteo: 9,
            id_usuario: 4,
            nombre: 'Rodrigo De Paul',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Pero claro comisario!!',
        },
        {
            idPosteo: 8,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Solta un poquito a la jermu',
        },
        {
            idPosteo: 5,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Picamela Fideo',
        },
        {
            idPosteo: 1,
            id_usuario: 5,
            nombre: 'Cristian Romero',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Dibuje leo!!',
        },








    ],


    /*  metodos de busqueda por ID Posteo  */

    postsByID: function (idPosteo) {
        let posteoEncontrado = null;

        for (let i = 0; i < this.posteos.length; i++) {
            if (this.posteos[i].idPosteo == idPosteo) {
                posteoEncontrado = this.posteos[i];
            }
            
            return posteoEncontrado
        }
        

    },

    comentarioByIdPosteo : function (idPosteo) {
        let comentariosEncontrado = [];

        for (let i = 0; i < this.comentarios.length; i++) {
            if (this.comentarios[i].idPosteo == idPosteo) {
                comentariosEncontrado.push(this.comentarios[i]);
            }
            
            return comentariosEncontrado
        }
        

    },

}

module.exports = data