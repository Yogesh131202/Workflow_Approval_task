const Transaction = require('../models/transactionModel');

exports.createTransaction = async (req, res) => {
  const { type, amount, description, userId } = req.body;
  const transaction = new Transaction({ type, amount, description, userId });

  try {
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  const { userId } = req.query;
  try {
    const transactions = await Transaction.find({ userId });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
