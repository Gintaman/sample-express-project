const fortune = require('../node_modules/lib/fortune.js'),
	expect = require('chai').expect;

suite('Fortune cookie tests', () => {
	test('getFortune should return a fortune', () => {
		expect(typeof fortune.getFortune() === 'string');
	});
});
