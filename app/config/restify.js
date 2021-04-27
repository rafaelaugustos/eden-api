import restify from 'restify'

import auth from '../api/routes/auth'

export default () => {
	const app = restify.createServer()

	app.use(restify.plugins.bodyParser({ mapParams: true }))

	auth(app)

	return app
}
