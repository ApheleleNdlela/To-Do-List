const tbody = document.getElementById('tbody')
const showbody = document.getElementById('showbody')
const newItem = document.getElementById('newItem')
const profile = document.getElementById('profile')
const number = document.getElementById('number')
const title = document.getElementById('title-n')
const description = document.getElementById('description-n')
const date = document.getElementById('date-n')
const actions = document.getElementById('actions')

const info = JSON.parse(localStorage.getItem('info'))?JSON.parse(localStorage.getItem('info')):[];

let id = 0;

let save = () => {

   id++
    let object ={
       id: 0,
       title: title.value,
       description: description.value,
       date: date.value
   
    }
   
    info.push(object)
    localStorage.setItem('info', JSON.stringify(info))
    JSON.parse(localStorage.getItem('info'))
    window.location.assign("Profile.html")
   
    // viewItem()
    

   }
   
//    save()
   
info.sort((a , b)=> (a.id - b.id))
 


let viewItem =()=> {

// let items = localStorage.eetItem('info', JSON.stringify(info))



let rows = "";

info.map((data)=> {

rows+= `<tr>
    <td>${++data.id}</td>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${data.date}</td>
    <td>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">edit</button>
    <button type="button" class="btn btn-primary">delete</button>
    </td>

</tr>`
showbody.innerHTML= rows

})

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