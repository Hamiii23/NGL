class ApiError extends Error {
  public statusCode: number;
  public data: null;
  public success: false;
  public errors: any;

  constructor(
    statusCode: number,
    message: string = "Something Went Wrong",
    errors: any[] = [],
    stack: string = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
