import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { formSchema, type FormSchema } from './form.types';
import DateInput from '../../../components/inputs/date/date-input.component';
import PhoneInput from '../../../components/inputs/phone/phone-input.component';
import TextInput from '../../../components/inputs/text/text-input.component';
import useRHF from '../../../hooks/use-rhf.hook';

export default function Form() {
  const { t } = useTranslation('form');

  const form = useRHF<FormSchema>({
    schema: formSchema,
    defaultValues: {
      name: '',
      date_of_birth: null,
      city: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('FORM VALUES: ', form.getValues());
  };

  return (
    <Stack
      component='form'
      onSubmit={form.handleSubmit(onSubmit)}
      spacing={1}
      sx={{ marginBottom: 5 }}
    >
      <TextInput form={form} name='name' />
      <DateInput form={form} name='date_of_birth' />
      <TextInput form={form} name='city' />
      <TextInput form={form} name='email' />
      <PhoneInput form={form} name='phone' />
      <Button type='submit' variant='contained'>
        {t('send')}
      </Button>
    </Stack>
  );
}
