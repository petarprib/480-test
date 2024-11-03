import validator from 'validator';
import { z } from 'zod';

export const formSchema = z
  .object({
    name: z
      .string()

      .min(1, { message: 'form_fields.name.errors.required' })
      .regex(/^[a-zA-Z' -]+$/, {
        message: 'form_fields.name.errors.invalid',
      }),
    date_of_birth: z.date().nullable(),
    city: z
      .string()

      .min(2, { message: 'form_fields.city.errors.required' })
      .regex(/^[a-zA-Z' -]+$/, {
        message: 'form_fields.city.errors.invalid',
      }),
    email: z.string().email({ message: 'form_fields.email.errors.required' }),
    phone: z.string().refine((value) => validator.isMobilePhone(value), {
      message: 'form_fields.phone.errors.invalid',
    }),
  })
  .refine(
    (data) => {
      return data.date_of_birth !== null;
    },
    {
      message: 'form_fields.date_of_birth.errors.required',
      path: ['date_of_birth'],
    },
  );

export type FormSchema = z.infer<typeof formSchema>;
