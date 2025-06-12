import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Read the request body to get parameters from the frontend
    const { subjects, Category } = await request.json();
    console.log('Received test generation request with data:', subjects, Category);
    const TopicsList = ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"];
    return NextResponse.json({ TopicsList });
  } catch (error) {
    console.error('Error in test generation API route:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate test', error: error.message },
      { status: 500 }
    );
  }
}