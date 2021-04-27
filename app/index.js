import server from './config/restify'

const app = server()

app.listen(8081, () => console.log(`Servidor rodando na porta 8081`))
