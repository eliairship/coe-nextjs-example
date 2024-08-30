export async function GET(request: Request) {
  return new Response('Success!', {
    status: 200,
  });
}

// Request comes in (Cold Start: 5s)
// AWS spin up server with out function
// The function will return a response

// Request comes in within 5 mins (Warm Start: 0.3s)
