var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/wallets';
var db = pgp(connectionString);

function getAllWallets(req, res, next) {
  db.any('select * from wallets')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL wallets'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleWallet(req, res, next) {
  var walletID = parseInt(req.params.id);
  db.one('select * from wallets where id = $1', walletID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE wallet'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createWallet(req, res, next) {
  req.body.amount = parseInt(req.body.amount);
  db.none('insert into wallets(name, description, amount)' +
      'values(${name}, ${description}, ${amount})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one wallet'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateWallet(req, res, next) {
  db.none('update wallets set name=$1, description=$2, amount=$3, where id=$4',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated wallet'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeWallet(req, res, next) {
  var walletID = parseInt(req.params.id);
  db.result('delete from wallets where id = $1', walletID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} wallet`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllWallets: getAllWallets,
  getSingleWallet: getSingleWallet,
  createWallet: createWallet,
  updateWallet: updateWallet,
  removeWallet: removeWallet
};
