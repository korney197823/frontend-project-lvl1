install:
	npm install

start:
	npx node bin/progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .