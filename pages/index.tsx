import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
