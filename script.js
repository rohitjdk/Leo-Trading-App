// Fetch live market data (Simulated API Data)
const cryptoData = [
    { name: "Bitcoin (BTC)", price: 90353, change: 8.06 },
    { name: "Ethereum (ETH)", price: 2227.40, change: 6.41 },
    { name: "XRP (XRP)", price: 2.49, change: 5.98 },
    { name: "Tether (USDT)", price: 1.00, change: 0.05 },
    { name: "BNB (BNB)", price: 600.65, change: 5.60 }
];

function updateCryptoTable() {
    let tableBody = document.getElementById("cryptoTable");
    tableBody.innerHTML = "";
    cryptoData.forEach(coin => {
        let row = `<tr>
            <td>${coin.name}</td>
            <td>$${coin.price.toFixed(2)}</td>
            <td style="color: ${coin.change >= 0 ? 'green' : 'red'};">${coin.change.toFixed(2)}%</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Simulated Buy/Sell Functions
function buyCrypto() {
    let amount = document.getElementById("amount").value;
    if (amount > 0) {
        alert(`You bought crypto worth $${amount}`);
    } else {
        alert("Enter a valid amount!");
    }
}

function sellCrypto() {
    let amount = document.getElementById("amount").value;
    if (amount > 0) {
        alert(`You sold crypto worth $${amount}`);
    } else {
        alert("Enter a valid amount!");
    }
}

// Auto-update every 10 seconds
setInterval(updateCryptoTable, 10000);
updateCryptoTable();
