#!/usr/local/bin/node --harmony
'use strict';

const express = require('express'),
	app = express();

app.get('/', (req, res) => {
	let page = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title></title>
		</head>
		<body>
			<h1>hello, world</h1>
		</body>
		</html>
	`;
	res.send(page);
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
