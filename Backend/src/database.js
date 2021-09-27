const mongoose=require('mongoose')

mongoose.connect(
'mongodb://localhost/desarollo',
{
useUnifiedTopology:true,
useNewUrlParser:true
}
)

.then((db)=>console.log('db is connect'))
.catch((err)=>console.error(err))