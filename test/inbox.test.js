const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');
let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!'
// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }
// let car;
// beforeEach(() =>{
//      car = new Car();
// });
// describe('Car', () => {
// it('can park', () => {
//     assert.equal(car.park(),'stopped');
// });
// it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
// });
// });
// beforeEach(()=> {
//     //Get a list of all accounts 
//     //use one of those accounts to deploy the contract
//     web3.eth.getAccounts()
//      .then(fetchedAccounts => {
//          console.log(fetchedAccounts);
//      });
// });
// describe('inbox',() => {
//     it('deploys a contract', () =>{});
// });
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //teaches web3 about what methods an Inbox contact has =
       .deploy({ data: bytecode, arguments: ['Hi there!']}) //tells web3 that we want to deploy a new copy this contract
       .send({from: accounts[0], gas:'1000000'}); //instructs web3 to send out a transaction that creates this contract  
});
describe ('inbox', () =>{
     it('deploys a contract', () => {
        assert.ok(inbox.options.address);   
     });
     it('has a default message', async () =>{
        const message = await inbox.methods.message().call();
        assert.equal(message,'Hi there!');
     });
     it('can change the message', async() => {
         await inbox.methods.setMessage('bye').send({from: accounts[0]})
         const message = await inbox.methods.message().call();
         assert.equal(message,'bye');
     });
});

