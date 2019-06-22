export default function(context) {
  console.log("[Middleware] Must Be Logged In");
  if (!context.store.getters.currentUser) {
    context.redirect("/login");
  }
}