"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object().shape({
    user: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile: yup.string().matches(/^[0-9]{10}$/, "Invalid mobile number").required(),
    age: yup.number().positive().integer().required("Age is required"),
    interest: yup.array().required("Interest is required"),
});

export default function UserForm({ onSubmit, defaultValues = {} }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    useEffect(() => {
        if (defaultValues) {
            Object.keys(defaultValues).forEach((key) => {
                setValue(key, defaultValues[key]);
            });
        }
    }, [defaultValues, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md rounded">
            <input {...register("user")} placeholder="Name" className="border p-2 w-full mb-2" />
            <p className="text-red-500">{errors.user?.message}</p>

            <input {...register("email")} placeholder="Email" className="border p-2 w-full mb-2" />
            <p className="text-red-500">{errors.email?.message}</p>

            <input {...register("mobile")} placeholder="Mobile" className="border p-2 w-full mb-2" />
            <p className="text-red-500">{errors.mobile?.message}</p>

            <input {...register("age")} type="number" placeholder="Age" className="border p-2 w-full mb-2" />
            <p className="text-red-500">{errors.age?.message}</p>

            <input
                {...register("interest", {
                    setValueAs: (value) => {
                        if (Array.isArray(value)) return value;
                        if (typeof value === "string") return value.split(",").map(item => item.trim());
                        return [];
                    },
                    validate: (value) => (Array.isArray(value) && value.length >= 2) || "Please enter at least 2 interests",
                })}
                placeholder="Min 2 Interests (comma separated)"
                className="border p-2 w-full mb-2"
            />
            <p className="text-red-500">{errors.interest?.message}</p>




            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
        </form>
    );
}
