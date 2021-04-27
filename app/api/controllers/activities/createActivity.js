import pg from '../../../database'

export default async (req, res) => {
	try {
		const {
			actualstart,
			actualend,
			pjo_tipodeatividade,
			subject,
			pjo_empreendimentoid,
			pjo_blocoid,
			pjo_unidadeid,
		} = req.body

		console.log(req.body)

		await pg('atividade_agendada').insert({
			actualstart,
			actualend,
			pjo_tipodeatividade,
			subject,
			pjo_empreendimentoid,
			pjo_blocoid,
			pjo_unidadeid,
		})

		return res.send(200, {
			message: `A atividade com o assunto: ${subject} foi cadastrada!`,
		})
	} catch (e) {
		return res.send(400, { message: 'Erro ao cadastrar atividade ' })
	}
}
