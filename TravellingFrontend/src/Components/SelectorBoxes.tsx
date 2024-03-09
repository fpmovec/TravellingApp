import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import "../styles/components/mui-pickers.scss";

interface Props {
  label: string;
  source: string[];
  value: string;
  handleValue: (i: string) => void;
}

const SelectorBox = ({ label, value, source, handleValue }: Props) => {
  return (
    <>
      <FormControl fullWidth={true}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          label={label}
          onChange={(e) => handleValue(e.target.value as string)}
          value={value}
        >
          {source.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectorBox;
