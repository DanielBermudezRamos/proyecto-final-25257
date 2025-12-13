import {bcrypt} from 'bcrypt';

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