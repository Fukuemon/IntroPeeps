import {
  SiTypescript,
  SiPython,
  SiDjango,
  SiReact,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
  return (
    <section className="text-primary">
      <div className="px-8 py-4">
        <h3 className="font-burtons text-3xl py-1">My Stack</h3>
        <p className="">
          私が現在学習しているの技術です。
          <br />
          <span className="text-lg px-1">フロントエンド</span>
          に注力しつつ、アプリの開発で必要となった技術を学んでいます
        </p>
        <div className="my-4">
          <div className="w-full border border-gray-300"></div>
          {/* 書く言語のロゴ */}
          <div className="flex flex-col">
            <h3 className="font-burtons text-2xl py-4">~FrontEnd~</h3>
            <div className=" text-7xl flex justify-center gap-16 py-3 ">
              <SiTypescript />
              <SiReact />
              <TbBrandNextjs />
            </div>
            <h3 className="font-burtons text-2xl pt-4">~BackEnd~</h3>
            <div className="text-7xl flex justify-center gap-16 py-3">
              <SiPython />
              <SiDjango />
            </div>
            <h3 className="font-burtons text-2xl pt-4">~Other~</h3>
            <div className="text-7xl flex justify-center gap-16 py-3">
              <SiDocker />
              <SiAmazonaws />
            </div>
          </div>

          <p className=""></p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
