import { getServerSession, User } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";

export async function DELETE(
  request: Request,
  { params }: { params: { messageid: string } },
) {
  const messageId = params.messageid;

  // Connect to the database
  await dbConnect();

  // Get the user session
  const session = await getServerSession(authOptions);
  const user: User = session?.user;

  // Check if the user is authenticated
  if (!session || !user) {
    return Response.json(
      { success: false, message: "Not authenticated" },
      { status: 401 },
    );
  }

  try {
    const updatedResult = await UserModel.updateOne(
      { _id: user._id },
      { $pull: { messages: { _id: messageId } } },
    );

    if (updatedResult.modifiedCount === 0) {
      return Response.json(
        { message: "Message not found or already deleted", success: false },
        { status: 404 },
      );
    }

    return Response.json(
      { message: "Message Deleted", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting message:", error);
    return Response.json(
      { message: "Error deleting message", success: false },
      { status: 500 },
    );
  }
}
