import userStore from "../../store/user-store";
import { RenderTable } from "../render-table/render-table";

export const RenderButtons = (element) => {
    const previousButton = document.createElement('button');
    previousButton.innerText = '< Previous';
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    const currentPage = document.createElement('span');
    currentPage.innerText = userStore.getCurrentPage();
    currentPage.id = 'current-page';

    element.append( previousButton, currentPage, nextButton);

    nextButton.addEventListener('click', async() => {
        await userStore.loadNextPage();
        currentPage.innerText = userStore.getCurrentPage();
        RenderTable( element )
    });

    previousButton.addEventListener('click', async() => {
        await userStore.loadPreviousPage();
        currentPage.innerText = userStore.getCurrentPage();
        RenderTable( element )
    })
}