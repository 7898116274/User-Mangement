"use client"

import { useRouter,useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../../service/userServices";
import UserForm from "../../../component/UserForm";

export default function EditUser() {
    const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const data = await getUserById(id);
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const handleSubmit = async (data) => {
    try {
      await updateUser(id, data);
      router.push("/");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit User</h1>
      <UserForm onSubmit={handleSubmit} defaultValues={user} />
    </div>
  );
}
