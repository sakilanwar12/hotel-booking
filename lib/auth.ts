import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { getUserByEmail } from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({

    session: {
        strategy: "jwt",
    },
    providers: [
        GitHub,
        Google,
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if(credentials===null) return null;
                try {
                    const user = getUserByEmail(credentials?.email as string);
                    if (user) {
                        const isMatch = user?.password === credentials.password;
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email and password do not match");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error as string);
                }
            }
          
      })
    ],

})