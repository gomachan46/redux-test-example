NPM_BIN=./node_modules/.bin
BROWSERIFY=${NPM_BIN}/browserify
MOCHA=${NPM_BIN}/mocha

install:
	npm install
build:
	${BROWSERIFY} ./index.js -t babelify -o ./bundle.js
tests:
	${MOCHA} --compilers js:espower-babel/guess test/**/*.spec.js
