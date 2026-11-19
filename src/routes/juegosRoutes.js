
import express from "express";
import { listarJuegos } from '../services/juegosService.js';

// Creación del router
const router = express.Router();


router.get("", async (req, res) => {
  console.log("Obteniendo juegos")
  const juegos = await listarJuegos();
  console.log("Retornando juegos:", juegos)
  res.json(juegos);
})

export default router;