install:
	npm install

start:
	npx node bin/prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .