fetch("http://localhost:3000/analytics/monthly-revenue", {
    method: "GET"
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
});