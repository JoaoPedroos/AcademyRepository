import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const visitors = new Set(); // Armazena IPs únicos (pode trocar por DB)

app.get("/register-visit", (req, res) => {
  const visitorIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  visitors.add(visitorIP);
  console.log("Visitantes:", Array.from(visitors));
  res.json({ message: "Visitante registrado", ip: visitorIP });
});

app.get("/visitors", (req, res) => {
  res.json({ visitors: Array.from(visitors) });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
