# eth-wallet-generator

Ethereum wallet generator. Allows you to generate new ETH account (address, private key and mnemonic). Also, you can recover your account by providing a mnemonic.

This app uses ethers.js for generating and recovering accounts.

# Install
```
yarn
```

# Generate
To generate new random account:
```
yarn generate
```

It would give console output like this:
```
address: 0xE5766f072B97eaF3705F6FA761E6F405842944a5
private key: 0x9a93f0a71ce322940f161ae0c50cb70991dc6dd2ba3257ac292cc5e3edfc8272
mnemonic: dial equip wolf tone enemy donate meadow topic dog tilt top notable
```

# Recover

To recover from some mnemonic (dial equip...):
```
yarn recover dial equip wolf tone enemy donate meadow topic dog tilt top notable
```

It would give you the same output:
```
address: 0xE5766f072B97eaF3705F6FA761E6F405842944a5
private key: 0x9a93f0a71ce322940f161ae0c50cb70991dc6dd2ba3257ac292cc5e3edfc8272
mnemonic: dial equip wolf tone enemy donate meadow topic dog tilt top notable
```
