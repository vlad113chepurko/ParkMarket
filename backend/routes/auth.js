const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

