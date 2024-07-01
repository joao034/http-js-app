import html from './render-modal.html?raw';
import './render-modal.css'
import { getUserById } from '../../use-cases/get-user-by-id';

let modal;
let form;
let loadedUser = {};

export const showModal = async ( id ) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {}

    if(!id) return

    const user = await getUserById( id )
    loadFormData( user )
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset()
}

/**
 * 
 * @param {User} user 
 */
const loadFormData = ( user ) => {
    form.querySelector('[name="firstName"]').value = user.firstName
    form.querySelector('[name="lastName"]').value = user.lastName
    form.querySelector('[name="balance"]').value = user.balance
    form.querySelector('[name="isActive"]').checked = user.isActive

    loadedUser = user
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderModal = ( element, callback ) => {

    if( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container hide-modal'

    modal.addEventListener('click', (event) => {
        if( event.target.className === 'modal-container'){
            hideModal()
        }
    })

    form = modal.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
    
        const formData = new FormData( form );
        const user = { ...loadedUser };

        for (const [key, value] of formData ) {
            if( key === "balance" )
                user[key] = +value;

            if( key === 'isActive' )
                user[key] = (value === 'on') ? true: false;
            
            user[key] = value;    
        }

        await callback( user )
        
        hideModal()
      
    })


    element.append( modal )


}