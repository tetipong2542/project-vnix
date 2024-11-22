import React from 'react';
import { Boxes } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Boxes className="h-8 w-8 text-indigo-600" />
      <span className="font-bold text-xl text-gray-900">Vnix Exam</span>
    </div>
  );
}