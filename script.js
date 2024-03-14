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

// to make sure the prompted variable is recognized as a function in the createEvent function
const functionsMap = {
    FlavourHeaven,
    YourMama,
    JustFood
};


let udalost = prompt("Zadej název události:")
let lide = prompt("Zadej počet lidí")
let cateringfirm = prompt("Zadej jméno cateringové firmy: JustFood / YourMama /FlavourHeaven")

// hasOwnProperty() method to check if the functionsMap object contains the catering name
if (!functionsMap.hasOwnProperty(cateringfirm)) {
    alert("Špatně zadané jméno cateringu.")
} else {
    createEvent(udalost,lide,functionsMap[cateringfirm])
}

//createEvent("Inaugurace prezidenta","100",YourMama)