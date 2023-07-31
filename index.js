const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const mainRoutes = require('./routes/mainRoutes')
const exerciseRoutes = require('./routes/exerciseRoutes')
const logRoutes = require('./routes/logRoutes')

const connectDB = require('./config/db')

connectDB();

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', mainRoutes)
app.use('/api/users', exerciseRoutes)
app.use('/api/users', logRoutes)


// app.get('/api/users/:_id/logs', (req, res) => {
//   const { description, date } = req.body
//   const duration = Number(req.body.duration)
//   let id = req.params['_id']

//   const foundUser = dataArray.find((user) => user._id === id);
//   console.log(foundUser)

//   res.json({
//     username: foundUser.username,
//     // count: idCounts[id],
//     _id: id,
//     log: [{
//       description: description,
//       duration: duration,
//       date: date ? new Date(date).toDateString() : (new Date()).toDateString(),
//     }]
//   })
//   // res.end(JSON.stringify(exerciseLog))
// })



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
