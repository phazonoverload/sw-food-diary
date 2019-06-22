export default function(context) {
  console.log("[Middleware] Must Be Logged Out");
  if (context.store.getters.currentUser) { 
    context.redirect("/diary");
  }
}