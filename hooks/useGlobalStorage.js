"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetGlobalStorage = exports.useGlobalStorageValue = exports.useGlobalStorage = void 0;
const get_1 = __importDefault(require("lodash/get"));
const set_1 = __importDefault(require("lodash/set"));
const react_1 = require("react");
// ----------------------------------------------------------------------
function useGlobalStorage(key, defaultValue) {
    const [value, setValue] = (0, react_1.useState)(() => {
        return (0, get_1.default)(window, ["global-storage", key], defaultValue);
    });
    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            (0, set_1.default)(window, ["global-storage", key], result);
            return result;
        });
    };
    return [value, setValueInLocalStorage];
}
exports.useGlobalStorage = useGlobalStorage;
function useGlobalStorageValue(key) {
    const value = () => {
        return (0, get_1.default)(window, ["global-storage", key]);
    };
    const getValue = value();
    return getValue;
}
exports.useGlobalStorageValue = useGlobalStorageValue;
function useSetGlobalStorage(key, defaultValue) {
    const [value, setValue] = (0, react_1.useState)(() => {
        return (0, get_1.default)(window, ["global-storage", key], defaultValue);
    });
    const setValueInGlobalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            (0, set_1.default)(window, ["global-storage", key], result);
            return result;
        });
    };
    return [setValueInGlobalStorage];
}
exports.useSetGlobalStorage = useSetGlobalStorage;
