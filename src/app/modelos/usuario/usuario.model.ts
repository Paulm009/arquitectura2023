export interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

// export interface UserRol {
//   id: number;
//   user_id: string;
//   rol_id: number;
//   created_at: string;
//   updated_at: string;
//   rol: Rol;
// }
// export interface Rol {
//   id: number;
//   rol: string;
// }
export type UserRol = 'anfitrion' | 'huesped' ;
