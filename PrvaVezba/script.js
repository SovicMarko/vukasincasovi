let podaci = [ 
    {
        slika : "https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
        naslov : "Ovo je prvi video",
        tekst : "Pera Peric"
    },
    {
        slika : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
        naslov : "Drugi video",
        tekst : "Jovica Jovic"
    },
    {
        slika : "https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg",
        naslov : "TRECI",
        tekst: "Sima Simic"
    }
]

let main = document.getElementById("main");

for (let i = 0; i < podaci.length; i++) {
    let objava = podaci[i];
    main.innerHTML += `
        <div class="kartica">
            <img src="${objava.slika}" alt="">
            <h1>${objava.naslov}</h1>
            <p>Objavio: ${objava.tekst}</p>
        </div>
    `
    
}

function pretraga() {
   let unos = document.getElementById('poljePretrage');
   console.log(unos.value);
   axios.post("https://www.fdgjhfdgj.com", unos)
}

Nesto novo