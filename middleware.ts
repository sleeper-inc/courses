import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
    // Routes that can always be accessed,and have
    // no authentication information
    // ignoredRoutes: ["/about"],
})

export const config = {
    // Protects all routes, include api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
