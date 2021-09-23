import {
  Ethereum_Query,
  Input_balanceOf,
  Input_ownerOf,
  Input_name,
  Input_symbol,
  Input_tokenURI,
  Input_getApproved,
  Input_isApprovedForAll,
} from "./w3";

import { BigInt } from '@web3api/wasm-as'

export function balanceOf(input: Input_balanceOf): BigInt {
  const res = Ethereum_Query.callContractView({
    address: input.address,
    method: "function balanceOf(address owner) public view returns (uint256)",
    args: [input.owner],
    connection: input.connection,
  });

  return BigInt.fromString(res)
}

export function ownerOf(input: Input_ownerOf): string {
  const res = Ethereum_Query.callContractView({
    address: input.address,
    method: "function ownerOf(uint256 tokenId) public view returns (address)",
    args: [input.tokenId.toString()],
    connection: input.connection,
  });

  return res
}

export function name(input: Input_name): string {
  return Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function name() public view returns (string memory)",
    args: null
  })
}

export function symbol(input: Input_symbol): string {
  return Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function symbol() public view returns (string memory)",
    args: null
  })
}

export function tokenURI(input: Input_tokenURI): string {
  return Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function tokenURI(uint256 tokenId) public view returns (string)",
    args: [input.tokenId.toString()]
  })
}

export function getApproved(input: Input_getApproved): string {
  return Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function getApproved(uint256 tokenId) public view returns (string)",
    args: [input.tokenId.toString()]
  })
}

export function isApprovedForAll(input: Input_isApprovedForAll): boolean {
  const res = Ethereum_Query.callContractView({
    connection: input.connection,
    address: input.address,
    method: "function isApprovedForAll(address owner, address operator) public view returns (bool)",
    args: [input.owner, input.operator]
  })

  return res == 'true'
}
