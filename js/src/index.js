// import { smoldot } from './js/smoldot-bundled-browserify.js';

let current;

const client = smoldot.start();
window.client = client;

console.log("loaded chainspec");
if (!window.hasOwnProperty('wasm'))
{
    await new Promise(r => setTimeout(r, 2000));
}
console.log(window.wasm.chainspec_string());
client.addChain({
    chainSpec: window.wasm.chainspec_string(),
    jsonRpcCallback: (jsonRpcResponse) => {
        current = jsonRpcResponse;
        // Called whenever the client emits a response to a JSON-RPC request,
        // or an incoming JSON-RPC notification.
        console.log(jsonRpcResponse)
    }
}).then((chain) => {
    chain.sendJsonRpc('{"jsonrpc":"2.0","id":1,"method":"system_name","params":[]}');
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
