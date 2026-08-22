# Movie Mania

[**View the live application →**](https://movi-mania.netlify.app)

Movie Mania is a responsive movie discovery application that helps users browse popular films, search the TMDB catalogue, and discover movies based on community search activity.

## Product overview

The application provides a focused movie browsing experience with fast search, rich movie information, and a trending section based on the titles users search for most often.

## Key features

- **Popular movie discovery**
  - Displays currently popular movies from The Movie Database (TMDB).
  - Presents posters, titles, ratings, release years, and original languages.

- **Movie search**
  - Allows users to search the TMDB catalogue by title or keyword.
  - Uses delayed search requests to reduce unnecessary API traffic while users type.

- **Movie details at a glance**
  - Shows ratings, release information, language, and poster artwork.
  - Provides movie overviews through an information tooltip.
  - Displays a fallback image when poster artwork is unavailable.

- **Trending searches**
  - Records successful movie searches in Appwrite.
  - Ranks movies by search frequency.
  - Displays the most frequently searched movies in a dedicated trending area.

- **Responsive presentation**
  - Designed for a modern browsing experience across desktop and mobile screen sizes.
  - Uses locally managed visual assets for consistent branding and presentation.

## Integrations

### TMDB

TMDB supplies the movie catalogue, popular movie results, search results, ratings, release dates, languages, and poster artwork.

### Appwrite

Appwrite provides the application data layer for search analytics and trending results. The project uses an Appwrite Cloud TablesDB database hosted in the Singapore region.

The Appwrite integration supports:

- Recording new search terms.
- Incrementing search counts for existing terms.
- Retrieving the highest-ranked search results.

### Netlify

The application is suitable for static deployment on Netlify. Netlify provides the production hosting environment and injects the required deployment configuration during the site build.

## High-level architecture

```text
User
  ↓
Movie Mania web application
  ├── TMDB ── Movie discovery and search data
  └── Appwrite ── Search metrics and trending results
```

The application runs in the browser and communicates directly with TMDB and Appwrite. Appwrite access is restricted to approved web origins, including the local development host and the production Netlify domain.

## Configuration requirements

The application requires configuration for:

- TMDB API access.
- Appwrite project and regional endpoint.
- Appwrite database and table used for search metrics.
- Approved web origins for local and production use.

Configuration values should be managed through the hosting provider's environment settings for deployed environments. Local configuration files must remain outside source control.

## Deployment overview

Movie Mania can be deployed as a static web application:

1. Connect the project repository to Netlify.
2. Configure the site to build the Vite application and publish the generated static output.
3. Add the TMDB and Appwrite configuration values in Netlify's environment settings.
4. Register the production Netlify hostname as a Web platform in the existing Appwrite project.
5. Redeploy whenever environment configuration changes.

The Appwrite project region and endpoint must remain consistent. For the current project, the region is Singapore.

## Security considerations

- Environment configuration must not be committed to the repository.
- Browser-exposed configuration should not be treated as confidential.
- TMDB credentials exposed through a client-side application can be inspected by users; production systems should proxy protected API calls through a server-side function.
- Appwrite permissions should be limited to the operations required by the application.
- Public write permissions should be avoided for production workloads where possible.
- Credentials exposed in source control, logs, screenshots, or documentation should be rotated immediately.

## Third-party services

This project depends on services and content provided by:

- [The Movie Database (TMDB)](https://www.themoviedb.org/)
- [Appwrite](https://appwrite.io/)
- [Netlify](https://www.netlify.com/)

Review each provider's terms of service and attribution requirements before using the project commercially.

## Project status

Movie Mania is an educational and demonstration project focused on integrating a React frontend with third-party movie and backend services.
