export class DataFactory {
  public static listNames = ['Aarron','Abott','Bartolomey','Villi','Gideon','Olden','John']
  public static listSurNames = ['Armstrong','Badcock','Bishop','Butts','Clayton','Martinson','Whittemore']

  public static getFirstName(i: number = -1) {
    if (i < 0) {
      i = getRandomIndex(DataFactory.listNames.length)
    }
    return DataFactory.listNames[i]
  }

  public static getSurName(i: number = -1) {
    if (i < 0) {
      i = getRandomIndex(DataFactory.listSurNames.length)
    }
    return DataFactory.listSurNames[i]
  }

  public static getBusinessName(firstName: string = null, secondName: string = null,surName: string = null) {
    const names = DataFactory.listNames
    const surNames = DataFactory.listSurNames
    if (!firstName) {
      firstName = names[getRandomIndex(names.length)]
    }
    if (!secondName) {
      const index = getRandomIndex(names.length)
      secondName = names[index]
    }
    if (!surName) {
      surName = surNames[getRandomIndex(surNames.length)]
    }
    const firstLetter = firstName[0]
    const secondLetter = secondName[0]
    return firstLetter + '.' + secondLetter + '.' + surName
  }

  public static dummy(): User {
    return new User(DataFactory.getFirstName(),DataFactory.getSurName(),DataFactory.getBusinessName())
  }

  public static dummyList(): User[] {
    let ret = []
    let i = 0
    while (i < 2){
      const firstName = DataFactory.getFirstName()
      const surName = DataFactory.getSurName()
      const businessName = DataFactory.getBusinessName(firstName,null,surName)
      const temp = new User(firstName, surName,businessName)
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

export  function getRandomIndex(total: number) {
  return Math.floor(Math.random() * (total)) ;
  ;
}

