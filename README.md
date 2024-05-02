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

## Chi to Parent / Parent to Chi

### First (Chi to Parent)
- ParentComponent.js

	```js
		

		import React, { useState } from 'react';
		import ChildComponent from './ChildComponent';

		function ParentComponent() {
		const [data, setData] = useState('');

		const handleDataChange = (newData) => {
			setData(newData);
		};

		return (
			<div>
			<ChildComponent onDataChange={handleDataChange} />
			<p>Data from child: {data}</p>
			</div>
		);
		}

		export default ParentComponent;
	```
- ChildComponent.js
	```js 

		import React from 'react';

		function ChildComponent(props) {
		const newData = 'Hello from child!';

		const handleButtonClick = () => {
			props.onDataChange(newData);
		};

		return (
			<div>
			<button onClick={handleButtonClick}>Send data to parent</button>
			</div>
		);
		}

		export default ChildComponent;
	```

### Second (Parent to Chi)

- ParentComponent.js

	```js
	import React from 'react';
	import ChildComponent from './ChildComponent';

	function ParentComponent() {
	const data = { name: 'John', age: 30 };

	return (
		<div>
		<ChildComponent data={data} />
		</div>
	);
	}

	export default ParentComponent;
	````

- ChildComponent.js

	```js
	import React from 'react';

	function ChildComponent(props) {
	return (
		<div>
		<h1>Name: {props.data.name}</h1>
		<p>Age: {props.data.age}</p>
		</div>
	);
	}

	export default ChildComponent;
	```