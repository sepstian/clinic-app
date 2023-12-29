const { Account } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorResponse } = require("../helper/utils");

module.exports = {
  create: async (req, res, next) => {
    try {
      const checkAccount = await Account.findOne({
        where: {
          username: req.body.username,
        },
        attributes: { exclude: ["password"] },
      });
      if (checkAccount) {
        return res.status(400).send({
          status: false,
          message: "Account is exist",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashPassword;
      const result = await Account.create(req.body);
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
          role: result.role
        },
        process.env.SCRT_TKN,
        {
          expiresIn: "1h",
        }
      );
      return res.status(201).send({
        succes: true,
        message: "Register succes",
        result: {
            result,
            token
        }
      });
    } catch (error) {
      console.log(error);
      next(errorResponse(500, false, "Error create account", error.message));
    }
  },
  loginAcc: async (req, res, next) => {
    try {
      const result = await Account.findOne({
        where: {
          username: req.body.username,
        },
        raw: true,
      });
      const passBcrypt = await bcrypt.compare(
        req.body.password,
        result.password
      );
      if (passBcrypt) {
        delete result.password;
        const { id, username, password, role } = result;
        const token = jwt.sign(
          {
            id,
            username,
            password,
            role,
          },
          process.env.SCRT_TKN,
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).send({
          succes: true,
          message: "Selamat login",
          result: {
            id,
            username,
            password,
            role,
            token,
          },
        });
      } else {
        return res.status(400).send({
          succes: false,
          message: "You unauthenticate",
        });
      }
    } catch (error) {
      next(errorResponse(500, false, "Error login", error.message));
    }
  },
  keepLogin: async (req, res, next) => {
    try {
      const result = await Account.findOne({
        where: {
          id: req.accountData.id,
        },
        raw: true,
      });
      const { id, username, role } = result;
      const token = jwt.sign({ id, username, role }, process.env.SCRT_TKN, {
        expiresIn: "1h",
      });
      return res.status(200).send({
        succes: true,
        result: {
          id,
          username,
          role,
          token,
        },
      });
    } catch (error) {
      console.log(error);
      next(errorResponse(500, false, "Error get keep login", error.message));
    }
  },
};
