const data = {
    usuarios: [
        {
            id:1,
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
            id:2,
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
            id:3,
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
            id: 4,
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
            id:5,
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
            id: 1,
            nombre: "Lionel Messi",
            foto: 'https://via.placeholder.com/300x350"',
            texto: 'Foto 1',
            post: 'https://s.yimg.com/ny/api/res/1.2/HznAPEj0pALjSDoJvIZbbA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/bOfEcq9vz.qsO.EPs5jZpQ--~B/aD03OTA7dz03OTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/iprofesional_650/d136ca4f47faeb3c2a21f5e1eac21628'
        },

        {
            id: 1,
            nombre: "Lionel Messi",
            foto: 'https://via.placeholder.com/400x450"',
            texto: 'Foto 2',
            post: 'https://i.pinimg.com/564x/08/4a/31/084a31e43f4ff868084619388e0970b0.jpg'
        },

        {
            id: 2,
            nombre: "Lautaro Martinez",
            foto: 'https://via.placeholder.com/500x550"',
            texto: 'Foto 3',
            post: 'https://www.deporfama.com/asset/thumbnail,992,558,center,center//media/deporfama/images/2021/02/02/2021020208371848465.jpg'

        },

        {
            id: 2,
            nombre: "Lautaro Martinez",
            foto: 'https://via.placeholder.com/600x650"',
            texto: 'Foto 4',
            post: 'https://static.eldiario.es/clip/625b3896-1b85-4a89-9b93-d9e279534d02_16-9-discover-aspect-ratio_default_0.jpg'

        },
        {
            id : 3,
            nombre: "Angel Di Maria",
            foto: 'https://via.placeholder.com/300x350"',
            texto: 'Foto 5',
            post: 'https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/06/06/16545234672806.jpg'

        },

        {
            id: 3,
            nombre: "Angel Di Maria",
            foto: 'https://via.placeholder.com/400x450"',
            texto: 'Foto 6',
            post: 'https://tntsports.com.ar/__export/1650121047459/sites/tntsports/img/2022/04/16/dimariaok.png_2144282214.png'
        },

        {
            id: 4,
            nombre: "Rodrigo De Paul",
            foto: 'https://via.placeholder.com/500x550"',
            texto: 'Foto 7',
            post:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VT4N7DR7MVFP3NCQK4LWJENJAU.jpg'
        },

        {
            id: 4,
            nombre:"Rodrigo De Paul",
            foto: 'https://via.placeholder.com/600x650"',
            texto: 'Foto 8',
            post:'https://tn.com.ar/resizer/djRoaghiCkemAXkJ9UiM0ZQ4rrs=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/AOJGZUL465BAHEZZGDQZ2UU4QE.jpg'

        },
        {
            id: 5,
            nombre: "Cristian Romero",
            foto: 'https://via.placeholder.com/500x550"',
            texto: 'Foto 9',
            post:'https://www.lavoz.com.ar/resizer/5o8MhazQOUKj3oZmMMROhvflrCg=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2W726LTDDZB2HG53XB6LOIJO5Y.jpg'
        },

        {
            id: 5,
            nombre: "Cristian Romero",
            foto: 'https://via.placeholder.com/600x650"',
            texto: 'Foto 10',
            post:'https://tn.com.ar/resizer/pY2iY2VUif5dw2gSBQHVSKZwILQ=/arc-anglerfish-arc2-prod-artear/public/DCRNTR7E3PNCTHJU7N4AL275M4.jpg'
        }



    ],


    comentarios: [
        {
            idPosteo: 2,
            id: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Tremenda foto FIDE',
        },
        {
            idPosteo: 3,
            id: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Tremenda foto CUTI',
        },
        {
            idPosteo: 4,
            id: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Tremenda foto RODRI',
        },
        {
            idPosteo: 4,
            id: 1,
            nombre: 'Lionel Messi',
            foto: "https://estaticos-cdn.elperiodico.com/clip/69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg",
            comentario: 'Tremenda foto TORO',
        },
        {
            idPosteo: 1,
            id: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Vamos Pulga!!',
        },
        {
            idPosteo: 3,
            id: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Vamos Fideo!! Tremendo Gol!',
        },
        {
            idPosteo: 4,
            id: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'RODRRRIIIII!!',
        },
        {
            idPosteo: 5,
            id: 2,
            nombre: 'Lautaro Martinez',
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6OGPEfKYW-YSjVsc0SUuFAZ1FUgDlT2ywg&usqp=CAU",
            comentario: 'Marcha la CUTINETA!!',
        },
        {
            idPosteo: 1,
            id: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'Pulga de mi vida!!!!',
        },
        {
            idPosteo: 2,
            id: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'GOLEADOR!',
        },
        {
            idPosteo: 2,
            id: 3,
            nombre: 'Angel Di Maria',
            foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/30115405/Argentina-vs-Francia-Mundial-Rusia-2018-86.jpg",
            comentario: 'GOLEADOR!',
        },








    ]

}

module.exports = data