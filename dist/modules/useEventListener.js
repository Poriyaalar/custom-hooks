"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useEventListener(eventName, handler, element) {
    const savedHandler = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        const targetElement = element?.current || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        if (savedHandler.current !== handler) {
            savedHandler.current = handler;
        }
        const eventListener = (event) => {
            if (savedHandler?.current) {
                savedHandler.current(event);
            }
        };
        targetElement.addEventListener(eventName, eventListener);
        return () => {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, handler]);
}
exports.default = useEventListener;
//# sourceMappingURL=useEventListener.js.map