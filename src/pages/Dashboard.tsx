import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Profile from '@/components/dashboard/Profile';
import Properties from '@/components/dashboard/Properties';
import BookingDetails from '@/components/dashboard/BookingDetails';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/profile" replace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/booking-details" element={<BookingDetails />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;