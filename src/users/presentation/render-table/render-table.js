import './render-table.css'
import userStore from "../../store/user-store";
import { showModal } from '../render-modal/render-modal';
import { deleteUserById } from '../../use-cases/delete-user-by-id';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML =   `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}

const tableEditListener = (event) => {
    const element = event.target.closest('.edit-user')
    if (!element)
        return;

    const id = element.getAttribute('data-id')
    showModal( id );
}

const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user')
    if (!element)
        return;

    const id = element.getAttribute('data-id')

    try{
        await deleteUserById( id )
        await userStore.reloadPage()
        document.querySelector('#current-page').innerText = userStore.getCurrentPage()
        RenderTable()
    }catch(error){
        alert('No se pudo eliminar' + error)
    }
    
}

export const RenderTable = (element) => {

    const users = userStore.getUsers();

    if(!table){
        table = createTable()
        element.append( table )
    }

    let tableHTML = ''
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName}</td>
                <td>${ user.lastName }</td>
                <td>
                    <a href="#" class='edit-user' data-id=${ user.id }>Edit</a> 
                    |
                    <a href="#" class='delete-user' data-id=${ user.id }>Delete</a>
                </td>
            <tr/>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;
    
    table.addEventListener('click', tableEditListener )
    table.addEventListener('click', tableDeleteListener )
}