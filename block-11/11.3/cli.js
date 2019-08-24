const TV = require('./TV');

const tv = new TV();

const args = process.argv.slice(2);
const method = args[0];
const query = args.slice(1).join(' ');

function search(method, request) {
    switch (method) {
        case 'show':
            tv.findShow(request);
            break;

        case 'actor':
            tv.findActor(request);
            break;

        default:
            console.log('Error: Please specify whether your search is for a "show" or an "actor"');
            console.log('For example "node cli show westworld" OR');
            console.log('"node cli actor tom cruise"');
            break;
    }
}

search(method, query);
