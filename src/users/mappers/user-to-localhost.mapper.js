import { User } from "../models/user";

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const {
        avatar, 
        balance, 
        firstName,
        lastName,
        gender, 
        id, 
        isActive
    } = user;

    return {
        first_name : firstName,
        last_name  : lastName,
        avatar, 
        balance, 
        gender, 
        id, 
        isActive
    }

}