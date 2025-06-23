import React from 'react';
import { Button } from '../core/Button';
import { useProgress } from '../../contexts/ProgressContext';

type LessonCardProps = {
  lesson: {
    id: string;
    title: string;
    description?: string;
  };
  moduleId: string;
};

export const LessonCard = ({ lesson, moduleId }: LessonCardProps) => {
  const { completedLessons, completeLesson } = useProgress();
  const isCompleted = completedLessons[lesson.id];

  return (
    <div className={`border rounded-lg p-4 transition-all ${
      isCompleted ? 'bg-green-50 border-green-200' : 'bg-white hover:shadow-sm'
    }`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{lesson.title}</h3>
          {lesson.description && (
            <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
          )}
        </div>
        {isCompleted ? (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            Completed
          </span>
        ) : (
          <Button 
            variant="primary" 
            onClick={() => completeLesson(lesson.id)}
            className="text-sm px-3 py-1"
          >
            Start
          </Button>
        )}
      </div>
    </div>
  );
};