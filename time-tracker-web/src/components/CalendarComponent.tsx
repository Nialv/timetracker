import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (newDate: any) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Date
      </label>
      <Calendar onChange={handleChange} value={date} />
    </div>
  );
};

export default CalendarComponent;
