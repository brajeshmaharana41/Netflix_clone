export interface AllHomeDataResponse {
  status: number;
  message: string;
  body: {
    customer_data: any;
    token: string;
  };
}
