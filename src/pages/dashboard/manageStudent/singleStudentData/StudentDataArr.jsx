import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SingleStudentDataBox from "./SingleStudentDataBox";

const StudentDataArr = () => {
  const { loading, setLoading, tableHeadingPropertyNameArr } =
    useContext(AuthContext);
  const [allstudentdata, setAllstudentData] = useState([]);
  const sixPropertyName = tableHeadingPropertyNameArr[6];
  useEffect(() => {
    fetch(
      `https://server-diuswe-cpsheet-sepia.vercel.app/allstudentdata/${sixPropertyName}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllstudentData(data);
      });
  }, []);
  return (
    <div className="flex flex-row   overflow-x-scroll ">
      {allstudentdata?.map((td, i) => (
        <SingleStudentDataBox
          singleStudentData={td}
          key={i}
          serial={i + 1}
          setAllstudentData={setAllstudentData}
        ></SingleStudentDataBox>
      ))}
    </div>
  );
};

export default StudentDataArr;
