install:
	npm install

start:
	npx node bin/calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .