import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const TableRow = (props) => {
  const { loading, setLoading, reload, setReload } = useContext(AuthContext);

  const [edit, setEdit] = useState(false);
  const { TableHeading, serial, setAllnewdata } = props;
  const handleHeadingDelete = (id) => {
    // console.log("Deleted ID", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
              fetch(
                "https://server-diuswe-cpsheet-sepia.vercel.app/tableheading"
              )
                .then((res) => res.json())
                .then((data) => {
                  setLoading(false);
                  setReload(!reload);
                  if (!loading) {
                    setAllnewdata(data?.result);

                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                      timer: 1000,
                    });
                  }
                });
            }
          });
      }
    });
  };
  const [update_id, setUpdate_id] = useState("");
  const handleUpdateHeading = (id) => {
    setEdit(!edit);
    // fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/update_heading`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(id),
    // });
    setUpdate_id(id);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(update_id, "updateID");
    fetch(
      `https://server-diuswe-cpsheet-sepia.vercel.app/update_heading/${update_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setReload(!reload);
          // fetch("https://server-diuswe-cpsheet-sepia.vercel.app/tableheading")
          //   .then((res) => res.json())
          //   .then((data) => {
          //     // setAllnewdata(data?.result);
          //     console.log(data, "data after");
          //   });
          Swal.fire({
            title: "Updated!",
            text: "Your file has been updated successfully.",
            icon: "success",
            timer: 1500,
          });
          setReload(!reload);
        }
      });
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
          <input
            className={`${edit ? "block btn btn-primary btn-xs" : " hidden "}`}
            type="submit"
            value="update"
            onClick={() => handleUpdateHeading(TableHeading?._id)}
          />
        </form>
        <div className="flex w-2/12 gap-1">
          <button
            onClick={() => setEdit(!edit)}
            className="btn btn-success btn-xs "
          >
            EDIT
          </button>

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

export default TableRow;
