import { LoggerService } from "./logger-service";

export type RemoteLoggerOptions = {
  apiKey: string;
};

export class RemoteLogger implements LoggerService {
  constructor(options?: RemoteLoggerOptions) {
    console.log(`🚀 ~ RemoteLogger ~ options:`, options);
  }

  log(message: string, meta?: Record<string, string | number | boolean>): void {
    console.log(`🚀 ~ RemoteLogger ~ message:`, message);
  }

  info(message: string, meta?: Record<string, string | number | boolean>): void {
    console.info(`🚀 ~ RemoteLogger ~ message:`, message);
  }

  warn(message: string, meta?: Record<string, string | number | boolean>): void {
    console.warn(`🚀 ~ RemoteLogger ~ message:`, message);
  }

  error(message: string, meta?: Record<string, string | number | boolean>): void {
    console.error(`🚀 ~ RemoteLogger ~ message:`, message);
  }
}
