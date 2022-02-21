module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '292a5a467dfbffbcfb8deb2c3fba6d00'),
  },
});
