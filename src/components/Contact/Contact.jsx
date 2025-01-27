import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title.jsx";
import { useFormik } from "formik";
import * as Yup from "Yup";

export default function Contact() {
  const [apiResponse, setApiResponse] = useState({});
  const [buttonLauding, setbuttonLauding] = useState(false);
  const apiUrl = "https://upskilling-egypt.com:3001/contact";

  // validation part

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^\+?[0-9]{8,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  async function handleRegister(values) {
    setbuttonLauding(true);
    await axios
      .post(apiUrl, values)
      .then((res) => {
        setbuttonLauding(false);
        setApiResponse({ isError: false, message: res.data.message });
      })
      .catch((res) => {
        setbuttonLauding(false);
        setApiResponse({ isError: true, message: "Something went wrong, please try again later" });
      });
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validationSchema: validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>

      <div className="py-5 bg-[#FCFCFC] ">
        <Title title="Contact Us"></Title>
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <form onSubmit={formik.handleSubmit} className="my-5 ">
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              className="rounded-3xl m-3 p-5 bg-[#CEDCFF] block w-9/10 sm:w-80 lg:w-90 h-8"
              placeholder="email "
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-center text-sm">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              className="rounded-3xl m-3 p-5 bg-[#CEDCFF] block w-9/10 sm:w-80 lg:w-90 h-8"
              placeholder="name "
            ></input>

            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-center text-sm">
                {formik.errors.name}
              </div>
            ) : null}

            <input
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="text"
              className="rounded-3xl m-3 p-5 bg-[#CEDCFF] block w-9/10 sm:w-80 lg:w-90 h-8"
              placeholder="phone"
            ></input>

            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-center text-sm">
                {formik.errors.phone}
              </div>
            ) : null}

            {/* message for user */}
            {apiResponse.message ? (
              <div
                className={` text-center text-xl mb-3  ${
                  apiResponse.isError ? "text-red-600" : "text-green-600"
                }`}
              >
                {apiResponse.message}
              </div>
            ) : null}


            <button
              type="submit"
              className=" cursor-pointer border-2 border-[var(--main-color)] rounded-4xl p-3 px-15 mx-auto block mt-3"
            >
              {buttonLauding ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                "send"
              )}
            </button>
          </form>
          <div className="flex flex-col gap-2  justify-center my-4 -mt-6">
            <span className=" font-light my-1 cursor-pointer hover:text-blue-500 hover:underline ">
              <i className="text-[var(--main-color)] mr-2 fa-solid fa-envelope"></i>
              upskilling.eg1@gmail.com
            </span>
            <span className=" font-light my-1 cursor-pointer hover:text-blue-500 hover:underline ">
              <i className="text-[var(--main-color)] mr-2 fa-solid fa-phone"></i>
              +20 115 493 2137
            </span>
          </div>
        </div>
      </div>
      <div className="footer bg-[#0C1E49] h-30"></div>
    </>
  );
}
