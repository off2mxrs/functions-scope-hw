    // 1. Verbal questions

    // 1. A parameter is the declaration of a function, while the argument
    // is the value of the variable that gets passed to the function.
    
    // 2. Return allos a function to output a value back to where it was called.
    // Console log lets us inspect and debug.

    // 3. The code doesn't crash and the console doesn't print 'Undefined'.

    ////////////////////////////////
    // 2. PALINDROME
    
    function checkPalindrome(string) {
        
        // convert the string to lowercase
       const lowerCase = string.toLowerCase();
        
        // reverse the string
        const reword = lowerCase.split('').reverse().join('');
        
        if(lowerCase === reword){
            return true
        } else {
            return false
        }
        // compare lowercase string w/ the reversed string
       
 }
 const wordIsPalindrome = checkPalindrome('Racecar');
 console.log(wordIsPalindrome);


///////////////////////////////////////////////
// 3. Check a list

// Loop over the students array
// compare the name against the current student
// if name matches return true
function checkForStudent(name, students) {
   console.log(name);
   console.log(students);

   for (let i = 0; i < students.length; i++) {
       if (students[i] === name) {
           return true
       }
   }
}

const studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);
console.log(studentIncluded);// this should return true


// ////////////////////////////////////////
// 4. Sum Array
function sumArray() {
    for (let i = 0; i <= sumArray.length; i++) {
        let array = sumArray[i] + sumArray[i]
        return true  
    }
    
}

const sum = sumArray([1, 2, 3, 4, 5, 6]);
console.log(sum);     