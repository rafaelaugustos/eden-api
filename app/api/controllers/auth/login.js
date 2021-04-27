import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pg from '../../../database'

const checkExistsUser = async (obj) => {
	const data = await pg('users').select('id', 'password').where(obj)

	return data.length === 0 ? data : data[0]
}

export default async (req, res) => {
	try {
		const { email, password } = req.body
		const user = {}

		const existsUser = await checkExistsUser({ email })
		user.id = existsUser.id

		if (existsUser.length === 0)
			return res.send(404, { auth: false, message: 'Usuario não existe' })

		if (!bcrypt.compareSync(password, existsUser.password))
			return res.send(401, {
				auth: false,
				message: 'Usuario ou senha incorretos',
			})

		const token = await jwt.sign({ id: user.id }, '12345678', {
			expiresIn: '1h',
		})

		return res.send(200, {
			auth: true,
			token,
		})
	} catch (e) {
		console.log(e)
		return res.send(400, { message: 'Algo deu errado!' })
	}
}
