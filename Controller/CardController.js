const cardModel = require('../Models/CardModels');

const getCards = async (req, res) => {
  try {
    // Invoke the function to get the data
    const results = await cardModel.getCardsAll();
    res.json(results); // Send the results as a JSON response
    console.log('results:', results); // Log the results for debugging
  } catch (err) {
    console.error('Error fetching cards:', err);
    res.status(500).send('Error fetching cards');
  }
};

module.exports = { getCards };
