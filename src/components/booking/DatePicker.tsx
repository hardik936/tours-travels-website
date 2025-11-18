// src/components/booking/DatePicker.tsx
'use client';
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// In a real app, this would come from an API
const unavailableDates = [new Date(2025, 10, 25), new Date(2025, 10, 26)];

const DatePicker = ({ onDateSelect }: { onDateSelect: (date: Date) => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 17)); // November 17, 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const handleDateClick = (day: number) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    // Check if the date is in the past or unavailable
    const today = new Date();
    today.setHours(0,0,0,0);
    if (newSelectedDate < today || unavailableDates.some(d => d.getTime() === newSelectedDate.getTime())) {
        return; // Do not select
    }
    
    setSelectedDate(newSelectedDate);
    onDateSelect(newSelectedDate);
  }

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const isSelected = selectedDate?.getTime() === date.getTime();
    const isUnavailable = unavailableDates.some(d => d.getTime() === date.getTime());
    const isPast = date < new Date(new Date().setDate(new Date().getDate() -1));

    calendarDays.push(
      <div
        key={day}
        onClick={() => handleDateClick(day)}
        className={`p-2 text-center rounded-full cursor-pointer transition-colors
          ${isPast || isUnavailable ? 'text-gray-400 line-through cursor-not-allowed' : 'hover:bg-primary/20'}
          ${isSelected ? 'bg-primary text-white' : ''}
        `}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><FiChevronLeft /></button>
        <div className="font-semibold">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
        <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><FiChevronRight /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm text-center text-gray-500">
        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {calendarDays}
      </div>
    </div>
  );
};

export default DatePicker;