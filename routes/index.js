var express = require('express');
var router = express.Router();

const database = require('../database/database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.post('/create-user',    function(request, response, next ) { 
    database.createOne({ 
    name: 'Jake', 
    residence: 'State Farm'
  })

  response.send('successfully create new user')
}) 

router.put('/update-user/:id', function(request, response, next) { 
 database.updateOne({ 

  name:'steve',
  residence: 'apple'
 })
  })


module.exports = router;
