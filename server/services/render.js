const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("https://usermanagementapp.onrender.com/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//http://localhost:3000/api/users

exports.update_user = (req, res) => {
  axios
    .get("https://usermanagementapp.onrender.com/api/users", {
      params: { id: req.query.id },
    })
    .then(function (userData) {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};
