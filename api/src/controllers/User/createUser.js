import User from '../../models/User'

export const createUser = async (req, res) => {
    try {
        const { email, fullname, password, preferences } = req.body;
    
        const newUser = new User({ email, fullname, password, preferences });
    
        await newUser.save();
    
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
      } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario' });
      }
}