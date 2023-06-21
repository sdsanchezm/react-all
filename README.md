# react-all
React tracking learning

## documentation

- Getting Started: 
	- [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

-	Templates:
	- [https://create-react-app.dev/docs/custom-templates/](https://create-react-app.dev/docs/custom-templates/)

## Commands:

- `npm init creact-app schoolnotesfront` or `npx create-react-app my-app`
- npm start
- npm run build (Bundles the app into static files for production.)
- npm test (Starts the test runner)
- npm run eject
- `cd schoolnotesfront` and `npm start`
- 2 templates (`npx create-react-app my-app --template [template-name]`):
	- `cra-template`
	- `cra-template-typescript`

- Some additional details:
	```
	npm uninstall -g create-react-app
	npx clear-npx-cache
	npm i create-react-app
	npx create-react-app@latest my-app
	```

- update packages in a project
```
npm i -g npm-check-updates
ncu -u
npm install
```

or 

```
npx npm-check-updates -u
npm install
```
- and then, to fix:
```
npm audit fix
```

- pass