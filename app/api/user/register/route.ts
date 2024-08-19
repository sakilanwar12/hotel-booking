
import { users } from "@/data/user";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
  try {
    let reqBody = await req.json();
    console.log(reqBody)
    const foundUser = users.find((user) => user.email === reqBody.email);
    if (foundUser) {
      return NextResponse.json({
        status: "fail",
        message: "User already exists",
      })
    }

    // register new user
    reqBody.id = users.length + 1;
    reqBody.image = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
    users.push(reqBody);
    return NextResponse.json({
      status: "success",
      message: "User created successfully",
      data: reqBody,
    });

  }catch (e) {
    console.log("An error occurred:", e);
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: e,
    });
  }
}


