import pg from '../../../database'

export default async (req, res) => {
	try {
		const events = await pg('events')

		return res.send(200, { events })
	} catch (e) {
		return res.send(400, { message: 'Algo deu errado!' })
	}
}
