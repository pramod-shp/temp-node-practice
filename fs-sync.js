const { readFileSync, writeFileSync } = require('fs');


const content_1 = readFileSync('./content/folder/content.txt', 'utf8');

const content_2 = readFileSync('./content/content-2.txt', 'utf8');
console.log(content_1, content_2);


writeFileSync(
	'./content/folder/resultant.txt',
	`This is result: ${content_1} ${content_2}`,
	{flag:'a'}
	);