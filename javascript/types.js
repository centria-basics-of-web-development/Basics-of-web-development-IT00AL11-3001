// // x = 10;
// // console.log(typeof(x));
// // console.log(x);
// // y = x;
// // console.log(y);
// // // ================
// // x = 20;
// // console.log(x);
// // console.log(y);

// obj1 = {
//     name: "simo",
//     age: 38
// };

// obj2 = obj1;



// // console.log(obj1);
// // console.log(obj2);

// obj3 = {...obj1};
// obj1.age = 40;

// console.log(obj1);
// console.log(obj3);

// str = "hello world";
// temp = new String(str);
// str = temp.toLocaleUpperCase();
// console.log(str);
// delete temp;
// console.log(temp);

// console.log("foo".toLocaleUpperCase());


// x = 10;
// console.log(typeof(x));
// x = "hello";
// console.log(typeof(x));
// x = null;
// console.log(typeof(x));

// var, let, const
let exampleFunc = function (a, b, c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}

// let exampleFunc = example;
exampleFunc.call(null, 1, 2, 3);
console.log(exampleFunc.toString());



