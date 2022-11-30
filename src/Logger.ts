
const black   = '\u001b[30m';
const red     = '\u001b[31m';
const green   = '\u001b[32m';
const yellow  = '\u001b[33m';
const blue    = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';
const reset   = '\u001b[0m';

enum LoggerLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
  Fatal = 4,
  None = -1,
}

class Logger {

  private loggerLevel: LoggerLevel;

  public constructor(loggerLevel: LoggerLevel = LoggerLevel.Info) {
    this.loggerLevel = loggerLevel;
  }

  public Debug(message: string): void {
    if (this.loggerLevel <= LoggerLevel.Debug) {
      console.log(`${black}[DEBUG]${reset} ${message}`);
    }
  }
  public Info(message: string): void {
    if (this.loggerLevel <= LoggerLevel.Info) {
      console.log(`${green} [INFO]${reset} ${message}`);
    }
  }
  public Warn(message: string): void {
    if (this.loggerLevel <= LoggerLevel.Warn) {
      console.log(`${yellow} [WARN]${reset} ${message}`);
    }
  }
  public Error(message: string): void {
    if (this.loggerLevel <= LoggerLevel.Error) {
      console.log(`${magenta}[ERROR]${reset} ${message}`);
    }
  }
  public Fatal(message: string): void {
    if (this.loggerLevel <= LoggerLevel.Fatal) {
      console.log(`${red}[FATAL]${reset} ${message}`);
    }
  }
}

export { Logger, LoggerLevel };
