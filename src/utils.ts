export default class Utils {

  public static toBaseUnit(amount: any, decimals: any): string {
    return (BigInt(amount) * ( BigInt(10) ** BigInt(decimals) )).toString()
  }

  public static toCoinUnit(amount: any, decimals: any): string {
    return (BigInt(amount) / ( BigInt(10) ** BigInt(decimals) )).toString()
  }
}