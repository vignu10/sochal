"use client";
import React from "react";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/16/solid";

export default function Home() {
  function handleClick() {
    console.log("increment like count");
  }
  const handleAddUser = () => {
    if (newUser.trim()) {
      setUsers([...users, newUser.trim()]);
      setNewUser("");
    }
  };
  const deleteUser = (index: number) => {
      setUsers( users.filter((e ,i) => index!= i ))
  }
  const [users, setUsers] = useState<string[]>([]);
  const [newUser, setNewUser] = useState("");
  return (
    <div className="flex justify-center align-middle margin-0 rounded-lg">
      <div className="bg-[#3C5B6F] phone:p-5 rounded-[30px] min-w-[350px]">
        <div>
          <dl>
            <div className="py-6 md:flex flex-row items-center justify-center gap-x-5 ">
              <dt>
                <h3 className="text-base font-semibold leading-7 ">
                  Enroll users
                </h3>
              </dt>
              <dt className="flex items-center justify-center">
                <input
                  type="text"
                  onChange={(e) => setNewUser(e.target.value)}
                  className="bg-[#DFD0B8] border-solid border-2 border-[#948979] text-[#153448] p-2 rounded-lg h-1000"
                  id="enrollmentValue"
                />
                <button
                  onClick={handleAddUser}
                  className="rounded-[50%] bg-[#153448] w-[50px] h-[50px] text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ml-3"
                >
                  <span className="text-xl"> + </span>
                </button>
              </dt>
            </div>
          </dl>
        </div>
        {users.map((user, index) => (
          <div className="mt-6 border-t border-gray-100"  key={index}>
            <dl
              className=" divide-gray-100 border-gray-100"
             
            >
              <div className="flex flex-row items-center">
              <div className="px-4 py-2  flex-auto">
                <dt className="mb-2" key={index}>{user}</dt>
              </div>
              <div className="text-end  align-self-center">
                  <button className="w-[30px] h-[30px]" onClick={()=>{deleteUser(index)}}>
                  <TrashIcon width={30} height={30}></TrashIcon>
                  </button>
              </div>
              </div>
            </dl>
          </div>
        ))}
        <div className="px-4 py-6 text-center divide-gray-100 ">
          <button disabled={users.length==0} onClick={handleClick} className="bg-[#153448] rounded-[50px] w-[150px] h-[40px] text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">
            <span className="text-xl"> Save </span>
          </button>
        </div>
      </div>
    </div>
  );
}
