    // 1. Verbal questions

    // 1. A parameter is the declaration of a function, while the argument
    // is the value of the variable that gets passed to the function.
    
    // 2. Return allos a function to output a value back to where it was called.
    // Console log lets us inspect and debug.

    // 3. The code doesn't crash and the console doesn't print 'Undefined'.

    ////////////////////////////////
    // 2.
    
    // function checkPalindrome(string) {
        
    //     // convert the string to lowercase
    //    const lowerCase = string.toLowerCase();
    //     'cat'
    //     // reverse the string
    //     const lettersArray = lowerCase
    //     'tac'
    //     // compare lowercase string w/ the reversed string
    //     'cat' === 'tac'
    // }

    function reverseString(str) {
        return str;
    }

    console.log(reverseString('Hello'));

    ////////////////////////////
    // 3. Check a list

    const students = [
        'Jill',
        'Harold',
        'joe',
        'Manny',
        'Frank',
    ]
    
    function checkForStudent() {
        for (let i = 0; i < students.length; i++) {
           if (students[i] === 'Manny') {
             console.log('the student is Manny ==>', students[i]);  
             return true;
           } 
        }
        console.log('We didnt find Manny');
        return false;
    }
    
    checkForStudent();

//     const studentPresent = rollCall('Jackie', ['Kim', 'George', 'Jackie']);
//     const list = [
//         'Jill',
//         'Harold',
//         'joe',
//         'Manny',
//         'Frank',
//     ]

//     function rollCall(name,list) {
//         for (let i = 0; i < list; i++) {
//             if (name === list[i]);
//             return true;
//         }
//     }
//  console.log(rollCall('joe',list));
    
////////////////////////////////////////
// 4. Sum Array

const sum = sumArray([1, 2, 3, 4, 5, 6]); {
    console.log(sum.reduce(a, b), a + b, 0);
}