function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName: function(){
          console.log(this.firstName + " " + this.lastName);
      }
    };
    return person;
}

personMaker();