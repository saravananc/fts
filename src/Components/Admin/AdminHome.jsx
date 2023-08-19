
import React from "react";
import { dashboardlimitApi } from "../../API";
import { useState } from "react";
import { useEffect } from "react";

const AdminHome = () => {

  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dashboardlimitApi();
        setTableData(data.rows);
        setCount(data.count)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const totalEnrollmentCount = count;

  return (
    <>
      <div className="mt-2 mb-2 py-3 ms-3 md:ms-0 sm:text-sm md:text-xl text-center bg-indigo-400 font-bold rounded-2xl text-white w-60 md:w-80 whitespace-no-wrap">
        Total Enrollment Count : {totalEnrollmentCount}
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
            {!!tableData?.length ? tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.name}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.email}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.phone_number}</td>
                <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap ">{row.message}</td>
              </tr>
            )) : <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center" colSpan={4} >No data found</td>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminHome;
