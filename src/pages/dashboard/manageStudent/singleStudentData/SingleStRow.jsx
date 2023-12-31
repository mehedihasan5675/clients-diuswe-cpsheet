const SingleStRow = (props) => {
  const {
    singleStudentData,
    setEdit,
    serial,
    edit,
    eachPropertyName,
    oneIndexProperty,
    sixIndexProperty,
    register,
  } = props;
  // console.log(eachPropertyName, singleStudentData[eachPropertyName], "manage");
  return (
    <>
      <input
        readOnly={!edit}
        defaultValue={singleStudentData[eachPropertyName]}
        className={`${
          eachPropertyName === sixIndexProperty
            ? "pl-2 mb-2 w-full tracking-wide  outline-none text-purple-600  font-bold bg-white"
            : "pl-2 mb-2 w-full tracking-wide  outline-none bg-white"
        } ${
          singleStudentData[eachPropertyName] === "A"
            ? "pl-2 mb-2 w-full tracking-wide  outline-none text-red-500  bg-white font-bold"
            : "pl-2 mb-2 w-full tracking-wide  outline-none "
        }
        ${
          eachPropertyName === oneIndexProperty
            ? "pl-2 mb-2 w-full tracking-wide  outline-none font-bold italic bg-slate-300 "
            : "pl-2 mb-2 w-full tracking-wide  outline-none bg-white"
        }`}
        {...register(eachPropertyName)}
      />
    </>
  );
};

export default SingleStRow;
