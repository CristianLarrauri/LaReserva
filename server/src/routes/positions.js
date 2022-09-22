const { Router } = require("express");
const { Teams, Tournaments } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let data = await Teams.findAll({
      order: [["points", "DESC"]],
      include: {
        model: Tournaments,
        where: { id: req.query.tournament },
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("Error en ruta get de positions", error);
  }
});

module.exports = router;
