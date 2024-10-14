import React, { useEffect, useState } from 'react';

function PageOne() {
    // State to store fetched data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
            try {
                // This is where you'd place the actual API call, e.g.:
                // const response = await fetch('https://api.example.com/data');
                // const result = await response.json();

                // For now, simulate with dummy data
                const result = { id: 1, title: "Milton", description: "Software" };

                // Simulate network latency
                await new Promise(resolve => setTimeout(resolve, 1000));

                setData(result);
            } catch (error) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false); // Ensure loading stops regardless of success/failure
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>API Data Example</h1>
            {data ? (
                <div className="api-data">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default PageOne;
