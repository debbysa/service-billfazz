export interface IprepaidTransaction {
  destinationNo: string
  refId: string
  productCode: string
  callbackUrl: string
}

export interface IElectricityInformation {
  destinationNo: string
  type: string
}

export interface IEWalletInformation {
  destinationNo: string
  type: string
  productCode: string
}
