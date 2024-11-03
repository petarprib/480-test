import { MuiTelInput } from 'mui-tel-input';
import { Controller, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CountryCode } from '../../../services/locale/locale.types';
import InputWrapper from '../input-wrapper/input-wrapper.component';
import type { InputProps } from '../input.types';

export default function PhoneInput<T extends FieldValues>({
  name,
  form,
}: InputProps<T>) {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper name={name} error={error}>
          <MuiTelInput
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue.split(' ').join(''));
            }}
            size='small'
            defaultCountry={CountryCode[language as keyof typeof CountryCode]}
            langOfCountryName={language}
            preferredCountries={['GB', 'ES']}
            error={!!error}
            autoComplete='off'
          />
        </InputWrapper>
      )}
    />
  );
}
