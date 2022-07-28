/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list,page){

   // the start index and the end index of the list items to be displayed on the given page
   const start_Index = (page*9)-9;
   const end_Index = (page*9);
   var student_list =``;
   var HTML =``;

   student_list = document.getElementsByClassName("student-list");


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
   student_list[0].insertAdjacentHTML('beforeend',HTML);
   // element.insertAdjacentHTML(position, text);
   // 'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.

}//end showPage function

//show the data when loading the page the first time
 showPage(data,1);

 
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const link_list = document.getElementsByClassName("link-list");

function addPagination(list){
   
   const number_of_buttons = Math.ceil(list.length/9);
   const li = document.createElement("li");
   const button =createButton(li);
   button.className ="active";
   button.textContent ="1";
   link_list[0].appendChild(li);

   for (let i = 1 ; i < number_of_buttons; i++){
      const li = document.createElement("li");
      const button =createButton(li);
      button.textContent = i+1;
      link_list[0].appendChild(li);

   }
   

}
function createButton(li){
 
   const button =document.createElement("button");
   button.type ="button";
   li.appendChild(button);
   return button;

}

addPagination(data);


 link_list[0].addEventListener("click",(e)=>{

   var student_listItems = ``;

student_listItems = document.getElementsByClassName("student-item");
const buttons = document.getElementsByTagName("button");
if (e.target.tagName ==="BUTTON"){

   const current_button =e.target;
   const current_page = current_button.textContent; 

   
   // buttons.forEach(myFunction)
   // function myFunction(item, index, arr) {
    
   //   arr[index].classList.remove("active");
   // }
   
   for (let i=0 ; i < buttons.length ; i++){
      buttons[i].classList.remove("active");
   }

 //add the active class to the current button         
current_button.className ="active";

 showPage(data,current_page);
  


 

}



 });


// 








// Call functions
