/**
	{
		"api":1,
		"name":"Listify",
		"description":"Convert a list into a set of <li>s",
		"author":"groenroos",
		"icon":"HTML",
		"tags":"list, multiline, csv, convert, html, li, ul"
	}
**/


function main(input) {
	let array = [];

	/* If it's one line and has commas, let's assume it's CSV */
	if (!input.text.match(/\r|\n/g) && input.text.indexOf(',') > -1) {
		array = input.text.split(',');
	} else {
		/* Otherwise, treat it as one-per-line */
		array = input.text.split(/\n/g);
	}

	/* Format each */
	array = array.filter(Boolean).map(item => {
		return `	<li>${item.trim()}</li>`;
	});

	input.text = `<ul>\n${array.join('\n')}\n</ul>`;
}