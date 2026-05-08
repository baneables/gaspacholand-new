import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const applicationsFile = path.join(process.cwd(), 'applications.json')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { username, age, email, whyJoin, experience, rules } = body
    if (!username || !age || !email || !whyJoin || !experience || !rules) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Read existing applications
    let applications = []
    if (fs.existsSync(applicationsFile)) {
      const data = fs.readFileSync(applicationsFile, 'utf8')
      applications = JSON.parse(data)
    }

    // Add new application with timestamp
    const newApplication = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString()
    }
    applications.push(newApplication)

    // Write back to file
    fs.writeFileSync(applicationsFile, JSON.stringify(applications, null, 2))

    return NextResponse.json({ message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Error saving application:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(applicationsFile)) {
      return NextResponse.json([])
    }

    const data = fs.readFileSync(applicationsFile, 'utf8')
    const applications = JSON.parse(data)

    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error reading applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}