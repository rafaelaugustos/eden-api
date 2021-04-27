import pg from '../../../database'

export default async (req, res) => {
	const { id } = req.params

	console.log(req)

	const acivity = await pg('atividade_agendada').where({ id })

	if (acivity.length === 0)
		return res.send(404, { message: 'Nenhuma atividade encontrada.' })

	return res.send(200, acivity[0])
}
