import { App, Plugin } from "vue";
import { LoggerService } from "./logger-service";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    [LOGGER_INJECTION_KEY]: LoggerService;
  }
}

// export class LoggerPlugin implements Plugin {
//   private loggerService: LoggerService;

//   constructor(loggerService: LoggerService) {
//     this.loggerService = loggerService;
//   }

//   public install(app: App): void {
//     app.config.globalProperties.$logger = this.loggerService;
//   }
// }

export const LOGGER_INJECTION_KEY = Symbol("$logger");

export const LoggerPlugin: Plugin = {
  install(app: App, options: { loggerService: LoggerService }) {
    app.config.globalProperties.$logger = options.loggerService;
  },
};
