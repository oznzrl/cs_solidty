# Install VsCode
• 	https://code.visualstudio.com/download

# Install VsCode Extension
>   extensions > truffle


# Install Node.js
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\ 	  sudo apt-get install -y nodejs


# Install git
	apt-get install git

# Check Versions
   node --version
• 	v16.18.1

   npm --version
• 	8.19.2

>   git --version
• 	git version 2.25.1	

# Install Truffle
>   https://trufflesuite.com/docs/truffle/how-to/install/

npm install -g truffle

  truffle --version

>	• Truffle v5.5.30 (core: 5.5.30)
>	• Ganache v7.4.0
>	• Solidity v0.5.16 (solc-js)
>	• Node v18.12.1
>	• Web3.js v1.7.4


# Development environment
   git clone https://github.com/oznzrl/cs_solidity.git --branch main

 >    • contracts/: Directory for Solidity contracts
 >    • migrations/: Directory for scriptable deployment files
 >    • test/: Directory for test files for testing your application and contracts
 >    • truffle-config.js: Truffle configuration files
# Testing Environment
    truffle develop

    truffle(develop)> compile

    truffle(develop)> migrate

    truffle(develop)> test

 >        Compiling your contracts...
 >       ===========================
 >        Everything is up to date, there is nothing to compile.
 >       Contract: Storage
 >           ✔ initial test value (113ms)
 >       1 passing (139ms)