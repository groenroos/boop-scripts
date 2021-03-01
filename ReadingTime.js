/**
	{
		"api":1,
		"name":"Reading Time",
		"description":"Get the time it takes to it read out loud at 200 wpm",
		"author":"groenroos",
		"icon":"watch",
		"tags":"time, duration, wpm, talk, speak, speech"
	}
**/


function main(input) {
	const words = input.text.trim().match(/\S+/g)
	const duration = (words.length || 0) / 200 * 60;

	const hrs = ~~(duration / 3600);
	const mins = ~~((duration % 3600) / 60);
	const secs = ~~duration % 60;

	let durationText = '';

	if (hrs > 0) {
		durationText += `${hrs} hour` + (hrs > 1 ? 's, ' : ', ');
	}
	if (mins > 0) {
		durationText += `${mins} minute` + (mins > 1 ? 's, ' : ', ');
	}
	durationText += `${secs} second` + (secs > 1 ? 's' : '');

	input.postInfo(durationText);
}