import { Member } from './in-type';

export interface SignUp {
  email: string;
  password: string;
  source: 'direct';
  device_name: 'web';
  device_token: '63e3f10dca32b744942603ae';
}

export interface SignUpResponse {
  status: number;
  message: string;
  body: {
    customer_data: {
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
    };
    token: string;
  };
}

export interface SignUpOTPVerify{
  
    status: number,
    message: string,
    body: any
}
