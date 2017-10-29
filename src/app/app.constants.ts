import { environment } from '../environments';

export const roleNames = {
  superAdmin: 'SuperAdmin',
  admin: 'Admin',
  manager: 'Manager',
  client: 'Client',
};

export const userRoleDefaultPages = {
  SuperAdmin: 'pages/admin/manage',
  Admin: 'pages/admin/dashboard',
  Manager: 'pages/manager/dashboard',
  Client: 'pages/client',
};

function createUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}
function createAuthUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}

export const appApiResources = {
  baseUrl: environment.apiHost,
  staticUploadsPath: `${environment.apiHost}Uploads/`,
  login: createAuthUrl('user/login'),
  register: createUrl('user/register'),
  verifyEmail: createUrl('verifyEmail'),
  claim: createUrl('claim'),
  admin: createUrl('admin'),
  client: createUrl('client'),
  manager: createUrl('manager'),
  fileUpload: createUrl('fileUpload'),
  dashBoard: createUrl('dashboard'),
};

export const appVariables = {
  userLocalStorage: 'user',
  resourceAccessLocalStorage: 'resourceAccessRaw',
  accessTokenServer: 'X-Auth-Token',
  defaultContentTypeHeader: 'application/json',
  loginPageUrl: '/login',
  registrationPageUrl: '/register',
  errorInputClass: 'has-error',
  successInputClass: 'has-success',
  actionSearchKey: 'Entity',
  resourceActions: {
    getActionName: 'Read',
    addActionName: 'Create',
    updateActionName: 'Update',
    deleteActionName: 'Delete',
  },
  rateUnits: [
    { id: 1, name: 'Hourly' },
    { id: 2, name: 'Monthly' },
    { id: 3, name: 'Annually' },
  ],
  defaultAvatarUrl: 'default_user',
  defaultDdlOptionValue: '-1',
  defaultDdlOptionText: 'Select',
  defaultStateDdlOptionText: 'Select State',
  defaultCityDdlOptionText: 'Select City',
  defaultClientDdlOptionText: 'Select Client',
  defaultRateUnitDdlOptionText: 'Select Unit',
  ng2SlimLoadingBarColor: 'red',
  ng2SlimLoadingBarHeight: '4px',
  accessTokenLocalStorage: 'accessToken',
  resourceNameIdentifier: 'Entity',
  docViewerurl: 'http://docs.google.com/gview?url=',
  msOfficeDocViewerPath: 'https://view.officeapps.live.com/op/embed.aspx?src=',
  goodleDocViewerPath: (url) => {
    return `http://docs.google.com/gview?url=${url}&embedded=true`;
  },
};

export const validationMessages = {
  oldPassword: {
    required: 'Old password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Old password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `Old password must be less than or equal to ${maxLength} characters long`; },
  },
  newPassword: {
    required: 'New password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `New password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `New password must be less than or equal to ${maxLength} characters long`; },
  },
  password: {
    required: 'Password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `Password must be less than or equal to ${maxLength} characters long`; },
  },
  comparePasswords: {
    equal: 'Passwords are not matching.',
  },
  name: {
    required: 'Name is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Name must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Name must be less than or equal to ${maxLength} characters long.`; },
  },
  firstName: {
    required: 'FirstName is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `FirstName must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `FirstName must be less than or equal to ${maxLength} characters long.`; },
  },
  lastName: {
    required: 'LastName is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `LastName must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `LastName must be less than or equal to ${maxLength} characters long.`; },
  },
  addrLine: {
    required: 'Address Line is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Address Line must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Address Line must be less than or equal to ${maxLength} characters long.`; },
  },
  city: {
    required: 'City is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `City must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `City must be less than or equal to ${maxLength} characters long.`; },
  },
  cityId: {
    required: 'City is required.',
  },
  state: {
    required: 'State is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `State must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `State must be less than or equal to ${maxLength} characters long.`; },
  },
  stateId: {
    required: 'State is required.',
  },
  assignmentId: {
    required: 'Requirement is required.',
  },
  rateUnitId: {
    required: 'Unit is required.',
  },
  country: {
    required: 'Country is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Country must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Country must be less than or equal to ${maxLength} characters long.`; },
  },
  pincode: {
    required: 'Pincode is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Pincode must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Pincode must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Pincode.`; },
  },
  rate: {
    required: 'Rate is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Rate must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Rate must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Rate.`; },
  },
  phoneNumber: {
    required: 'Phone Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Phone Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Phone Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Phone Number.`; },
  },
  mobile: {
    required: 'Mobile Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Mobile Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Mobile Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Mobile Number.`; },
  },
  otp: {
    required: 'OTP is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `OTP must be  ${minLength} digits long`; },
    maxLength(maxLength: string) { return `OTP must be  ${maxLength} digits long`; },
    digitsOnly() { return `Only digits are allowed in OTP.`; },
  },
  title: {
    required: 'Title is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Title must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `Title must be max  ${maxLength} characters long`; },
    digitsOnly() { return `Only digits are allowed in OTP.`; },
  },
  phone: {
    required: 'Phone number is required.',
    digitsOnly() { return `Only digits are allowed in Phone Number.`; },
  },
  description: {
    required: 'Description is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Description must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Description must be less than or equal to ${maxLength} characters long.`; },
  },
  docUrl: {
    required: 'Resume is required.',
  },
  email: {
    required: 'Email is required.',
    // tslint:disable-next-line:max-line-length
    invalid() { return `Invalid Email Id`; },
    minLength(minLength: string) { return `Email must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Email must be less than or equal to ${maxLength} characters long.`; },
  },
  primaryMobile: {
    required: 'Mobile Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Mobile Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Mobile Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Mobile Number.`; },
  },
  secondaryMobile: {
    required: 'Mobile Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Mobile Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Mobile Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Mobile Number.`; },
  },
};

export const userRoleResourceAccessesMap = {
  admin: {
    'HanaEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      },
      {
        'name': 'Delete',
        'isAllowed': false,
      },
      {
        'name': 'Read',
        'isAllowed': false,
      },
      {
        'name': 'Update',
        'isAllowed': false,
      },
      ],
      'userId': '',
    },
  },
  manager: {
    'ManagerEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      }, {
        'name': 'Delete',
        'isAllowed': false,
      }, {
        'name': 'Read',
        'isAllowed': false,
      }, {
        'name': 'Update',
        'isAllowed': false,
      }],
      'userId': '',
    },
    'SuperAdminEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      }, {
        'name': 'Delete',
        'isAllowed': false,
      }, {
        'name': 'Read',
        'isAllowed': false,
      }, {
        'name': 'Update',
        'isAllowed': false,
      }],
      'userId': '',
    },
    'AdminEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      }, {
        'name': 'Delete',
        'isAllowed': false,
      }, {
        'name': 'Read',
        'isAllowed': false,
      }, {
        'name': 'Update',
        'isAllowed': false,
      }],
      'userId': '',
    },
    'UserEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      }, {
        'name': 'Delete',
        'isAllowed': false,
      }, {
        'name': 'Read',
        'isAllowed': false,
      }, {
        'name': 'Update',
        'isAllowed': false,
      }],
      'userId': '',
    },
    'UserRolesEntity': {
      'actions': [{
        'name': 'Create',
        'isAllowed': false,
      }, {
        'name': 'Delete',
        'isAllowed': false,
      }, {
        'name': 'Read',
        'isAllowed': false,
      }, {
        'name': 'Update',
        'isAllowed': false,
      }],
      'userId': '',
    },
  },
};

