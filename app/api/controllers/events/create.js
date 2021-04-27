import pg from '../../../database'

export default async (req, res) => {
	try {
		const {
			userId,
			categoryId,
			latitude,
			longitude,
			event,
			description,
			eventDate,
		} = req.body

		await pg('events').insert({
			id_user: userId,
			id_category: categoryId,
			latitude,
			longitude,
			event,
			description,
			event_date: eventDate,
		})

		return res.send(200, { message: 'Evento cadastrado com sucesso' })
	} catch (e) {
		return res.send(400, { message: 'Algo deu errado!' })
	}
}
