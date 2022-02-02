const IERC20_ABI = [{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LPTokenClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LiquidityAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"log","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPGenerationCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPperETHUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement","type":"bool"}],"name":"addLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addLiquidityToUniswapCORExWETHPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimLPTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createUniswapPairMainnet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyDrain24hAfterLiquidityGenerationEventIsDone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ethContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecondsLeftInLiquidityGenerationEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationOngoing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationParticipationAgreement","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferCheckerAddress","type":"address"}],"name":"setShouldTransferChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenUniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalETHContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPTokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferCheckerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const CVAULT_ABI = [{"inputs":[{"internalType":"address","name":"rlpFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SuperAdminTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"RLP_FACTORY","outputs":[{"internalType":"contract IRLPFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_","type":"uint256"}],"name":"addPendingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"averageFeesPerBlockEpoch","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"averageFeesPerBlockSinceStart","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"core","outputs":[{"internalType":"contract INBUNIERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cumulativeRewardsSinceStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFor","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochCalculationStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPendingDevFeeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"newSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"accCorePerShare","type":"uint256"},{"internalType":"bool","name":"withdrawable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInThisEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAllowanceForPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_DEV_FEE","type":"uint16"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"setPoolWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setStrategyContractOrDistributionContractAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAllRLPForRLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transferDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let metamask_available = (typeof window.ethereum !== 'undefined');
let ever_connected_this_pageload = false;
let _wallet_address = "";

const do_eth_stuff = async (wallet_address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const eth_balance = await provider.getBalance(wallet_address);
    let content = `C:&#92;WINDOWS&#92;SYSTEM32> CORE.EXE
Wallet Address: ${wallet_address}
ETH Balance: ${eth_balance / 1e18}
--------------------------------------------------
  CoreTreasury.sol
// CORE/ETH LP (LP1) = IERC20(0x32Ce7e48debdccbFE0CD037Cc89526E4382cb81b);
LP1_VOUCHER = (0xF6Dd68031a22c8A3F1e7a424cE8F43a1e1A3be3E); // cVault pid 0

// CORE/cBTC LP (LP2) = IERC20(0x6fad7D44640c5cd0120DEeC0301e8cf850BecB68);
LP2_VOUCHER = (0xb8ee07B5ED2FF9dae6C504C9dEe84151F844a591); // cVault pid 1

// coreDAI/wCORE LP (LP3) = IERC20(0x01AC08E821185b6d87E68c67F9dc79A8988688EB);
LP3_VOUCHER = (0xcA00F8eef4cE1F9183E06fA25fE7872fEDcf7456); // cVault pid 2

uint256 public constant DAO_TOKENS_IN_LP1 = 2350;
uint256 public constant DAO_TOKENS_IN_LP2 = 9250e5;
uint256 public constant DAO_TOKENS_IN_LP3 = 45;`;
    $("#prompt_content").html(
        content
    );
    const token_contract_at = (address) => {
        return new ethers.Contract(address, IERC20_ABI, provider);
    }
    const lp1_contract = token_contract_at("0x32Ce7e48debdccbFE0CD037Cc89526E4382cb81b");
    const lp1_balance = await lp1_contract.balanceOf(wallet_address);
    const lp2_contract = token_contract_at("0x6fad7D44640c5cd0120DEeC0301e8cf850BecB68");
    const lp2_balance = await lp2_contract.balanceOf(wallet_address);
    const lp3_contract = token_contract_at("0x01AC08E821185b6d87E68c67F9dc79A8988688EB");
    const lp3_balance = await lp3_contract.balanceOf(wallet_address);


    const lp1_voucher_contract = token_contract_at("0xF6Dd68031a22c8A3F1e7a424cE8F43a1e1A3be3E");
    const lp1_voucher_balance = await lp1_voucher_contract.balanceOf(wallet_address);
    const lp2_voucher_contract = token_contract_at("0xb8ee07B5ED2FF9dae6C504C9dEe84151F844a591");
    const lp2_voucher_balance = await lp2_voucher_contract.balanceOf(wallet_address);
    const lp3_voucher_contract = token_contract_at("0xcA00F8eef4cE1F9183E06fA25fE7872fEDcf7456");
    const lp3_voucher_balance = await lp3_voucher_contract.balanceOf(wallet_address);

    const corevault = await new ethers.Contract("0xC5cacb708425961594B63eC171f4df27a9c0d8c9", CVAULT_ABI, provider);
    const lp1_voucher_staked = (await corevault.userInfo(0, wallet_address)).amount;
    const lp2_voucher_staked = (await corevault.userInfo(1, wallet_address)).amount;
    const lp3_voucher_staked = (await corevault.userInfo(2, wallet_address)).amount;
    

    $("#prompt_content").html(`
<pre>LP1 Balance: ${lp1_balance}
LP2 Balance: ${lp2_balance}
LP3 Balance: ${lp3_balance}
LP1 Voucher Balance: ${lp1_voucher_balance}
LP2 Voucher Balance: ${lp2_voucher_balance}
LP3 Voucher Balance: ${lp3_voucher_balance}
LP1 Vouchers Staked: ${lp1_voucher_staked}
LP2 Vouchers Staked: ${lp2_voucher_staked}
LP3 Vouchers Staked: ${lp3_voucher_staked}</pre>
    `);
    if(lp1_balance > 0) {
        additional_content = `
        <p><h4>You have unwrapped LP1!</h4>
        You need to convert your LP1 tokens to coreDAO Vouchers as soon as possible, or risk losing them</p>
        <button onClick="convert('lp1')">Convert now!</button>
        `;
        set_wallet_info_panel_content(additional_content);
    }
    else if(lp2_balance > 0) {
        additional_content = `
        <p><h4>You have unwrapped LP2!</h4>
        You need to convert your LP2 tokens to coreDAO Vouchers as soon as possible, or risk losing them</p>
        <button onClick="convert('lp2')">Convert now!</button>
        `;
        // gib approval to 0xb8ee07b5ed2ff9dae6c504c9dee84151f844a591
        set_wallet_info_panel_content(additional_content);
    }
    else if(lp3_balance > 0) {
        additional_content = `
        <p><h4>You have unwrapped LP3!</h4>
        You need to convert your LP3 tokens to coreDAO Vouchers as soon as possible, or risk losing them</p>
        <button onClick="convert('lp3')">Convert now!</button>
        `;
        // gib approval to 0xca00f8eef4ce1f9183e06fa25fe7872fedcf7456
        set_wallet_info_panel_content(additional_content);
    }
    else if(lp1_voucher_balance==0 && lp2_voucher_balance==0 && lp3_voucher_balance==0) {
        additional_content = `
        <p><h4>You're ready!</h4>
        You are ready with CoreDAO Vouchers in your wallet.<br /><small style="font-size: 0.2em; color: #bbb">zuck is watching. he's always watching, and if you think you he isn't, then he's probably on your trail hotter than ever. run.</small></p>
        `;
        set_wallet_info_panel_content(additional_content);
    }
    else if(lp1_voucher_staked==0 && lp2_voucher_staked==0 && lp3_voucher_staked==0) {
        additional_content = `
        <p><h4>You're broke!</h4>
        You have no Core LP, CoreDAO Vouchers, or CoreDAO Vouchers staked.<br /><small style="font-size: 0.2em; color: #bbb">zuck is watching. he's always watching, and if you think you he isn't, then he's probably on your trail hotter than ever. run.</small></p>
        `;
        set_wallet_info_panel_content(additional_content);
    }
    else {
        additional_content = `
        <p><h4>You're ready!</h4>
        Your CoreDAO Vouchers are staked. No action needed at this time!<br /><small style="font-size: 0.2em; color: #bbb">zuck is watching. he's always watching, and if you think you he isn't, then he's probably on your trail hotter than ever. run.</small></p>
        `;
        set_wallet_info_panel_content(additional_content);
    }
    
}

