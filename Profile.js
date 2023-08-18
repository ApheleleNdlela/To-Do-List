const tbody = document.getElementById('tbody')

const info = [{id: 1, title: "Lukhanyo", description: "Stubborn", date: "18/08/23", action: 'save' }];

function addTask() {

localStorage.setItem('info', JSON.stringify(info))
JSON.parse(localStorage.getItem('info'))

let rows = "";

info.map((data)=> {

rows+= `<tr>
    <td>${data.id}</td>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${data.date}</td>
    <td>${data.action}</td>

</tr>`

tbody.innerHTML= rows
})
    
}
addTask()
