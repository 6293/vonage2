import type { NextConfig } from 'next'

const config: NextConfig = {
  async rewrites() {
    return [
      { source: '/answer.json', destination: '/api/answer' },
      { source: '/:ext(\\d+).json', destination: '/api/:ext' },
    ]
  },
}

export default config
