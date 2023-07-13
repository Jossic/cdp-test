import {data} from "./data.js";
import {Processor} from "./Processor.js";


const args = process.argv.slice(2);
const command = args[0];

const processor = new Processor(data);

if (command.startsWith('--filter')) {
    const index = command.indexOf("=");
    const pattern = command.substring(index + 1);
    console.log(JSON.stringify(processor.filterByPattern(pattern), null, 2));
} else if (command === '--count') {
    console.log(JSON.stringify(processor.countElements(), null, 2));
} else {
    console.log('Invalid command. Please use --filter or --count.');
}