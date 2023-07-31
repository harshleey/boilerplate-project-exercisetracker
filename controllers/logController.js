const User = require('../models/UserModel');
const Exercise = require('../models/ExerciseModel')

exports.getLogs = async (req, res, next) => {
  let id = req.params._id
  const {from, to, limit} = req.query

  console.log(req.query)
  try{
   const user = await User.findById(id)
   const exercises = await Exercise.find({ userId: id })

   let idCount = 0
   let logArray = []
   
   exercises.map((exercise, index) => {
    idCount++
    logArray.push({
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    })
   })

   if (!exercises) {
     return res.status(404).json({ error: 'Exercise not found.' });
   }

  if (from && to) {
   logArray = logArray.filter((d)=> (Date.parse(d.date) >= Date.parse(from)) && (Date.parse(d.date) <= Date.parse(to)));
   console.log(logArray)
  }
  
  logArray.sort((a, b) => new Date(a.date) - new Date(b.date));

  if (limit) {
   logArray = logArray.slice(0, parseInt(limit));
  }

   res.json({
    username: user.username,
    count: limit ? parseInt(limit) : logArray.length,
    _id: user._id,
    log: logArray
   })

   }catch(err){
    console.error('Error finding user by ID:', err);
    res.status(500).json({ error: 'Failed to find user by ID.' });
   }
}