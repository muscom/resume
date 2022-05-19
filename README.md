# RESUME

## Settings

### Pug

First: Set page property as JavaScript Object.  
like below.

-   Notice: The Variable of page property must be named "settings".

#### Property

-   Each property is not required.

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
