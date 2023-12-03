import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useLocalStorage } from '../../hooks/useLocalStorage';


const timeLimit = dayjs().add(4, 'month');

export const DatePickerValue = ({setDateHomepage}) => {
  const [date, setDate] = useLocalStorage('date', null);

  const handleChange = (newDate) => {
    setDate(newDate.toString())
    setDateHomepage(newDate.toString())
    
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          disablePast
          value={dayjs(date)}
          minDate={timeLimit}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
