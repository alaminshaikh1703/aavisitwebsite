export const SERVICES_QUERY = `
{
  services {
    nodes {
      title
      slug
      serviceDetails {
        shortDescription
        heroTitle
        ctaText
        ctaUrl
      }
    }
  }
}
`