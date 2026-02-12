import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = { username: searchParams.get("username") };

    // validate with zod
    const result = UsernameQuerySchema.safeParse(queryParams);
    if (!result.success) {
      // const formatted = z.treeifyError(result.error)
      // const usernameErrors = formatted.properties?.username?.errors ?? []
      // return Response.json(
      //   {
      //     success: false,
      //     message:
      //       usernameErrors?.length > 0
      //         ? usernameErrors.join(", ")
      //         : "Invalid Query Parameters",
      //   },
      //   { status: 400 },
      // );

      return Response.json(
        {
          success: false,
          message:
            result.error.issues[0]?.message ?? "Invalid Query Parameters",
        },
        { status: 400 },
      );
    }

    const { username } = result.data;

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        { status: 400 },
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is unique",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error Checking username", error);
    return Response.json(
      {
        success: false,
        message: "Error Checking username",
      },
      { status: 500 },
    );
  }
}
