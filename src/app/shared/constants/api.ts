import { environment } from '../../../environments/environment';

const baseURL = environment.baseURL;
export class API {
  public static Auth = {};

  public static Customer = {
    signup: `${baseURL}customer/signup`,
    customerDetailsUpdate: `${baseURL}customer/customerDetailsUpdate`,
    signin: `${baseURL}customer/signin`,
    updateWatchProfile: `${baseURL}customer/updateWatchProfile`,
    allLanguage: `${baseURL}customer/getAllLanguage`,
    allDevice: `${baseURL}customer/getAllDevice`,
    fetchProfileDetails: `${baseURL}customer/fetchProfileDetails`,
    forgotPassword: `${baseURL}customer/forgotPassword`,
    forgotPasswordChange: `${baseURL}customer/forgotPasswordChange`,
    changePassword: `${baseURL}customer/changePassword`,
    signupSuccess: `${baseURL}customer/signupSuccess`,
    forgotPasswordVerify: `${baseURL}customer/forgotPasswordVerify`,
    signupOtpVerify: `${baseURL}customer/signupOtpVerify`,
    signout: `${baseURL}customer/signout`,
    getAllDevice: `${baseURL}customer/getAllDevice`,
    addProfile: `${baseURL}customer/customerDetailsUpdate`,
    updateProfile: `${baseURL}customer/update-profile`,
    deleteProfile: `${baseURL}customer/delete-profile`,
  };

  public static User_Subscription = {
    getAllSubscription: `${baseURL}user_subscription/getAllSubscription`,
    userSubscribe: `${baseURL}user_subscription/userSubscribe`,
  };

  public static user_video_wishlist = {
    addToWishlist: `${baseURL}user_video_wishlist/addToWishlist`,
    fetchWishlist: `${baseURL}user_video_wishlist/fetchWishlist`,
    removeFromWishlist: `${baseURL}user_video_wishlist/removeFromWishlist`,
  };

  public static User_Video = {
    // getAllHomeData: `${baseURL}user_video/getAllHomeData`,
    getAllHomeData: `${baseURL}user_video/getAllCategoryList?skip=0&limit=10`,
    getAllVideoByVideoType: `${baseURL}user_video/getAllVideoByVideoType`,
    videoSearch: `${baseURL}user_video/videoSearch`,
    getVideoById: `${baseURL}user_video/getVideoById`,
    likeUnlikeLove: `${baseURL}user_video/likeUnlikeLove`,
    getAllVideoGenres: `${baseURL}user_video/getAllVideoGenres`,
    getSimilarVideo: `${baseURL}user_video/getSimilarVideo`,
    getVideoByCategory: `${baseURL}user_video/getVideoByCategory`,
    getAllBannerVideo:  `${baseURL}user_video/getAllBannerVideo`,
    fetchVideoType: `${baseURL}user_video/fetchVideoType`
  };
}
