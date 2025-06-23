import React from 'react';

type AchievementBadgeProps = {
  children: React.ReactNode;
  color?: 'gold' | 'silver' | 'bronze';
};

export const AchievementBadge = ({
  children,
  color = 'gold'
}: AchievementBadgeProps) => {
  const colorClasses = {
    gold: 'bg-yellow-100 text-yellow-800',
    silver: 'bg-gray-100 text-gray-800',
    bronze: 'bg-amber-100 text-amber-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
};