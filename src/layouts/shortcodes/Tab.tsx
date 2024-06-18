"use client";

interface TabProps {
  children: React.ReactNode;
  name: string; // Add the name prop here
}

function Tab({ children }: TabProps) {
  return <div className="tab-content-panel">{children}</div>;
}

export default Tab;