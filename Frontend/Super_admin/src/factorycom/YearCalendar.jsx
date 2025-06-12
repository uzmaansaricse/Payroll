import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const YearCalendar = () => {
    const currentYear = new Date().getFullYear();
    const [startDate, setStartDate] = useState(new Date(currentYear, 0, 1));
    const years = Array.from({ length: 18 }, (_, i) => 2015 + i);

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select Year"
            className="form-control date-range bookingrange p-2 border border-gray-300 rounded" />
    );
};

export default YearCalendar;
