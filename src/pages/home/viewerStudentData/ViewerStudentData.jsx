import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import VieweSingleStudentDataBox from "./VieweSingleStudentDataBox";

const ViewerStudentData = () => {
  const [allstudentdata, setAllstudentData] = useState([]);
  const { loading, setLoading, tableHeadingPropertyNameArr } =
    useContext(AuthContext);

  const sixPropertyName = tableHeadingPropertyNameArr[6];
  useEffect(() => {
    fetch(
      `https://server-diuswe-cpsheet-sepia.vercel.app/allstudentdata/${sixPropertyName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllstudentData(data);
        // console.log(data);
      });
  }, [sixPropertyName]);

  return (
    <div className="flex flex-row  overflow-x-scroll">
      {allstudentdata?.map((td, i) => (
        <VieweSingleStudentDataBox
          key={i}
          singlestudentdataObj={td}
          serial={i + 1}
        ></VieweSingleStudentDataBox>
      ))}
    </div>
  );
};

export default ViewerStudentData;
