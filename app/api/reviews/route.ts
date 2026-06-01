import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const PLACE_ID = "ChIJo3DyoyVZIkcR8zAe1zrpYrI";
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const baseUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating&key=${API_KEY}&language=uk`;

  try {
    const [relevantRes, newestRes] = await Promise.all([
      axios.get(`${baseUrl}&reviews_sort=most_relevant`),
      axios.get(`${baseUrl}&reviews_sort=newest`),
    ]);

    const relevantReviews = relevantRes.data.result?.reviews || [];
    const newestReviews = newestRes.data.result?.reviews || [];

    const combinedRawReviews = [...relevantReviews, ...newestReviews];

    const uniqueReviewsMap = new Map();

    combinedRawReviews.forEach((r: any) => {
      if (!uniqueReviewsMap.has(r.time)) {
        uniqueReviewsMap.set(r.time, {
          id: r.time,
          author: r.author_name,
          avatar: r.profile_photo_url,
          rating: r.rating,
          text: r.text,
          relativeTime: r.relative_time_description,
        });
      }
    });

    const finalReviews = Array.from(uniqueReviewsMap.values());

    if (finalReviews.length === 0) {
      return NextResponse.json({ error: "No reviews found" }, { status: 404 });
    }

    return NextResponse.json(finalReviews);
  } catch (error) {
    console.error("Mixed reviews fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch mixed reviews" },
      { status: 500 },
    );
  }
}
