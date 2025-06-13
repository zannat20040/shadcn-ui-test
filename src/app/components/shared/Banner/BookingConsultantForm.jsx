"use client";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import FormInputField from "../FormInputField";
import FormLabel from "../FormLabel";
import FormTextAreaField from "../FormTextAreaField";
import RegistrationButton from "../RegistrationButton";

export default function BookingConsultantForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  const formStyle = `flex flex-col gap-1 justify-between `;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 justify-between  text-start "
    >
      {/* full name */}
      <section className={formStyle}>
        <section>
          <FormLabel label="Your Full Name" required={true} />{" "}
          {errors.fullname && (
            <ErrorMessage message={errors.fullname.message} />
          )}
        </section>

        <FormInputField
          register={register}
          fieldname={"fullname"}
          props={{
            required: { value: true, message: "Full name is required" },
            maxLength: { value: 50, message: "Maximum 50 characters allowed" },
          }}
        />
      </section>
      {/* email */}
      <section className={formStyle}>
        <div>
          <FormLabel label="Your Email" required={true} />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <FormInputField
          register={register}
          fieldname={"email"}
          props={{
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address",
            },
          }}
        />
      </section>
      {/* interested subject  */}
      <section className={formStyle}>
        <FormLabel label="Interested in (Subject)" />
        <FormInputField register={register} fieldname={"subject"} />
      </section>
      {/* textarea */}
      <section className={formStyle}>
        <FormLabel label="Any Other Information" />
        <FormTextAreaField
          register={register}
          fieldname={"queries"}
          props={{ maxLength: 200 }}
        />
      </section>
      {/* submit button */}
      <RegistrationButton
        type={"submit"}
        style={"mt-3"}
        label={"Submit to Booking Consultant"}
      />
    </form>
  );
}
