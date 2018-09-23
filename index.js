const express = require('express')
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

nunjucks.configure('views', { noCache: true });

app.use(express.static(__dirname))
app.use(bodyParser());

const router = express.Router();

app.use('/', router)

router.get('/stripe-form', function (req,res,next) {
	console.log("25 testing...");
  	res.render('stripeForm', {title:'Stripe Form Title'});
})

router.post('/stripe-information', function (req, res, next) {
	console.log('stripe information received: ', req.body)
	res.send('received')
})