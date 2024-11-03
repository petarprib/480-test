import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';

type SelectInputProps = {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: {
    label: string;
    value: string;
  }[];
};

export default function SelectInput({
  value,
  onChange,
  options,
}: SelectInputProps) {
  return (
    <FormControl size='small'>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
