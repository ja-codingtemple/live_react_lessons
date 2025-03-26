import { useState } from 'react';
import { useEffect } from 'react';

function DogDisplay() {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const result = await response.json();
                setDogImage(result.message);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDogImage();
    }, []) // Because the dependency array is empty, useEffect() will only run once, upon the component's first render (mount).

    if (loading) return <div>Loading dog image...</div>;
    if (error) return <div>Erorr: {error}</div>;

    return (
        <div>
            <h1>Random Dog Image:</h1>
            <img src={dogImage} style={{ width: '300px', height: 'auto' }}></img>
        </div>
    )
}

export default DogDisplay;