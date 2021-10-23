const API_KEY = "16cb50b84f16f324db7a2640ff0da186b96e8fe3afbd99ab23046cfdee7b364e"; 

export const loadTiker = tikers => fetch (`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tikers.join(",")}USD&api_key=${API_KEY}`).then(r => r.json);
