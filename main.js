/// Example Question: What does the following code do? ///

// let array = [1,2,3,4,5]

// for (i =1; i < array.length; i= i +2) {
//     console.log(array[i] +2);
    
// }

/*if you can answer this now thats great ideally you
can also clearly explain what each part of the code
does. We will break this code down in detail bellow
and then answer this question*/

// now lets break it down line by line

/* here we are creating an array which is a list of
things sepperated by commas. Above they were integers
but they can be anything. When we want to get a
part of the array we can use array[i] where i 
is the position in the array (starting from 0) that
we want to take from(i stands for index). Uncomment
the code bellow and try replacing i with numbers
between 0 and 4 to see what happens*/ 

//  let testarray = [1,'a',0,'false',100];
//  console.log(testarray[i]);


/*on the next line we have for. For works like a
premade function that takes 3 arguments 1. a initial
value for i 2. a maximum for i and 3. How to change 
i each loop. After the arguments are curly brackets
containing code to run at each value of i until i
reaches its maximum value*/

/*Un-comment the code bellow and try altering the 
three arguments of the for loop to see what happens
also try replacing the code in the curly brackets
with the code bellow and see what happens. 
console.log(1+testarray[i]) 
Also
note that you can replace i= i +1 with i++ and get
the same results you will often see i++ because
it is easier to type */

// let testarray = [1,'a',0,'false',100];

//  for (i =0; i < 5; i= i + 1) {
//   console.log("at this index " + testarray[i] );
//  }

/* the last bit of code in the original question
that we need to talk about is array.length
.lenght at the end of an array turns it into a number
that matches how many things are in the array */

/* uncomment the following code then
try using .lenght to console log the length for all
the following arrays*/

// let array1 = [1,'a',0,'false',100];
// let array2 = [1,1,1];
// let array3 = [700];
// let array4 = [];
// console.log(array1.length);

//you should now be ready to answer the question

/// Example Question: What does the following code do? ///

// let array = [1,2,3,4,5]

// for (i =1; i < array.length; i= i +2) {
//     console.log(array[i] +2);
    
// }

/*answer
It creates an array with the numbers between
1 and 5 and then runs a for loop with that array.
the loop starts and index 1 which is 2 it adds 2
to that number and console logs it. Then it advances
2 index numbers to index 3 which is 4 it then adds
2 to that and console logs it. It advances the index
number to 5 but that is larger than the length of
the array (5) so it ends the loop ultimately what is 
loged is 4 and then 6*/




// Example Question2: What does the following code do? ///

// let array = [1,2,3,4,5]
// let newarray= array.map(x => x*2);
// console.log(newarray);

/* these kind of questions are just a test on if you
remember the common types of operations we can do with
arrays here .map is used. .map creates a new array
where each element put into the function written
inside the ()  in this case that is multiplying by
2. So in the end we get an array of [2, 4, 6, 8, 10]
Well I wont go into as much detail for all of them
I will put examples of few other common array methods
bellow that you can uncomment out and mess around
with to help prepare yourself for if they come up on
your interview questions*/


        /////////////////////////////////////
         ///adding and removing from array///
        ////////////////////////////////////


    /// .push , .pop , .shift , and .unshift///


/* uncomment only one at at time or you will have
trouble understanding what they do. In simple
terms these are used to add and remove from the
start or end of arrays */

//let array = [1,2,3,4,5];

//array.shift();
// array.unshift('hi');
//array.push('bye');
//array.pop();

//console.log(array);




               /// .slice ///

/* alter the two arguments to see how it changes the
new array produced slice creates new arrays out of
parts of old ones picking start and end points to
copy from*/

// let array = ['a','b','c','d','e'];
// let newarray = array.slice(1,4);
// console.log(newarray);


            ///////////////////////////////
            ////Searching through array////
            //////////////////////////////

            ///index of ///

/* looks for first element with listed
value and gives you its index replace c with other
letter in the array to see it in action find*/

// let array = ['a','b','c','d','e'];
// console.log(array.indexOf('2'));



            
                ///findindex///
            
/* similar to index of but finds first element 
where a statement is true so can be used for
things other than exact matches try changing 
the argument like you would an if statement and
see how the result changes*/

// let array = [5,6,7,8,9];
// console.log(array.findIndex(x => x >7));


                ///find///

/*.find works the same but returns the value
rather than the index */

// let array = [5,6,7,8,9];
// console.log(array.find(x => x >7));

            ///includes///

/*includes tells us if an array contains a value
or not by returning true of false. Currently this
logs false what would you change to make it log true */

// let array = [5,6,7,8,9];
// console.log(array.includes(10));


            ///Some and Every///

/* these return true or false to tell you if the array
has either some elements that pass a test(soem) or all 
elements that pass the test(every) the array bellow
returns false for both functions try channging it to
make some return true and then to make every return
true*/

// let array =[ 6,7,8];
// console.log("some " + array.some(x => x < 5));
// console.log('every ' + array.every(x => x < 5));


    //////////////////////////////////////////////////
    ///Creating arrays and combining array elements///
    /////////////////////////////////////////////////

   


        /// join and split ///

//join///

/* pretty simple try typing something bwetween the
'' marks and see how the results change note even
if you use numbers the result is a string*/

// let array = ['a','b','c','d','e'];
// console.log(array.join(''));


//split//

/* instead of joining arrays to strings this
splits that string into an array how it does this
try deleting the space between "" and see how the 
results change or replace it with "a"*/

// let ourString = "One day I will be an array";
// let array = ourString.split(" ");
// console.log(array);





            /// concat ///

/* creates a new array by combining attatching the
array in () to the end of the array that concat
is used on*/

//  let array = [5,6,7,8,9];
//  let arraytwo = ['a','b','c','d','e'];

//  let newarray = array.concat(arraytwo);
//  console.log(newarray);


                ///Reduce///
/* combines all the elements in array via mathmatical
operation. For example the code bellow adds all the
elements. Can you change it to multiply together all
of them? note you can call the values whaever 
the first value which I have named acc is the value
of the previous numbers combined and the secound value
here x represents the next element to be combined in*/

// let array = [5,6,7,8,9];
// let OurValue = array.reduce((acc, x) => acc + x);
// console.log(OurValue);

/* note: Reduce moves from left to right for things
like subtraction where direction matters if you want
to start from the right use .reduceRight */



                 ///Filter///
/* creates a new array from an existing one by
filtering in the elements that meet a requirement
Can you shift the condition to make an array with 
lenght 3?*/

//  let array = [5,6,7,8,9];
//  let newArray = array.filter(x => x>7);
//  console.log(newArray);


                ///New and Fill///

 /* new Array(x) creates a new array filled with x 
 elements. .fill(y) makes the value of every element
 y. Try replacing 5 and "hi" with other vaules in the
 function bellow to see what happens*/
                
// let array = new Array(5).fill("hi");
// console.log(array);



/* note: map from the first example fall into this
   catagory as well*/





            ///////////////////////////////
            ///Changing order of elements//
            //////////////////////////////

                ///Sort///

/*Sort changes the order of elements in an array
it is most commenly used to put things in alphabetical
or numerical order by default it sorts aphabetically
it has to be modified a bit to do numerically */

// let array1 = ['cat', 'ape','tiger', 'elk'];
// let array2 = [82, 77, 23, 4, -6, 0 ];

// array1.sort();
// console.log(array1);

// array2.sort((x,y) => x-y);
// console.log(array2);

            ///Reverse///

/* reverse reverses the order of elements in an array*/

// let array =['now', 'sense', 'make', 'I'];
// array.reverse();
// console.log(array);