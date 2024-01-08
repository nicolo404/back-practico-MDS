const ControllerUser = require('../Controllers/ControllerUser');
const express = require('express');
const router = express.Router();

router.post('/crear-usuario', ControllerUser.crearUsuario);
router.get('/obtener-usuarios', ControllerUser.obtenerUsuarios);
router.delete('/eliminar-usuario/:id', ControllerUser.eliminarUsuario);
router.put('/actualizar-usuario/:id', ControllerUser.actualizarUsuario);

module.exports = router;