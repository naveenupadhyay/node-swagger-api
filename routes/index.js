var express = require('express');
var router = express.Router();

var db = require('../queries');

/**
 * @swagger
 * definition:
 *   Wallet:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       amount:
 *         type: integer
 */

/**
 * @swagger
 * /api/wallets:
 *   get:
 *     tags:
 *       - Wallets
 *     descriptionription: Returns all wallets
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         descriptionription: An array of wallets
 *         schema:
 *           $ref: '#/definitions/Wallet'
 */
router.get('/api/wallets', db.getAllWallets);

/**
 * @swagger
 * /api/wallets/{id}:
 *   get:
 *     tags:
 *       - Wallets
 *     descriptionription: Returns a single wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         descriptionription: Wallet's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         descriptionription: A single wallet
 *         schema:
 *           $ref: '#/definitions/Wallet'
 */
router.get('/api/wallets/:id', db.getSingleWallet);

/**
 * @swagger
 * /api/wallets:
 *   post:
 *     tags:
 *       - Wallets
 *     descriptionription: Creates a new wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: wallet
 *         descriptionription: Wallet object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Wallet'
 *     responses:
 *       200:
 *         descriptionription: Successfully created
 */
router.post('/api/wallets', db.createWallet);

/**
 * @swagger
 * /api/wallets/{id}:
 *   put:
 *     tags:
 *       - Wallets
 *     descriptionription: Updates a single wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         descriptionription: Wallet's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: wallet
 *         descriptionription: Wallet object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Wallet'
 *     responses:
 *       200:
 *         descriptionription: Successfully updated
 */
router.put('/api/wallets/:id', db.updateWallet);

/**
 * @swagger
 * /api/wallets/{id}:
 *   delete:
 *     tags:
 *       - Wallets
 *     descriptionription: Deletes a single wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         descriptionription: Wallet's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         descriptionription: Successfully deleted
 */
router.delete('/api/wallets/:id', db.removeWallet);


module.exports = router;