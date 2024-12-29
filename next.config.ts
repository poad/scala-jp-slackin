import { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://scala-jp.slack.com/shared_invite/zt-nr7qjs1w-5RGF4un0OTLwSQiC32LhLg',
        permanent: true,
      },
    ]
  },
};

export default config;
