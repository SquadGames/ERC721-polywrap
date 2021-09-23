import {
  Ethereum_Mutation,
  Ethereum_TxResponse,
  Input_approve,
  Input_setApprovalForAll,
  Input_transferFrom,
  Input_safeTransferFrom,
} from "./w3";

export function approve(input: Input_approve): Ethereum_TxResponse {
  const res = Ethereum_Mutation.callContractMethod({
    address: input.address,
    method: "function approve(address to, uint256 tokenId)",
    args: [input.to, input.tokenId.toString()],
    connection: input.connection
  })

  return res
}

export function setApprovalForAll(input: Input_setApprovalForAll): Ethereum_TxResponse {
  const res = Ethereum_Mutation.callContractMethod({
    address: input.address,
    connection: input.connection,
    method: "function setApprovalForAll(address operator, bool approved)",
    args: [input.operator, input.approved.toString()],
  })

  return res
}

export function transferFrom(input: Input_transferFrom): Ethereum_TxResponse {
  const res = Ethereum_Mutation.callContractMethod({
    address: input.address,
    connection: input.connection,
    method: "function transferFrom(address from,address to,uint256 tokenId)",
    args: [input.from, input.to, input.tokenId.toString()],
  })

  return res
}

export function safeTransferFrom(input: Input_safeTransferFrom): Ethereum_TxResponse {
  const res = Ethereum_Mutation.callContractMethod({
    address: input.address,
    connection: input.connection,
    method: "function safeTransferFrom(address from, address to, uint256 tokenId)",
    args: [input.from, input.to, input.tokenId.toString()],
  })

  return res
}

