// style
import "./log.css";
// !react-hook-form
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/*=======================================================================================*/
// component section
/*=======================================================================================*/
function Log() {
  let schema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string(),
    checkpassword: z.string(),
  });

  let { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  let submitData = (data) => {
    console.log("data was send");
    console.log(data);
  };

  return (
    <>
      <div className="log">
        <div className="log__title">
          <span>Try it free days</span>
          then $20/mo. thereafter
        </div>
        {/*  */}
        <div className="log__inputFields">
          <form action="">
            <input
              type="text"
              placeholder="Enter your name"
              {...register("email")}
            />
            <input type="password" placeholder="Enter your password again " />

            <input
              type="submit"
              value="CLAIM YOUR FREE TRIAL"
              onSubmit={() => {}}
            />
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Log;
