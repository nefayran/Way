export interface ApiError {
  message: string;
  status: number;
  raw: Error;
}
