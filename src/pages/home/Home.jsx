import ViewerHeadingTitle from "./viewerHeadingTitle/ViewerHeadingTitle";
import ViewerStudentData from "./viewerStudentData/ViewerStudentData";

const Home = () => {
  return (
    <div>
      <p className="  font-mono text-base md:text-lg rounded-md flex bg-green-300 max-w-[500px] px-2 py-1 justify-center mb-3 mx-auto">
        ⚽ Individual Contest Tracker, SWE-DIU
      </p>

      <div className="flex flex-row ">
        <div className="w-[45%]  max-w-2xl ">
          <p className="h-10  bg-green-200 rounded-tl-full rounded-br-full"></p>
          <ViewerHeadingTitle></ViewerHeadingTitle>
        </div>
        <div className="w-[55%] max-w-4xl ">
          <div>
            <ViewerStudentData></ViewerStudentData>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
