module.exports = require('mongoose').connect(process.env.MONGODB || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
