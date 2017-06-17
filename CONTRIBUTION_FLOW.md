# district0x Contribution Period Flow (DNT Token Sale)

### Instantiation

#### 1. Deploy contribution contract [District0xContribution.sol](/resources/public/contracts/src/District0xContribution.sol)
district0x contribution contract will be deployed at least 5 days prior to the beginning of the contribution period.

Parameters:
- _Owners_: Addresses allowed to confirm contract transactions that require multiple signatures. Such as enabling or cancelling contribution period.
- _Required_: Number of signatures required to run multi-signature transaction
- _Wallet_: Multi-signature wallet holding raised funds
- _Cofounder 1_: Address of Matus
- _Cofounder 2_: Address of Joe
- _Early Sponsor_: Address of our early sponsor
- _Advisers_: 4 addresses of advisers consisting of: Luis Cuende from Aragon, Carl Bennett from Status, our legal adviser and community advisers wallet.
From community advisers wallet, DNT rewards will be send after sale to community members listed in this [spreadsheet](https://docs.google.com/spreadsheets/d/11Kw5JK2YTFQzoC5yHH7EcGJAF3Ve9ypz3M6J12h0PmU/edit#gid=0).

#### 2. Deploy MiniMeTokenFactory [MiniMeToken.sol](/resources/public/contracts/src/MiniMeToken.sol)
MiniMeTokenFactory contract must be deployed, so DNT Token becomes clonable.

No parameters.
 
#### 3. Deploy token contract [District0xNetworkToken.sol](/resources/public/contracts/src/District0xNetworkToken.sol)


Parameters:
- _Controller_: Address of District0xContribution contract. Its address will be the only one allowed to generate predetermined
 amount of DNT tokens. District0xContribution doesn't implement function to transfer controller ownership, therefore additional
 DNT tokens can never be generated.
- _TokenFactory_: Address of earlier deployed MiniMeTokenFactory

#### 4. Set DNT Token address `District0xContribution.setDistrict0xNetworkToken()`
This method sets address of District0xNetworkToken in contribution contract. At this moment, exactly 1,000,000,000 DNT
tokens is generated and assigned to contribution contract. 

Parameters:
- _district0xNetworkToken_: Address of earlier deployed District0xNetworkToken 


#### 5. Set contribution period parameters `District0xContribution.setContribPeriod()`
This method sets up contribution period parameters and also vesting for founders, early sponsor and advisers. Note, after
setting up, contribution period is still not valid. To be valid it must be confirmed by multiple signatures (see following step).
  
Parameters:
- _Contribution Period Index_: **0** Index number of contribution period to be set up (0, 1 or 2)
- _Soft Cap Amount_: **10 Mil USD in ETH** Soft Cap for a contribution period
- _After Soft Cap Duration_: **48 hours** Time to the end of contribution from the moment of reaching soft cap (unless reaching Hard Cap)
- _Hard Cap Amount_: **50 Mil USD in ETH** When reached this amount, the contribution period ends instantly
- _Start Time_: **July 18, 3:00pm UTC** Beginning of a contribution period
- _End Time_: **August 1, 3:00pm UTC** End of a contribution period, unless Soft or Hard cap is reached

#### 6. Enable contribution period `District0xContribution.enableContribPeriod()`
This method will be executed only with multiple signatures 4/6 of our team and trusted individuals from Ethereum community (listed in our whitepaper).
It will make a contribution period confirmed with current parameters. 

Parameters:
- _Contribution Period Index_: **0** Index number of contribution period to be enabled (0, 1 or 2)

### Contribution

#### 7. Buy DNT tokens `District0xContribution.contribute()` or `District0xContribution.fallback()` 
This method will save your address and amount of your contribution. If you contribute multiple times from the
same address amounts will be added up. Note, since we'll allocate DNT proportionally to the contributed amount, DNT
tokens will not be send to contributors immediately. Distribution will happen shortly after sale. Contributed
Ether is transferred to our multi-signature wallet after each contribution. Note, **maximum gas price** that can be
used for contribution is **50Gwei**, otherwise transaction will fail!

No parameters

#### 8. Emergency stop `District0xContribution.emergencyStop()`
In case of emergency, district0x is able to pause contribution period

### After Contribution

#### 9. Send DNT to contributors `District0xContribution.compensateContributors()`
This method is called by owner after contribution period ends to distribute DNT in proportional manner. 
In case of many contributors will need to be executed multiple times, due to gas limit restrictions.

Parameters:
- _Contribution Period Index_: **0** Index number of contribution period to be enabled (0, 1 or 2)
- _offset_: Number of first contributors to skip.
- _limit_: Maximum number of contributors compensated with this transaction. Offset and limit parameters are 
used to "paging" through contributors

#### 10. Cancel following contribution period `District0xContribution.cancelContribPeriod()`
Second and third contribution period might be subject to cancellation if district0x doesn't need more funds to
achieve goals stated in our roadmap. In this case tokens allocated for a contribution period will be destroyed.
This method must be executed by multi-signature.

Parameters:
- _Contribution Period Index_: **1** Index number of contribution period to be enabled (1 or 2)

<br><br>
<p align="center">
<img src="resources/public/images/dnt-logo-300.png"/>
</p>









