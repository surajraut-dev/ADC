import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
  debug: true,
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,                   
      authorization: {
        params: {
          scope: "openid profile email api://2a8ec54e-7408-4828-abc4-d9b05a829aea/access_as_user/user_impersonation",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the access token in the JWT
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the access token to the session object
      return {
        ...session,
        accessToken: token.accessToken as string | undefined,
      };
    },
  },
});

export { handler as GET, handler as POST };
