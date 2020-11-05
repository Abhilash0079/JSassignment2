/* ******************************************************* Question 3 ********************************************/

// var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// document.write(arr +'<br>');
// document.write("Sorted array is "+arr.sort());

/* ******************************************************* Question 2 ********************************************/

// var arr = ["Red", "Green", "White", "Black"];
// document.write(arr +'<br>');

// var x = arr.toString()
// document.write(x)


/* ******************************************************* Question 2, 3, 5, ********************************************/



var x = 0;
var arr = Array();

function add_element(){
    arr[x] = document.getElementById("text1").value;
    x++;
    document.getElementById("text1").value ="";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<arr.length; y++)
   {
     e += "Element " + y + " = " + arr[y] + "<br/>";
   }
   document.getElementById("array").innerHTML = e;
}

function sort_array(){
    var x = arr.sort();
    display_array();
}

function string_array(){
    var x = arr.toString()
    var e = "<hr/>";
    e+=x;
    document.getElementById("array").innerHTML = e;
}


/* ******************************************************* Question 4 ********************************************/

var arr = [1,2,4,8,6,1,5,7,6,9,8,4,3,7,5,4,3,7,1,8,5,4,3];
document.write("<br/><br/>Array is "+ arr +"<br/>");

var x = 1;
var y = 0;
var z;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            y++;
        }
        if(x<y){
            x=y;
            z = arr[i];
        }
    }
    y = 0;
}

document.write(z+" : "+x+" times");


/* ******************************************************* Question 6 ********************************************/



function unique_array(arr){
    var uniqueArray = [];
    for(i=0; i < arr.length; i++){
        if(uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

var arr = [1,2,4,8,6,1,5,7,6,9,8,4,3,7,5];
document.write("<br/><br/>Array is "+ arr +"<br/>");

var uniquearr = unique_array(arr);
document.write("<br/>Array after removing duplicates : "+ uniquearr);

/* ******************************************************* Question 7 ********************************************/

function removecourse(){
    let x = document.getElementById("courseSelect");
    x.remove(x.selectedIndex);
}

