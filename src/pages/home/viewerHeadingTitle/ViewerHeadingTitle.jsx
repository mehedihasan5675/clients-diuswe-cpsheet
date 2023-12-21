import { useEffect, useState } from "react";
import ViewerSingleHeading from "./ViewerSingleHeading";

const ViewerHeadingTitle = () => {
  const [allheadingdata, setAllheadingdata] = useState([]);
  useEffect(() => {
    fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
      .then((res) => res.json())
      .then((data) => {
        setAllheadingdata(data?.result);
      });
  }, []);
  return (
    <div>
      {allheadingdata?.map((td, i) => (
        <ViewerSingleHeading
          key={i}
          serial={i + 1}
          singleheadingdata={td}
        ></ViewerSingleHeading>
      ))}
    </div>
  );
};

export default ViewerHeadingTitle;
