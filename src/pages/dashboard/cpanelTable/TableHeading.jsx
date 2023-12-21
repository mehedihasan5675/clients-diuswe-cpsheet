import { useEffect, useState } from "react";
import CreateHeading from "./CreateHeading";
import TableRow from "./TableRow";
import StudentColumn from "./studentColumn/StudentColumn";

const TableHeading = () => {
  const [allnewdata, setAllnewdata] = useState([]);

  useEffect(() => {
    fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
      .then((res) => res.json())
      .then((data) => {
        setAllnewdata(data?.result);
        // console.log(data);
      });
  }, []);
  // console.log(allheadingCount);
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-5 md:flex-row ">
          <div className="w-full flex-col md:w-6/12">
            <div className="">
              <CreateHeading
                allnewdata={allnewdata}
                setAllnewdata={setAllnewdata}
              ></CreateHeading>
            </div>
            <div className="mt-10 flex flex-col gap-5 md:flex-row">
              <div className="w-full ">
                {allnewdata?.map((td, i) => (
                  <TableRow
                    key={i}
                    TableHeading={td}
                    allnewdata={allnewdata}
                    setAllnewdata={setAllnewdata}
                    serial={i + 1}
                  ></TableRow>
                ))}
              </div>
            </div>
            {/*  */}
          </div>

          <div className="w-full md:w-6/12 flex   flex-col">
            <div className="justify-center items-center flex  w-full md:w-6/12 rounded-2xl py-8  shadow-2xl bg-base-100">
              <button className="btn btn-primary">CREATE NEW STUDENT</button>
            </div>
            <div className="mt-10 flex flex-col md:w-6/12  gap-5 md:flex-row">
              {<StudentColumn allnewdata={allnewdata}></StudentColumn>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeading;
