import React, { useState, useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards";

import useStyles from "./styles.js"

const alanKey = 'cd452736e273b971183dc4aef83d8af12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])


    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://www.dits.center/images/picture13_1.jpg" className={classes.alanLogo} alt="Heading" />
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App