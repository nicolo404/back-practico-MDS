const User = require("../Models/ModelUser");

  const crearUsuario = async (req, res) => {
    const { nombre, edad, email } = req.body;
    try {
      const user = new User({
        nombre,
        edad,
        email,
      });
      await user.save();
      return res.status(200).send({
        mensaje: "Usuario creado correctamente",
      });
    } catch (error) {
      return res.status(500).send({
        mensaje: "Error al crear el usuario",
      });
    }
  }

  const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await User.find();
      return res.status(200).send({
        usuarios,
      });
    } catch (error) {
      return res.status(500).send({
        mensaje: "Error al obtener los usuarios",
      });
    }
  }

  const obtenerUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await User.findById(id);
      return res.status(200).send({
        usuario,
      });
    } catch (error) {
      return res.status(500).send({
        mensaje: "Error al obtener el usuario",
      });
    }
  }
    

  const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      await User.findByIdAndDelete(id);
      return res.status(200).send({
        mensaje: "Usuario eliminado correctamente",
      });
    } catch (error) {
      return res.status(500).send({
        mensaje: "Error al eliminar el usuario",
      });
    }
  }

  const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, edad, email } = req.body;
    try {
      await User.findByIdAndUpdate(id, {
        nombre,
        edad,
        email,
      });
      return res.status(200).send({
        mensaje: "Usuario actualizado correctamente",
      });
    } catch (error) {
      return res.status(500).send({
        mensaje: "Error al actualizar el usuario",
      });
    }
  }

module.exports = { crearUsuario, obtenerUsuarios, obtenerUsuario, eliminarUsuario, actualizarUsuario}