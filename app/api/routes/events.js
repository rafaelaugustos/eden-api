import eventsController from '../controllers/events'

const events = (app) => {
	const controller = eventsController()

	app.post('/create/event', controller.create)
	app.get('/events', controller.all)
}

export default events
