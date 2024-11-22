import React from 'react';
import { Activity, Users, Calendar, Bell } from 'lucide-react';

export function HomeContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to Vnix Exam</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Activity className="h-6 w-6 text-blue-600" />}
          title="Active Exams"
          value="12"
          change="+2 this week"
        />
        <StatCard
          icon={<Users className="h-6 w-6 text-green-600" />}
          title="Total Students"
          value="1,234"
          change="+15% vs last month"
        />
        <StatCard
          icon={<Calendar className="h-6 w-6 text-purple-600" />}
          title="Upcoming Exams"
          value="8"
          change="Next: Tomorrow"
        />
        <StatCard
          icon={<Bell className="h-6 w-6 text-yellow-600" />}
          title="Notifications"
          value="3"
          change="2 new today"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingExams />
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

function StatCard({ icon, title, value, change }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{change}</p>
        </div>
      </div>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    { id: 1, text: "Math Exam 101 completed", time: "2 hours ago" },
    { id: 2, text: "New Physics Quiz added", time: "5 hours ago" },
    { id: 3, text: "Chemistry Lab results published", time: "1 day ago" },
    { id: 4, text: "Biology Final scheduled", time: "2 days ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex justify-between items-center">
            <p className="text-gray-600">{activity.text}</p>
            <span className="text-sm text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UpcomingExams() {
  const exams = [
    { id: 1, title: "Advanced Mathematics", date: "Mar 15, 2024", time: "10:00 AM" },
    { id: 2, title: "Physics Mechanics", date: "Mar 17, 2024", time: "2:00 PM" },
    { id: 3, title: "Organic Chemistry", date: "Mar 20, 2024", time: "9:00 AM" },
    { id: 4, title: "World History", date: "Mar 22, 2024", time: "1:00 PM" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h2>
      <div className="space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-900">{exam.title}</p>
              <p className="text-sm text-gray-500">{exam.date}</p>
            </div>
            <span className="text-sm font-medium text-indigo-600">{exam.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}