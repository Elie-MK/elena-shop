export interface DummyDB {
    type:string,
    datas:productItem[]
}

export interface productItem {
    id: number;
    title: string;
    price: number;
    img: string[];
}


export const datasProducts:DummyDB[] = [
    {
        type : "homme",
        datas: [
            {
                id:1, 
                title:"Bermuda denim baggy cargo", 
                price:160,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/3319/352/426//14/3319352426_2_4_3.jpg?t=1717066105517", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/3319/352/426//14/3319352426_2_13_3.jpg?t=1717066095296"
                ]
            }, 
            {
                id:2, 
                title:"Jeans loose",
                price:130,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/5395/352/428//13/087936bc8e6a92be887e350fc4421d22-5395352428_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/5395/352/428//13/b83aa86394f84c267ff511eae6083710-5395352428_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:3, 
                title:"Chemise manches longues boxy fit coton", 
                price:200,
                img:[
                  "https://static.bershka.net/4/photos2/2024/V/0/2/p/1424/557/607//14/1424557607_1_1_3.jpg?t=1715696790910", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/1424/557/607//14/1424557607_2_4_3.jpg?t=1715696817735"
                ]
            }, 
            {
                id:4, 
                title:"T-shirt manches courtes cropped molleton", 
                price:90,
                img:[
                  "https://static.bershka.net/4/photos2/2024/V/0/2/p/2881/732/802/27ea1d17c0cec6f42fce2cdf06bde02e-2881732802_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/2881/732/802/9f0d17ee4baa2202ef06f9305193a76d-2881732802_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:5, 
                title:"T-shirt manches courtes molleton interlock effet délavé bord-côte", 
                price:100,
                img:[
                  "https://static.bershka.net/4/photos2/2024/V/0/2/p/2864/732/800/94b4b7a4f588e34598829fb1c7d267b5-2864732800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/2864/732/800/11a677ad9cb5c9825b127395dd680dd4-2864732800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }
        ]

    }, 
    {
        type : "femme",
        datas: [
            {
                id:1, 
                title:"Robe midi découpée", 
                price:140,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/5693/645/800//13/5693645800_2_24_3.jpg?t=1716988688166", 
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/5693/645/800//13/5693645800_2_4_3.jpg?t=1716548623030"
                ]
            }, 
            {
                id:2, 
                title:"Mini-robe bretelles encolure drapée", 
                price:100,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/5759/187/800//13/5759187800_2_4_3.jpg?t=1716460930789", 
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/5759/187/800//13/e8dbbe9eb3b1fb4f714ea750f104b07e-5759187800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:3, 
                title:"Robe courte imprimée", 
                price:100,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/5857/694/100//13/0d29736bf52a3d464a294bd42e3c39e2-5857694100_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/5857/694/100//13/5857694100_2_4_3.jpg?t=1715780994792"
                ]
            }, 
            {
                id:4, 
                title:"Robe midi encolure américaine", 
                price:100,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/0804/187/146/6e3cfebb69655b979ff2c93cce27311c-0804187146_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/0804/187/146/4a8e44788c9d6852e0da7dc2dac5a963-0804187146_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:5, 
                title:"Pantalon straight lin mélangé taille élastique", 
                price:120,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/0134/782/752/db67fa14d6f72a9b9b4e07b2869c606a-0134782752_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/0134/782/752/fb2f211bbc6f40ecc0735f4ebf634249-0134782752_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
           
        ]

    }, 
    {
        type : "accessoires",
        datas: [
            {
                id:1, 
                title:"Casquette basique broderie universitaire", 
                price:60,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4682/702/403/96f301d20955cff7c3e3c2942fa8d1f5-4682702403_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4682/702/403/c05696a99dc21bb1364c3e06b67153a5-4682702403_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:2, 
                title:"Sac à dos imprimé Junji Ito Collection", 
                price:160,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4752/162/800/a721cad2a663ff371f75ca5d350b3cf7-4752162800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4752/162/800/5e0b35c43068a3767ba3200b272eb741-4752162800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:3, 
                title:"Sac bowling effet usé lanières", 
                price:160,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/8987/184/800/dc65312b68d86c4dcf4bab9f59243c0b-8987184800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/I/0/1/p/8987/184/800/bc4039e7e1f3972b5ca7a7d463c96402-8987184800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:4, 
                title:"Brume corporelle White chocolat bloom 250 ml", 
                price:50,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/4608/531/972/8160c25c63c2dff5397d2cbff5bf2efb-4608531972_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/1/p/4608/531/972/758fd41c15cf98d18e44e52f444297b0-4608531972_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:5, 
                title:"Sac bandoulière multipoches", 
                price:160,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4749/406/700/c66204410e7e310d8fcbe0ec287b000f-4749406700_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/0/2/p/4749/406/700/d9894afd2f469b47d9361980225ce8f7-4749406700_2_2_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
           
        ]

    }, 
    {
        type : "chaussures",
        datas: [
            {
                id:1, 
                title:"Baskets volume type skate homme", 
                price:199,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/1/2/p/2462/360/131//01/2462360131_1_1_3.jpg?t=1707903515026", 
                    "https://static.bershka.net/4/photos2/2024/I/1/2/p/2462/360/131//01/2462360131_2_3_3.jpg?t=1707903532386"
                ]
            }, 
            {
                id:2, 
                title:"Sneakers volume denim détails effilochés homme", 
                price:199,
                img:[
                    "https://static.bershka.net/4/photos2/2024/V/1/2/p/2472/260/040/085784ecd3387b840bd6c8f3cdb250f5-2472260040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/V/1/2/p/2472/260/040/30963532566739d08da1ee4b1a16c2cb-2472260040_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:3, 
                title:"Mocassins patte homme", 
                price:179,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/1/2/p/2616/360/040/d629c54f66f4d0a4e67e96d53cbdc91a-2616360040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/I/1/2/p/2616/360/040/55d7921f00af65a8b21722e726412b8c-2616360040_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            {
                id:4, 
                title:"Sandales type mules talon kitten heel", 
                price:99,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/1/1/p/1712/360/040//01/1712360040_1_1_3.jpg?t=1705053383628", 
                    "https://static.bershka.net/4/photos2/2024/I/1/1/p/1712/360/040//01/1712360040_2_3_3.jpg?t=1705053355974"
                ]
            }, 
            {
                id:5, 
                title:"Sandales plates CUIR boucles imprimé animal", 
                price:199,
                img:[
                    "https://static.bershka.net/4/photos2/2024/I/1/1/p/1842/460/195//01/3452a09386b4b45c6a7db8a12c6fe5d2-1842460195_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium", 
                    "https://static.bershka.net/4/photos2/2024/I/1/1/p/1842/460/195//01/a77afcab90e486bb5efb39f2db8ac491-1842460195_2_2_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
                ]
            }, 
            
        ]

    }, 

]