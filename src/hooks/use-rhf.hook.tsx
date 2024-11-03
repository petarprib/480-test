import { zodResolver } from '@hookform/resolvers/zod';
import { type DefaultValues, type FieldValues, useForm } from 'react-hook-form';
import type { ZodSchema } from 'zod';

type UseRhfProps<T extends FieldValues> = {
  schema: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
};

export default function useRHF<T extends FieldValues>({
  schema,
  defaultValues,
}: UseRhfProps<T>) {
  return useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });
}
