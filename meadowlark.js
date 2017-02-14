#!/usr/local/bin/node --harmony

const express = require('express'),
	app = express(),
	handlebars = require('express-handlebars').create({defaultLayout: 'main'}),
	fortune = require('./node_modules/lib/fortune.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

//middle ware for detecting test routes
app.use((req, res, next) => {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});

//view engine returns content of type text/html and default status code 200
app.get('/', (req, res) => {
	//res.type('text/plain');
	//res.send('Meadowlark Travel');
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about', {
		fortune: fortune.getFortune(),
		pageTestScript: '/qa/tests-about.js'
	});
});

//the following 2 routes fail if placed after  the 404 and 500 middleware
app.get('/tours/hood-river', (req, res) => {
	res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', (req, res) => {
	res.render('tours/request-group-rate');
});

app.use(express.static(`${__dirname}/client/public`));

//need to manually set status code here and for 500
app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:', app.get('port') + '...');
});
