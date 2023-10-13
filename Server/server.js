require('dotenv').config({ path: "../.env" });

const express = require("express");
const server = express();
const cors = require("cors");
const secretKeyStripe = process.env.REACT_APP_PAYMENT_STRIPE_SECRET_KEY;
const stripe = require("stripe")("sk_test_51O00udSCa2WGUUlJugyUX3c0G4AHyEbuIMBQA0G5ZQ4HEWxBOTObNd6aEzKyEDCKJIBuYxoQ9HL0QNCc0tWJYYQW004BDd3eJP");


server.use(express.json());
server.use(cors());

server.post("/api/create-checkout-session", async (req, res) => {
    const data = req.body;
    console.log(data.products);

    const lineItems = data.products.map(element => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: element.brand,
            },
            unit_amount: element.price * 100, 
        },
        quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems, 
        payment_method_types: ["card"],
        mode: "payment",
        success_url: 'https://localhost:3001',
        cancel_url: 'https://localhost:3001/product',
    });

    res.json({ sessionId: session.id });
});

server.listen(3001, () => {
    console.log("Server Start");
});
