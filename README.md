# RESUME

## Initial

Create `.env` file and set property like below.

```
NODE_PROD=true(OR false)
```

-   **true**: Production mode. Production with privacy profile data.
-   **false**: Development mode. Development with dummy profile data.

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

`src/.data/_data.pug`

#### Code template

```JavaScript
const privateProfile = {
    data: { // Basic Profile Data
        name: 'Your Name',
        kana: 'Your Name Kana',
        birthDay: '1900-01-01',
        phone: '000-123-4567',
        mail: 'mail@example.com',
        address: '〒000-0000 Address Strings will apply here.'
    },
    photo: { // Portrait
        x1: './assets/images/common/photo.jpg',
        x2: './assets/images/common/photo@2x.jpg',
    },
    objective: [ // List job roles, positions
        utility.lorem.publish(),
    ],
    specialty: [ // List specialties, skills
        utility.lorem.publish(),
    ],
    experience: [ // Job experience summary
        {
            '1900': 'Event Detail',
        },
        {
            '1901': 'Event Detail',
        },
        {
            '1902': 'Event Detail',
        },
        {
            '1903': 'Event Detail',
        },
        {
            '1904': 'Event Detail',
        },
    ],
    skill: { // List skills
        skilled: [ // skilled skills
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
        advanced: [ // advanced skills
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ]
    },
    project: [ // project list
        {
            name: 'Project name',
            period: '1900-01-01',
            uri: 'https://www.example.com',
            role: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            ],
        },
    ],
};
```

### Utility

#### Lorem publish

Each property is not required.

-   **lang**: Set lorem lang (en OR ja).
-   **length**: Set string length number.

#### Code format

```JavaScript
utility.lorem.publish( _lang_ , _string length_ )
```
