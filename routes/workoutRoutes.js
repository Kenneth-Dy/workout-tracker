const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err)))

router.post('/workouts', (req, res) => Workout.create(req.body)
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

router.put('/workouts/:id', (req, res) => Workout.findById(req.params.id)
  .then(workout => {
    let newWorkout = workout.exercises
    newWorkout.push(req.body)
    Workout.findByIdAndUpdate(req.params.id, newWorkout)
      .then(updatedWorkout => res.json(updatedWorkout))
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
  )

router.get('/workouts/range', (req, res) => Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err)))

module.exports = router