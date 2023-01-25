export class DataFactory {
  public static listNames = ['Aarron','Abott','Bartolomey','Villi','Gideon','Olden','John']
  public static listSurNames = ['Armstrong','Badcock','Bishop','Butts','Clayton','Martinson','Whittemore']

  public static getFirstName(i: number = -1) {
    if (i < 0) {
      i = getRandomArbitrary(0, DataFactory.listNames.length)
    }
    return DataFactory.listNames[i]
  }

  public static getSurName(i: number = -1) {
    if (i < 0) {
      i = getRandomArbitrary(0, DataFactory.listSurNames.length)
    }
    return DataFactory.listSurNames[i]
  }

  public static getBusinessName(i: number = -1,j: number = -1,k: number = -1) {
    const names = DataFactory.listNames
    const surNames = DataFactory.listSurNames
    if (i < 0) {
     i = getRandomArbitrary(0, names.length)
    }
    if (j < 0) {
     j = getRandomArbitrary(0, names.length)
    }
    if (k < 0) {
     k = getRandomArbitrary(0, surNames.length)
    }
    return names[i][0] + '.' + names[j][0] + '.' + surNames[k]
  }

  public static dummy(): User {
    return new User(DataFactory.getFirstName(),DataFactory.getSurName(),DataFactory.getBusinessName())
  }

  public static dummyList(): User[] {
    let ret = []
    let i = 0
    while (i < 2){
      const temp = new User(DataFactory.getFirstName(),DataFactory.getSurName(),DataFactory.getBusinessName())
      ret.push(temp)
      i++
    }
    return ret
  }
}


export class User {
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

export  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

