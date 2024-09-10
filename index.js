const merah = document.getElementById('merah')
const biru = document.getElementById('biru')
const putih = document.getElementById('putih')

merah.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
}, false)
biru.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
}, false)
putih.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
}, false)


const google = document.getElementById('google')
const youtube = document.getElementById('youtube')

google.addEventListener('click', () => {
    window.open('https://www.google.com')
}, false)
youtube.addEventListener('click', () => {
    window.open('https://www.youtube.com')
}, false)




const form = document.getElementById('dataForm')
const dataInput = document.getElementById('todoInput')
const dateInput = document.getElementById('dateInput')
const tableBody = document.getElementById('dataTable')
let editRow = null

form.addEventListener('submit', (event) => {
    event.preventDefault()
        
    if (!dataInput.value, !dateInput.value) {
        alert('Semua data harus diisi!')
        return
    }

    if (editRow) {
        editRow.cells[1].innerText = dataInput.value
        editRow.cells[2].innerText = dateInput.value
        editRow = null
    } else {
        const row = document.createElement('tr')

        row.innerHTML = `
            <td></td>
            <td>${dataInput.value}</td>
            <td>${dateInput.value}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `

        tableBody.appendChild(row)

        const editButton = row.querySelector('.edit-btn')
        const deleteButton = row.querySelector('.delete-btn')

        editButton.addEventListener('click', () => {
            dataInput.value = row.cells[1].innerText
            dateInput.value = row.cells[2].innerText
            editRow = row
            dataInput.focus()
        })

        deleteButton.addEventListener('click', () => {
            row.remove()
            updateRowNumbers()
        })
    }

    updateRowNumbers()
    dataInput.value = ''
    dateInput.value = ''
}, false)

function updateRowNumbers() {
    const rows = tableBody.getElementsByTagName('tr')
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].innerText = i
    }
}