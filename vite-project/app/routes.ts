// import { type RouteConfig, index } from "@react-router/dev/routes";
// import path from "path";

// export default [index("routes/home.tsx"),
//     route(path:'/auth',file:'routes/auth.tsx')
// ] satisfies RouteConfig;

import { type RouteConfig, index } from "@react-router/dev/routes";
import path from "path";

export default [
    index("routes/home.tsx"),
    {
        path: '/auth',
        file: 'routes/auth.tsx'
    }
] satisfies RouteConfig;