import { Button } from '../core/Button';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Learning Journey</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Progress</Button>
          <Button variant="primary">My Profile</Button>
        </div>
      </div>
    </header>
  );
};