export interface LoggerService {
  log(message: string, meta?: Record<string, string | number | boolean>): void;
  info(message: string, meta?: Record<string, string | number | boolean>): void;
  warn(message: string, meta?: Record<string, string | number | boolean>): void;
  error(message: string, meta?: Record<string, string | number | boolean>): void;
}
