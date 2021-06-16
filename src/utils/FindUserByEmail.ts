import { users } from './../storage/in-memory-storage';

export const FindUserByEmail = function (email: string): any {
    const user = users.find((usr) => {
        return usr['email'] === email;
    })
    return user;
}