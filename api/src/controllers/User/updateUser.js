import User from '../../models/User'

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { email, fullname, password, preferences } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    user.email = email;
    user.preferences = preferences;

    await user.save();

    res.status(200).send({ user })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar los datos del usuario' });
  }
};