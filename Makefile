NPM_BIN=./node_modules/.bin

install:
	npm install
build:
	${NPM_BIN}/browserify ./index.js -t babelify -o ./public/bundle.js
tests:
	${NPM_BIN}/mocha --watch --compilers js:espower-babel/guess test/**/*.js
browser-tests:
	${NPM_BIN}/karma start
