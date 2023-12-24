import { Link } from "react-router-dom";

const ViewerSingleStudent = ({
  singlestudentdataObj,
  serial,
  eachPropertyName,
  oneIndexProperty,
  sixIndexProperty,
}) => {
  return (
    <Link
      to={`${
        serial === 3
          ? singlestudentdataObj[eachPropertyName]
          : serial === 4
          ? singlestudentdataObj[eachPropertyName]
          : serial === 5
          ? singlestudentdataObj[eachPropertyName]
          : "#"
      }`}
      target={`${
        serial === 3
          ? "_blank"
          : serial === 4
          ? "_blank"
          : serial === 5
          ? "_blank"
          : ""
      }`}
      rel="noreferrer"
      className="w-full"
    >
      <input
        readOnly
        defaultValue={singlestudentdataObj[eachPropertyName]}
        className={`${
          eachPropertyName === sixIndexProperty
            ? "pl-2 mb-2 w-full tracking-wide  outline-none  text-purple-600 bg-red-100  font-bold"
            : "pl-2 mb-2 w-full tracking-wide  outline-none "
        } ${
          singlestudentdataObj[eachPropertyName] === "A"
            ? "pl-2 mb-2 w-full tracking-wide  outline-none bg-red-100 text-red-500  font-bold"
            : "pl-2 mb-2 w-full tracking-wide  outline-none  "
        }
        ${
          eachPropertyName === oneIndexProperty
            ? "pl-2 mb-2 w-full tracking-wide  outline-none  font-bold italic bg-yellow-100  "
            : "pl-2 mb-2 w-full tracking-wide  outline-none bg-red-100"
        }
        ${
          serial === 3
            ? "cursor-pointer "
            : serial === 4
            ? "cursor-pointer "
            : serial === 5
            ? "cursor-pointer"
            : "cursor-text "
        }`}
      />
    </Link>
  );
};

export default ViewerSingleStudent;
