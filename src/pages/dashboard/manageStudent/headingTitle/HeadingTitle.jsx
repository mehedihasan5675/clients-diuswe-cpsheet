import { useEffect, useState } from "react";
import SingleHeadingTitle from "./SingleHeadingTitle";

const HeadingTitle = () => {
  const [allheadingdata, setAllheadingdata] = useState([]);
  useEffect(() => {
    fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
      .then((res) => res.json())
      .then((data) => {
        setAllheadingdata(data?.result);
        // console.log(data?.result);
      });
  }, []);
  //   console.log(allheadingdata);
  return (
    <div>
      {allheadingdata?.map((td, i) => (
        <SingleHeadingTitle
          headingdata={td}
          index={i + 1}
          key={i}
        ></SingleHeadingTitle>
      ))}
    </div>
  );
};

export default HeadingTitle;
