import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.rating || !body.comment) {
      return NextResponse.json(
        { error: 'Rating and comment are required' },
        { status: 400 }
      );
    }

    const userId = process.env.NEXT_PUBLIC_FIREBASE_USER_ID;
    
    if (!userId) {
      throw new Error('NEXT_PUBLIC_FIREBASE_USER_ID not configured');
    }

    // Structure: clients/{userId}/commentaires-clients
    const feedbackCollection = collection(db, 'clients', userId, 'commentaires-clients');
    
    const docData = {
      rating: body.rating,
      comment: body.comment,
      timestamp: body.timestamp,
      dateCreation: serverTimestamp(),
      status: 'nouveau',
      uid: userId
    };

    const docRef = await addDoc(feedbackCollection, docData);
    console.log('Feedback document written with ID: ', docRef.id);
    
    return NextResponse.json(
      { success: true, message: 'Feedback saved successfully', id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving feedback: ', error);
    return NextResponse.json(
      { error: 'Failed to save feedback' },
      { status: 500 }
    );
  }
}
