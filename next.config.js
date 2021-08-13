
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['syGzdGydv2oaB8Q62Uvrb7'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  