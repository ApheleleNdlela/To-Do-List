const tbody = document.getElementById('tbody')
const showbody = document.getElementById('showbody')
const newItem = document.getElementById('newItem')
const profile = document.getElementById('profile')
const number = document.getElementById('number')
const title = document.getElementById('title-n')
const description = document.getElementById('description-n')
const date = document.getElementById('date-n')
const actions = document.getElementById('actions')


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
   
    info.unshift(object)
    localStorage.setItem('info', JSON.stringify(info))
    JSON.parse(localStorage.getItem('info'))
    window.location.assign("Profile.html")
   
    
    

   }

 


let viewItem =()=> {




if (info != null ){
   
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
       <button type="button" class="btn btn_delete btn-primary" onclick="del(${(item.id)})">delete</button>
       </td>
      `
      showbody.appendChild(itemElement)
      
   });
}


JSON.parse(localStorage.getItem('info'))
}
viewItem();


function showAddItem() {
   newItem.style.display='block';
   profile.style.display ='none'

}

function cancel() {
    

    window.location.href='profile.html'
    
}



function del(id) {
   

   info = info.filter(item => item.id !== id)
   localStorage.setItem('info', JSON.stringify(info))
   window.location.reload()
   

   
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