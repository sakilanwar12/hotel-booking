'use server'
import {signIn} from "@/lib/auth";
export const registerUser = async (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}) => {
    try {
        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};




export const loginUser = async (data: any) => {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};