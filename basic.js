//basic patterns for rendering content

//basic usage, renders views within layouts
app.get('/about', (req, res) => {
	res.render('about');
});

//response codes other than 200
app.get('error', (req, res) => {
	res.status(500).render('error');
	//equivalent:
	//res.status(500);
	//res.render('error');
});

//pass a context to view, includes querystring, cookie, and session values
app.get('/greeting', (req, res) => {
	res.render('about', {
		message: 'welcome',
		style: req.query.style,
		userid: req.cookie.userid,
		username: req.session.username,
	});
});

//render view without layout
//following doesn't have a layout file, views/no-layout.handlebars needs to have all necessary vanilla html
app.get('/no-layout', (req, res) => {
	res.render('no-layout', {layout: null});
});

//render view with custom layout
//layout file views/layouts/custom.handlebars
app.get('/custom-layout', (req, res) => {
	res.render('custom-layout', {layout: 'custom'});
});

//render plaintext
app.get('/test', (req, res) => {
	res.type('text/plain');
	res.send('this is a test');
});

//needs to apear AFTER all routes
//next function needs to be added as a paremeter for express to recognize this as an error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).render('error');
});
