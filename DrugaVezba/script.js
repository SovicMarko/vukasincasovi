var sadrzaj, igrac, tabla, krajIgre = null;

function novaIgra() {
    sadrzaj = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    igrac = "X";
    tabla = document.getElementById("tabla");
    krajIgre = false;
    let e = document.getElementById("pobednik");
    e.innerHTML = "";
    postaviTablu();
    ispisIgraca();
}

function ispisIgraca() {
    let e = document.getElementById("napotezu");
    e.innerHTML = igrac;
}

function postaviTablu() {
    tabla.innerHTML = "";
    for (let i = 0; i < sadrzaj.length; i++) {
        for (let j = 0; j < sadrzaj[i].length; j++) {
            console.log(sadrzaj[i][j]);
            tabla.innerHTML += `
                <div class='polje' onclick='potez(${i},${j})'>
                    ${sadrzaj[i][j]}
                </div>`
        }
    }
}

function provera() {
         if (sadrzaj[0][0] != "" && sadrzaj[0][0] == sadrzaj[0][1] && sadrzaj[0][0] == sadrzaj[0][2]) return true
    else if (sadrzaj[1][0] != "" && sadrzaj[1][0] == sadrzaj[1][1] && sadrzaj[1][0] == sadrzaj[1][2]) return true
    else if (sadrzaj[2][0] != "" && sadrzaj[2][0] == sadrzaj[2][1] && sadrzaj[2][0] == sadrzaj[2][2]) return true

    else if (sadrzaj[0][0] != "" && sadrzaj[0][0] == sadrzaj[1][0] && sadrzaj[0][0] == sadrzaj[2][0]) return true
    else if (sadrzaj[0][1] != "" && sadrzaj[0][1] == sadrzaj[1][1] && sadrzaj[0][1] == sadrzaj[2][1]) return true
    else if (sadrzaj[0][2] != "" && sadrzaj[0][2] == sadrzaj[1][2] && sadrzaj[0][2] == sadrzaj[2][2]) return true

    else if (sadrzaj[0][0] != "" && sadrzaj[0][0] == sadrzaj[1][1] && sadrzaj[0][0] == sadrzaj[2][2]) return true
    else if (sadrzaj[0][2] != "" && sadrzaj[0][2] == sadrzaj[1][1] && sadrzaj[0][2] == sadrzaj[2][0]) return true
    
    return false;
}

function promenaIgraca() {
    if (igrac == "X") igrac = "O";
    else igrac = "X";
}

function ispisPobednika() {
    let e = document.getElementById("pobednik");
    e.innerHTML = `Pobednik je igrac ${igrac} 
        <button onclick="novaIgra()">Igraj ponovo</button>`;
}

function potez(i,j) {
    if (!krajIgre) {
        if (sadrzaj[i][j] == "") {
            sadrzaj[i][j] = igrac;
            postaviTablu();
            if (provera()) {
                ispisPobednika();
                krajIgre = true;
            }
            promenaIgraca();
            ispisIgraca();
        }
    }
}

novaIgra();
