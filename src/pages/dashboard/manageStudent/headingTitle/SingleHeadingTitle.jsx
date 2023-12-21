const SingleHeadingTitle = ({ headingdata, index }) => {
  return (
    <div className="flex flex-row mr-1  gap-3  font-semibold">
      <h2 className="w-6">{index}</h2>
      <input
        defaultValue={headingdata.heading_value}
        readOnly
        className="pl-1  tracking-wider   w-full  outline-none mb-2  rounded-md"
      />
    </div>
  );
};

export default SingleHeadingTitle;
