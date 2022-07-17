// Modules

const os = require('os');

// info about current user

const user = os.userInfo();

console.log(user);

// uptime of the system

const uptime = os.uptime();

console.log(`The system uptime: ${uptime} seconds`);

const currentOs = {
	name:os.type(),
	releases: os.release(),
	totalMemory:os.totalmem(),
	freeMemory:os.freemem()	
};

console.log(currentOs);