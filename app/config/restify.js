import restify from 'restify'

import auth from '../api/routes/auth'
import events from '../api/routes/events'

export default () => {
	const app = restify.createServer()

	app.use(restify.plugins.bodyParser({ mapParams: true }))

	auth(app)
	events(app)

	return app
}
