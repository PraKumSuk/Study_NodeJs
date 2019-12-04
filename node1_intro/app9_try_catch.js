function sayHello(name) {
    console.log("Hello World. ");
  
    if (!name) {
      throw new Error('Doh GIve some name bro!')
    }
  
    try {
      console.log("Now the Name is going to be Printed : " + name);
    } catch (e) {
      console.log("Oh no.....something went wrong");
    }
  }
  
  sayHello("Praveen");
  