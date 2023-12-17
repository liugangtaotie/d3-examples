.PHONY: app
default: help

# build all theme
dev:
	npm run dev

analyz:
	npm run analyz

build:
	npm run build

autofix:
	npm run autofix

dll:
	npm run build:dll
	
test:
	npm run build:development

pro:
	npm run build

deploy:
	npm run deploy

lint:
	npm run lint

e2e:
	npm run test:e2e

unit:
	npm run test:unit

pre:
	npm run precommit