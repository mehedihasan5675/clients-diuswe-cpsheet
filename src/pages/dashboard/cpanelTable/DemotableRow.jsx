import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DemotableRow = (props) => {
  // console.log(props);
  const { loading, setLoading } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const { TableHeading, serial, allnewdata, setAllnewdata } = props;
  // console.log(TableHeading, "tablekfffff");
  const handleHeadingDelete = (id) => {
    // console.log("Deleted ID", id);
    fetch(
      `https://server-diuswe-cpsheet-sepia.vercel.app/deleteheading/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);

        if (data.deletedCount > 0) {
          fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              // console.log(data, "datassssss");
              if (!loading) {
                setAllnewdata(data);
              }
            });
        }
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <>
      <div className="my-2 flex w-full flex-row gap-1">
        <p className="w-1/12">{serial}</p>
        <form
          className="w-8/12 flex justify-between flex-row gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            readOnly={!edit}
            defaultValue={TableHeading.heading_value}
            className="pl-1  w-full lg:w-10/12 outline-none  ml-2 rounded-md"
            {...register("heading_value")}
          />
          {/* <input
            className={`${edit ? "block btn btn-primary btn-xs" : " hidden "}`}
            type="submit"
            value="update"
            onClick={() => setEdit(!edit)}
          /> */}
        </form>
        <div className="flex w-2/12 gap-1">
          {/* <button
            onClick={() => setEdit(!edit)}
            className="btn btn-success btn-xs "
          >
            EDIT
          </button> */}

          <button
            onClick={() => handleHeadingDelete(TableHeading?._id)}
            className="btn btn-error btn-xs "
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default DemotableRow;
