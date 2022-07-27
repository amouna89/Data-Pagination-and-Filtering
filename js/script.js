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

   const ul = document.getElementsByClassName("student-list");
   const student_list =ul[0];
   var HTML =``;

 
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

   console.log("html string",HTML);
   console.log("end index",end_Index);

   student_list.insertAdjacentHTML('beforeend',HTML);
   // element.insertAdjacentHTML(position, text);
   // 'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.

}//end showPage function

showPage(data,1);



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const ULB = document.getElementsByClassName("link-list");

function addPagination(list){
   
   
   console.log("link-list",ULB);
   const number_of_buttons = Math.ceil(list.length/9);
   console.log("number of buttons",number_of_buttons);
   
   const li = document.createElement("li");
   const button =createButton(li);
   button.className ="active";
   button.textContent ="1";
   ULB[0].appendChild(li);

   for (let i = 1 ; i < number_of_buttons; i++){
      const li = document.createElement("li");
      const button =createButton(li);
      button.textContent = i+1;
      ULB[0].appendChild(li);

   }
   

}
function createButton(li){
 
   const button =document.createElement("button");
   button.type ="button";
   li.appendChild(button);
   return button;

}

addPagination(data);

ULB[0].addEventListener("click",(e)=>{

const li_old = document.getElementsByClassName("student-item");
if (e.target.tagName ==="BUTTON"){

   const button =e.target;
   const current_page = button.textContent; 
   const start_Index =0;
   const end_Index = 9;
   
   button.className ="active";
   for (let i = start_Index ; i < end_Index ; i++){
      li_old[i].style.display = "none";

   }
   showPage(data,current_page);



}


});





// Call functions
