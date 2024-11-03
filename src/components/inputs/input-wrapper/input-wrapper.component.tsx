import type { ReactNode } from 'react';

import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import type { FieldError } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type InputWrapperProps = {
  children: ReactNode;
  name: string;
  error?: FieldError;
};

export default function InputWrapper({
  children,
  name,
  error,
}: InputWrapperProps) {
  const { t } = useTranslation('form');

  return (
    <FormControl>
      <FormLabel error={!!error?.message}>
        {t(`form_fields.${name}.label`)}
      </FormLabel>
      {children}
      <FormHelperText error={!!error?.message} sx={{ margin: 0 }}>
        {error?.message ? t(error.message) : ' '}
      </FormHelperText>
    </FormControl>
  );
}
