
import { Calendar1, CircleCheck, CalendarDays, Inbox } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    href: 'https://youtube.com/planen-todoapp',
    label: 'YouTube',
  },
  {
    href: 'https://linkedin.com/in/kani02',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/2002kani',
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/planen-todoapp',
    label: 'Instagram',
  },
] as const;

export const SIDEBAR_LINKS = [
  {
    href: '/app/inbox',
    label: 'Eingang',
    icon: Inbox,
  },
  {
    href: '/app/today',
    label: 'Heute',
    icon: Calendar1,
  },
  {
    href: '/app/upcoming',
    label: 'Anstehend',
    icon: CalendarDays,
  },
  {
    href: '/app/completed',
    label: 'Abgeschlossen',
    icon: CircleCheck,
  },
] as const;

export const PROJECT_COLORS = [
  {
    name: 'Standard',
    hex: '#64748b',
  },
  {
    name: 'Rot',
    hex: '#ef4444',
  },
  {
    name: 'Orange',
    hex: '#f97316',
  },
  {
    name: 'Bernstein',
    hex: '#f59e0b',
  },
  {
    name: 'Gelb',
    hex: '#eab308',
  },
  {
    name: 'Limette',
    hex: '#84cc16',
  },
  {
    name: 'Grün',
    hex: '#22c55e',
  },
  {
    name: 'Smaragd',
    hex: '#10b981',
  },
  {
    name: 'Blaugrün',
    hex: '#06b6d4',
  },
  {
    name: 'Cyan',
    hex: '#06b6d4',
  },
  {
    name: 'Himmelblau',
    hex: '#0ea5e9',
  },
  {
    name: 'Blau',
    hex: '#06b6d4',
  },
  {
    name: 'Indigo',
    hex: '#6366f1',
  },
  {
    name: 'Violett',
    hex: '#8b5cf6',
  },
  {
    name: 'Lila',
    hex: '#a855f7',
  },
  {
    name: 'Fuchsie',
    hex: '#d946ef',
  },
  {
    name: 'Rosa',
    hex: '#ec4899',
  },
  {
    name: 'Rosé',
    hex: '#f43f5e',
  },
] as const;