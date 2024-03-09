import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {
  handleValue: (v: Date) => void;
}

const Time = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker label="Departure time" openTo="hours" />
      </LocalizationProvider>
    </>
  );
};

export default Time;
