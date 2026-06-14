const API_URL = process.env.WORDPRESS_API_URL!

export async function fetchGraphQL(query: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate: 60,
    },
  })

  const json = await response.json()

  return json.data
}