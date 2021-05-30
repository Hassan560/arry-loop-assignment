// chapter= 17-20

// var arr = [
//     [""]
//     [""]
//     [""]
// ];

// var arry = [
//     [0,1,2,3]
//     [1,0,1,2]
//     [2,1,0,1]
// ]

// for(var i = 1; i <=10; i++){
// document.write(i + "<br>")
// }

// var userInput = +prompt("Enter a number to show its multiplication table");

// var userLength = +prompt("Enter lenght multiplication table");

// document.write('<table border = "1" cellspacing = "0"');

// for (var i = 1; i <= userLength; i++) {
//   document.write(
//     "<tr><td>" + userInput + " x " + i + " = " + userInput * i + "</tr></td>"
//   );
// }

// document.write("</table");

// var fruits = ["apple", "banana", "mango", "orange", "strawberry" ];

// document.write(fruits[0] + "<br>")
// document.write(fruits[1] + "<br>")
// document.write(fruits[2] + "<br>")
// document.write(fruits[3] + "<br>")
// document.write(fruits[4] + "<br>")

// document.write("Element at index 0 is " + fruits[0] + "<br>")
// document.write("Element at index 1 is " + fruits[1] + "<br>")
// document.write("Element at index 2 is " + fruits[2] + "<br>")
// document.write("Element at index 3 is " + fruits[3] + "<br>")
// document.write("Element at index 4 is " + fruits[4] + "<br>")

// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// document.write('Counting:' + "<br>" + counting)
// document.write("<br>")
// document.write("<br>")

// var reverse = [1,2,3,4,5,6,7,8,9,10]
// reverse.reverse()
// document.write("Reverse Counting: " + "<br>" + reverse)
// document.write("<br>")
// document.write("<br>")

// document.write("Even: <br>")
// for(var i = 0; i <=20; i++){
//     if ( i % 2 === 0){
//         document.write(i + ",")
//     }
// }
// document.write("<br>")
// document.write("<br>")

// document.write("Odd: <br>")
// for(var x = 1; x <=20; x++){
//     if (x % 2 !== 0){
//         document.write(x + ",")
//     }
// }
// document.write("<br>")
// document.write("<br>")

// document.write("Series: <br>")
// for(var i = 1; i <=20; i++){
//     if ( i % 2 === 0){
//         document.write(i + "k,")
//     }
// }

// var userInput = prompt("Welcome to abc bakery. What do you want to order sir/ma'am")

// var bakery = ["cake", "apple pie", "cookies", "chips", "patties"]

// var flag = true

// for (var i = 0; i < bakery.length; i++){
//     if (userInput === bakery[i]){
//         flag = false
//         document.write("cookie is available at index " + i + " in our bakery")
//     }
// }
// if (flag){
//     document.write("We are sorry " + userInput + " is not available in our bakery")
// }

// var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
// var max = Math.max(...arr);
// document.write("Array items: " + arr + "<br>")
// document.write("The largest number is " + max )

// var arry = [1,2,8,9,45,65,78,98]
// var min = Math.min(...arry)
// document.write("Array items: " + arry + "<br>")
// document.write("The smallest number is " + min)

    // for(var i =1; i <= 100; i++){
    //     if(i % 5 === 0){
    //         document.write( i + "," )
    //     }
    // }

// chapter- 21-25

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullname = firstName + " " + lastName
// alert("Welcome to you " + fullname)

// var user = prompt("Enter your Favourite Mobile Phones")
// document.write("My favourite phone is: " + user + "<br>" + "Length of string: " + user.length)

//  var letters = "pakistani"
//  var let = letters.indexOf("n")
//  document.write("String: " + letters + "<br>" + "Index of 'n': " + let)

// var letters1 = "Hello world"
// var get = letters1.lastIndexOf("l")
//  document.write("String: " + letters1 + "<br>" + "Index of 'n': " + get)

// var char = "pakistani"
// var charr = char.charAt(5)
// document.write("String: " + char + "<br>" + "Character at index 5:" + charr)

// var city = "Hyderabad"
// var textRep = city.replace("Hyder", "Islam")
// document.write("City: " + city + "<br>" + "After replacement: " + textRep)

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g, "&")
// document.write(rep)

// var number = "472"
// document.write("Value: " + number + "<br>" + "Type: " + typeof number + "<br>")
// var number1 = 472
// document.write("Value: " + number1 + "<br>" + "Type: " + typeof number1)