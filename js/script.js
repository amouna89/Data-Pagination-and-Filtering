/*
create a search bar 
*/

//declaration des variables 
var student_list = document.querySelector(".student-list");
var link_list = document.querySelector(".link-list");


function searchBar(){
   const h2 =document.getElementsByTagName("h2");
   var HTML=`<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;

 h2[0].insertAdjacentHTML("afterend",HTML);
//'afterend' : Après element lui-même.
}

// /*search functionnality*/
// function Search_by_Name(arr,input){
//        //take the input value
//          var index= 0;  
//          var name_to_search = input.toUpperCase();
//          var match = false;
//          student_list.innerHTML = ``;

//          for ( let i=0 ; i< arr.length ; i++){
//             var full_name =`${arr[i].name.first} ${arr[i].name.last}` ;
//             full_name = full_name.toUpperCase(); 
//                if (full_name.includes(name_to_search)){  
//                   list = create_student_list(arr[i],index);
//                   match = true;
//                }//end if    
//          }//end for
        
//          for(let i =0 ;i<list.length;i++){
//             console.log(list[i]);
//          }
//          showPage(list,1);
//          //loop through the list 

//       if (match == false){
//          student_list.innerHTML = `<div><p>Not Match was found</p></div>`;
//       }

// }//end Search_by_Name

// function create_student_list(student,index){

//    var list= [];
//    list[index]= student ;
//    index++;
//    return list;




// }
// /*searching the names when keyup or pressing the search button*/
// /*taper un mot dans le input */

// const header =document.querySelector(".header");

// header.addEventListener("keyup",(e)=>{
//       var input =e.target;   
//       if (input.tagName ==="INPUT"){
//       //   console.log(input.value);
//          Search_by_Name(data,input.value);
//       }

// });

// /*clicker sur un boutton*/
// header.addEventListener("click",(e)=>{  
//       const input = document.getElementById("search");
//       var target = e.target.tagName;
//       if( target === "IMG"){
//          Search_by_Name(data,input.value);
//       }

//  });
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list,page){
   // the start index and the end index of the list items to be displayed on the given page
   var start_Index = (page*9)-9;
   var end_Index = (page*9);
   var HTML =``;
   
   student_list.innerHTML = ``;

   if( end_Index > list.length){
      end_Index = list.length;
   }
   for (let i = start_Index; i < end_Index ; i++ ){
      HTML +=` <li class="student-item cf">
      <div class="student-details">    
      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>`;

   }//end for   
   // element.insertAdjacentHTML(position, text);
   // 'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.

  
   student_list.insertAdjacentHTML('beforeend',HTML);
   //ajouter les bouttons a la page 
   
}//end showPage function

//show the data when loading the page the first time

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){

   const number_of_buttons = Math.ceil(list.length/9);
   const li = document.createElement("li");
   const button =createButton(li);
   button.className ="active";
   button.textContent ="1";
   link_list.appendChild(li);

   for (let i = 1 ; i < number_of_buttons; i++){
      const li = document.createElement("li");
      const button =createButton(li);
      button.textContent = i+1;
      link_list.appendChild(li);

   }
   
 
}
function createButton(li){
 
   const button =document.createElement("button");
   button.type ="button";
   li.appendChild(button);
   return button;

}

 link_list.addEventListener("click",(e)=>{

const buttons = document.getElementsByTagName("button");
if (e.target.tagName ==="BUTTON"){
   const current_button =e.target;
   const current_page = current_button.textContent; 
   for (let i=0 ; i < buttons.length ; i++){
      buttons[i].classList.remove("active");
   }
 //add the active class to the current button         
current_button.className ="active";
 showPage(data,current_page);
  
}

 });

// Call functions

showPage(data,1);//load the first page
addPagination(data);//
searchBar();//add search Bar the page 