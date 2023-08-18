const tbody = document.getElementById('tbody')
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

const info = [];

function profile() {

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

tbody.innerHTML= rows
profile()
})

}
profile();

function viewItem(){

JSON.parse(localStorage.getItem(info))


}
    











