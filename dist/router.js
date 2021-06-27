"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
exports.router = {
    user: {
        list: {
            href: "/users",
            as: "/users",
            file: "/users",
        },
    },
    saving: {
        list: {
            href: "/saving",
            as: "/saving",
            file: "/saving",
        },
    },
    withdrawal: {
        list: {
            href: "/withdrawal",
            as: "/withdrawal",
            file: "/withdrawal",
        },
    },
    send: {
        list: {
            href: "/send",
            as: "/send",
            file: "/send",
        },
    },
    report: {
        list: {
            href: "/report",
            as: "/report",
            file: "/report",
        },
    },
    permission: {
        list: {
            href: "/permissions",
            as: "/permissions",
            file: "/permission",
        },
    },
};
exports.default = exports.router;
