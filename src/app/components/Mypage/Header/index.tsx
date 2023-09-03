import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { ProfileType } from "@/store";
import { FC } from "react";

type Props = {
  profile: ProfileType;
};

const Header: FC<Props> = (props) => {
  return (
    <section className="min-h-screen">
      <div className="px-8 py-8">
        <div className="text-primary text-center p-10 ">
          <h2 className="pb-4 text-5xl text-black font-burtons font-medium">
            ~{props.profile.name}~
          </h2>
        </div>
        <div className="text-5xl flex justify-center gap-16 pb-3 text-primary">
          <Link href="https://github.com/Fukuemon">
            <FaGithub />
          </Link>

          <Link href="https://twitter.com/fukuemon362929">
            <AiFillTwitterCircle />
          </Link>
          <Link href="">
            <SiZenn />
          </Link>
        </div>
        <div className="relative bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 mx-auto ">
          <Image
            src={props.profile.avatar_url}
            alt="myprofile"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
