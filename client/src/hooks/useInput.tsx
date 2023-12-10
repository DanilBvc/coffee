import { type ChangeEvent, useState } from 'react';

function useInputs (initialValues?: any) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const clearAll = () => {
    const resetValues = Object.keys(values).reduce((acc: Record<string, string>, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setValues(resetValues);
  };

  return {
    values,
    handleChange,
    clearAll,
  };
}

export default useInputs;
