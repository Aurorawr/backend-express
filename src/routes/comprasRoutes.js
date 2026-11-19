import express from "express";
import { confirmarPago, iniciarPago } from '../services/webpayService.js';

const router = express.Router();

// Ruta para generar el link de webpay
router.post("/generar-link-pago", async (req, res) => {
  // TODO: Hacer validaciones
  const respuestaWebpay = await iniciarPago(req.body);
  res.json(respuestaWebpay)
});

// Ruta para confirmar el pago realizado
router.post("/confirmar-pago", async (req, res) => {
  // TODO: Hacer validaciones
  const { tokenWebpay } = req.body;
  const respuestaWebpay = await confirmarPago(tokenWebpay);
  res.json(respuestaWebpay)
})

export default router;