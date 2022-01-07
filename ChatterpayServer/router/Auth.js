const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from server!");
});
router.post("/upload", async (req, res) => {
  const {
    payment_id,
    from,
    to,
    amount,
    currency,
    payment_status,
    reference_id,
    payment_link,
    from_avatar,
    to_avatar,
    platform,
  } = req.body;

  if (
    !payment_id ||
    !from ||
    !to ||
    !amount ||
    !currency ||
    !payment_status ||
    !reference_id ||
    !payment_link ||
    !from_avatar ||
    !to_avatar ||
    !platform
  ) {
    return res.status(422).json({ error: "Please add all the details" });
  }
  try {
    const user = new User({
      payment_id,
      from,
      to,
      amount,
      currency,
      payment_status,
      reference_id,
      payment_link,
      from_avatar,
      to_avatar,
      platform,
    });
    await user.save();
    res.status(201).json({ message: "Payment details uploaded successfully" });
    console.log(req.body);
  } catch (err) {
    res.status(500).json({ error: "Failed to upload" });
  }
});

router.get("/paymentDetailRefID/:id", (request, response) => {
  User.find({ reference_id: request.params.id })
    .then((data) => response.status(200).json(data[0]))
    .catch((error) => response.status(500).json(error));
});
router.post("/paymentsFromUser", (request, response) => {
  console.log(request.body);
  const reu = request.body.id;
  console.log(reu);
  User.find({ from: reu })
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json(error));
});

module.exports = router;
//http://localhost:5000/api/payments/YGSAF
///payments/Mav#8994
