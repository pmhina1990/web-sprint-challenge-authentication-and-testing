const jwtSecret = process.env.JWT_SECRET || "hush";

module.exports = { 
    jwtSecret,
};