import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';

export type InputProps<T extends FieldValues> = {
  name: Path<T>;
  form: UseFormReturn<T>;
};
