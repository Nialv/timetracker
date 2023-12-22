import CalendarComponent from "./CalendarComponent";

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
          <div>
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-700"
            >
              Task
            </label>
            <select
              id="task"
              name="task"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md shadow-sm transition duration-150 ease-in-out"
            >
              <option value="test">test</option>
            </select>
          </div>

          {/* Subtask selector */}
          {/* ... (other select elements with the same styling as above) */}
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
