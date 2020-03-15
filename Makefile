install:
	npm install

start:
	npx node bin/even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .