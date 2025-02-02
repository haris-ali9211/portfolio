import { getSkill, Skill, skills } from "../skills/config"
import Hotei from "./../../images/hotei.png";
import Trapdart from "./../../images/trapdart.png";
import Marketplace from "./../../images/marketplace.png";
import Btcpx from "./../../images/btcpx.png";
import Defi from "./../../images/defi.png";
import THC from "./../../images/thc.png";
import AirRock from "./../../images/air.png";


export type Project = {
  name: string,
  description: string,
  url: string,
  github: string,
  technologies: Skill[],
}

export type FeatureProject = {
  name: string,
  description: string,
  image: any,
  url: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "NFT Marketplace",
    description: "A marketplace where users can buy, list and set their NFT's on Auction.",
    url: "https://marketplace-story.surge.sh/",
    github: "https://github.com/Rabeebaqdas/NFT_MarketPlace_2.0",
    technologies: getSkill(["html",'css',"EthersJS",'javascript',"react", "moralis", "solidity", "hardhat","IPFS","Pinata"])
  },
  {
    name: "Automated Raffle",
    description: "An automated lottery that is picking up the winner after every 30 seconds with the help of random numbers generated by the chainlink VRF V2",
    url: "https://automated-lottery.surge.sh/",
    github: "https://github.com/haris-ali9211/lottery-hardhat",
    technologies: getSkill(["solidity", "hardhat", "NodeJs", "javascript", "Chainlink","EthersJS"])
  },
  {
    name: "Ether Lottery",
    description: "A Lottery that is picking up the winner with the help of random numbers generated by the chainlink VRF V2",
    url: "https://ether-lottery.surge.sh/",
    github: "https://github.com/Rabeebaqdas/Lottery_dapp",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","EthersJS"])
  },
  {
    name: "Vending Machine",
    description: "A vending machine where users can buy donuts for themselves and the owner can refill the machine and can withdraw the amount from the machine",
    url: "https://vending-machine.surge.sh/",
    github: "https://github.com/Rabeebaqdas/Vending-Machine",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","EthersJS"])
  },
  {
    name: "Krypt",
    description: "A platform where user can send their transaction to anyone on the Ethereum network",
    url: "https://krypt-dapp.surge.sh/",
    github: "https://github.com/haris-ali9211/krypt-v2",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","EthersJS"])
  },
]

export const featureProjects: FeatureProject[] = [

  {
    name: "The High Club",
    description: "The High Club is an exclusive well-being project, which will be launched on the Ethereum Blockchain.",
    image: THC,
    url: "https://mint.thehighclub.co/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","EthersJS"])
  },

  {
    name: "BTCPX",
    description: "BTC Proxy is a multi-institutional protocol for the decentralized tokenization of Bitcoin on ERC20 and MRC20 formats utilizing the Proxy Relay.",
    image: Btcpx,
    url: "https://btcproxy.io/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js"])
  },
  {
    name: "NFT Marketplace",
    description: "This is a non-fungible token (NFT) marketplace that offers users the ability to buy, sell, create, and trade NFTs.",
   image: Marketplace,
    url: "https://nftmarket.web.app/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js"])
  },
  {
    name: "DEFI Swap",
    description: "DEFISwap is a Decentralized Exchange (DEX), utilizing the automated market maker (AMM) protocol for defining digital asset prices and providing liquidity, built on Binance Smart Chain (BSC).",
   image: Defi,
    url: "https://defiswap.pluton.ltd/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js"])
  },
  {
    name: "Trapdart",
    description: "Trapdart is an Initial coin offering (ICOs) based project that raises funds for products and services usually related to cryptocurrency.",
   image: Trapdart,
    url: "https://trapdart.io/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js","EthersJS"])
  },
  {
    name: "Hotei Energy",
    description: "Hotei Energy Share Token (HEST)™© is a token created and published on the Binance Smart Chain network (BEP20), whose objective is to serve as a support economic for the development of the activities, products, goods and services of the startup Hotei Energy B.V.™©.",
   image: Hotei,
    url: "https://hotieenergy.pluton.ltd/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js"])
  },
  {
    name: "Air Brick",
    description: "Air Brick is a decentralized finance (DeFi) platform built to create and facilitate a token pegged on USDT and bring out new opportunities for both tokens.",
    image: AirRock,
    url: "http://airrock.pluton.ltd/",
    technologies: getSkill(["html", "css", "javascript", "NodeJS", "solidity", "hardhat", "react","IPFS","Pinata","MongoDB","web3js"])
  },
]