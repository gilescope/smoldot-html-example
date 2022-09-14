// import { smoldot } from './js/smoldot-bundled-browserify.js';
let current;

const client = smoldot.start();
window.client = client;

function load(url, callback) {
    var xhr = new XMLHTTPRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) callback(xhr.responseText);
    };
    xhr.open("GET", url, true);
}

load("./chainspec/polkadot.json", function (contents) {
    // contents is now set to the contents of "site.com/t.txt"
    console("loaded chainspec");
    client.addChain({
        chainSpec: contents,
        jsonRpcCallback: (jsonRpcResponse) => {
            current = jsonRpcResponse;
            // Called whenever the client emits a response to a JSON-RPC request,
            // or an incoming JSON-RPC notification.
            console.log(jsonRpcResponse)
        }
    }).then((chain) => {
        chain.sendJsonRpc('{"jsonrpc":"2.0","id":1,"method":"system_name","params":[]}');
    });
});

// const chainSpec = fs.readFileSync('./chainspec/polkadot.json', 'utf8');

// export
class ISmoldot {
    constructor(id) {
        this.ownable_id = id;
    }

    // async
    pollme() {
        return "Hello world";
    }
}
