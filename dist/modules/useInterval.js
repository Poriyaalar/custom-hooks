"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useInterval = (callback, delay, stop) => {
    const savedCallback = (0, react_1.useRef)();
    const interval = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallback.current = callback;
        if (stop?.()) {
            clearInterval(interval.current);
        }
    }, [callback]);
    (0, react_1.useEffect)(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            interval.current = setInterval(tick, delay);
            return () => clearInterval(interval.current);
        }
    }, [delay]);
};
exports.default = useInterval;
//# sourceMappingURL=useInterval.js.map