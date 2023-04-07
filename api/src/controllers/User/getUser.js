import User from '../../models/User'

export const getUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
          }

          res.status(200).send({ user })
    } catch (error) {
        console.log(error.message)
    }
}