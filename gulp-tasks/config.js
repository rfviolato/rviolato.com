var paths = {
	src: './app/',
	dist: './dist/',
	scripts: 'scripts/',
	styles: 'styles/',
	sass: 'styles/sass/',
	temp: '.tmp/',
	images: 'images/'
};

var files = {
	dist: {
		scripts: 'scripts.min.js',
		vendors: 'vendors.min.js',
		css: 'main.min.css'
	},
	src: {
		scripts: 'scripts.js',
		vendors: 'vendors.js',
		css: 'main.css'
	},
	cssMap: 'main.min.map.css'
};

module.exports = {
	paths: paths,
	files: files
};