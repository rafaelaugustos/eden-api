import authController from '../controllers/auth'

const auth = (app) => {
	const controller = authController()

	app.post('/login', controller.login)
	app.post('/register', controller.register)
}

export default auth
