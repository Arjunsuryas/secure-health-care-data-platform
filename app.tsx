import React, { useState, useEffect } from 'react';
import { Shield, Users, FileText, Activity, Search, Bell, Lock, Eye, UserCheck, AlertTriangle, Download, Database, BarChart3, Calendar, Stethoscope } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  lastVisit: string;
  diagnosis: string;
  status: 'Active' | 'Inactive' | 'Critical';
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  ipAddress: string;
}

const mockPatients: Patient[] = [
  {
    id: 'PT001',
    name: 'Sarah Johnson',
    dateOfBirth: '1985-03-15',
    gender: 'Female',
    lastVisit: '2024-01-15',
    diagnosis: 'Hypertension, Type 2 Diabetes',
    status: 'Active',
    riskLevel: 'Medium'
  },
  {
    id: 'PT002',
    name: 'Michael Chen',
    dateOfBirth: '1992-07-22',
    gender: 'Male',
    lastVisit: '2024-01-12',
    diagnosis: 'Asthma',
    status: 'Active',
    riskLevel: 'Low'
  },
  {
    id: 'PT003',
    name: 'Emily Rodriguez',
    dateOfBirth: '1978-11-03',
    gender: 'Female',
    lastVisit: '2024-01-10',
    diagnosis: 'Chronic Heart Disease',
    status: 'Critical',
    riskLevel: 'High'
  },
  {
    id: 'PT004',
    name: 'David Thompson',
    dateOfBirth: '1965-09-18',
    gender: 'Male',
    lastVisit: '2023-12-28',
    diagnosis: 'Arthritis',
    status: 'Active',
    riskLevel: 'Low'
  }
];

const mockAuditLogs: AuditLog[] = [
  {
    id: 'AL001',
    timestamp: '2024-01-15 14:30:25',
    user: 'Dr. Smith',
    action: 'VIEW_PATIENT_RECORD',
    resource: 'PT001',
    ipAddress: '192.168.1.100'
  },
  {
    id: 'AL002',
    timestamp: '2024-01-15 14:28:15',
    user: 'Nurse Williams',
    action: 'UPDATE_PATIENT_VITALS',
    resource: 'PT003',
    ipAddress: '192.168.1.105'
  },
  {
    id: 'AL003',
    timestamp: '2024-01-15 14:25:10',
    user: 'Dr. Johnson',
    action: 'DOWNLOAD_REPORT',
    resource: 'MONTHLY_ANALYTICS',
    ipAddress: '192.168.1.102'
  }
];

function App() {
  const [currentUser] = useState('Dr. Sarah Mitchell');
  const [userRole] = useState('Physician');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
export default App;
