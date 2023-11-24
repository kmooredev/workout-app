export class CustomError extends Error {
  statusCode!: number;
  message!: string;
}

export const errorHandler = (statusCode: number, message: string): CustomError => {
  const error = new CustomError();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
