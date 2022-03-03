var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://image.shutterstock.com/image-vector/happy-old-african-black-woman-260nw-1738776899.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://theundefeated.com/wp-content/uploads/2016/08/carl.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6oj3iV42HXAc2QCLOEGp90ByD7Fb9P53tg&usqp=CAU", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
//add family member names here
var names = ["Family Book","Daniel","Patenice","Carlos","Izzy","Henry","Emmanuel","Joseph","Naomi"];

var age = [80, 75, 46, 50, 43, 10, 10, 9];
/* We must sort the elements presentinside the array age to print the value of family memebers 
Write : age.sort();
*/

age.sort();
// Write age.reverse();
age.reverse();

var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 8;
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];

    var updatedAge = age[i];
    
    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;
 //   var max_number = Math.max.apply(Math,age);
    var max_number = Math.max.apply(Math,age);
    console.log("The hightest age is: ", max_number);
//var min_number = Math.min.apply(Math,age);
    var min_number = Math.min.apply(Math,age);
    console.log("The lowest age is: ", min_number);
}