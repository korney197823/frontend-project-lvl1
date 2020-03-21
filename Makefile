install:
	npm install

start:
	node bin/progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .