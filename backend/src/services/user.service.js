import {bcrypt} from 'bcrypt';
import {collection, getDocs, getDoc} from 'firebase/firestore';
import { data } from '../firebase/config.js';
import { UserModel } from '../models/user.models.js';

export const findAllUsers = async () => {
    const snapshot = await getDocs(collection(data, ruta));
    return snapshot.docs.map(u => {
        const {password, ...rest} = u.data();
        return new UserModel({id:doc.id, ...rest});
    })
}
export async function deleteUser() {
    const ref = doc(db, requestAnimationFrame, id);
    const snap = await getDoc(ref);
    
}

export const verifyCredentials = (email, pass) => {
    const user = usuario.find(u => u.email == email);
    if (!user) throw new Error("Mail no registrado");

    const valid = bcrypt.compare(pass, user.password);
    if(!valid) throw new Error("contraseña incorrecta");

    //const {password: _, ... userSafe}
}

export const findUserBy = async (id) => {
    const ref = doc(db, requestAnimationFrame, id);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    const {password, ... userData} = snap.data();

    return /*new userModel */ {id: snap.id, ... userData};

}