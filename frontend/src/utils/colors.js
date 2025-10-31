// TWUC Website Color System
// Professional and elegant color palette for consistent branding

export const colors = {
  // Primary Brand Colors
  primary: {
    main: 'from-blue-600 to-purple-600',
    light: 'from-blue-500 to-purple-500',
    dark: 'from-blue-700 to-purple-700',
    hover: 'from-blue-700 to-purple-700',
    bg: 'from-blue-50 to-purple-50',
    text: 'text-blue-600'
  },

  // Secondary Colors (Consistent with brand)
  secondary: {
    main: 'from-indigo-600 to-blue-600',
    light: 'from-indigo-500 to-blue-500',
    dark: 'from-indigo-700 to-blue-700',
    bg: 'from-indigo-50 to-blue-50',
    text: 'text-indigo-600'
  },

  // Accent Colors (For highlights and CTAs)
  accent: {
    main: 'from-emerald-500 to-teal-500',
    light: 'from-emerald-400 to-teal-400',
    dark: 'from-emerald-600 to-teal-600',
    bg: 'from-emerald-50 to-teal-50',
    text: 'text-emerald-600'
  },

  // Success/Positive Actions
  success: {
    main: 'from-green-500 to-emerald-500',
    light: 'from-green-400 to-emerald-400',
    dark: 'from-green-600 to-emerald-600',
    bg: 'from-green-50 to-emerald-50',
    text: 'text-green-600'
  },

  // Warning/Attention
  warning: {
    main: 'from-amber-500 to-orange-500',
    light: 'from-amber-400 to-orange-400',
    dark: 'from-amber-600 to-orange-600',
    bg: 'from-amber-50 to-orange-50',
    text: 'text-amber-600'
  },

  // Error/Danger
  error: {
    main: 'from-red-500 to-pink-500',
    light: 'from-red-400 to-pink-400',
    dark: 'from-red-600 to-pink-600',
    bg: 'from-red-50 to-pink-50',
    text: 'text-red-600'
  },

  // Neutral/Gray Scale
  neutral: {
    main: 'from-gray-500 to-slate-500',
    light: 'from-gray-400 to-slate-400',
    dark: 'from-gray-600 to-slate-600',
    bg: 'from-gray-50 to-slate-50',
    text: 'text-gray-600'
  },

  // Dark theme colors
  dark: {
    main: 'from-slate-800 to-gray-900',
    light: 'from-slate-700 to-gray-800',
    dark: 'from-slate-900 to-black',
    bg: 'from-slate-900 to-gray-900',
    text: 'text-slate-300'
  }
};

// Category-specific colors for consistency
export const categoryColors = {
  "All": colors.primary.main,
  "Agency": colors.secondary.main,
  "CS": colors.accent.main,
  "LICED": colors.warning.main,
  "Organization": colors.success.main
};

// Text gradients for headings
export const textGradients = {
  primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent',
  secondary: 'bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent',
  accent: 'bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent',
  success: 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent',
  warning: 'bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent'
};

// Background gradients for sections
export const backgroundGradients = {
  light: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
  medium: 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100',
  dark: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
  hero: 'bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/40',
  footer: 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
};

// Button styles
export const buttonStyles = {
  primary: `bg-gradient-to-r ${colors.primary.main} text-white hover:${colors.primary.hover}`,
  secondary: `bg-gradient-to-r ${colors.secondary.main} text-white hover:${colors.secondary.dark}`,
  accent: `bg-gradient-to-r ${colors.accent.main} text-white hover:${colors.accent.dark}`,
  success: `bg-gradient-to-r ${colors.success.main} text-white hover:${colors.success.dark}`,
  warning: `bg-gradient-to-r ${colors.warning.main} text-white hover:${colors.warning.dark}`,
  error: `bg-gradient-to-r ${colors.error.main} text-white hover:${colors.error.dark}`
};

// Card styles
export const cardStyles = {
  glass: 'backdrop-filter backdrop-blur-20 bg-white/95 border border-white/30',
  primary: `bg-gradient-to-br ${colors.primary.bg} border border-blue-200`,
  secondary: `bg-gradient-to-br ${colors.secondary.bg} border border-indigo-200`,
  accent: `bg-gradient-to-br ${colors.accent.bg} border border-emerald-200`,
  success: `bg-gradient-to-br ${colors.success.bg} border border-green-200`,
  warning: `bg-gradient-to-br ${colors.warning.bg} border border-amber-200`,
  error: `bg-gradient-to-br ${colors.error.bg} border border-red-200`
};

// Icon container styles
export const iconStyles = {
  primary: `bg-gradient-to-r ${colors.primary.main}`,
  secondary: `bg-gradient-to-r ${colors.secondary.main}`,
  accent: `bg-gradient-to-r ${colors.accent.main}`,
  success: `bg-gradient-to-r ${colors.success.main}`,
  warning: `bg-gradient-to-r ${colors.warning.main}`,
  error: `bg-gradient-to-r ${colors.error.main}`
};
