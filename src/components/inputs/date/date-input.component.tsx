import { DatePicker } from '@mui/x-date-pickers';
import { Controller, type FieldValues } from 'react-hook-form';

import InputWrapper from '../input-wrapper/input-wrapper.component';
import type { InputProps } from '../input.types';

export default function DateInput<T extends FieldValues>({
  name,
  form,
}: InputProps<T>) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper name={name} error={error}>
          <DatePicker
            format='dd-MM-yyyy'
            {...field}
            slotProps={{
              textField: {
                error: !!error,
                size: 'small',
              },
            }}
          />
        </InputWrapper>
      )}
    />
  );
}
