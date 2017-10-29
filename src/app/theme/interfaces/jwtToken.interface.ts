export interface JwtToken {
  sub: string;
  jti: string;
  UID: string;
  iat: string;
  AdminEntity: string;
  CityEntity: string;
  ClaimEntity: string;
  FileUploadEntity: string;
  MailEntity: string;
  ManagerEntity: string;
  RoleEntity: string;
  StateEntity: string;
  SuperAdminEntity: string;
  UserEntity: string;
  Menu: string;
  nbf: string;
  exp: string;
  iss: string;
  aud: string;
}
