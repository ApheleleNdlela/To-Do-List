const tbody = document.getElementById('tbody')
const showbody = document.getElementById('showbody')
const newItem = document.getElementById('newItem')
const profile = document.getElementById('profile')
const number = document.getElementById('number')
const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const actions = document.getElementById('actions')

const info = [];

let id = 0;

function viewItem() {

localStorage.setItem('info', JSON.stringify(info))
JSON.parse(localStorage.getItem('info'))

let rows = "";

info.map((data)=> {

rows+= `<tr>
    <td>${data.id}</td>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${data.date}</td>
    <td>
    <button>edit</button>
    <button>delete</button>
    </td>

</tr>`

showbody.innerHTML= rows

})


}
viewItem();

function showAddItem() {
   newItem.style.display='block';
   profile.style.display = 'none'


}

function cancel() {
    window.location.href='profile.html'
    
}

function save() {

    id++;
 const data ={
    id: number.value,
    title: title.value,
    description: description.value,
    date: date.value,
    actions: actions.value
 }

}
save()


    





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