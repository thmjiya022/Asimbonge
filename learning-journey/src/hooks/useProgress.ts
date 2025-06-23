import { useProgress } from '../contexts/ProgressContext';

export const useModuleProgress = (moduleId: string) => {
  const { getModuleProgress, completedLessons } = useProgress();
  
  const progress = getModuleProgress(moduleId);
  const totalLessons = Object.keys(completedLessons).filter(id => 
    id.startsWith(moduleId.replace('-', ''))
  ).length;

  return {
    progress,
    totalLessons,
    percentage: totalLessons > 0 ? Math.round((progress / totalLessons) * 100) : 0
  };
};