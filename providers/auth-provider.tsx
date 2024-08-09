"use client";
import { SessionProvider as NextAuthProvider } from "next-auth/react"
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthProvider>
      {children}
    </NextAuthProvider>
  );
};

export default AuthProvider;