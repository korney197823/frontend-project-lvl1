install:
	npm install

start:
	node bin/calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .