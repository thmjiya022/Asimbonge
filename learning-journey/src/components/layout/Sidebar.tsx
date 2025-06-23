import React from 'react';
import { useProgress } from '../../contexts/ProgressContext';
import { CURRICULUM } from '../../constants/curriculum';

export const Sidebar = () => {
  const { getModuleProgress } = useProgress();

  return (
    <nav className="space-y-1">
      {Object.entries(CURRICULUM).map(([stage, data]) => (
        <div key={stage} className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {data.title}
          </h3>
          <div className="space-y-1">
            {data.modules.map(module => (
              <a
                key={module.id}
                href={`/learning-path/${module.id}`}
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50"
              >
                <span className="truncate">{module.title}</span>
                <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-blue-100 text-blue-800">
                  {getModuleProgress(module.id)}/{module.lessons.length}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};