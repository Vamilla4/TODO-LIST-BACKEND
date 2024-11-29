"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
const logging_1 = require("./logging");
exports.prismaClient = new client_1.PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "event",
            level: "warn",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "error",
        },
    ],
});
exports.prismaClient.$on("info", (e) > {
    logger: logging_1.logger, : .info(e)
});
exports.prismaClient.$on("error", (e) > {
    logger: logging_1.logger, : .info(e)
});
exports.prismaClient.$on("warn", (e) > {
    logger: logging_1.logger, : .info(e)
});
exports.prismaClient.$on("query", (e) > {
    logger: logging_1.logger, : .info(e)
});
