export const baseUrl = 'http://192.168.88.106:3000';

// user
export const baseUserUrl = `${baseUrl}/user`;

// auth
export const loginUrl = `${baseUrl}/auth/login`;
export const registerUrl = `${baseUrl}/auth/register`;
export const whoAmI = `${baseUserUrl}/me`;
export const logoutUrl = `${baseUrl}/auth/logout`

// files
export const saveAvatar = `${baseUrl}/files/upload/avatars`;

// products
export const getAllProductsUrl = `${baseUrl}/product/all`;

// user actions
export const favoriteUrl = `${baseUserUrl}/favorite`;
export const updateUserData = `${baseUserUrl}/update`

// order actions
export const order = baseUrl + '/order';
export const createOrder = order + '/create';
export const updateOrder = order + '/update';
export const orderById = (id: string) => order + '/' + id;
