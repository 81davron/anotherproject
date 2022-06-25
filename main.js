let category = [
    {
        "id":1,
        "category":"classic"       
    },
    {
        "id":2,
        "category":"Smart"
    },
    {
        "id":3,
        "category":"compas"
    },
    {
        "id":4,
        "category":"Sport"
    },
    {
        "id":5,
        "category":"Quartz"
    }
]

let data = [
    {
        "id": "1",
        "name": "Luxury",
        "cost": "150",
        "count": "12",
        "category":"classic",
        "img_src":"https://img2.fonwall.ru/o/hf/background-hand-luxury-wallpaper.jpeg?route=mid&amp;h=750"   
    },
    {
        "id": "2",
        "name": "soat 2",
        "cost": "179",
        "count": "15",
        "category":"classic",
        "img_src":"https://www.xpoho-moscow.ru/images/items/foto2/1107.jpg"   
    },
    {
        "id": "3",
        "name": "soat 3",
        "cost": "189",
        "count": "25",
        "category":"classic",
        "img_src":"https://shopstraps.ru/wa-data/public/shop/products/15/03/10315/images/5020/5020.750x0.jpg"   
    },
    {
        "id": "4",
        "name": "Omega",
        "cost": "199",
        "count": "28",
        "category":"classic",
        "img_src":"https://avatars.mds.yandex.net/get-zen_doc/1626348/pub_5dcf208efdc2160328be7b17_5dcf21c34052283fcdc4a4e3/scale_1200"   
    },
    {
        "id": "5",
        "name": "Smart X9",
        "cost": "200",
        "count": "45",
        "category":"Smart",
        "img_src":"https://goodstorage.ru/image/cache/catalog/catalog/4532/image-4532-4532-0-370x370.jpg"   
    },
    {
        "id": "6",
        "name": "Galaxy watch4",
        "cost": "149",
        "count": "49",
        "category":"Smart",
        "img_src":"https://hi-stores.ru/upload/iblock/330/330e7f3fad82caeb966c1a05a0ebb62c.jpg"   
    },
    {
        "id": "7",
        "name": "Gear Fit",
        "cost": "99",
        "count": "56",
        "category":"Smart",
        "img_src":"https://snejnogorsk.sidex.ru/images_offers/383/383906/imgremeshok_dlya_samsung_gear_fit_etsr350bsegru_temnoserii_1.jpg"   
    },
    {
        "id": "8",
        "name": "Smart Watch X6",
        "cost": "209",
        "count": "5",
        "category":"Smart",
        "img_src":"https://narprime.ru/wa-data/public/shop/products/47/23/2347/images/3786/3786.970.jpg"   
    },
    {
        "id": "9",
        "name": "Apple series3",
        "cost": "149",
        "count": "11",
        "category":"Smart",
        "img_src":"https://www.iphones.ru/wp-content/uploads/2021/05/1-18.jpg"   
    },
    {
        "id": "10",
        "name": "Compass",
        "cost": "169",
        "count": "14",
        "category":"compas",
        "img_src":"https://ae04.alicdn.com/kf/HTB1v1VnLVXXXXXmXFXXq6xXFXXX9/Oulm-1349.jpg"   
    },
    {
        "id": "11",
        "name": "Compas watch4",
        "cost": "249",
        "count": "54",
        "category":"compas",
        "img_src":"https://www.nosikulon.ru/image/cache/catalog/watch/watch_military_brown-500x500.jpg"   
    },
    {
        "id": "12",
        "name": "GARMIN",
        "cost": "239",
        "count": "7",
        "category":"Sport",
        "img_src":"http://ae01.alicdn.com/kf/HTB1rxe_Xh56K1Rjt_iGq6ACxVXaa.jpg"   
    },
    {
        "id": "13",
        "name": "Sunnto",
        "cost": "349",
        "count": "96",
        "category":"Sport",
        "img_src":"https://avatars.mds.yandex.net/get-mpic/4303817/img_id2177719579183780638.jpeg/14hq"   
    },
    {
        "id": "14",
        "name": "Garmin Solar",
        "cost": "369",
        "count": "89",
        "category":"Sport",
        "img_src":"https://www.snariaga.ru/image/cache/catalog/wp-content/uploads/2020/09/5436f686ce7c6788b05261e46d9e542a-700x700.jpg"   
    },
    {
        "id": "15",
        "name": "MARQ",
        "cost": "199",
        "count": "35",
        "category":"Sport",
        "img_src":"https://tehnoteca.ru/img/1550/1549749/garmin_marq_athlete_6.jpg"   
    },
    {
        "id": "16",
        "name": "Quartz Watch",
        "cost": "185",
        "count": "2",
        "category":"Quartz",
        "img_src":"https://avatars.mds.yandex.net/get-zen_doc/163667/pub_5bfd34d2074c3900aa0ec5c3_5bfd3914bbe96600a90ccbbe/scale_1200"   
    },
    {
        "id": "17",
        "name": "LitTales",
        "cost": "145",
        "count": "14",
        "category":"Quartz",
        "img_src":"https://avatars.mds.yandex.net/get-zen_doc/2763421/pub_610913745686fb104c1ef019_613dba670358541939db3576/scale_1200"   
    },
    {
        "id": "18",
        "name": "Quartz Watch4",
        "cost": "149",
        "count": "78",
        "category":"Quartz",
        "img_src":"https://ae04.alicdn.com/kf/HTB15Zx8UlLoK1RjSZFuq6xn0XXaP.jpg"   
    }
]

    function render(){
        
    data.forEach(element =>{
        let row = document.querySelector(".row")
        let col = document.createElement("div")
        col.classList.add("col-4")
        let card = document.createElement("div")
        card.classList.add("carl")
        let h4 = document.createElement("h4")
        let p =document.createElement("p")
        let button = document.createElement("button")
        button.classList.add("butt")
        button.setAttribute("onclick", "run()")
        let img = document.createElement("img")
        img.classList.add("rasm")
        img.src = element.img_src
        h4.innerText = element.name
        p.innerText = element.cost + "$"
        button.innerText = "Sotib Olish"
        
        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(p)
        card.appendChild(button)
        col.appendChild(card)
        row.appendChild(col)
        console.log(element.name);
    })
    }
    render()

function search(val){
    let row = document.querySelector(".row")
    row.innerHTML = ""
    data.filter(item =>{
        return  item.name.includes(item.name) 
    })
}   
let index = 0
function run(){
    console.log("ishladi");
    index++
}