import { ProfileType } from "@/store";
import { type } from "os";
import React, { FC } from "react";
import Image from "next/image";

type Props = {
  avatar_url: string;
  email: string;
  id: string;
  name: string | null;
};

const UserItem: FC<Props> = (user) => {
  return (
    <div className="px-8 py-8">
      <div className=" text-xl  font-burtons text-center py-5 ">
        <div className="container px-8 flex items-center justify-center relative bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 mx-auto ">
          <Image
            src={user.avatar_url}
            alt="avatar"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-full mx-auto pt-14"
          />
        </div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default UserItem;
