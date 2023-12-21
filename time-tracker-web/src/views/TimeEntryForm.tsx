import React, { useState } from "react";

const TimeEntryForm = () => {
  const [taskType, setTaskType] = useState("");
  // ... otros estados

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log('xd')

  return (
    <h2>xd</h2>
  )

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="taskType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Tipo de Tarea
        </label>
        <input
          type="text"
          id="taskType"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          placeholder="Ingrese el tipo de tarea"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* otros campos del formulario */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </form>
  );
};

export default TimeEntryForm;
