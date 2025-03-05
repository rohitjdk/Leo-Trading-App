let price = 50000;
const priceElement = document.getElementById('live-price');
const ctx = document.getElementById('tradingChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Price',
            borderColor: 'orange',
            data: [],
            fill: false
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

function updatePrice() {
    price += (Math.random() - 0.5) * 100;
    priceElement.innerText = `$${price.toFixed(2)}`;
    chart.data.labels.push(new Date().toLocaleTimeString());
    chart.data.datasets[0].data.push(price);
    if (chart.data.labels.length > 20) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    chart.update();
}

function buy() { alert('Buy order placed at ' + price.toFixed(2)); }
function sell() { alert('Sell order placed at ' + price.toFixed(2)); }

setInterval(updatePrice, 1000);
