#!/usr/local/bin/node --harmony

const express = require('express'),
	app = express(),
	handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
	"Man who drops watch in toilet, bound to have shitty time."
];

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(express.static(`${__dirname}/public`));

//view engine returns content of type text/html and default status code 200
app.get('/', (req, res) => {
	//res.type('text/plain');
	//res.send('Meadowlark Travel');
	res.render('home');
});

app.get('/about', (req, res) => {
	let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
});

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
