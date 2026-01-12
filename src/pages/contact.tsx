//Interface for Contact Me Page
//DTO using YUP
//handle submit function
import * as yup from "yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./contact.css";

interface IContactMe {
  mail: string;
  message?: string;
}

// Define YUP schema for form validation
export const DTOContactMe: yup.ObjectSchema<IContactMe> = yup.object({
  mail: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().optional(),
});

const ContactMe = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactMe>({
    resolver: yupResolver(DTOContactMe),
  });

  const onSubmit: SubmitHandler<IContactMe> = (data) => {
    console.log("Form Data Submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-me-page">
        <h1>Contact Me</h1>

        <Controller
          name="mail"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label htmlFor="mail" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="mail"
                type="email"
                placeholder="Enter your email"
                {...field}
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.mail && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.mail.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                {...field}
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactMe;
