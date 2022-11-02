import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import profileRoutes from './routes/profile.js'
import authRoutes from './routes/auth.js'



//conect database
const app = express();

if (process.env.NODE_ENV === 'Development') {
    app.use(morgan('dev'))
}

app.use(express.json({ limit: '30mb', extended: true }));

dotenv.config();
connectDB();

// Define Routes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postRoutes);

//Serve statis assets in production
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.get('/api', (req, res)=>{
    res.send('hello')
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));