"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("./useEventListener"));
function useElementSize(elementRef) {
    var _a;
    const [size, setSize] = (0, react_1.useState)({
        width: 0,
        height: 0,
    });
    const updateSize = (0, react_1.useCallback)(() => {
        const node = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
        if (node) {
            setSize({
                width: node.offsetWidth || 0,
                height: node.offsetHeight || 0,
            });
        }
    }, [elementRef]);
    (0, react_1.useEffect)(() => {
        updateSize();
    }, [(_a = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth]);
    (0, useEventListener_1.default)("resize", updateSize);
    return size;
}
exports.default = useElementSize;
