const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const Erc721testable = await ethers.getContractFactory("ERC721Testable")
  const erc721 = await Erc721testable.deploy("TNT", "Test Nonfungible Token", "baseTestURI")
  console.log("ERC721 deployed to:", erc721.address)
  let constants = JSON.parse(
    fs.readFileSync('./recipes/constants.json', { encoding: 'utf8' } )
  )
  constants = {}
  constants['Erc721Addr'] = erc721.address
  const signers = await ethers.getSigners()
  for(let i = 0; i < 2; i++) {
    const address = await signers[i].getAddress()
    constants[`address${i}`] = address
    await erc721.mint(address)
    await erc721.mint(address)
    await erc721.mint(address)
    console.log(`Minted three to ${address}`)
  }
  fs.writeFileSync(
    './recipes/constants.json',
    JSON.stringify(constants)
  )
  console.log("Wrote addresses and amount to recipes/constants")
  console.log("Done ✨")
}

main()
  .catch(err => {
    console.error(err)
  })
