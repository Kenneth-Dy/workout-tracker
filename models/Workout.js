const { model, Schema } = require('mongoose')

// const exercise = model('Excercise', new Schema({
//   type: String,
//   name: String,
//   duration: Number,
//   weight: Number,
//   reps: Number,
//   sets: Number,
//   distance: Number
// }))

module.exports = model('Workout', new Schema({
  date: Date,
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }],
},
  { typeKey: '$type' }
  ))
