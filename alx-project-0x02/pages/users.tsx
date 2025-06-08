// pages/users.tsx

import React from "react";
import { UserApiData } from "@/interfaces";

interface UsersPageProps {
  users: UserApiData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <p className="font-semibold">Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users: UserApiData[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
    },
    // Fill in dummy values to satisfy the inherited fields from UserProps
    title: "",
    content: "",
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
