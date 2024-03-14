/*
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

"Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč" */

/*
const FlavourHeaven = (pocetlidi) => {
    let cena = pocetlidi * 3000
    cenaformat = cena.toLocaleString() //space as thousand separator
    return `Catering od Flavour Heaven pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const YourMama = (pocetlidi) => {
    let cena = pocetlidi * 1000
    cenaformat = cena.toLocaleString()
    return `Catering od Your Mama pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const JustFood = (pocetlidi) => {
    let cena = pocetlidi * 300
    cenaformat = cena.toLocaleString()
    return `Catering od Just Food pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const createEvent = (nazevUdalosti,pocetlidi,fceCatering) => {
    let text = document.querySelector('p')
    text.innerHTML = "Událost: " + nazevUdalosti +" s " + fceCatering(pocetlidi)
}

//createEvent("Inaugurace prezidenta","100",YourMama)

let udalost = prompt("Zadej nazev udalosti")
let lide = prompt("Zadej pocet lidi")
//let cateringfirm = prompt("Zadej jmeno cateringove firmy: JustFood / YourMama /FlavourHeaven")


setTimeout(() => {createEvent(udalost,lide, JustFood)},1000)
setTimeout(() => {createEvent(udalost,lide,YourMama)},5000)
setTimeout(() => {createEvent(udalost,lide,FlavourHeaven)},10000) */



const FlavourHeaven = (pocetlidi) => {
    let cena = pocetlidi * 3000
    cenaformat = cena.toLocaleString() //space as thousand separator
    return `Catering od Flavour Heaven pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const YourMama = (pocetlidi) => {
    let cena = pocetlidi * 1000
    cenaformat = cena.toLocaleString()
    return `Catering od Your Mama pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const JustFood = (pocetlidi) => {
    let cena = pocetlidi * 300
    cenaformat = cena.toLocaleString()
    return `Catering od Just Food pro ${pocetlidi} lidí za ${cenaformat} Kč`
}

const createEvent = (nazevUdalosti,pocetlidi,fceCatering) => {
    let text = document.querySelector('p')
    text.innerHTML = "Událost: " + nazevUdalosti +" s " + fceCatering(pocetlidi)
}


const functionsMap = {
    FlavourHeaven,
    YourMama,
    JustFood
};


let udalost = prompt("Zadej nazev udalosti")
let lide = prompt("Zadej pocet lidi")
let cateringfirm = prompt("Zadej jmeno cateringove firmy: JustFood / YourMama /FlavourHeaven")

createEvent(udalost,lide,functionsMap[cateringfirm])
//createEvent("Inaugurace prezidenta","100",YourMama)