const set_wallet_info_panel_content = (additional_content = "") => {
    let content = `
        <section id="metamask_connect">
        <center>
            🐹 Connected to ${wallet_address}<br />
        </center>
        ${additional_content}
        </section>
    `;
    $("#windowContent").html(content);
}

const hide_metamask_popup = () => {
    $("#metamask_connect_window").remove();
}

const connect_metamask = () => {
    $("#metamask_connect").html("Please hodl...");
    window.ethereum.request({ method: 'eth_requestAccounts' });
}

const wallet_connected = (_wallet_address) => {
    wallet_address = _wallet_address;
    console.log("wallet_connected");
    set_wallet_info_panel_content("🐹 loading...");
    do_eth_stuff(wallet_address);
}

const show_metamask_connect_window = () => {
    console.log("show_metamask_connect_window");
    let content = `
        <section id="metamask_connect">
            Metamask detected: ${metamask_available}<br /><br />
            <button onClick="connect_metamask()">Connect Metamask</button>
        </section>
    `;
    $("#windowContent").html(content);
}

const check_selected_address_again_lol = () => {
    if(ever_connected_this_pageload) {
        return;
    }
    if(ethereum.selectedAddress != null) {
        ever_connected_this_pageload = true;
        console.log("ethereum.selectedAddress != null");
        wallet_connected(ethereum.selectedAddress);
    }
}

const start = () => {
    if(metamask_available) {
        console.log("metamask_available");
        window.ethereum.on('accountsChanged', function (accounts) {
            wallet_address = accounts[0];
            wallet_connected(wallet_address);
        });
        setTimeout(check_selected_address_again_lol, 10);
        setTimeout(check_selected_address_again_lol, 50);
        setTimeout(check_selected_address_again_lol, 100);
        setTimeout(check_selected_address_again_lol, 500);
        setTimeout(check_selected_address_again_lol, 1000);
        if(ethereum.selectedAddress != null) {
            console.log("ethereum.selectedAddress != null");
            wallet_connected(ethereum.selectedAddress);
        }
        else {
            console.log("default...");
            show_metamask_connect_window();
        }
    }
}