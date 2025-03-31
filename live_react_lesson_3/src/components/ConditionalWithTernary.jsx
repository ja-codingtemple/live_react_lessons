import React, { useState } from "react";
import Navigation from "./Navigation";

function ConditionalWithTernary() {
    const [showDog, setShowDog] = useState(false);

    if (showDog == true) {
        console.log("showDog is true");
    }
    else {
        console.log("showDog is false");
    }

    return (
        <>
            <div>
                <Navigation />
                <p>Would seeing a dog make you happy?</p>
                <button onClick={() => setShowDog(true)}>Yes</button>
                <button onClick={() => setShowDog(false)}>No</button>

                {/* Conditional Rendering with the Ternary operator */}
                {showDog ? (
                    <div className="dogContainer">
                        <img className="dogImage" src="https://images.unsplash.com/photo-1605774337644-e28e2f05f4f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                ) : (
                    <div className="dogContainer">
                        <p>You didn't want to see a dog, so I didn't show you one.</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default ConditionalWithTernary;