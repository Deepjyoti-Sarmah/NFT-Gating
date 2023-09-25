const express = require("express");
const {Web3} = require("web3"); 
const ABI = require("./ABI.json");

const app = express();
const web3 = new Web3("https://skilled-wiser-lake.ethereum-sepolia.discover.quiknode.pro/73477a64596690dd501ed8f4cd73113918f4800a/");
const contractAddress = "0x1C5008E8853D89E6bD823A72FCB6512fA1b74EC8";

const contract = new web3.eth.Contract(ABI, contractAddress);
// console.log(contract);

const fetchNFTs = async() => {
  try {
    const nftBalance = await contract.methods.balanceOf("0x18992684FBeEEd5A61B48610fec6137a924cBC98").call();
    return {userNFTs:nftBalance};
  } catch (error) {
    console.error("Error in fetching NFT");
  }
  // console.log(Number(nftBalance));
}
// fetchNFTs().then(console.log);

app.post('/members', async(req, res) => {
  try {
    const account
  } catch (error) {
    return.status(500).json({error: "Internal server error"});
  }
})



const PORT = 3000;

app.listen(PORT,() => {
  console.log(`Server is running at ${PORT}`)
})
