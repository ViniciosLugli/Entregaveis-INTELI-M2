import express from 'express'
import bodyParser from 'body-parser'
import DatabaseTable from './models/database/databaseTable.js'
import getConfig from './configs/loader.js'
import ConsoleUtils from './utils/console.js'
import cors from 'cors'
import colors from 'colors'

const DBPATH = 'tests.db'

const EXPRESS_CONFIG = await getConfig('express')

ConsoleUtils.addTimeOnConsole()
DatabaseTable.initDatabase()

const app = express()

app.use(express.static('../frontend/'))

app.disable('x-powered-by')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
	cors({
		origin: '*',
	})
)

class Competitions extends DatabaseTable {
	constructor() {
		let columns = [
			{
				name: 'id',
				type: 'INTEGER',
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			{
				name: 'name',
				type: 'TEXT',
				notNull: true,
			},
			{
				name: 'description',
				type: 'TEXT',
				notNull: true,
			},
			{
				name: 'reward',
				type: 'TEXT',
				notNull: true,
			},
		]

		super('competitions', columns)
	}
}

const competitions = new Competitions()

app.get('/competitions', (req, res) => {
	competitions.filter({}).then((result) => {
		res.send(result)
	})
})

app.post('/competitions', (req, res) => {
	competitions.insert(req.body).then((result) => {
		res.send(result)
	})
})

app.delete('/competitions/:id', (req, res) => {
	competitions.delete(req.params.id).then((result) => {
		res.send(result)
	})
})

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`.rainbow)
})
