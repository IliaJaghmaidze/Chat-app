const Message = require("../models/message");

const getMessages = async (req, res) => {
  const getAllMessages = await Message.find({});
  return res.status(200).json({ getAllMessages });
};
const createMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);

  return res.status(201).json({ newMessage });

  return res.status(500).json({ error: error.message });
};

module.exports = { getMessages, createMessage };
