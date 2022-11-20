function getRollno(){
  setTimeout(() => {
    let rollNo = [1,2,3,4,5];
    console.log(rollNo)

    setTimeout((rollNo) => {
      let name = 'ayush'
      console.log('2nd setTimeout')

      setTimeout((name)=>{
        console.log(name);
      },200,name)
    },200,rollNo[1])
  },200)
}
getRollno()
