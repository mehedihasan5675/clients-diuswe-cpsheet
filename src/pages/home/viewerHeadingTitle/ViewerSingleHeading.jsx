const ViewerSingleHeading = ({ singleheadingdata, serial }) => {
  return (
    <div>
      <div className="flex flex-row mr-1  font-mono gap-1  font-semibold">
        <h2 className="w-10  bg-green-100 flex justify-center items-center mb-2 rounded-md">
          {serial}
        </h2>
        <input
          defaultValue={singleheadingdata.heading_value}
          readOnly
          className="pl-2 bg-green-100  tracking-wider   w-full  outline-none mb-2  rounded-md"
        />
      </div>
    </div>
  );
};

export default ViewerSingleHeading;
