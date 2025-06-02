import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Verificar que tenemos la URI de MongoDB
    const mongoURI = process.env.MONGO_URI
    
    if (!mongoURI) {
      throw new Error('MONGO_URI no está definida en las variables de entorno')
    }

    console.log('Intentando conectar a MongoDB...')
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message)
    process.exit(1)
  }
}

export default connectDB