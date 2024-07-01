import { RenderFabButton } from "./presentation/float-button/float-button";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import userStore from "./store/user-store"
import { saveUser } from "./use-cases/save-user";

export const UserAppComponent = async ( element ) => {
    //element.innerHTML = 'Loading ...'

    await userStore.loadNextPage();

    RenderTable( element )
    RenderButtons( element );
    RenderFabButton( element );
    RenderModal( element, async (userLike) => {
        const newUser = await saveUser( userLike )
        userStore.onUserChanged( newUser )
        RenderTable()
    } );
}   