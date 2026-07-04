let name = {
    firstname: "Piyush",
    lastName: "Gupta",
  };
  
  function printName(city, country) {
    console.log(this.firstname + " " + this.lastName + " , ", city, ' , ', country);
  }
  
  printName.apply(name, ["Bareilly", 'India']);
  
  // Polyfill for Function.prototype.myapply()
  Function.prototype.myapply = function (context, args = []) {
      // If no context is provided (null/undefined), use the global object.
      // This will become the value of 'this' inside the function.
      context = context || globalThis;
    
      // Create a unique property name to avoid overwriting any existing
      // property on the context object.
      const uniqueKey = Symbol();
    
      // Temporarily attach the function to the context object.
      // 'this' refers to the function on which myCall() was invoked.
      context[uniqueKey] = this;
    
      // Invoke the function as a method of the context object.
      // Because it is called as context[uniqueKey](), 'this' inside the
      // function will point to the context object.
      const result = context[uniqueKey](...args);
    
      // Remove the temporary property so the original object remains unchanged.
      delete context[uniqueKey];
    
      // Return whatever the original function returned.
      return result;
    };
  
    printName.myapply(name, ["Bareilly", 'India']);
  