// Date: 24/10/2019
//Rectangle Example...
var rectangle = new Path.Rectangle({
    point: [300, 300],
    size: new Size([100, 100], [200, 200]),
    strokeColor: "Pink",
    fillColor: "Red"
})

//Example of Defining Point...
var myPoint = new Point(10, 20);
// console.log(myPoint.x); // { x: 10, y: 20 }
// console.log(myPoint.y);


//Exmaple Of Defining a Paht...
var myPath = new Path();

myPath.add(myPoint)
// console.log(myPath);


//Example of Creating Point Passing array...
var array = [50, 60];
var point = new Point(array);
// console.log(point.x); // 10
// console.log(point.y);
// 5


//Another Example Of Creating
//Point Here we are creating a
// new point with defined coordinates,
// which are then modified.


var creatingPoint = new Point();
console.log(creatingPoint);
creatingPoint.x = 40;
creatingPoint.y = 80;
// console.log(creatingPoint);


//Another way of creating Point

var point1 = new Point();
point1.x = 40;
point1.y = point1.x + 60;
// console.log(point1);



//Another way of Crteating point passing x and y as a parameter;
var point2 = new Point(120, 80);
console.log("" + " " + point2);
//Update a Y Parameter of above point objectt
point2.y += 30;
// console.log(point2.y);

var firstPoint = new Point(100, 200);
var secondPoint = new Point(firstPoint.x, 300);
// console.log(secondPoint.x);
// console.log(secondPoint.y);


//All Basic types of cosntructor in Paper.js offers a Copy constructor
//To copy a constructor use clone() method

//Let try Exmaple How to copy a constructor??...

var copyConstructor = firstPoint.clone();
//The above line give you a same constructor which is in tyhe firstPoint....
// console.log(copyConstructor);




//Learing a Size Object in PaperJS

var mySize = new Size(100, 30);
// console.log(mySize);

//another way of passing width and height to size object here

mySize.width = 200;
mySize.height = 60;
// console.log(mySize);



//Learning a Rectangle 
// Rectangle is the combination of Point and Size 

//here is the Exampel of Learning Rectangle

// 1st way to create rectangle obj

var size1 = new Size(10, 20);
var topLeft = new Point(30, 40);

var rect = new Rectangle(topLeft, size1);
// console.log(rect);  



// Date: 25/10/2019

//The same Rectangle object can be created using the new Rectangle(x, y, width, height) constructor:
var rect = new Rectangle(10, 20, 200, 100);
// console.log(rect);  


//A third possibility is to use the new Rectangle(point1, point2)

var bottomLeft = new Point(10, 200);
var topRight = new Size(210, 2010);
// console.log(bottomLeft);
// console.log(topRight);

var rect1 = new Rectangle(bottomLeft, topRight);
// console.log(rect1);



//Another way of pass points to rectangle obj
var rect2 = new Rectangle(new Point(10, 120), new Point(210, 20));
// console.log(rect2);



//Selected Property Learning............
var path = new Path.Circle({
    center: [350, 350],
    radius: 40,
    selected: true,
    fillColor: "yellow",
    foreColor: "black"
});
// path.bounds.selected=true;
// path.bounds.strokeColor="black";

// console.log(path);


// var rect10 =equals(rect);
// console.log(rect10);


//this two rectangles are for checking the equal sizes of the rectangles
//if both rectagles are equal retur true else false

//Defining first Rectangle
var rectFirst = new Path.Rectangle({
    point: [600, 600],
    size: new Size([100, 100], [200, 200]),
    strokeColor: "Pink",
    fillColor: "green"

})

//Defining Second Rectangle
var rectSecond = new Path.Rectangle({
    point: [600, 600],
    size: new Size([100, 100], [200, 200]),
    strokeColor: "Pink",
    fillColor: "green",



})
// this mehtod is for 
//checking true or false of both rectangles all properties should be same for returninig 
// true 

var checkRectangles = rectFirst.equals(rectSecond);
console.log(checkRectangles);

//Name your rectyangles as similar as you pasing id to your HTML DOM elements...
rectSecond.toString("Arshaq");
// console.log(rectSecond);

//isEmpty:
var isEmpty = rectSecond.isEmpty();
// console.log(isEmpty);


// Geometric Tests
// Contains is the chewcking function of event .


// var circle = new Path.Circle({
// point:[450,250],
// size: new Size([100, 100], [200, 200]),
// radius:30
// })


// circle.fillColor="blue";


var circle = new Path.Circle(new Point(350, 350), 30)
circle.fillColor = "blue";
// circle.strokeColor="black";

//  onMouseMove=(e)=>{
// console.log(e.point);

//  }


// function onMouseMove(e) {
//     console.log(e.point)
//     if (circle.bounds.contains(e.point)) {

//         circle.fillColor = "green"
//     }

//     else { circle.fillColor = "red" ;}

// }

//Learning Contains(rect)
//Contains(rect)

circle.project.fillColor="yellow";

project.currentStyle = {
    fillColor: 'green',
    strokeColor: 'black'
};

var largeCircle = new Path.Circle(new Point(350, 350),45);
var smallCircle = new Path.Circle(new Point(450,450),30);














