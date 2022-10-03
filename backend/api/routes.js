const express = require("express");

const router = express.Router();
router.use(express.json());
router.get("/sum", (req, res) => {
  const result=parseInt(req.query.num1)+parseInt(req.query.num2)
  res.send(result.toString());
});

router.get("/mul", (req, res) => {
  const result=parseInt(req.query.num1)*parseInt(req.query.num2)
  res.send(result.toString());
});
router.get("/div", (req, res) => {
  const result=parseInt(req.query.num1)/parseInt(req.query.num2)
  res.send(result.toString());
});

router.get("/subtract", (req, res) => {
  const result=parseInt(req.query.num1)-parseInt(req.query.num2)
  res.send(result.toString());
});

module.exports = router;