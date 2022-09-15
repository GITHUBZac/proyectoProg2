const data = {
    usuarios: [
        {
            id:1,
            nombre: 'Lionel Messi',
            foto: '"https://www.google.com/imgres?imgurl=https%3A%2F%2Festaticos-cdn.elperiodico.com%2Fclip%2F69964ce0-68a6-4758-bef5-6503eff109e0_alta-libre-aspect-ratio_default_0.jpg&imgrefurl=https%3A%2F%2Fwww.elperiodico.com%2Fes%2Fdeportes%2F20190306%2Fmessi-vuelve-seleccion-argentina-7275815&tbnid=oVsQ0J1fz6jifM&vet=12ahUKEwjVzfDFzpX6AhUOnpUCHV5uB1sQMygKegUIARDrAQ..i&docid=ucJxsgSfy3MGnM&w=1200&h=674&q=lionel%20messi%20seleccion%20argentina&ved=2ahUKEwjVzfDFzpX6AhUOnpUCHV5uB1sQMygKegUIARDrAQ/250x250"',
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
            foto: '"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.a24.com%2Fp%2F00fbb826805afe81d4a9a7567d553335%2Fadjuntos%2F296%2Fimagenes%2F008%2F760%2F0008760331%2F1200x675%2Fsmart%2Flautaro_1200jpg.jpg&imgrefurl=https%3A%2F%2Fwww.a24.com%2Fovacion%2Flos-brillantes-numeros-lautaro-martinez-la-seleccion-n994159&tbnid=lj53gFf4dyDAZM&vet=12ahUKEwjniteiz5X6AhUitpUCHe67DwgQMygDegUIARDJAQ..i&docid=UwPKd8TK1aqJFM&w=1200&h=675&q=lautaro%20martinez%20seleccion&ved=2ahUKEwjniteiz5X6AhUitpUCHe67DwgQMygDegUIARDJAQ/250x250"',
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
            foto: '"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.elgrafico.com.ar%2Fmedia%2Fcache%2Fpub_news_details_large%2Fmedia%2Fi%2F64%2F82%2F6482fd42a690af0869ce3b00c4d638be82ca4995.jpeg&imgrefurl=https%3A%2F%2Fwww.elgrafico.com.ar%2Farticulo%2F1116%2F45288%2Flas-confesiones-de-angel-di-maria&tbnid=LWsUpLMx5CRv2M&vet=12ahUKEwiBndLpz5X6AhVuspUCHXmODjkQMygCegUIARC6AQ..i&docid=g7bJ3acKe4yX7M&w=1463&h=900&q=angel%20di%20maria%20seleccion%20argentina&ved=2ahUKEwiBndLpz5X6AhVuspUCHXmODjkQMygCegUIARC6AQ/250x250"',
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
            foto: '"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ole.com.ar%2F2021%2F11%2F16%2FyKKpjQujC_2000x1500__1.jpg&imgrefurl=https%3A%2F%2Fwww.ole.com.ar%2Fseleccion%2Fpaul-camiseta-seleccion-cansado_0_vUqFkym8Y.html&tbnid=Rbu7Auq3t1CiXM&vet=12ahUKEwil1O2y0JX6AhXElZUCHZCcDvwQMygDegUIARDFAQ..i&docid=NdzOBDhPwswAWM&w=2000&h=1500&q=rodrigo%20de%20paul%20seleccion%20argentina&ved=2ahUKEwil1O2y0JX6AhXElZUCHZCcDvwQMygDegUIARDFAQ/250x250"',
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
            foto: '"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ole.com.ar%2F2021%2F06%2F04%2FDqzBV61tH_340x340__1.jpg&imgrefurl=https%3A%2F%2Fwww.ole.com.ar%2Fseleccion%2Fcuti-romero-debut-argentina-premier_0_7XXthU5Ee.html&tbnid=2B96m01ZNdnbBM&vet=12ahUKEwjtrvTQ0JX6AhVBvJUCHZ65ALcQMygLegUIARC0AQ..i&docid=YV9ux1ZfHThF_M&w=340&h=340&q=cristian%20romerseleccion%20argentina&ved=2ahUKEwjtrvTQ0JX6AhVBvJUCHZ65ALcQMygLegUIARC0AQ/250x250"',
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

}

module.exports = data