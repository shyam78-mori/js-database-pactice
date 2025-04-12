// ! Basic String Methods!
    //     012345678910
        //  1987654321
let str = "hello world";
// 12345678911
//  01

// ~ length     //The length property returns the length of a string:
let len = str.length; //! start the count (1)
// console.log(len);

// ~ charAt     // The charAt() method returns the character at a specified index (position) in a string:
let char = str.charAt(0);
// console.log(char);

// ~charCodeAt()
let code = str.charCodeAt(0);
// console.log(code);

// ~String at()
let letter = str.at(4); //! start index in (0)
// console.log(letter);

//~ Extracting String Parts
// &There are 3 methods for extracting a part of a string:
// !starting index zero (0)
// ? slice(start, end)
// ? substring(start, end)
// ? substr(start, length)

// ~ slice
let part = str.slice(2, 7);
// let part = str.slice(8);
// let part = str.slice(-8, -2); //~ end index me last number not count -2
// let part = str.slice(-9);   //~ index start (1)
// console.log(part);

// ~ substring
let a = str.substring(2, 7); //~ end index me last number not count 7 = -1 = 6
// console.log(a);

// ~Converting to Upper and Lower Case
let f = str.toUpperCase();
// console.log(f);

let z = str.toLowerCase();
// console.log(z);

// ~ concat
let text1 = "Hello";
let text2 = "World";
let text5 = "World";
let text3 = text1.concat(" ", text2, " ", text5);
// console.log(text3);

text = "Hello" + "              " + "World!";
text = "Hello".concat(" ", "World!");
// console.log(text);

// ~ trim
let text9 = "      Hello World!      ";
// let text6 = text9.trim();
// let text6 = text9.trimStart();
let text6 = text9.trimEnd();
// console.log(text6);

// ~ padstart(), padend()
let text10 = "5";
// let padded = text10.padStart(4,"0");
// let padded = text10.padEnd(4,"0");
// let padded = text10.padStart(4,"x");
let padded = text10.padEnd(4, "x");
// console.log(padded);

let numb = 5;
let text11 = numb.toString();
// let padded1 = text11.padStart(4,"y");
let padded1 = text11.padEnd(4, "y");
// console.log(padded1);

// ~repeat
let text99 = "Hello world!\n";
let result = text99.repeat(5);
// console.log(result);

// ~replace
let text66 = "Please visit Microsoft!";
let newText = text66.replace("Microsoft", "W3Schools"); //!The replace() method returns a new string.
// !Writing MICROSOFT (with upper-case) will not work:
// !replace() method is case sensitive
// console.log(newText);

// ?i use
let text44 = "Please visit Microsoft!";
let newText22 = text44.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText22);

// ?g use
let text68 = "Please visit Microsoft and Microsoft!";
let newText33 = text68.replace(/Microsoft/g, "W3Schools");
// console.log(text66);

//~ replaceAll()
let text05 = "I love cats. Cats are very easy to love. Cats are very popular."
text05 = text05.replaceAll("Cats","Dogs");
// text05 = text05.replaceAll("cats","dogs");

// console.log(text05);

//~  split()
//! If you want to work with a string as an array, you can convert it to an array.

let text456 = "a_b_c_d_e_f";
const myArray = text456.split(",");
// const myArray = text456.split("_");
// const myArray = text456.split(" ");
// console.log(myArray);




