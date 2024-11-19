export type ApiProjectType =
    'platform'
    | 'laboratory'
    | 'library'
    | 'imaginary'
    | 'planting'

export type ApiProjectMap = {[key in ApiProjectType]: string}

export const apiProjectMap: ApiProjectMap = {
    'imaginary' : 'La Fabrique des Imaginaires',
    'laboratory' : 'Le Laboratoire',
    'library' : 'La Bibliothèque',
    'platform' : 'La Plateforme',
    'planting' : 'La Plantation',
}

const apiProjectTypes: ApiProjectType[] = (() => {
    return [
        'platform',
        'laboratory',
        'library',
        'imaginary',
        'planting',
    ];
})();

export const isApiProjectType = (str: string): str is ApiProjectType => {
    return apiProjectTypes.includes(str as ApiProjectType);
};

export const imageUrlMap: ApiProjectMap = {
    'library':   'img_bibliotheque.svg',
    'imaginary':   'img_imaginaires.svg',
    'laboratory': 'img_laboratoire.svg',
    'planting':  'img_plantation.svg',
    'platform':  'img_plateforme.svg',
}



export interface IApiPage {
    "options": {
        "showInNav": boolean,
        "showNewsletter": boolean,
        "headerTitle": string,
        "headerImage": IApiImage | null
        "category": ApiProjectType | undefined
        dateStart: string,
        isProjectWithDuration: "true" | "false",
        dateEnd: string,
    },
    "body": IApiBody,
    title?: {
        value: string
    }
}

export interface IApiBody {
    [key: string]:
        {
            "image": IApiImage[],
            "content": {
                "content": {
                    "level": "h2" | "h3",
                    "text": string
                },
                "id": string,
                "isHidden": boolean,
                "type": "mdheading"
            }
        }
        |
        {
            "image": IApiImage[],
            content: {
                content: {
                    url: string,
                    caption: string
                },
                id: string,
                isHidden: false,
                type: "video"
            }
        }
        |
        {
            "image": IApiImage[],
            content: {
                content: {
                    url: string,
                    caption: string
                },
                id: string,
                isHidden: false,
                type: "spotify"
            }
        }
        |
        {
            "image": IApiImage[],
            "content": {
                "content": {
                    image: [
                        "file://MFDDVR1e0EFYnsDD"
                    ],
                    alt: "",
                    caption: ""
                },
                "id": string,
                "isHidden": boolean,
                "type": "mdimage"
            }
        }
        |
        {
            "image": IApiImage[],
            "content": {
                "content": {
                    "text": string
                },
                "id": string,
                "isHidden": boolean,
                "type": "simpleText"
            }
        }
        |
        {
            "image": IApiImage[],
            "content": {
                "content": {
                    "text": string
                },
                "id": string,
                "isHidden": boolean,
                "type": "body"
            }
        }
        |
        {
            "image": IApiImage[],
            "content": {
                "content": IApiProfiles,
                "id": string,
                "isHidden": boolean,
                "type": "profiles"
            },
            profilesImages: IApiProfilesImages[]
        }
        |
        {
            "image": IApiImage[],
            "content": {
                "content": {
                    "image": string[],
                    "linktitle": string,
                    "text": string,
                    "link": string
                    "style": "circle" | 'default',
                    "width": "true" | 'false',
                },
                "id": string,
                "isHidden": boolean,
                "type": "internalLink"

            }
        }
        |
        {
            image: IApiImage[],
            content: {
                content: {
                    titlecontent: string,
                    text: string,
                },
                id: string,
                isHidden: false,
                type: "listPoints"
            }
        }
        |
        {
            image: IApiImage[],
            content: {
                content: {
                    image: string[],
                    linktitle: string,
                    text: string,
                    link: string
                },
                id: string,
                isHidden: boolean,
                type: "actuality"
            }
        }
        |
        {
            content: {
                content: {
                    title: string,
                    links: {
                        name: "Instagram.com, Genève en selle",
                        url: "https://www.instagram.com/geneve_en_selle/"
                    }[]
                },
                id: string,
                isHidden: boolean,
                type: "linksSection"
            }
        }
}

export interface IApiProfiles {
    "title": string,
    "profiles": {
        "image": string[],
        "name": string,
        "description": string
    }[]
}

export interface IApiProfilesImages {
    content: {
        description: string,
        id: string,
        image: string[],
        name: string
        link?: string
    },
    image: IApiImage[]
}


export interface IApiImage {
    "caption": string,
    "alt": string | null,
    "link": string | null,
    "photoCredit": string | null,
    "url": string,
    "mediaUrl": string,
    "width": number,
    "height": number,
    "resize": {
        "tiny":     string,
        "small":    string,
        "reg":      string,
        "large":    string,
        "xxl":      string
    }
}

export interface IApiProjects {
    "options": {
        "showInNav": boolean,
        "showNewsletter": boolean,
        "headerTitle": string,
        "headerImage": IApiImage | null
    },
    "children": {
        [key: string]: IApiSingleProject
    }
}

export interface IApiSingleProject {
    "headerImage": IApiImage[],
    slug: string
    "content": {
        "title": string,
        "headerimage": string,
        "showinnav": "false" | "true",
        "shownewsletter": "true" | "false",
        "headertitle": string,
        "body": IApiBody,
        "pdffile": string,
        "uuid": string,
        device: ApiProjectType
        datestart: string,
        isprojectwithduration: "true" | "false",
        dateend: string,
    }
}

export interface IApiSiteInfo {
    "title": {
        "value": string
    },
    "children": IApiSiteInfoChildren[]
}

export interface IApiSiteInfoChildren {
    "children": {
        "data": []
    },
    "title": {
        "value": string
    },
    "headerimage": {
        "value": string
    },
    "showinnav": {
        "value": "false" | "true"
    },
    "shownewsletter": {
        "value": "true" | "false"
    },
    "headertitle": {
        "value": string
    },
    "id": string,
    "mediaUrl": string,
    "mediaRoot": string,
    "num": number,
    "parent": null,
    "slug": string,
    "template": {},
    "translations": {
        "data": []
    },
    "uid": string
    "uri": string
    "url": string
}
