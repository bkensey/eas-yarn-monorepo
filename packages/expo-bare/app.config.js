export default ({ config }) => {
  // Pull env vars from process.env in the EAS build context or from local .env in dev
  return {
    ...config,
    extra: {
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
      auth0Domain: process.env.AUTH0_DOMAIN,
      cloudfrontPrefix: process.env.CLOUDFRONT_PREFIX,
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
      environment: process.env.ENVIRONMENT,
      graphqlApiUrl: process.env.GRAPHQL_API_URL,
      sentryTracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE,
    },
  };
};
