var bcrypt = require('bcrypt');

exports.isValidPassword = function (password, hash) {
    return new Promise(function (resolve, reject) {
      return bcrypt.compare(password, hash, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  exports.hashPassword = function(password){
    return new Promise(function(resolve, reject) {
        return bcrypt.hash(password, 10, function(err, hash) {
          if (err){
              reject(err);
             } else {
                resolve(hash);
             }          
         // data is created only after this occurs
        });
      });
  }

  exports.getTimeConfig = () => {
  const today = new Date();
  const config = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  };
  return config;
  };
