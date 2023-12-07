/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#E63534',
                'accent-dark': '#c12625',
                'accent-grey': '#9B9B9B',
                'gold': '#BDA343',
                'dark': '#141414',
                'background-black': '#0A0A0A'
            }
        },
        container: {
            center: true,
            screens: {
                '2xl': '1402px'
            }
        }
    },
    plugins: [
        require('daisyui')
    ],
}
