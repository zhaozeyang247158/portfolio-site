/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F0E8',
        'paper-dark': '#EDE8DC',
        ink: '#2C2C2C',
        'ink-light': '#6B6560',
        'ink-faint': '#A8A09A',
        accent: '#8B7355',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
        // 手写感字体：用于标题、注释、Doodle 标签
        handwrite: ['"Ma Shan Zheng"', '"ZCOOL KuaiLe"', '"PingFang SC"', 'cursive'],
        quickwrite: ['"ZCOOL KuaiLe"', '"Ma Shan Zheng"', '"PingFang SC"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
