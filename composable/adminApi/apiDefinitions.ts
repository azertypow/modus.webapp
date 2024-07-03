export type ApiProjectType =    'imaginaires'
                                | 'laboratoire'
                                | 'bibliotheque'
                                | 'plateforme'
                                | 'plantation'

export type ApiProjectMap = {[key in ApiProjectType]: string}

export const apiProjectMap: ApiProjectMap = {
    'imaginaires' : 'La fabrique des imaginaires',
    'laboratoire' : 'Le laboratoire',
    'bibliotheque' : 'La bibliothèque',
    'plateforme' : 'La plateforme',
    'plantation' : 'La plantation',
}




export interface IApiPage {
    "options": {
        "showInNav": boolean,
        "showNewsletter": boolean,
        "headerTitle": string,
        "headerImage": IApiImage | null
    },
    "body": IApiBody
}

export interface IApiBody {
    [key: string]: {
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
        | {
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
        | {
        "image": IApiImage[],
        "content": {
            "content": IApiProfiles,
            "id": string,
            "isHidden": boolean,
            "type": "profiles"
        }
        }
        | {
        "image": IApiImage[],
        "content": {
            "content": {
                "image": string[],
                "linktitle": string,
                "text": string,
                "link": string
            },
            "id": string,
            "isHidden": boolean,
            "type": "internalLink"
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
