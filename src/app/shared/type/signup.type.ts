import { Member } from './in-type';

export interface SignUp {
  email: string;
  password: string;
  source: 'direct';
  device_name: 'web';
  device_token: '63e3f10dca32b744942603ae';
  language: "English"
}

export interface SignUpResponse {
  status: number;
  message: string;
  body: {
    customer_data: CustomerData;
    token: string;
  };
}

export interface CustomerData{
  email: string;
  mobile_verify: boolean;
  password: string;
  member: Member[];
  device: string[];
  language: string[];
  user_role: string;
  status: boolean;
  subscription_status: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SignUpOTPVerify{
  
    status: number,
    message: string,
    body: any
}


export interface SubscriptionResponse{
  status: number,
  message: string,
  body: SubscriptionResponseBody[]
}

export interface Devices
     {
                  is_active: boolean,
                  is_deleted: boolean,
                  name: string,
                  icon: string,
                  id: string
              }


              export interface SubscriptionResponseBody  {
                is_active: boolean,
                is_deleted: boolean,
                title: string,
                description: string,
                package_days: string,
                limit_package_videos: string,
                package_price: string,
                no_of_devices: string,
                name_of_devices: Devices[],
                createdAt: string,
                updatedAt: string,
                id: string
            } 


            export interface UserSubscribeResponse{
              status: number,
              message: string,
              body: UserSubscribeResponseBody
          }


          export interface UserSubscribeResponseBody{
            mobile: string,
            mobile_verify: boolean,
            member: [],
            language: string,
            user_role: string,
            is_active: boolean,
            subscription_status: boolean,
            payment_status: boolean,
            admin_access: boolean,
            createdAt: string,
            updatedAt: string,
            payment_method: string,
            subscription_amount: string,
            subscription_end_date:string,
            subscription_id: string,
            subscription_start_date: string,
            id: string
        }
