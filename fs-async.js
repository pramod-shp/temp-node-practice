const { readFile, writeFile} = require('fs');

const path = require('path');


const filePath = path.join('./content','content-2.txt');

readFile(filePath, 'utf8', (err, result) => {
	if(err){
		console.log(err);
		return;
	}
	const content_1 = result;

	readFile('./content/folder/content.txt', 'utf8', (err, result) => {
		if(err){
			console.log(err)
			return;
		}
		const content_2 = result;

		writeFile('./content/folder/resultant.txt',`This is result: ${content_1} and ${content_2}`, (err, result) => {
			if(err){
				console.log(err);
				return;
			}
			console.log(result);
		});
	});
})