const express = require('express');
const router = express.Router();
const { Students } = require('../models');

router.get('/', async (req, res) => {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);
  
  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 5;
  if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 5) {
    size = sizeAsNumber;
  }

  const listOfStudents = await Students.findAndCountAll({
    limit: size,
    offset: page * size,
  });
  
  if( !listOfStudents ) {
    res.status( 404 ).json({ error: "No data to show" });
  } else {
    res.status( 200 ).json({
      content: listOfStudents.rows,
      totalPages: Math.ceil( listOfStudents.count / size ),
      totalElements: listOfStudents.count,
    });
  }
});

router.post('/', async (req, res) => {
  const student = req.body;

  if (!listOfStudents) res.status(404).json({ error: "No data to show" });
  await Students.create( student );
  res.status(200).json(student);
});


module.exports = router;