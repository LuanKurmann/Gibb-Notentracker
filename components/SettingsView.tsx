import React from 'react';
import { SchoolConfig, Settings } from '../types';
import { TEXTS, ACCENT_COLORS } from '../constants';
import { Moon, Sun, Monitor, Calendar, Cloud, LogOut, CheckCheck, Copy, Check } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface SettingsViewProps {
  config: SchoolConfig;
  onUpdateSettings: (settings: Settings) => void;
  session: Session | null;
  onLogin: () => void;
  onLogout: () => void;
  calendarUrl: string | null;
  onEnableCalendar: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  config,
  onUpdateSettings,
  session,
  onLogin,
  onLogout,
  calendarUrl,
  onEnableCalendar
}) => {
  const lang = config.settings.language;
  const t = TEXTS[lang];
  const [copyFeedback, setCopyFeedback] = React.useState(false);

  const handleLanguageChange = (l: 'de' | 'en' | 'fr') => {
    onUpdateSettings({ ...config.settings, language: l });
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    onUpdateSettings({ ...config.settings, theme });
  };

  const handleActiveSemesterChange = (id: number) => {
    onUpdateSettings({ ...config.settings, activeSemesterId: id });
  };

  const handleAccentColorChange = (hex: string) => {
    onUpdateSettings({ ...config.settings, accentColor: hex });
  };

  return (
    <div className="animate-fade-in space-y-6 pb-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white px-1">{t.settings}</h2>

      {/* General Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.settingsView.appearance}</h3>
        
        {/* Language */}
        <div className="mb-8">
            <label className="block text-gray-900 dark:text-white font-bold mb-2">{t.language}</label>
            <p className="text-sm text-gray-500 mb-4">{t.settingsView.langDesc}</p>
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
               {['de', 'en', 'fr'].map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLanguageChange(l as any)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${config.settings.language === l ? 'bg-white dark:bg-gray-600 text-primary shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {l.toUpperCase()}
                  </button>
               ))}
            </div>
        </div>

        {/* Theme */}
        <div className="mb-8">
            <label className="block text-gray-900 dark:text-white font-bold mb-2">{t.settingsView.appearance}</label>
            <p className="text-sm text-gray-500 mb-4">{t.settingsView.themeDesc}</p>
            <div className="flex gap-4">
               <button
                  onClick={() => handleThemeChange('light')}
                  className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${config.settings.theme === 'light' ? 'border-primary bg-blue-50 dark:bg-gray-700 text-primary' : 'border-gray-200 dark:border-gray-600 text-gray-500'}`}
               >
                  <Sun size={24} />
                  <span className="font-bold text-sm">Light</span>
               </button>
               <button
                  onClick={() => handleThemeChange('dark')}
                  className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${config.settings.theme === 'dark' ? 'border-primary bg-gray-700 text-primary' : 'border-gray-200 dark:border-gray-600 text-gray-500'}`}
               >
                  <Moon size={24} />
                  <span className="font-bold text-sm">Dark</span>
               </button>
            </div>
        </div>

        {/* Accent Color */}
        <div>
            <label className="block text-gray-900 dark:text-white font-bold mb-2">{t.settingsView.accentColor}</label>
            <p className="text-sm text-gray-500 mb-4">{t.settingsView.accentColorDesc}</p>
            <div className="flex flex-wrap gap-3">
               {ACCENT_COLORS.map(color => (
                  <button
                     key={color.hex}
                     onClick={() => handleAccentColorChange(color.hex)}
                     className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 border-2 border-white dark:border-gray-800 shadow-sm"
                     style={{ backgroundColor: color.hex }}
                     title={color.name}
                  >
                     {config.settings.accentColor === color.hex && <Check size={20} className="text-white drop-shadow-md" />}
                     {!config.settings.accentColor && color.hex === '#3b82f6' && <Check size={20} className="text-white drop-shadow-md" />} 
                  </button>
               ))}
            </div>
        </div>
      </div>

      {/* Default Semester */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.settingsView.general}</h3>
        <div>
            <label className="block text-gray-900 dark:text-white font-bold mb-2">{t.settingsView.defaultSemester}</label>
            <p className="text-sm text-gray-500 mb-4">{t.settingsView.defaultSemesterDesc}</p>
            <div className="grid grid-cols-2 gap-2">
                {config.semesters.map(sem => (
                   <button
                     key={sem.id}
                     onClick={() => handleActiveSemesterChange(sem.id)}
                     className={`py-3 px-4 rounded-xl text-sm font-bold text-left transition-all border ${
                        config.settings.activeSemesterId === sem.id 
                           ? 'border-primary bg-primary text-white shadow-lg shadow-blue-500/20' 
                           : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                     }`}
                   >
                      {sem.name}
                   </button>
                ))}
            </div>
        </div>
      </div>

      {/* Account & Sync */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.settingsView.account}</h3>
         
         <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl mb-6">
            <div className="flex items-center gap-4">
               <div className={`w-12 h-12 rounded-full flex items-center justify-center ${session ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                  <Cloud size={24} />
               </div>
               <div className="flex-1">
                  <div className="font-bold text-gray-900 dark:text-white">
                     {session ? 'Cloud Sync Aktiv' : 'Offline Modus'}
                  </div>
                  <div className="text-xs text-gray-500">
                     {session ? session.user.email : 'Melde dich an, um Daten zu sichern'}
                  </div>
               </div>
               <button
                  onClick={session ? onLogout : onLogin}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                     session 
                        ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                        : 'bg-primary text-white hover:bg-blue-600'
                  }`}
               >
                  {session ? t.auth.logout : t.auth.login}
               </button>
            </div>
         </div>

         {/* Calendar */}
         <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
            <label className="block text-gray-900 dark:text-white font-bold mb-2 flex items-center gap-2">
               <Calendar size={18} className="text-primary"/> {t.calendar.title}
            </label>
            <p className="text-sm text-gray-500 mb-4">{t.calendar.desc}</p>
            
            {calendarUrl ? (
               <div className="flex gap-2">
                  <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-600 font-mono text-xs text-gray-600 dark:text-gray-400 truncate">
                     {calendarUrl.replace('https://', 'webcal://')}
                  </div>
                  <button
                     onClick={() => {
                        navigator.clipboard.writeText(calendarUrl.replace('https://', 'webcal://'));
                        setCopyFeedback(true);
                        setTimeout(() => setCopyFeedback(false), 2000);
                     }}
                     className="px-4 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors"
                  >
                     {copyFeedback ? <CheckCheck size={20} /> : <Copy size={20} />}
                  </button>
               </div>
            ) : (
               <button
                  onClick={onEnableCalendar}
                  disabled={!session}
                  className="w-full py-3 bg-white dark:bg-gray-700 border-2 border-primary text-primary dark:text-blue-400 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {session ? t.calendar.enable : t.calendar.info}
               </button>
            )}
         </div>
      </div>
    </div>
  );
};

export default SettingsView;