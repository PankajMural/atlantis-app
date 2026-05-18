import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import DiningList from './pages/DiningList'
import DiningDetail from './pages/DiningDetail'
import SplashScreen from './pages/Splash'
import WelcomeScreen from './pages/Auth/Welcome'
import PhoneLoginScreen from './pages/Auth/PhoneLogin'
import EmailLoginScreen from './pages/Auth/EmailLogin'
import OTPVerifyScreen from './pages/Auth/OTPVerify'
import PasswordLoginScreen from './pages/Auth/Password'
import NewExperienceScreen from './pages/Onboarding/NewExperience'
import WhatNotToMissScreen from './pages/Onboarding/WhatNotToMiss'
import CurrentStatusScreen from './pages/Onboarding/CurrentStatus'

export default function App() {
  return (
    <div className="w-mobile max-w-full bg-neutral-light-lightest min-h-svh relative overflow-hidden">
      <Routes>
        {/* Main app */}
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<DiningList />} />
        <Route path="/dining/:id" element={<DiningDetail />} />

        {/* Auth flow */}
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/auth/phone" element={<PhoneLoginScreen />} />
        <Route path="/auth/email" element={<EmailLoginScreen />} />
        <Route path="/auth/otp" element={<OTPVerifyScreen />} />
        <Route path="/auth/password" element={<PasswordLoginScreen />} />

        {/* Onboarding */}
        <Route path="/onboarding/new" element={<NewExperienceScreen />} />
        <Route path="/onboarding/features" element={<WhatNotToMissScreen />} />
        <Route path="/onboarding/status" element={<CurrentStatusScreen />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
