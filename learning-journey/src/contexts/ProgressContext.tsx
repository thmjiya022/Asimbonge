import React, { createContext, useContext, useState } from 'react';

type ProgressContextType = {
  completedLessons: Record<string, boolean>;
  completeLesson: (lessonId: string) => void;
  getModuleProgress: (moduleId: string) => number;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() => {
    return {
      'html1': true,
      'git1': true
    };
  });

  const completeLesson = (lessonId: string) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
  };

  const getModuleProgress = (moduleId: string) => {
    return Object.keys(completedLessons).filter(id => id.startsWith(moduleId.replace('-', ''))).length;
  };

  return (
    <ProgressContext.Provider value={{ completedLessons, completeLesson, getModuleProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}