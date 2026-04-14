import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ ext: string }> }
) {
  const { ext } = await params
  return NextResponse.json([
    {
      action: 'connect',
      endpoint: [
        {
          type: 'sip',
          uri: `sip:${ext}@54.178.146.207`,
        },
      ],
    },
  ])
}
