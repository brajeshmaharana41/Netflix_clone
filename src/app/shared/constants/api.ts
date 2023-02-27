import { environment } from '../../../environments/environment';

const baseURL = environment.baseURL;
export class API {
  public static Auth = {};

  public static Customer = {
    signup: `${baseURL}customer/signup`,
    customerDetailsUpdate: `${baseURL}customer/customerDetailsUpdate`,
    signin: `${baseURL}customer/signin`,
    allLanguage: `${baseURL}customer/getAllLanguage`,
    allDevice: `${baseURL}customer/getAllDevice`,
    fetchProfileDetails: `${baseURL}customer/fetchProfileDetails`,
    forgotPassword: `${baseURL}customer/forgotPassword`,
    forgotPasswordChange: `${baseURL}customer/forgotPasswordChange`,
    changePassword: `${baseURL}customer/changePassword`,
    signupSuccess: `${baseURL}customer/signupSuccess`,
    forgotPasswordVerify: `${baseURL}customer/forgotPasswordVerify`,
    signupOtpVerify: `${baseURL}customer/signupOtpVerify`,
  };
}
