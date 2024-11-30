import React from "react";

const UserDetail = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  return <h1 className="text-3xl">User Profile: {userId}</h1>;
};

export default UserDetail;
