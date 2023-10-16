require('dotenv').config({ path: "../.env" });

const express = require("express");
const server = express();
const cors = require("cors");
const secretKeyStripe = process.env.REACT_APP_PAYMENT_STRIPE_SECRET_KEY;
const stripe = require("stripe")(`${secretKeyStripe}`);


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
        success_url: 'https://ecommercereduxtoolkit.netlify.app/',
        cancel_url: 'https://ecommercereduxtoolkit.netlify.app/',
    });

    res.json({ sessionId: session.id });
});

server.listen(3001, () => {
    console.log("Server Start");
});
