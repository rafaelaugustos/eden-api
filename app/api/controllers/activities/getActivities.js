import pg from '../../../database'

export default async (req, res) => {
	const acivity = await pg('atividade_agendada')

	if (acivity.length === 0)
		return res.send(404, { message: 'Nenhuma atividade encontrada.' })

	return res.send(200, acivity)
}
