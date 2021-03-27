/**
	{
		"api":1,
		"name":"Arrayify",
		"description":"Convert one-per-line into a JSON array",
		"author":"groenroos",
		"icon":"HTML",
		"tags":"json, array, list, multiline, csv, convert"
	}
**/


function main(input) {
	input.text = JSON.stringify(input.text.split(/\n/g));
}