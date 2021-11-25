import { URLController } from './controller/URL_Controller'
import express from 'express'
import { MongoConnection } from './DB/mongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))