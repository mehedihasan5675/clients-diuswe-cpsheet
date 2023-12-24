import ViewerHeadingTitle from "./viewerHeadingTitle/ViewerHeadingTitle";
import ViewerStudentData from "./viewerStudentData/ViewerStudentData";

const Home = () => {
  return (
    <div className="text-black">
      <p className="  font-mono text-sm md:text-lg rounded-md flex bg-green-300 max-w-[500px] px-2 py-1 justify-center mb-3 mx-auto">
        ⚽ Individual Contest Tracker, SWE-DIU
      </p>

      <div className="flex flex-row ">
        <div className="md:w-3/12 w-5/12  max-w-sm">
          <p className="h-10  bg-green-200 rounded-tl-full rounded-br-full"></p>
          <ViewerHeadingTitle></ViewerHeadingTitle>
        </div>
        <div className="md:w-9/12 w-7/12 max-w-6xl ">
          <div>
            <ViewerStudentData></ViewerStudentData>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
