const Message = require("../models/message");

const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    return res.status(201).json({ newMessage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createMessage };
