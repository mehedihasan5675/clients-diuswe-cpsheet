const ViewerSingleStudent = ({
  singlestudentdataObj,
  serial,
  eachPropertyName,
  oneIndexProperty,
  sixIndexProperty,
}) => {
  return (
    <div className="w-full ">
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
        }`}
      />
    </div>
  );
};

export default ViewerSingleStudent;
