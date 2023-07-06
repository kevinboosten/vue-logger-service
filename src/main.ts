import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { LoggerPlugin } from "./utils/logger-plugin";
import { DatadogLogger } from "./utils/datadog-logger-service";
import { ConsoleLogService } from "./utils/console-logger.service";

createApp(App)
  .use(LoggerPlugin, {
    loggerService: process.env.NODE_ENV === "production" ? new DatadogLogger("") : new ConsoleLogService(),
  })
  .mount("#app");
