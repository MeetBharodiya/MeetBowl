const jwt = require("jsonwebtoken");
const refreshModel = require("../models/refresh-token-model");

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "1y",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async storeRefreshToken(token, userId) {
    try {
      await refreshModel.create({
        token,
        userId,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findRefreshToken(userId, refreshToken) {
    return refreshModel.findOne({ userId, token: refreshToken });
  }

  async verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, accessTokenSecret);
  }

  async verifyRefreshToken(refreshToken) {
     return jwt.verify(refreshToken, refreshTokenSecret);
  }

  async updateRefreshToken(userId, refreshToken) {
    return await refreshModel.updateOne(
      { userId: userId },
      { token: refreshToken }
    );
  }

  async removeToken(refreshToken){
      return await refreshModel.deleteOne({token:refreshToken});
  }
}

module.exports = new TokenService();
