import { inject } from "vue";
import { LOGGER_INJECTION_KEY } from "./logger-plugin";
import { LoggerService } from "./logger-service";

export function useLogger() {
  const logger = inject<LoggerService>(LOGGER_INJECTION_KEY);

  if (!logger) {
    throw new Error("No logger service provided");
  }

  return logger;
}
