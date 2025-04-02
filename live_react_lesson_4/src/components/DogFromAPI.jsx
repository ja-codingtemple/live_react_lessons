import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner } from 'react-bootstrap'

function DogFromAPI() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to make an HTTP GET request to the dog.ceo API. Retrieves a dog image and saves it in the 'dogImage' state.
    const fetchDogImage = () => {
        setLoading(true);
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                setDogImage(response.data.message);
                setLoading(false);
            })
            .catch(error => {
                console.error("An error has occured when requesting the dog image", error);
                setLoading(false);
            })
    }

    // Within useEffect() we will call fetchDogImage() which makes the API request.
    useEffect(() => {
        fetchDogImage();
    }, []) // Due to the dependency array being empty, this will run once upon the component's initial render. It will run twice in StrictMode.

    return (
        <div className="d-flex flex-column justify-content-center">
            <h1>Random Dog Image</h1>

            {/* LOADING: Display a centered spinner animation */}
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    {/* ALREADY LOADED: Display the dog image */}
                    <img src={dogImage} style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }} />
                    <Button className="mt-1" variant="primary" onClick={fetchDogImage}>Get a different dog image</Button>
                </>
            )}

        </div>
    )
}

export default DogFromAPI;