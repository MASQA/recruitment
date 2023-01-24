export class DataFactory {
  private static listNames = ['Aarron','Abott','Bartolomey','Villi','Gideon','Olden','John']
  private static listSurNames = ['Aarron','Abott','Bartolomey','Villi','Gideon','Olden','John']

  public static getFirstName(i: number = -1) {
    if (i < 0) {
      i = getRandomArbitrary(0, this.listNames.length)
    }
    return this.listNames[i]
  }

  public static getSurtName(i: number = -1) {
    if (i < 0) {
      i = getRandomArbitrary(0, this.listNames.length)
    }
    return this.listSurNames[i]
  }

  public static getBusinesName(i: number = -1,j: number = -1,k: number = -1) {
    if (i < 0) {
     i = getRandomArbitrary(0, this.listNames.length)
    }
    if (j < 0) {
     j = getRandomArbitrary(0, this.listNames.length)
    }
    if (k < 0) {
     k = getRandomArbitrary(0, this.listSurNames.length)
    }
    return this.listNames[i][0] + '.' + this.listNames[j][0] + '.' + this.listSurNames[k]
  }
  public static dummy(): User {
    return new User(DataFactory.getFirstName(),DataFactory.getSurtName(),DataFactory.getBusinesName())
  }

  public static dummyList(): User[] {
    let ret = []
    let i = 0
    while (i < 2){
      const temp = new User(DataFactory.getFirstName(),DataFactory.getSurtName(),DataFactory.getBusinesName())
      ret.push(temp)
      i++
    }
    return ret
  }
}


class User {
constructor(readonly firstname: string,
  readonly secondname: string,
  readonly businessname: string,
  readonly email: string = firstname + '_'+ secondname + '@domain.any') {  
  }
}

/**
Random reciept
https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

