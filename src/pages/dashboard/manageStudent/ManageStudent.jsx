import { useEffect, useState } from "react";
import HeadingTitle from "./headingTitle/HeadingTitle";
import StudentDataArr from "./singleStudentData/StudentDataArr";

const ManageStudent = () => {
  const [sortingPropertyValue, setSortingPropertyValue] = useState("");
  useEffect(() => {
    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`)
      .then((res) => res.json())
      .then((data) => {
        const dataarr = data?.result;
        for (let i = 0; i < 7; i++) {
          if (i === 6) {
            const value = dataarr[i];
            const sortingbyheadingValue = value.heading_value;

            setSortingPropertyValue(sortingbyheadingValue);
          }
        }
      });
  }, []);
  return (
    <div className=" h-full  ">
      <h2 className="text-center text-lg lg:text-xl tracking-wider font-mono mb-5">
        Individual Data Editor & Manager
      </h2>
      <p className="  font-mono text-sm rounded-md flex bg-green-300 w-6/12 px-2 py-1 justify-center mb-3 mx-auto">
        {sortingPropertyValue && (
          <>⚽ {sortingPropertyValue}: High to Low wise decorated</>
        )}
      </p>
      <div className="flex flex-row ">
        <div className="w-6/12 max-w-xl">
          <HeadingTitle></HeadingTitle>
        </div>
        <div className="w-6/12 max-w-[610px]">
          <div className="  ">
            <StudentDataArr></StudentDataArr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
