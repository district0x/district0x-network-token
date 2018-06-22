#!/usr/bin/env bash
cd resources/public/contracts/src

#solc --overwrite --optimize --bin --abi District0xNetworkToken.sol -o ../build/
#solc --overwrite --optimize --bin --abi MultisigWallet.sol -o ../build/
#solc --overwrite --optimize --bin --abi District0xContribution.sol -o ../build/
solc --overwrite --optimize --bin --abi TokenVesting.sol -o ../build/


cd ../build
#wc -c District0xNetworkToken.bin | awk '{print "District0xNetworkToken: " $1}'
#wc -c District0xContribution.bin | awk '{print "District0xContribution: " $1}'
#wc -c MiniMeTokenFactory.bin | awk '{print "MiniMeTokenFactory: " $1}'
#wc -c MultisigWallet.bin | awk '{print "MultisigWallet: " $1}'

wc -c TokenVesting.bin | awk '{print "TokenVesting: " $1}'