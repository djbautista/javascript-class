import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

interface UseCookieProps {
  name: string;
  defaultValue: string;
}

export default function useCookie({ name, defaultValue }: UseCookieProps) {
  const [value, setValue] = useState<string>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie = useCallback(
    ({
      newValue,
      options,
    }: {
      newValue: string;
      options?: Cookies.CookieAttributes;
    }) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue('');
  }, [name]);

  return { value, updateCookie, deleteCookie };
}
