const Exercise = require('../models/ExerciseModel');
const User = require('../models/UserModel');

exports.postExercise = async (req, res, next) => {
  const { description, date } = req.body
  const duration = Number(req.body.duration)
  let id = req.params['_id']

  try{
   const user = await User.findById(id); // Find the document by ID
   await Exercise.create({
    username: user.username,
    description: description, 
    duration: duration, 
    date: date ? new Date(date).toDateString() : (new Date()).toDateString(),
    userId: id})


   if (!user) {
     return res.status(404).json({ error: 'User not found.' });
   }
   res.json({
    username: user.username,
    description: description, 
    duration: duration, 
    date: date ? new Date(date).toDateString() : (new Date()).toDateString(),
    _id: id})

   }catch(err){q
    console.error('Error finding user by ID:', err);
    res.status(500).json({ error: 'Failed to find user by ID.' });
   }
}