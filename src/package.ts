export class Package {
  public generate = (length: number = 3): string => {
    let result: string = "";
    for (let i = 0; i <= length; i++) {
      result += i;
    }
    return result;
  };
}
