const { messagePrefix } = require("@ethersproject/hash");
const { expect } = require("chai");
const { ethers } = require("hardhat");






//require('chai')
//    .use(require('chai-as-promised'))
//    .should()


describe('DecentralBank Contract', () => {
    let tether, rwd, decentralBank, Tether, RWD, DecentralBank, owner, customer;

    function tokens(number) {
        return ethers.utils.parseEther(number, "ether");
    }

    function _tokens(number) {
        return ethers.utils.formatEther(number, "ether");
    }

    beforeEach(async () => {
        // Load Contracts
        Tether = await ethers.getContractFactory('Tether');
        tether = await Tether.deploy();

        RWD = await ethers.getContractFactory('RWD');
        rwd = await RWD.deploy();

        DecentralBank = await ethers.getContractFactory('DecentralBank');
        decentralBank = await DecentralBank.deploy(rwd.address, tether.address);

        signers = await ethers.getSigners();
        owner = signers[0];
        customer = signers[1];

        //[owner] = await ethers.getSigners();
        //[customer] = await ethers.getSigners();

        // Transfer all tokens to DecentralBank (1 million)
        //await rwd.transfer(decentralBank.address, tokens('1000000'));


        //Transfer 100 mock Tethers to Customer
        //await tether.transfer(customer.address, tokens('100'), { from: owner.address });
    });



    describe('Mock Tether Deployment', () => {
        it('matches name successfully', async () => {
            //const name = await tether.name();
            //assert.equal(name, 'Mock Tether Token');
            expect(await tether.owner()).to.equal(await owner.address);

        });
    });



    describe('Reward Token Deployment', async () => {
        it('matches name successfully', async () => {
            //const name = await rwd.name();
            //assert.equal(name, 'Reward Token');
            expect(await rwd.name()).to.equal(await 'Reward Token');

        });
    });

    describe('Decentral Bank Deployment', async () => {





        it('matches name successfully', async () => {
            //const name = await decentralBank.name();
            //assert.equal(name, 'Decentral Bank');
            expect(await decentralBank.name()).to.equal(await 'Decentral Bank');
        });

        it('contract has tokens', async () => {


            // Transfer all tokens to DecentralBank (1 million)
            await rwd.transfer(decentralBank.address, tokens('1000000'));

            let balance = await rwd.balanceOf(decentralBank.address);

            //Transfer 100 mock Tethers to Customer
            await tether.transfer(customer.address, tokens('100'), { from: owner.address });

            //check that all tokens are in bank
            expect(await balance).to.equal(await '1000000000000000000000000');
        });

        describe('Yield Farming', async () => {
            it('rewards tokens for staking', async () => {


                let _result;
                //await tether.transfer(customer.address, tokens('100'), { from: owner.address });
                // Check Investor Balance
                _result = await tether.balanceOf(customer.address);
                //assert.equal(result.toString(), tokens('100'), 'customer mock wallet balance before staking');

                expect(await _result.toString()).to.equal(tokens('100'));

                // Check Staking For Customer of 100 tokens
                //await tether.approve(decentralBank.address, tokens('100'), { from: customer.address });
                //await decentralBank.depositTokens(tokens('100'), { from: customer.address });

                // Check Updated Balance of Customer
                //result = await tether.balanceOf(customer.address);
                //assert.equal(result.toString(), tokens('0'), 'customer mock wallet balance after staking 100 tokens');
                //expect(await result.toString()).to.equal(await tokens('0'), 'customer mock wallet balance after staking 100 tokens');

                // Check Updated Balance of Decentral Bank
                //result = await tether.balanceOf(decentralBank.address);
                //assert.equal(result.toString(), tokens('100'), 'decentral bank mock wallet balance after staking from customer');
                //expect(await result.toString()).to.equal(await tokens('100'), 'decentral bank mock wallet balance after staking from customer');

                // Is Staking Update
                //result = await decentralBank.isStaking(customer.address);
                //assert.equal(result.toString(), 'true', 'customer is staking status after staking');
                //expect(await result.toString()).to.equal(await 'true', 'customer is staking status after staking');

                // Issue Tokens
                //await decentralBank.issueTokens({ from: owner.address });

                // Ensure Only The Owner Can Issue Tokens
                //await decentralBank.issueTokens({ from: customer.address }).should.be.rejected;

                // Unstake Tokens
                //await decentralBank.unstakeTokens({ from: customer.address });

                // Check Unstaking Balances

                //result = await tether.balanceOf(customer.address);
                //assert.equal(result.toString(), tokens('100'), 'customer mock wallet balance after unstaking');
                //expect(await result.toString()).to.equal(await tokens('100'), 'customer mock wallet balance after unstaking');

                // Check Updated Balance of Decentral Bank
                //result = await tether.balanceOf(decentralBank.address);
                //assert.equal(result.toString(), tokens('0'), 'decentral bank mock wallet balance after staking from customer');
                //expect(await result.toString()).to.equal(await tokens('0'), 'decentral bank mock wallet balance after staking from customer');

                // Is Staking Update
                //result = await decentralBank.isStaking(customer.address);
                //assert.equal(result.toString(), 'false', 'customer is no longer staking after unstaking');
                //expect(await result.toString()).to.equal(await 'false', 'customer is no longer staking after unstaking');
            });
        });
    });
});
