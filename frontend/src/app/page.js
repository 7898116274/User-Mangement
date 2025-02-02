"use client"
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/userServices";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    fetchUsers();
  }, [search, page]);

  const fetchUsers = async () => {
    const data = await getUsers(search, page, limit);
    setUsers(data);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User List</h1>
      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 rounded w-full my-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link href="/add">
        <button className="bg-blue-500 text-white p-2 rounded mb-4">Add User</button>
      </Link>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border">
              <td className="border p-2">{user.user}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <Link href={`/user/${user._id}`}>
                  <button className="bg-green-500 text-white p-1 rounded mx-1">View</button>
                </Link>
                <Link href={`/edit/${user._id}`}>
                  <button className="bg-yellow-500 text-white p-1 rounded mx-1">Edit</button>
                </Link>
                <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white p-1 rounded mx-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-gray-500 text-white p-2 mx-1 rounded">Previous</button>
        <button onClick={() => setPage(page + 1)} className="bg-gray-500 text-white p-2 mx-1 rounded">Next</button>
      </div>
    </div>
  );
}
