const express = require("express");
const {Web3} = require("web3"); 
const ABI = require("./ABI.json");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const web3 = new Web3("https://skilled-wiser-lake.ethereum-sepolia.discover.quiknode.pro/73477a64596690dd501ed8f4cd73113918f4800a/");
const contractAddress = "0x1C5008E8853D89E6bD823A72FCB6512fA1b74EC8";

const contract = new web3.eth.Contract(ABI, contractAddress);
// console.log(contract);

const fetchNFTs = async(account) => {
  try {
    const nftBalance = await contract.methods.balanceOf(account).call();
    return {userNFTs:Number(nftBalance)};
  } catch (error) {
    console.error("Error in fetching NFT");
  }
  // console.log(Number(nftBalance));
}
// fetchNFTs().then(console.log);

app.post('/members', async(req, res) => {
  try {
    const account = req.body.from;
    const numNFTs = await fetchNFTs(account);
    if(numNFTs.userNFTs> 0) {
      res.status(200).json({status: 200, numNFTs});
    }else{
      res.status(400).json({status:400, message: "You have zero nft"});
    }
    console.log(numNFTs);
  } catch (error) {
    res.status(500).json({error: "Internal server error"});
  }
})



const PORT = 3000;

app.listen(PORT,() => {
  console.log(`Server is running at ${PORT}`)
})
