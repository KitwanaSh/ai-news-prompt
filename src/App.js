import React, { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const alanKey = 'cd452736e273b971183dc4aef83d8af12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles)
                }
            }
        })
    }, [])


    return (
        <div>
            <h1>Welcome to Alan AI, your article audio reader.</h1>
        </div>
    )
}

export default App