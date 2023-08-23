const tbody = document.getElementById('tbody')
const showbody = document.getElementById('showbody')
const newItem = document.getElementById('newItem')
const profile = document.getElementById('profile')
const number = document.getElementById('number')
const title = document.getElementById('title-n')
const description = document.getElementById('description-n')
const date = document.getElementById('date-n')
const actions = document.getElementById('actions')
// const paragraph = document.getElementById("edit");
// const edit = document.getElementById("edit-button");
// const reset = document.getElementById("reset");

let info = JSON.parse(localStorage.getItem('info'))?JSON.parse(localStorage.getItem('info')):[];

let id = 0;

let save = () => {
    let object ={
       id: 0,
       title: title.value,
       description: description.value,
       date: date.value
   
    } 
    if(object.id == id){

    }
    object.id = info.length
   
    info.push(object)
    localStorage.setItem('info', JSON.stringify(info))
    JSON.parse(localStorage.getItem('info'))
    window.location.assign("Profile.html")
   
    // viewItem()
    

   }
   
//    save()
   
// info.sort((a , b)=> (a.id - b.id))
 


let viewItem =()=> {

// let info = []
// info = JSON.parse( localStorage.getItem('info'))


if (info != null ){
   info.reverse()
   info.map((item,i) => {
      let rows = "";
      let itemElement = document.createElement("tr")
      itemElement.innerHTML = `
       <td>${++i}</td>
       <td>${item.title}</td>
       <td>${item.description}</td>
       <td>${item.date}</td>
       <td>
       <button class="edit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">edit</button>
       <button type="button" class="btn btn-primary" onclick="del(${(item.id)})">delete</button>
       </td>
      `
      showbody.appendChild(itemElement)
      
   });
}



// info.map((data)=> {

// rows+= `<tr>
//     <td>${++item.id}</td>
//     <td>${item.title}</td>
//     <td>${item.description}</td>
//     <td>${item.date}</td>
//     <td>
//     <button class="edit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">edit</button>
//     <button type="button" class="btn btn-primary" onclick="del(this)">delete</button>
//     </td>

// </tr>`
// showbody.innerHTML= rows

// })

JSON.parse(localStorage.getItem('info'))
}
viewItem();


function showAddItem() {
   newItem.style.display='block';
   profile.style.display ='none'

}

function cancel() {
    
// JSON.parse(localStorage.getItem('info'))
    window.location.href='profile.html'
    
}



function del(id) {
   

   info = info.filter(item => item.id !== id)
   localStorage.setItem('info', JSON.stringify(info))
   window.location.reload()
   // alert('anything')

   
}

// function edit(e){
//    // let paragraph = document.querySelector("edit")
  
// //   let update = prompt("Update","showbody" );
//   let a = showbody.parentElementSibling;
//   e.parentElement[1].innerHTML = update
//   console.log(e.parentElement.childNodes[0].innerHTML = update)
// }




























// showbody.addEventListener('click', (event) =>{
//    if(event.target.tagName === 'button'){
//       const button = event.target
//       const td = button.parentNode;
//       const tr = td.parentNode;
//       if(button.textContent === 'delete'){
//          tr.removeChilNode(td);
//       };
//    }

// })


   
   // tbody.addEventListener("click", function() {
   //   showbody.contentEditable = true;
    
   // } );
   
   // tbody.addEventListener("click", function() {
   //   showbody.contentEditable = false;
     
   // } )



// function profile(){

//     let x = JSON.parse(localStorage.getItem(info))

//     info.map((data)=> {
//         x+= `<tr>
//         <td>${data.id}</td>
//         <td>${data.title}</td>
//         <td>${data.description}</td>
//         <td>${data.date}</td>
//         <td>
//         <button>edit</button>
//         <button>delete</button>
//         </td>
    
//     </tr>`
//     })

//     info.push(x)

// }