import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ViewerSingleStudent from "./ViewerSingleStudent";

const VieweSingleStudentDataBox = ({ singlestudentdataObj, serial }) => {
  const [headingArr, setHeadingArr] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [sixIndexProperty, setSixIndexProperty] = useState("");
  const [oneIndexProperty, setOneIndexProperty] = useState("");
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`)
      .then((res) => res.json())
      .then((data) => {
        // setLoading(true);

        const dataarr = data?.result;
        const demoarr = [];
        for (let i = 0; i < dataarr.length; i++) {
          const finalheadingvalue = `_${i + 1}_PName`;
          demoarr.push(finalheadingvalue);
          if (i == 1) {
            const finalheadingvalue = `_${i + 1}_PName`;
            setOneIndexProperty(finalheadingvalue);
          } else if (i == 6) {
            const finalheadingvalue = `_${i + 1}_PName`;
            setSixIndexProperty(finalheadingvalue);
          }
        }
        setHeadingArr(demoarr);
        // setLoading(false);
      });
  }, []);
  setTimeout(() => {
    return setPageLoad(false);
  }, 3000);
  if (pageLoad) {
    return (
      <div className="w-full  ">
        <div className="flex justify-center w-full h-full items-center">
          <span className="loading loading-bars loading-lg text-sky-600 text-center"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-fit ">
      <p className="h-10 mx-auto bg-green-200 rounded-tl-full rounded-br-full flex justify-center items-center font-bold text-2xl  w-10 px-28  text-black">
        {" "}
        {serial}{" "}
        <span className="text-sm ml-2 ">
          {serial == 1
            ? "⭐⭐⭐"
            : serial == 2
            ? "⭐⭐"
            : serial == 3
            ? "⭐"
            : ""}
        </span>
      </p>
      <div className="  border relative border-r-4">
        <div className="flex flex-col w-full">
          {headingArr?.map((td, i) => (
            <ViewerSingleStudent
              key={i}
              singlestudentdataObj={singlestudentdataObj}
              serial={i + 1}
              eachPropertyName={td}
              oneIndexProperty={oneIndexProperty}
              sixIndexProperty={sixIndexProperty}
            ></ViewerSingleStudent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VieweSingleStudentDataBox;
