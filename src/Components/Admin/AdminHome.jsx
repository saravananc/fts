
import React from "react";

const AdminHome = () => {
  // Static data for the table rows
  const tableData = [
    { name: "saravanan", email: "test@example.com", phone: "123-456-7890", message: "Hello" },
    { name: "saravanan", email: "test@example.com", phone: "987-654-3210", message: "Hi there" },
    { name: "saravanan", email: "test@example.com", phone: "987-654-3210", message: "Hi there" },
    { name: "saravanan", email: "test@example.com", phone: "987-654-3210", message: "Hi there" },
    { name: "saravanan", email: "test@example.com", phone: "987-654-3210", message: "Hi there" },
  ];

  // Calculate total enrollment count
  const totalEnrollmentCount = tableData.length;

  return (
    <>
      <div className="mt-2 mb-2 py-3 ms-3 md:ms-0 sm:text-sm md:text-xl text-center bg-indigo-400 font-bold rounded-2xl text-white w-60 md:w-80 whitespace-no-wrap">
        Total Enrollment Count: {totalEnrollmentCount}
      </div>

      <div className="mt-4 mb-2 ms-3 md:ms-0 text-lg font-semibold">
        Recent Registrations
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-3xl">
        <table className="w-full border-collapse border bg-indigo-200">
          <thead >
            <tr className="bg-indigo-300">
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Name</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Email</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Phone No</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Message</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.name}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.email}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.phone}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap ">{row.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminHome;
