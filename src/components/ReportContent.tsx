import React from 'react';
import { BarChart, PieChart, TrendingUp, Download } from 'lucide-react';

export function ReportContent() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="h-5 w-5" />
          <span>Export Reports</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportCard
          title="Exam Performance"
          icon={<BarChart className="h-6 w-6 text-indigo-600" />}
          stats={[
            { label: "Average Score", value: "78%" },
            { label: "Pass Rate", value: "85%" },
            { label: "Total Exams", value: "156" },
          ]}
        />
        <ReportCard
          title="Student Engagement"
          icon={<TrendingUp className="h-6 w-6 text-green-600" />}
          stats={[
            { label: "Active Students", value: "1,234" },
            { label: "Completion Rate", value: "92%" },
            { label: "Avg. Time", value: "45min" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SubjectPerformance />
        <MonthlyTrends />
        <TopPerformers />
      </div>
    </div>
  );
}

interface ReportCardProps {
  title: string;
  icon: React.ReactNode;
  stats: Array<{ label: string; value: string }>;
}

function ReportCard({ title, icon, stats }: ReportCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubjectPerformance() {
  const subjects = [
    { name: "Mathematics", score: 85 },
    { name: "Physics", score: 78 },
    { name: "Chemistry", score: 82 },
    { name: "Biology", score: 88 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h2>
      {subjects.map((subject) => (
        <div key={subject.name} className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600">{subject.name}</span>
            <span className="text-sm font-medium text-gray-900">{subject.score}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${subject.score}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MonthlyTrends() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const data = [65, 72, 78, 75, 82];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h2>
      <div className="flex items-end space-x-2 h-48">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-indigo-600 rounded-t"
              style={{ height: `${value}%` }}
            />
            <span className="text-sm text-gray-600 mt-2">{months[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopPerformers() {
  const performers = [
    { name: "John Doe", score: 98, subject: "Mathematics" },
    { name: "Jane Smith", score: 96, subject: "Physics" },
    { name: "Mike Johnson", score: 95, subject: "Chemistry" },
    { name: "Sarah Williams", score: 94, subject: "Biology" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h2>
      <div className="space-y-4">
        {performers.map((performer, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{performer.name}</p>
              <p className="text-sm text-gray-500">{performer.subject}</p>
            </div>
            <span className="text-lg font-semibold text-indigo-600">
              {performer.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}