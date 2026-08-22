import { Client, TablesDB, Query, ID } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://sgp.cloud.appwrite.io/v1';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT) // Use the endpoint for your project's region
    .setProject(PROJECT_ID); // Your project ID

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // 1. Use Appwrite's TablesDB to check if the search term already exists in the database
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [Query.equal('searchTerm', searchTerm)]
        });

        // 2. If it exists, update the count
        if (result.rows.length > 0) {
            const row = result.rows[0];

            await tablesDB.updateRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: row.$id,
                data: {
                    count: row.count + 1,
                    title: movie.title,
                }
            });
        } else {
            // 3. If it doesn't exist, create a new row with the search term and count set to 1
            await tablesDB.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: {
                    searchTerm,
                    count: 1,
                    movie_id: movie.id,
                    title: movie.title,
                    poster_url: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'src/assets/no-movie.png'
                }
            });
        }
    } catch (error) {
        console.error('Error updating search count:', error);
    }
};

export const getTrendingMovies = async () => {
    try {
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [Query.orderDesc('count'), Query.limit(10)]
        });
        return result.rows;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
    }
}