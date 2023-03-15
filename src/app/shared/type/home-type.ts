export interface AllHomeDataResponse {
  status: number;
  message: string;
  body: {
    customer_data: any;
    token: string;
  };
}

export interface VideoByIdResponse {
  status: number;
  message: string;
  body: VideoByIdBody;
}

export interface VideoByIdBody {
  status: number;
  message: string;
  body: {
    customer_data: any;
    token: string;
  };
}
