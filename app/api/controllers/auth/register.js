import bcrypt from 'bcrypt'
import pg from '../../../database'

const checkExistsUser = async (email) => {
	const data = await pg('users').where({ email })

	return data.length !== 0
}

export default async (req, res) => {
	try {
		const { name, password, email, phone } = req.body

		if (await checkExistsUser(email))
			return res.send(403, { message: 'Usuario já existe!' })

		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)

		await pg('users').insert({
			name,
			password: hash,
			email,
			phone,
		})

		return res.send(200, { message: 'Usuario cadastrado com sucesso' })
	} catch (e) {
		console.log(e)
		return res.send(400, { message: 'Algo deu errado!' })
	}
}
