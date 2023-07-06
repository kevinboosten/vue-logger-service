import { LoggerService } from "./logger-service";

export class DatadogLogger implements LoggerService {
  private client: any;

  constructor(apiKey: string) {
    this.client = new Datadog(apiKey);
  }

  log(message: string, meta?: Record<string, string | number | boolean>): void {
    throw new Error("Method not implemented.");
  }

  info(message: string, meta?: Record<string, string | number | boolean>): void {
    throw new Error("Method not implemented.");
  }

  warn(message: string, meta?: Record<string, string | number | boolean>): void {
    throw new Error("Method not implemented.");
  }

  error(message: string, meta?: Record<string, string | number | boolean>): void {
    throw new Error("Method not implemented.");
  }
}
