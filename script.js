async function getFares() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const response = await fetch(`/getFares?pickup=${pickup}&dropoff=${dropoff}`);
    const fares = await response.json();
    displayFares(fares);
}

function displayFares(fares) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    fares.forEach(fare => {
        const fareElement = document.createElement('div');
        fareElement.innerHTML = `
            <p>${fare.service}: ${fare.price}</p>
            <a href="${fare.link}" target="_blank">Book with ${fare.service}</a>
        `;
        results.appendChild(fareElement);
    });
}
