import type {} from "@mui/x-date-pickers/themeAugmentation";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../styles/components/date-picker.scss'

interface Props {
  handleValue: (v: Date) => void;
}

const Calendar = ({ handleValue }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select date..."
        disablePast={true}
        onChange={v => handleValue(v as Date)}
        slotProps={{
          actionBar: { actions: ["today"] }
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
