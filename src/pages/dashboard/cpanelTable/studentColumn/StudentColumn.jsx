import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
const StudentColumn = ({ allnewdata }) => {
  const { tableHeadingPropertyNameArr } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const sortingPropertyIndexWiseName = tableHeadingPropertyNameArr[6];
    const sorting_property_value = data[sortingPropertyIndexWiseName];
    const sorting_value_number = parseFloat(sorting_property_value);
    data[sortingPropertyIndexWiseName] = sorting_value_number;
    // console.log(typeof sorting_value_number);
    // console.log(data, "sorting_property_value");

    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/allstudentdata`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: "Created!",
            text: "New Student data has been created successfully.",
            icon: "success",
            timer: 1500,
          });
          reset();
          // setIsCreateStudent(false);
        }
      });
  };
  return (
    <div className="my-1  w-full ">
      <form
        className=" flex justify-between flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        {allnewdata?.map((td, i) => (
          <div key={i} className="my-1">
            <input
              type={`${i == 6 ? "number" : "text"}`}
              placeholder={`${
                i == 0 ? "Places the student's data here" : "..."
              }`}
              required
              className="pl-1  w-full outline-none   rounded-md"
              {...register(`_${i + 1}_PName`)}
            />
          </div>
        ))}

        <input
          type="submit"
          className="btn btn-success btn-xs w-5/12 mt-3  ml-auto"
          value="submit"
        />
      </form>
    </div>
  );
};

export default StudentColumn;
