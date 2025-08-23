interface GSAPScrollSmootherWrapperProps {
  children: React.ReactNode;
}

export function GSAPScrollSmootherWrapper({ children }: GSAPScrollSmootherWrapperProps) {

  // Simplified wrapper without complex animations for now

  return (
    <div className="relative">
      {children}
    </div>
  );
}