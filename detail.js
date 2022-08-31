function convertToJSON(response) {
    return response.json();
}

function showInfo(data) {
    const coinImg = document.getElementById("coin-img");
    coinImg.src = data.image.large;

    const coinName = document.getElementById("coin-name");
    coinName.innerText = data.name;

    const coinNDesc = document.getElementById("coin-desc");
    coinNDesc.innerHTML = data.description.en;

    //console.log(data);
}

function showPrice(data) {
    const inrPrice = document.getElementById("inr-price");
    inrPrice.innerText = data.bitcoin.inr;
    const usdPrice = document.getElementById("usd-price");
    usdPrice.innerText = data.bitcoin.usd;
    const eurPrice = document.getElementById("eur-price");
    eurPrice.innerText = data.bitcoin.eur;
    // console.log(data);
}

function showHistory(data) {
    // console.log(data);
    showGraph(data);
}

fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true").then(convertToJSON).then(showInfo);

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur").then(convertToJSON).then(showPrice);

fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=14&interval=daily").then(convertToJSON).then(showHistory);

function convertUnixToReadable(timestrap) {
    var date = new Date(timestrap);
    var date_string = date.getDate();
    var month_string = "0" + date.getMonth() + 1;
    var readable = date_string + '-' + month_string;
    return readable;
}

function showGraph(history_data) {
    // console.log(history_data.prices);
    let labels = [];
    let prices = [];
    for (let i = 0; i < history_data.prices.length; i += 1) {
        const single_price = history_data.prices[i];
        const readable_label = convertUnixToReadable(single_price[0]);
        labels.push(readable_label);
        prices.push(single_price[1]);
    }
    console.log(labels);
    console.log(prices);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price (in INR)',
                data: prices,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}