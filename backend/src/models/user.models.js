export class UserModel {
    constructor({id, nombre, password, email, rol, ubicacion, experiencia}) {
        this.id = id;
        this.nombre = nombre;
        this.password = password;
        this.email = email;
        this.rol = rol || 'sin asignar';
        this.ubicacion = ubicacion || 'desconocido';
        this.experiencia = experiencia || 'sin experiencia';
    }
}