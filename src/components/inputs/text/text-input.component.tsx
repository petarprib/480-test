import { TextField } from '@mui/material';
import { Controller, type FieldValues } from 'react-hook-form';

import InputWrapper from '../input-wrapper/input-wrapper.component';
import type { InputProps } from '../input.types';

export default function TextInput<T extends FieldValues>({
  name,
  form,
}: InputProps<T>) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper name={name} error={error}>
          <TextField
            {...field}
            error={!!error}
            autoComplete='off'
            size='small'
          />
        </InputWrapper>
      )}
    />
  );
}
