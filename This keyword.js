let counter = {
    count: 0,
    next: function () {
      console.log(++this.count);

      function display(){
        console.log(this)
      }
      display();
    }
  };
  counter.next();
