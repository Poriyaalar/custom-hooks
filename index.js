"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval =
  exports.useElementSize =
  exports.useEventListener =
  exports.useCurrentPath =
  exports.useGlobalStorage =
  exports.useGlobalStorageValue =
  exports.useSetGlobalStorage =
  exports.useSetLocalStorage =
  exports.useLocalStorageValue =
  exports.useLocalStorage =
    void 0;
const useLocalStorage_1 = require("./modules/useLocalStorage");
Object.defineProperty(exports, "useLocalStorage", {
  enumerable: true,
  get: function () {
    return useLocalStorage_1.useLocalStorage;
  },
});
Object.defineProperty(exports, "useLocalStorageValue", {
  enumerable: true,
  get: function () {
    return useLocalStorage_1.useLocalStorageValue;
  },
});
Object.defineProperty(exports, "useSetLocalStorage", {
  enumerable: true,
  get: function () {
    return useLocalStorage_1.useSetLocalStorage;
  },
});
const useGlobalStorage_1 = require("./modules/useGlobalStorage");
Object.defineProperty(exports, "useGlobalStorage", {
  enumerable: true,
  get: function () {
    return useGlobalStorage_1.useGlobalStorage;
  },
});
Object.defineProperty(exports, "useGlobalStorageValue", {
  enumerable: true,
  get: function () {
    return useGlobalStorage_1.useGlobalStorageValue;
  },
});
Object.defineProperty(exports, "useSetGlobalStorage", {
  enumerable: true,
  get: function () {
    return useGlobalStorage_1.useSetGlobalStorage;
  },
});
const useCurrentPath_1 = __importDefault(require("./modules/useCurrentPath"));
exports.useCurrentPath = useCurrentPath_1.default;
const useEventListener_1 = __importDefault(
  require("./modules/useEventListener")
);
exports.useEventListener = useEventListener_1.default;
const useElementSize_1 = __importDefault(require("./modules/useElementSize"));
exports.useElementSize = useElementSize_1.default;
const useInterval_1 = __importDefault(require("./modules/useInterval"));
exports.useInterval = useInterval_1.default;
