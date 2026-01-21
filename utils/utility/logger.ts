import winston from 'winston';

const { combine, timestamp, printf, colorize } = winston.format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Console logs
    new winston.transports.Console({
      format: combine(colorize(), logFormat)
    }),

    // File logs
    new winston.transports.File({
      filename: 'logs/api-test.log'
    })
  ]
});

export default logger;
