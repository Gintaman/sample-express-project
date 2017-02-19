const fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
	"Man who drops watch in toilet, bound to have shitty time.",
];

const randomQuotes = [
	"They're taking the hobbits to Isengard",
	"Stay a while and listen",
	"Darker than a moonless night, hotter and more bitter than hell itself... that is coffee",
	"Why is the rum gone?",
	"I feel trapped, like a moth, in a bath!",
];

exports.getFortune = () => {
	let id = Math.floor(Math.random() * fortunes.length);
	return fortunes[id];
};
