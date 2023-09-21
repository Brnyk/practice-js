let localBeerFactories = {
    factoryData: [
        {
            factoryName: "Borsodi Sörgyár Kft",
            established: 1973,
            priceAvg: 482,
            alcAvg: 4.5,
            ownBeers:  ["Borsodi sör", "Borsodi Bivaly", "Rákóczi sör","Borsody Hoppy", "Borsodi Mester", "Borsodi IPA", "Borsodi Gyömbér Ale", "Borsodi Meggy Ale", "Borsodi Tropical Ale" ],
            licensedBeers: ["Stella Artois", "Leffe","Beck's","Löwenbrau","Belle-Vue", "Hoegaarden", "Spaten", "Riesenbrau"]
        },

        {
            factoryName: "Dreher Sörgyárak Zrt",
            established: 1854,
            priceAvg: 404,
            aclAvg: 4.7,
            ownBeers:["Dreher Gold", "Arany Ászok","Kőbányai"],
            licensedBeers: ["Pilsner Urquell", "Kozel", "Asahi", "Hofbräu Lager"],
            
        },
        
        {
            factoryName: "Heineken Hungária Sörgyárak Zrt",
            priceAvg: 465,
            alcAvg: 5,
            established: 1895,
            ownBeers: ["Heineken", "Soproni", "Gösser", "Arany Hordó", "Sárkány", "Arany Fácán"],
            licensedBeers: ["Kaiser", "Edelweiss", "Steffl", "Strongbow", "Krusovice", "Adambrau", "Zlaty Bazant"]
        },
    ],
};

console.log(localBeerFactories.factoryData[0].licensedBeers[3])

/* function decideIfBeerIsGood(){
    if (priceAvg < 466 || alcAvg > 4.5){
        return localBeerFactories.factoryData({factoryName: ""}) + "jó sört gyárt"
    }
    else {
        return localBeerFactories.factoryData({factoryName: ""}) + "rossz sört gyárt"
    }
}

console.log(decideIfBeerIsGood) */