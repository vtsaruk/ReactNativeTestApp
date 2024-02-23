import {useState} from 'react';

export const useFormData = (values: Record<string, string | null>) => {
  const [formValues, setFormValues] = useState<Record<string, string | null>>({
    ...values,
  });

  const handleChangeValue =
    (key: string) =>
    (value: string | null): void => {
      if (value === null && formValues[key] === null) {
        return;
      }

      setFormValues({
        ...formValues,
        [key]: value,
      });
    };

  return [formValues, handleChangeValue];
};
