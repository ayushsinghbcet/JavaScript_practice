  let obj1 ={
    fName : 'Ayush',
    lName : 'Singh',
    city: 'Asansol',
    getName : function(){
      console.log(`I am ${this.fName} ${this.lName} from ${this.city}`)
    }
  }
  let obj2 = {
    fName : 'Aman'
  }

  obj2.__proto__ = obj1;

  console.log(obj1.getName())
  obj2.getName()
  console.log(obj2.__proto__.getName())
