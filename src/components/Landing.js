// import { getArticles } from "../app/page";

// const articles = getArticles();

export const Landing = (props) => {
  return (
    <div className=" h-fit w-screen flex justify-center">
      <div className="h-full w-fit rounded-md  border  border-black bg-black relative">
        <img className="h-[600px] w-[358px]" src="" />
        <div className="h-1/2 w-full bg-white absolute bottom-0 left-0 border border-black flex flex-col justify-center items-center">
          <div className="h-4/5 w-4/5 border border-black flex flex-col justify-between">
            <div className="h-fit w-fit font-light bg-[#4B6BFB] text-center text-white rounded-sm text-sm py-1 px-1">
              Technology
            </div>
            <div className="font-bold">{props.title}</div>
            <div className="font-thin mt-1">DATE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
