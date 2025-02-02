"use client"

import { useRouter } from "next/navigation";
import { createUser } from "../../service/userServices";
import UserForm from "../../component/UserForm";


export default function AddUser() {
  const router = useRouter();

  const handleSubmit = async (data) => {
    try {
      await createUser(data);
      router.push("/");
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Add New Users</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
