import { Contract, GlobalState, abimethod } from '@algorandfoundation/algorand-typescript'

export class AlgoflowVault extends Contract {

  public data = GlobalState<string>({ initialValue: '' })

  @abimethod()
  public writeData(inputData: string): void {
    this.data.value = inputData
  }

  @abimethod({ readonly: true })
  public getData(): string {
    return this.data.value
  }
}
