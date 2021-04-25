## Part 1
1. `values added:  20` This was printed due to the var type variable used for result. In this case, 10 + 10 = 20.  
2. `final result:  20` Since the result variable type was var, it is seen as a global variable. Therefore, the 20 is still being printed for the result.  
3. `values added:  20` This was printed due to the let type variable used for result. Just like before, 10 + 10 still = 20.  
4. `ReferenceError: result is not defined` This was printed because of the limited scope of the let variable type. Unlike the var type, let only exists in the if block.  
5. `TypeError: Assignment to constant variable.` This was printed because of the const variable being unable to change. Therefore, the assigment is invalid.  
6. `TypeError: Assignment to constant variable.` This was printed because of the const variable being unable to change. Therefore, the assigment is invalid.  

## Part 1b
1. `3` This was returned because of the iteration of i. Since i was declared as a var, it is considered global.  
2. `150` This was returned because of the final calculation of the price. It was also declared as a var type making it global.  
3. `150`This was the caluclated fial price. This variable was also declared as a var type making it global.  
4. This will return the array with the pushed values of the finalPrice. Since this is declared as var, it will be global.  
5. `ReferenceError: i is not defined` This was an error because of the variable i being declared as let. It will not be seen outside the for loop scope.  
6. `ReferenceError: discountedPrice is not defined` This was an error because the variable discountedPrice was declared as let and will only be seen in the scope of the for loop.  
7. `150` This was returned because finalPrice was declared with the let variable outside of the for loop. Thats why the console.log function is able to recognize the variable being changed.  
8. This returns all the pushed finalPrice values in the discounted list. This is possible due to the variables being declared outside of the for loop. Therefore, it exists in the scope of the function.  
9. `ReferenceError: i is not defined` This was an error because of the let type of the i variable being declared in the for loop.  
10. `3` This was returned because of the length variable being declared as const out side of the for loop. It exists in the scope of the function.  
11. This returns all the pushed discountedPrice in the list discounted. This is possible as the discounted variable was declared as const outside of the for loop. This means it exists in the scope of the function.  
12.  
    A. student.name
    B. student.
    C.
    D. 
    E. 