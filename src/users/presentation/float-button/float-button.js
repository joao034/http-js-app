
import { showModal } from '../render-modal/render-modal';
import { } from './float-button.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderFabButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = "+";
    fabButton.classList.add('fab-button');

    element.append( fabButton )

    fabButton.addEventListener('click', () => {
        showModal()
    })

}