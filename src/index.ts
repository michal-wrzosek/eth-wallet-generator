import { Wallet } from 'ethers';

function generate() {
  const wallet = Wallet.createRandom();
  console.log('address:', wallet.address);
  console.log('private key:', wallet.privateKey);
  console.log('mnemonic:', wallet.mnemonic.phrase);
}

function recover(mnemonic: string) {
  const wallet = Wallet.fromMnemonic(mnemonic);
  console.log('address:', wallet.address);
  console.log('private key:', wallet.privateKey);
  console.log('mnemonic:', wallet.mnemonic.phrase);
}

const command = process.argv[2];

if (command === 'generate') {
  generate();
}

if (command === 'recover') {
  const mnemonic = process.argv.slice(3).join(' ');
  recover(mnemonic);
}
