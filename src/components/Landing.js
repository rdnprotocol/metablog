export const Landing = (props) => {
  return (
    <div className=" h-fit w-screen flex flex-col justify-center items-center">
      <div className="h-full w-fit rounded-lg   bg-black relative">
        <img className="h-[600px] w-[358px]" src="" />
        <div className="h-1/2 w-[342px] bg-white absolute bottom-2 left-2 rounded-lg flex flex-col justify-center items-center">
          <div className="h-4/5 w-4/5  flex flex-col justify-between">
            <div className="h-fit w-fit font-light bg-[#4B6BFB] text-center text-white rounded-sm text-sm py-1 px-1">
              Technology
            </div>
            <div className="font-bold">TITLE</div>
            <div className="font-thin mt-1">DATE</div>
          </div>
        </div>
      </div>
      <div className="flex gap-9 mt-1">
        <div>GrNext</div>
        <div>{/* <GrNext /> */}</div>{" "}
      </div>
    </div>
  );
};
