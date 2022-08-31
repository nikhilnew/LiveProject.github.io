function convertToJSON(response) {
    return response.json();
    return response.json();
}

const tbody_elem = document.getElementById("search_result");

function showResult(data) {
    console.log(data.coins);
    for (let i = 0; i < data.coins.length; i++) {
        const single_data = data.coins[i];

        const new_row = document.createElement("tr");
        const new_sno = document.createElement("td");
        const new_logo = document.createElement("td");
        const new_name = document.createElement("td");
        const new_link = document.createElement("td");
        const new_img = document.createElement("img");

        new_sno.innerText = i; //counter
        new_img.src = single_data.thumb;
        new_logo.appendChild(new_img);
        new_name.innerText = single_data.name + "( " + single_data.symbol + " )";
        new_link.innerText = "TODO";

        new_row.appendChild(new_sno);
        new_row.appendChild(new_logo);
        new_row.appendChild(new_name);
        new_row.appendChild(new_link);

        tbody_elem.appendChild(new_row);

        console.log(single_data);
    }
}
fetch("https://api.coingecko.com/api/v3/search?query=bit").then(convertToJSON).then(showResult);