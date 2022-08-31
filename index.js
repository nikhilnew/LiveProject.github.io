//alert("Hi");

function changeText() {
    //console.log("Function call");
    var para_elem = document.getElementById("someText");
    para_elem.innerText = "New Value";
}

function addMore() {
    const ul_elm = document.getElementsByTagName("ul")[0];
    console.log(ul_elm);
    var new_li = document.createElement("li");
    new_li.innerText = "New item";
    ul_elm.appendChild(new_li);
}

function convertToJSON(response) {
    return response.json();
}

function showData(data) {
    const bitcoinPrice = document.getElementById("bitcoin_price");
    bitcoinPrice.innerText = data.bitcoin.inr;

    const ethereumPrice = document.getElementById("ethereum_price");
    ethereumPrice.innerText = data.ethereum.inr;

    const cardanoPrice = document.getElementById("cardano_price");
    cardanoPrice.innerText = data.cardano.inr;

    const dogecoinPrice = document.getElementById("dogecoin_price");
    dogecoinPrice.innerText = data.dogecoin.inr;

    const heliumPrice = document.getElementById("helium_price");
    heliumPrice.innerText = data.helium.inr;

    const litecoinPrice = document.getElementById("litecoin_price");
    litecoinPrice.innerText = data.litecoin.inr;

    const polkadotPrice = document.getElementById("polkadot_price");
    polkadotPrice.innerText = data.polkadot.inr;

    const binancecoinPrice = document.getElementById("binancecoin_price");
    binancecoinPrice.innerText = data.binancecoin.inr;

    const tetherPrice = document.getElementById("tether_price");
    tetherPrice.innerText = data.tether.inr;
    console.log(data);
}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Chelium%2Ccardano%2Csolana%2Clitecoin%2Cstellar&vs_currencies=inr").then(convertToJSON).then(showData);