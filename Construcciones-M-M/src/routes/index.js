import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Primer sitio" })); // second parameter, object of variables

router.get("/about", (req, res) => res.render("about", { title: "about" }));

router.get("/works", (req, res) => res.render("works", { title: "works" }));

router.get("/contact", (req, res) =>
  res.render("contact", { title: "contactos" })
);

export default router;
