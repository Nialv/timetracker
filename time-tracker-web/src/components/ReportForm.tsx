import { SelectOptions } from "../interfaces/SelectOptions";
import CalendarComponent from "./CalendarComponent";
import Select from "./Select";

const taskOptions: SelectOptions[] = [
  {
    name: "Planning & Analysis",
    value: "Planning & Analysis",
  },
  {
    name: "Design",
    value: "Design",
  },
  {
    name: "Development",
    value: "Development",
  },
  {
    name: "Testing",
    value: "Testing",
  },
  {
    name: "Maintenance and Monitoring",
    value: "Maintenance and Monitoring",
  },
  {
    name: "Documentation",
    value: "Documentation",
  },
  {
    name: "Collaboration and Review",
    value: "Collaboration and Review",
  },
  {
    name: "Continuous Learning and Adaptation",
    value: "Continuous Learning and Adaptation",
  },
  {
    name: "Security",
    value: "Security",
  },
];

const subTaskOptions: SelectOptions[] = [
  {
    name: "Requirement Gathering",
    value: "Requirement Gathering",
  },
  {
    name: "Architecture Design",
    value: "Architecture Design",
  },
  {
    name: "UI/UX Design",
    value: "UI/UX Design",
  },
  {
    name: "Database Design",
    value: "Database Design",
  },
  {
    name: "Requirement Gathering",
    value: "Requirement Gathering",
  },
];

const clientOptions: SelectOptions[] = [
  {
    name: "Oowlish",
    value: "oowlish",
  },
  {
    name: "Tesla Inc.",
    value: "tesla",
  },
];

const clientFocalPoint: SelectOptions[] = [
  {
    name: "Agustin Bocco",
    value: "augustin_bocco",
  },
];

const ReportForm = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <aside className="w-full lg:w-1/4 bg-white p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Report Form</h2>
        <div className="space-y-4">
          <CalendarComponent />
          <Select label="Task:" name="task" options={taskOptions} />
          <Select label="Subtask:" name="subtask" options={subTaskOptions} />
          <Select label="Client:" name="client" options={clientOptions} />
          <Select label="Focal Point:" name="focalPoint" options={clientFocalPoint} />
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
