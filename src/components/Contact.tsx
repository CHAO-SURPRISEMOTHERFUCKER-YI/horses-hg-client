import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Paper } from "@mui/material";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ol2tlv6",
          "template_u39mvpu",
          form.current,
          "FPwBpeGSUZbNhYtcH"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <Paper style={{width: "70%"}}>
      <h1 className="text-center my-3 font-bold text-3xl">Formulario de contacto</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto p-10 bg-white shadow-md rounded min-w-full"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          />
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Send"
            className="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </div>
      </form>
    </Paper>
  );
}     
