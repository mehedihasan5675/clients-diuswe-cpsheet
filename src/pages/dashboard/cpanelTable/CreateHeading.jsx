import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CreateHeading = ({ allnewdata, setAllnewdata, setAllheadingCount }) => {
  const { setReload, reload } = useContext(AuthContext);
  const handleCreateHeading = (e) => {
    e.preventDefault();
    const form = e.target;
    const headingValue = form.heading.value;
    const headingValueString = String(headingValue);
    const headingData = {
      heading_value: headingValueString,
    };
    //    form.reset();
    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(headingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          // console.log(data, "insertID");
          fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
            .then((res) => res.json())
            .then((data) => {
              setReload(!reload);
              setAllnewdata(data?.result);

              setAllheadingCount(data?.allheadingCount);
            });
        }
      })
      .catch((err) => console.log(err.message));
    form.reset();
  };
  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <form
          onSubmit={handleCreateHeading}
          className="card-body  flex flex-col lg:flex-row"
        >
          <div className="form-control  w-full lg:w-8/12">
            <input
              name="heading"
              type="text"
              placeholder="'Add Heading' for your content"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full lg:w-4/12">
            <input
              type="submit"
              value="Add Heading"
              className="btn btn-primary text-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHeading;
