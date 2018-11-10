function func(closure) {

    function innerFunc(inner) {
        return closure + inner
    }

    return innerFunc
  }
  
 let newFunc = func(5)
 let otherNewFunc = func(10)


 console.log(newFunc(2))
 
 console.log(otherNewFunc(2))
 