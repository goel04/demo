const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/getFares', async (req, res) => {
    const { pickup, dropoff } = req.query;

    const olaFare = await getOlaFare(pickup, dropoff);
    const uberFare = await getUberFare(pickup, dropoff);
    const rapidoFare = await getRapidoFare(pickup, dropoff);
    const indriveFare = await getIndriveFare(pickup, dropoff);

    res.json([
        { service: 'Ola', price: olaFare, link: 'https://ola.app.link' },
        { service: 'Uber', price: uberFare, link: 'https://uber.app.link' },
        { service: 'Rapido', price: rapidoFare, link: 'https://rapido.app.link' },
        { service: 'Indrive', price: indriveFare, link: 'https://indrive.app.link' },
    ]);
});

const getOlaFare = async (pickup, dropoff) => {
    // Call Ola API and return fare
    return 100; // Example fare
};

const getUberFare = async (pickup, dropoff) => {
    // Call Uber API and return fare
    return 120; // Example fare
};

const getRapidoFare = async (pickup, dropoff) => {
    // Call Rapido API and return fare
    return 80; // Example fare
};

const getIndriveFare = async (pickup, dropoff) => {
    // Call Indrive API and return fare
    return 90; // Example fare
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
