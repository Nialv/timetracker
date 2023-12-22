import { useState } from "react";
import { FaPaperPlane, FaClock, FaDownload } from 'react-icons/fa';

const TimeActivityReport = () => {
  const recordsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const reportData = {
    workedHours: "198hrs",
    expectedHours: "198hrs",
    salary: "$6,000.00",
    tasks: [
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
      {
        client: "Tesla Inc",
        user: "John Doe",
        task: "Development",
        subtask: "Feature Implementation",
        date: "2023-12-01",
        time: "8hrs",
        notes: "Completed initial setup",
      },
    ],
  };

  const pageCount = Math.ceil(reportData.tasks.length / recordsPerPage);

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const currentRecords = reportData.tasks.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleSend = () => {
    console.log("Send");
  };

  const handleSchedule = () => {
    console.log("Schedule");
  };

  const handleExport = () => {
    console.log("Export");
  };

  return (
    <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Time & Activity Report
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center border p-4">
          <p className="font-bold text-sm">WORKED HOURS</p>
          <p>{reportData.workedHours}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-bold text-sm">EXPECTED WORKING HOURS</p>
          <p>{reportData.expectedHours}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-bold text-sm ">SALARY</p>
          <p>{reportData.salary}</p>
        </div>
      </div>

      <div className="flex justify-end gap-2 mb-4">
      <button
      onClick={handleSend}
      className="flex items-center px-4 py-2 text-sm text-[#3BA8FD] hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
    >
      <FaPaperPlane className="mr-2" /> Send
    </button>
    <button
      onClick={handleSchedule}
      className="flex items-center px-4 py-2 text-sm text-[#3BA8FD] hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
    >
      <FaClock className="mr-2" /> Schedule
    </button>
    <button
      onClick={handleExport}
      className="flex items-center px-4 py-2 text-sm text-[#3BA8FD] hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
    >
      <FaDownload className="mr-2" /> Export
    </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="text-left p-4">CLIENT</th>
              <th className="text-left p-4">USER</th>
              <th className="text-left p-4">TASK</th>
              <th className="text-left p-4">SUBTASK</th>
              <th className="text-left p-4">DATE</th>
              <th className="text-left p-4">TIME</th>
              <th className="text-left p-4">NOTES</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{task.client}</td>
                <td className="p-4">{task.user}</td>
                <td className="p-4">{task.task}</td>
                <td className="p-4">{task.subtask}</td>
                <td className="p-4">{task.date}</td>
                <td className="p-4">{task.time}</td>
                <td className="p-4">{task.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm ${
            currentPage === 1
              ? "cursor-not-allowed text-gray-400"
              : "text-orange-600 hover:text-orange-700"
          }`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {pageCount}
        </span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === pageCount}
          className={`px-4 py-2 text-sm ${
            currentPage === pageCount
              ? "cursor-not-allowed text-gray-400"
              : "text-orange-600 hover:text-orange-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TimeActivityReport;
