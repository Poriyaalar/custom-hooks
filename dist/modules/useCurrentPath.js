"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const useCurrentPath = () => {
    const location = (0, react_router_dom_1.useLocation)();
    return location.pathname;
};
exports.default = useCurrentPath;
//# sourceMappingURL=useCurrentPath.js.map