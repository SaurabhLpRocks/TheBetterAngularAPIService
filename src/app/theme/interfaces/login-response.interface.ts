export interface LoginResponse {
  token: string;
  expiresIn: number;
  roleIds: string[];
  roleNames: string[];
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  userId: string;
}
