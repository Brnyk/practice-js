let localBeerFactories = {
    factoryData: [
        {
            factoryName: "Borsodi Sörgyár Kft",
            established: 1973,
            priceAvg: 482,
            alcAvg: 4.5,
            ownBeers:  [
                {
                    beerName: "Borsodi",
                    price: 350,
                    abv: 4.5
                }, 

                { 
                    beerName: "Borsodi Bivaly",
                    price: 380,
                    abv: 5,
                },

                { 
                    beerName: "Rákóczi sör",
                    price: 300,
                    abv: 4.6,
                },

                { 
                    beerName: "Borsody Hoppy",
                    price: 380,
                    abv: 4.5,
                },

                { 
                    beerName: "Borsodi Mester",
                    price: 400,
                    abv: 5.5,
                },

                { 
                    beerName: "Borsodi IPA",
                    price: 390,
                    abv: 4.8,
                }
            ],
            licensedBeers: [
                { 
                    beerName: "Stella Artois",
                    price: 365,
                    abv: 4,
                },
                { 
                    beerName: "Beck's",
                    price: 400,
                    abv: 4.5,
                },
                { 
                    beerName: "Löwenbrau",
                    price: 280,
                    abv: 3.5,
                }, 
                { 
                    beerName: "Hoegaarden",
                    price: 450,
                    abv: 4,
                },
            ]
        },

        {
            factoryName: "Dreher Sörgyárak Zrt",
            established: 1854,
            priceAvg: 404,
            aclAvg: 4.7,
            ownBeers:[
                { 
                    beerName: "Dreher Gold",
                    price: 400,
                    abv: 4.5,
                },    
                {
                    beerName: "Arany Ászok",
                    price: 330,
                    abv: 4.6,
                },
                {
                    beerName: "Kőbányai",
                    price: 275,
                    abv: 4.5,
                },
            ],
            licensedBeers: [
                { 
                    beerName: "Pilsner Urquell",
                    price: 330,
                    abv: 4.5,
                }, 
                {
                    beerName: "Kozel",
                    price: 380,
                    abv: 4,
                }, 
                {
                    beerName: "Asahi",
                    price: 450,
                    abv: 3.5,
                },
            ],
            
        },
        
        {
            factoryName: "Heineken Hungária Sörgyárak Zrt",
            priceAvg: 465,
            alcAvg: 5,
            established: 1895,
            ownBeers: [
                {
                    beerName: "Heineken",
                    price: 400,
                    abv: 5,
                },
                {
                    beerName: "Soproni",
                    price: 300,
                    abv: 4.5,
                },
                {  
                    beerName: "Gösser",
                    price: 230,
                    abv: 3.7,
                },
                { 
                    beerName: "Arany Fácán",
                    price: 250,
                    abv: 3.5,
                },
            ],
            licensedBeers: [
                { 
                    beerName:"Kaiser",
                    price: 320,
                    abv: 3,
                },
                {
                    beerName: "Edelweiss",
                    price: 600,
                    abv: 5.5,
                },
                { 
                    beerName: "Krusovice",
                    price: 450,
                    abv: 5,
                },
                {
                    beerName: "Zlaty Bazant",
                    price: 450,
                    abv: 4,
                },
            ]
        },
    ],
};

console.log(localBeerFactories.factoryData[0].licensedBeers[2].beerName)

/* function decideIfBeerIsGood(){
    if (priceAvg < 466 || alcAvg > 4.5){
        return localBeerFactories.factoryData({factoryName: ""}) + "jó sört gyárt"
    }
    else {
        return localBeerFactories.factoryData({factoryName: ""}) + "rossz sört gyárt"
    }
}

console.log(decideIfBeerIsGood) */