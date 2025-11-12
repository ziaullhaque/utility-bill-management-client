import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-3xl mx-auto p-6 mt-16">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p>
          <strong>Name:</strong> {user?.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
      </div>
    </div>
  );
}
