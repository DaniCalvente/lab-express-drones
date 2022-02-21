const express = require('express');
const router = express.Router();
const DronModel = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DronModel.find()
  .then ((allDrones) => {
    res.render("drones/list.hbs", {allDrones})

  })
  .catch((err) => {
    next(err)
  })
   
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  DronModel.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  })
  .then ((createDron) => {
    res.redirect(`/drones`)

  })
  .catch ((err) => {
    res.render("drones/create-form.hbs")
    next(err)
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  DronModel.findById(id)
  .then((oneDroneId)=>{
    res.render("drones/update-form.hbs", { oneDroneId })
  })
  .catch((err)=>{
    next(err)
  })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  DronModel.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then((updatedDrone)=>{
    res.redirect(`/drones`)
  })
  .catch((err)=>{
    next(err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
