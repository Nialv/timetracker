import { SelectOptions } from "@interfaces/SelectOptions";
import CalendarComponent from "@components/CalendarComponent";
import Select from "@components/common/Select";
import { useEffect, useState } from "react";
import timeTrackerApiInstance from "@config/axios";

const subTaskOptions: SelectOptions[] = [
  {
    name: "Requirement Gathering",
    id: "Requirement Gathering",
  },
  {
    name: "Architecture Design",
    id: "Architecture Design",
  },
  {
    name: "UI/UX Design",
    id: "UI/UX Design",
  },
  {
    name: "Database Design",
    id: "Database Design",
  },
  {
    name: "Requirement Gathering",
    id: "Requirement Gathering",
  },
];

const clientOptions: SelectOptions[] = [
  {
    name: "Oowlish",
    id: "oowlish",
  },
  {
    name: "Tesla Inc.",
    id: "tesla",
  },
];

const clientFocalPoint: SelectOptions[] = [
  {
    name: "Agustin Bocco",
    id: "augustin_bocco",
  },
];

const ReportForm = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  const [taskOptions, setTaskOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await timeTrackerApiInstance.get("/tasks");
        setTaskOptions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <aside className="w-full lg:w-1/4 bg-white p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Report Form</h2>
        <div className="space-y-4">
          <CalendarComponent />
          <Select label="Task:" name="task" options={taskOptions} />
          <Select label="Subtask:" name="subtask" options={subTaskOptions} />
          <Select label="Client:" name="client" options={clientOptions} />
          <Select
            label="Focal Point:"
            name="focalPoint"
            options={clientFocalPoint}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
};

export default ReportForm;
