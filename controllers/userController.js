const User = require('../models/UserModel');

exports.postSignup = async (req, res, next) => {
  const { username } = req.body;

  try {
    // Check if a user with the given username already exists in the database
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // User already exists, so send a response with an error message
      return res.status(409).json({ error: 'Account with that username already exists.' });
    }

    // Save the new user to the database
    const user = new User({ username });
    const savedUser = await user.save();

    // Respond with the username and id of the newly created user
    res.json({
      username: savedUser.username,
      _id: savedUser._id,
    });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
 try {
  const users = await User.find({}); // Fetch all documents from the 'users' collection
  res.json(users); // Respond with the array of documents
} catch (err) {
  console.error('Error fetching collection data:', err);
  res.status(500).json({ error: 'Failed to fetch collection data.' });
}
}