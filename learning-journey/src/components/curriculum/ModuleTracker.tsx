import React from 'react';
import { ProgressRing } from '../core/ProgressRing';

type ModuleTrackerProps = {
  title: string;
  progress: number;
  badge?: string;
  children: React.ReactNode;
};

export const ModuleTracker = ({
  title,
  progress,
  badge,
  children
}: ModuleTrackerProps) => {
  return (
    <div className="relative border rounded-lg p-5 bg-white">
      {badge && (
        <span className="absolute -top-2 -right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
          {badge}
        </span>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <ProgressRing progress={progress} size={40} />
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};