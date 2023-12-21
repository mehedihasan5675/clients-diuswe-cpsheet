import TableHeading from "./cpanelTable/TableHeading";

const CpanelHome = () => {
  return (
    <div className="h-full">
      <h2 className="text-center text-lg lg:text-xl tracking-wider font-mono mb-5">
        Individual Contest Tracker
      </h2>

      <div>
        <TableHeading></TableHeading>
      </div>
    </div>
  );
};

export default CpanelHome;
