const { ordersController } = require("../controllers");
const ordersRouter = require("express").Router();
// const crypto = require('crypto');

ordersRouter.get("/", ordersController.getOrders);

module.exports = ordersRouter;

// ordersRouter.post('/webhook', (req, res) => {
//     const hmac = req.headers['x-shopify-hmac-sha256'];
//     const hash = crypto.createHmac('sha256', process.env.SHOPIFY_API_SECRET)
//                      .update(req.rawBody)
//                      .digest('base64');

//     if (hmac === hash) {
//       // El webhook es válido, puedes procesarlo aquí
//       const data = req.body;
//       // ...
//     } else {
//       // El webhook no es válido, puedes responder con un error
//       res.status(400).send('HMAC validation failed');
//     }
//    });

// Para crear el webhook en Shopify, necesitas hacer una solicitud POST a la API de Shopify con el siguiente cuerpo:

// {
//  "webhook": {
//    "topic": "orders/create",
//    "address": "https://tu-servidor.com/webhook",
//    "format": "json"

//  }
// }
