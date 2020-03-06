install:
	npm install

start:
	npx node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .