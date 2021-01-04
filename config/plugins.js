module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('trstn'),
        api_key: env('258645841846429'),
        api_secret: env('AV7_i6TYgIEhyQH4MmnIgoqBZ80'),
      },
    },
    // ...
  });