import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const saveExecution = mutation({
  args: {
    language: v.string(),
    code: v.string(),
    //We could have either one of them, or both at the same time
    output: v.optional(v.string()),
    error: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new ConvexError("Not authenticated")
    }

    const user = await ctx.db
      .query('users')
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field('userId'), identity.subject))
      .first()

    if (!user?.isPro && args.language !== "javascript") {
      throw new ConvexError("You need to be a pro user to use this language")
    }

    await ctx.db.insert("codeExecutions", {
      ...args,
      userId: identity.subject,
    }
    )
  }
})