# RESUME

## Initial

Create `.env` file and set property like below.

```
NODE_PROD=true(OR false)
```

-   **true**: Production mode. Production with privacy profile data.
-   **false**: Development mode. Development with dummy profile data.

```
NODE_LANG=ja(OR en)
```

-   **ja**: Production with Japanese.
-   **en**: Production with English.

## Pug

### Settings

First: Set page property as JavaScript Object.  
see below.

#### Target file & directory

Each pug page file (like `src/index.pug`)  
And write on the `block setting` area of file.

#### Code template

```JavaScript
const settings = {
    title: 'Page Title', // <title>
    description: 'Page Description', // <meta description>
    keywords: 'Keywords', // <meta keywords>
    type: 'Page Type', // <og:type> * This value will be 'article' or 'website' maybe.
    image: 'Page Image', // <og:image>
    url: 'Page URL', // <og:url>
    site_name: 'Website name', // <og:site_name>
};
```

### Profiles

#### Files & directory

`src/.data/content.json`

#### Outline

```JSON
{
    "resumeHeader": {},
    "resumeSub": {},
    "resume": {},
    "experience": {},
    "project": {},
}
```

-   **resumeHeader** : Header content of resume
-   **resumeSub** : Details for header content.
-   **resume** : Main content of resume.
-   **experience** : Job experience summary.
-   **project** : Experienced project list.

#### Basic scheme for each property

```JSON
{
    "LABEL": {
        "content": {
            "PROPERTY-NAME": "PROPERTY-VALUE"
        },
        "locale": {
            "LANGUAGE LABEL": "PROPERTY LOCALE VALUE"
        }
    }
}
```

-   **LABEL** : Property name.
-   **content** : Content for "LABEL".
-   **locale** : Locale group for "LABEL".
-   **LANGUAGE LABEL** : 2 digits language code.

### Utility

#### Lorem publish

Each property is not required.

-   **lang**: Set lorem lang (en OR ja).
-   **length**: Set string length number.

#### Code format

```JavaScript
utility.lorem.publish( _lang_ , _string length_ )
```
