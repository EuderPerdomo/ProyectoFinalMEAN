require('./database')
const app =require('./app')

app.listen(app.get('port'))
console.log('server ok, on port:',app.get('port'))