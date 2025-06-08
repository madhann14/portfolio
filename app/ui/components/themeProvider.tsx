'use client';
import * as React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

type ThemeProviderProps = React.ComponentProps<typeof NextThemeProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}