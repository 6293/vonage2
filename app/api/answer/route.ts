import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    {
      action: 'talk',
      text: 'テストです。Vonage の自動音声に接続しました。',
    },
  ])
}
