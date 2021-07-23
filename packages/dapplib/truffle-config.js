require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew sad pudding grace forest equal gentle'; 
let testAccounts = [
"0x19db714d639756c7ba1decad102efd39bdf1ed9a6082872476e273048a526996",
"0x17f6b0970cbb4818a5801cd49581e2e545d512f0e6524a8a8a944501c1c49db0",
"0xd46957832cb7ea598e0c7e50005afab75ae78f7e2aaa047f3c5e04dbf4ea8ce5",
"0x8cf6138ed7a9e4e566f021e3b943ad40f321510901966f0323b00957125a3cd3",
"0x53e84fdbf0e508e12f599a137312d04ccc0360940f7ac3c08345e6d5a3056033",
"0x0577d4d32927eb1b7a2487e7b483da0cccf2c168ebac430177ce59d39e38abdc",
"0x18e241bf17938484c7f1e0d4b9c26e1c91c8a673c293b5bb16c5c16edc907952",
"0x5dbad591aaacc6436156749c93d78e46c0831c7de1b4d1815c18c9a12b867910",
"0xa76303b91f1c01026c920cbfef44134870d4eb7ddd51d97c063a85ca3bdfebc3",
"0x3a0fdd81ea9d7ac3088808c36ad226fa76b2ec1833076b3955da297415a9736e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

