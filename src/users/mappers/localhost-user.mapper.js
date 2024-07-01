import { User } from "../models/user"

export const localhostUserToModel = ( localhostUser ) =>
{
    //desestructuro todas las propiedades tal y como vengan del backend
    const {
        avatar, 
        balance, 
        first_name,
        gender,
        id, 
        isActive, 
        last_name
    } = localhostUser;

    return new User({
        avatar, 
        balance, 
        firstName : first_name,
        gender, 
        id,
        isActive, 
        lastName : last_name
    })
}