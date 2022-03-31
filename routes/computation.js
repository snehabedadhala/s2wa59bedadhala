var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
var x;
var random = Math.random();
console.log(req.query.x);
x = req.query.x;
// checking if url has params
if (x == undefined) {
  x = random;
}
let fround = Math.fround(x)
let r = Math.random(x)
let round = Math.round(x)
res.render('computation', {
  title: 'Computation',
  value1: `applied to ` + x + ` is ` + fround ,
  value2: `applied to ` + x + ` is ` + r,
  value3: `applied to ` + x + ` is ` + round,
});
});

module.exports = router;
