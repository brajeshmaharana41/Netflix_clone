export interface HttpResponse {
  body: any;
  message: string;
  status: number;
}

export interface CustomerDetailsUpdate {
  name: string;
  mobile: string;
  member: Member[];
  device: string[];
  language: string[];
}

export interface Member {
  name: string;
  kids: string;
}

export interface CustomerDetailsUpdateResponse {
  status: number;
  message: string;
  body: {
    _id: string;
    email: string;
    mobile_verify: boolean;
    password: string;
    member: Member[];
    device: string[];
    language: string[];
    user_role: string;
    status: boolean;
    subscription_status: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    mobile: number;
    name: string;
  };
}

export interface Signin {
  user_name: string;
  password: string;
  source: 'direct';
  device_name: 'web';
  device_token: '12345';
}

export interface SigninResponse {
  status: number;
  message: string;
  body: {
    customer_data: {
      _id: string;
      email: string;
      mobile_verify: boolean;
      password: string;
      member: Member[];
      device: string[];
      language: string[];
      user_role: string;
      status: boolean;
      subscription_status: boolean;
      createdAt: string;
      updatedAt: string;
      __v: number;
      mobile: string;
      name: string;
    };
    token: string;
  };
}
