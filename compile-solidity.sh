#!/usr/bin/env bash
cd resources/public/contracts/src

solc --overwrite --optimize --bin --abi D0xToken.sol -o ../build/
#solc --overwrite --optimize --bin --abi MultisigWallet.sol -o ../build/
solc --overwrite --optimize --bin --abi District0xContribution.sol -o ../build/

cd ../build
wc -c D0xToken.bin | awk '{print "D0xToken: " $1}'
#wc -c MultisigWallet.bin | awk '{print "MultisigWallet: " $1}'
wc -c District0xContribution.bin | awk '{print "District0xContribution: " $1}'

