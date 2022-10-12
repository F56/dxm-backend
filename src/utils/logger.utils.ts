import winston, { Logger } from "winston";

const alignColorsAndTime: winston.Logform.Format = winston.format.combine(
    winston.format.colorize({
        level: true,
        message: true,
    }),
    winston.format.timestamp({
        format: "HH:mm:ss",
    }),
    winston.format.printf((info: winston.Logform.TransformableInfo) => {
        const { level, message, timestamp } = info;
        return `[${level}] ${timestamp}: ${message}`;
    })
);

const logger: Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(alignColorsAndTime),
        }),
    ],
});

export default logger;
