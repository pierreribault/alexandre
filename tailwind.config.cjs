const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				dark: '#0E0B23',
				electric: '#02E4EC',
				pink: '#b257f9',
				white: '#ffffff',
				malt: '#FC5656'
			}
		},

		container: {
			center: true
		}
	},

	plugins: []
};

module.exports = config;
