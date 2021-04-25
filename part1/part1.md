**Part 1a**
1. `values added:  20` This was printed due to the var type variable used for result. In this case, 10 + 10 = 20.  
2. `final result:  20` Since the result variable type was var, it is seen as a global variable. Therefore, the 20 is still being printed for the result.  
3. `values added:  20` This was printed due to the let type variable used for result. Just like before, 10 + 10 still = 20.  
4. `ReferenceError: result is not defined` This was printed because of the limited scope of the let variable type. Unlike the var type, let only exists in the if block.  
5. `TypeError: Assignment to constant variable.` This was printed because of the const variable being unable to change. Therefore, the assigment is invalid.  
6. `TypeError: Assignment to constant variable.` This was printed because of the const variable being unable to change. Therefore, the assigment is invalid.  

