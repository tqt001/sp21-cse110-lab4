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
    B. student["Grad Year"]  
    C. student.greeting()  
    D. student['Favorite Teacher'].name
    E. student.courseload[0]

13. 
    A. `32` This was returned because + operator was for numeric addition and string concatenation. In this case, the 2 was converted to a string and was added to the 3 string.  
    B. `1` This was returned because - operator was used for numeric subraction only. In this case, the 3 was converted to a numerical value and was then subtracted with 2.  
    C. `3` This was returned because the null value was evaulted to 0 and 0 + 3 = 3.  
    D. `3null` This was returned because the + operator changes everything to strings for concatenation.  
    E. `4` This was returned because true was evaluated to 1 and 1 + 3 = 4.   
    F. `0` This was returned because both false and null both are evaluated to 0 and 0 + 0 = 0.  
    G. `3undefined` This was returned because the + operator changes everything to a string for concatenation.  
    H. `NaN` This was returned because the - operator was only for numerical subtraction operations, but the undefined evaulates to NaN. Therefore, the result was NaN.  

14.  
    A. `true` This was returned because the 2 turned into a numerical and then is compared to 1.  
    B. `false` This was returned because this will be compared as a string. So starting with the first index, we see that 1 is less than 2 alphabetically. Therefore, false was returned.  
    C. `true` This was returned because the '2' is casted to a numerical value. We know that 2 == 2.  
    D. `false` This was returned because the === is a strict comparison operator and since the type is different, it will return false. In this case, we have a numerical and string comparison.  
    E. `false` This was returned because true is evaluated to 1. We know that 1 is not equal to 2. Therefore, the return value is false.  
    F. `true` This was returned because the Boolean(2) will be evaluated to true. We know that true == true is equal to true. Therefore, the returned value is true. 

15. `==` will compare variables with type correction. `===` will compare the variables literally by checking the value and the type. 
16. check js file
17. `[2, 4, 6]` This was returned because the doSomething function will double the parameters that is passed in. We see that this will be pushed into the newArr. 
18. check js file
19. `1 4 3 2` 
