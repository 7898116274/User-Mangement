"use client"


import { useEffect, useState } from "react";
import { getUserById } from "../../../service/userServices";
import Link from "next/link";
import { useRouter,useParams } from "next/navigation";

export default function UserDetail() {

  const params = useParams() 
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

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Details</h1>
      <div className="bg-gray-100 p-4 rounded shadow-md mt-4">
        <p><strong>Name:</strong> {user.user}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Interests:</strong> {user.interest.join(", ")}</p>
      </div>
      <div className="mt-4">
        <Link href={`/edit/${user._id}`}>
          <button className="bg-yellow-500 text-white p-2 rounded mx-1">Edit</button>
        </Link>
        <button onClick={() => router.push("/")} className="bg-gray-500 text-white p-2 rounded mx-1">
          Back to List
        </button>
      </div>
    </div>
  );
}
