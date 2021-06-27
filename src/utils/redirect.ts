import Router from 'next/router'

const redirect = (context: any, target: string): void => {
	if (context.res) {
		context.res.writeHead(303, { Location: target })
		context.res.end()
	} else {
		// In the browser, we just pretend like this never even happened ;)
		Router.replace(target)
	}
}

export default redirect;