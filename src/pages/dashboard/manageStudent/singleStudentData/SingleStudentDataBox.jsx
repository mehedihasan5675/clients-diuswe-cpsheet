import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SingleStRow from "./SingleStRow";
const SingleStudentDataBox = ({
  singleStudentData,
  setAllstudentData,

  serial,
}) => {
  const { loading, setLoading, tableHeadingPropertyNameArr } =
    useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const [headingArr, setHeadingArr] = useState([]);
  const [sixIndexProperty, setSixIndexProperty] = useState("");
  const [oneIndexProperty, setOneIndexProperty] = useState("");
  const [update_id, setUpdate_id] = useState("");
  const sixPropertyName = tableHeadingPropertyNameArr[6];
  // console.log(sixPropertyName, "ki");
  const handleStudentDelete = (id) => {
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
          `https://server-diuswe-cpsheet-sepia.vercel.app/delete_student/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setLoading(true);

            if (data.deletedCount > 0) {
              fetch(
                `https://server-diuswe-cpsheet-sepia.vercel.app/allstudentdata/${sixPropertyName}`
              )
                .then((res) => res.json())
                .then((data) => {
                  // console.log(data, "after delete data");

                  setLoading(false);
                  if (!loading) {
                    setAllstudentData(data);
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
  const handleStudentUpdate = (id) => {
    setEdit(!edit);
    setUpdate_id(id);
    // console.log(id);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const sortingPropertyIndexWiseName = tableHeadingPropertyNameArr[6];
    const sorting_property_value = data[sortingPropertyIndexWiseName];
    const sorting_value_number = parseFloat(sorting_property_value);
    data[sortingPropertyIndexWiseName] = sorting_value_number;

    fetch(
      `https://server-diuswe-cpsheet-sepia.vercel.app/update_student/${update_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLoading(true);
          fetch(
            `https://server-diuswe-cpsheet-sepia.vercel.app/allstudentdata/${sixPropertyName}`
          )
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              if (!loading) {
                // console.log(data, "after update");
                setAllstudentData(data);
              }
            });
          Swal.fire({
            title: "Updated!",
            text: "Your file has been updated successfully.",
            icon: "success",
            timer: 1500,
          });
        }
      });
  };
  useEffect(() => {
    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`)
      .then((res) => res.json())
      .then((data) => {
        const dataarr = data?.result;
        const demoarr = [];
        for (let i = 0; i < dataarr.length; i++) {
          const finalheadingvalue = `_${i + 1}_PName`;
          demoarr.push(finalheadingvalue);
          if (i == 1) {
            const finalheadingvalue = `_${i + 1}_PName`;
            setOneIndexProperty(finalheadingvalue);
          } else if (i == 6) {
            const finalheadingvalue = `_${i + 1}_PName`;
            setSixIndexProperty(finalheadingvalue);
          }
        }
        setHeadingArr(demoarr);
      });
  }, []);
  return (
    <div className="">
      <div className=" flex w-44 flex-col border">
        <form
          className="w-full  flex justify-between  flex-col "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          {headingArr?.map((td, i) => (
            <SingleStRow
              key={i}
              setEdit={setEdit}
              singleStudentData={singleStudentData}
              serial={i + 1}
              edit={edit}
              eachPropertyName={td}
              register={register}
              oneIndexProperty={oneIndexProperty}
              sixIndexProperty={sixIndexProperty}
            ></SingleStRow>
          ))}
          <input
            className={`${
              edit ? "block btn btn-primary mb-1 btn-xs" : " hidden "
            }`}
            type="submit"
            value="update"
            onClick={() => handleStudentUpdate(singleStudentData?._id)}
          />
        </form>
        <div className="flex flex-col w-full gap-1">
          <button
            onClick={() => setEdit(!edit)}
            className="btn w-full btn-success btn-xs "
          >
            EDIT
          </button>

          <button
            onClick={() => handleStudentDelete(singleStudentData?._id)}
            className="btn w-full btn-error btn-xs "
          >
            DELETE
          </button>
          <div className="  w-full items-center flex justify-center ">
            <p className="font-bold text-3xl  w-10 h-10 rounded-full  bg-black  text-green-500 flex justify-center  align-middle ">
              {serial}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentDataBox;
