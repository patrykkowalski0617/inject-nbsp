## Inject nbsp

Call injectNbsp function to inject \&nbsp;.
In order to skip element add class "skip-nbsp" to it.
It is recommended to wrap each text in html tag:

    Correct:

        <p>
            <span>Lorem</span>
            <span>ipsum</span>
            <span>dolor sit amet</span>
        </p>

    Incorrect:

        <p>Lorem <span>ipsum</span> dolor sit amet</p>

Parameters:

    containerSelector   - optional, default: "body"
                        - css selector

    howManyLetters      - optional, default: 1
                        - how many letters word has to have at least, to add &nbsp: to it.

Example of usage:

    injectNbsp({
        containerSelector: ".page",
        howManyLetters: 2
    });

## Deploy on Netlify:

https://inject-nbsp-patrykkowalski0617.netlify.app/
