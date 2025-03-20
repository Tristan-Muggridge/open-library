// errors.ts in your shared folder
export enum AppErrorCodes {
    USERNAME_IN_USE = "USERNAME_IN_USE",
    PROFILE_NOT_FOUND = "PROFILE_NOT_FOUND",
    // add additional error codes here
  }
  
  // Custom error class for richer context
  export class AppError extends Error {
    public code: AppErrorCodes;
    
    constructor(code: AppErrorCodes, message?: string) {
      super(message || code);
      this.code = code;
      Object.setPrototypeOf(this, AppError.prototype);
    }
  }
  