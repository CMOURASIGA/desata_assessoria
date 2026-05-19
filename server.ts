import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address
        to: process.env.CONTACT_RECEIVER_EMAIL, // List of receivers
        replyTo: email,
        subject: `Novo contato pelo site - ${name}`, // Subject line
        text: `Foi um contato gerado pelo site.\n\nNome: ${name}\nE-mail: ${email}\nWhatsApp: ${phone}\nMensagem: ${message}`, // Plain text body
        html: `
          <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
            <p><strong>Foi um contato gerado pelo site.</strong></p>
            <hr />
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${phone}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `, // HTML body content
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
