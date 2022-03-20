const express = require('express');
const router = express.Router();
const { Students } = require('../models');

router.get('/', async (req, res) => {
  const {page, size} = req.query;

  const listOfStudents = await Students.findAndCountAll({
    limit: size || 5,
    offset: page || 0,
  });
  if (!listOfStudents) res.status(404).json({ error: "No data to show" });
  res.status(200).json(listOfStudents);
});

router.post('/', async (req, res) => {
  const student = req.body;
  console.log( 'student',student,'Student',Students );
  if (!listOfStudents) res.status(404).json({ error: "No data to show" });
  await Students.create( student );
  res.status(200).json(student);
});


module.exports = router;