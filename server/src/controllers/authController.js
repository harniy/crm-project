const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const Roles = require("../models/Role");
const Users = require("../models/User");

const { secret } = require('../config')

const createToken = (id, roles) => {
    const payload = {id: id, roles: roles}
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class AuthController {
  async login(req, res) {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });

    if (!user) {
        return res.status(400).json({message: 'Пользователь не найден'})
    }

    const validPassword = await bcrypt.compareSync(password, user.password)

    if (!validPassword) {
        return res.status(400).json({message: 'Пароль не верный'})
    }

    const token = createToken(user._id, user.roles)

   
    res.json({userInfo: {
        username,
    }, accessToken: token}) 
  }

  async register(req, res) {
    const { username, password } = req.body;

    const candidate = await Users.findOne({ username });

    if (candidate) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }

    const userRole = await Roles.findOne({ value: "USER" });

    const hashPassword = bcrypt.hashSync(password, 7);

    const user = new Users({
      username,
      password: hashPassword,
      roles: [userRole.value],
    });

    user.save();

    return res.json({ message: "Пользователь зарегистрирован!" });
  }
}

module.exports = new AuthController();
