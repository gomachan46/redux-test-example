install:
	npm install
build:
	browserify ./index.js -t [ babelify --presets [ es2015 react ] ] -o ./bundle.js
test:
	mocha --compilers js:espower-babel/guess test/**/*.spec.js
