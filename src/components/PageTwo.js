import React, { useEffect, useState } from 'react';

function PageTwo() {
    // State to store data from "database"
    const [dbData, setDbData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate a database call
        const fetchFromDatabase = async () => {
            try {
                // This is where developer normally connect to a database and fetch records
                // const result = await database.query('SELECT * FROM records');

                // Simulate with dummy data
                const result = { id: 1, name: "Milton", role: "Database Engineer" };

                // Simulate network/database latency
                await new Promise(resolve => setTimeout(resolve, 1000));

                setDbData(result);
            } catch (error) {
                setError("Failed to fetch data from database");
            } finally {
                setLoading(false);
            }
        };

        fetchFromDatabase();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Database Data</h1>
            {dbData ? (
                <div className="db-data">
                    <p>{dbData.name} working as a {dbData.role}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default PageTwo;
