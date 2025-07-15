import { ReactNode } from 'react';

interface SplineLayoutProps {
  children: ReactNode;
}

export function SplineLayout({ children }: SplineLayoutProps) {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {children}
    </div>
  );
}