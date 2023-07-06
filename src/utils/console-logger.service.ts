import { LoggerService } from "./logger-service";

export class ConsoleLogService implements LoggerService {
  log(message: string, meta?: Record<string, string | number | boolean>): void {
    console.log(message, meta);
  }

  info(message: string, meta?: Record<string, string | number | boolean>): void {
    console.info(message, meta);
  }

  warn(message: string, meta?: Record<string, string | number | boolean>): void {
    console.warn(message, meta);
  }

  error(message: string, meta?: Record<string, string | number | boolean>): void {
    console.error(message, meta);
  }
}
