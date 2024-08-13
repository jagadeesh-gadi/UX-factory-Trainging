// var variable

var name = 'jagadeesh';
function myfunction(){
  for(var j = 0; j < 5; j++){
    document.write(" ",j);      // we can access the local variable inside the block
  }
  document.write("<br>",j);     // we can access the local variable outside the block
  document.write("<br>",name);  // we can access the global variable inside and outside the block
}
myfunction();

//document.write(j);               we cant access local variable outside the function
document.write("<br>",name);    // we can access the global variable outside the function
document.write("<hr>")




// let variable

let color = "red";
function demo() {
  for (let i = 0; i < 5; i++) {
    document.write(" ", i);       // we can access local variable inside the block
  }
  //document.write(" ", i);          we cant access local variable outside the block
  document.write("<br>", color);  // we can access global variable inside and outside the block
}
demo();
//document.write(i);                 we cant access local variable outside the function
document.write("<br>", color);    //  we can access global variable outside the function
