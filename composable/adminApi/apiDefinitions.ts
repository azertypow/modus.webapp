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
                "style": "circle" | 'default',
                "width": "true" |'false',
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

export interface IApiProjects {
    "options": {
        "showInNav": boolean,
        "showNewsletter": boolean,
        "headerTitle": string,
        "headerImage": IApiImage | null
    },
    "children": {
        "projects/premier-projet": {
            "headerImage": IApiImage[],
            "content": {
                "title": "premier projet",
                "headerimage": "- file://DQmK4TyOpKPU63hF",
                "showinnav": "false",
                "shownewsletter": "true",
                "headertitle": "Récompenser les efforts individuels pour atteindre une mobilité plus durable ?",
                "body": "[{\"content\":{\"level\":\"h2\",\"text\":\"Mise en œuvre exploratoire d’un dispositif de rewarding de la mobilité durable sur le territoire transfrontalier du Grand Genève.\"},\"id\":\"da9f98cf-97c1-4f06-8fa2-0096daa20c50\",\"isHidden\":false,\"type\":\"mdheading\"},{\"content\":{\"level\":\"h2\",\"text\":\"Contexte.\"},\"id\":\"00b84117-5ef8-483d-ad40-6b18cce82b9e\",\"isHidden\":false,\"type\":\"mdheading\"},{\"content\":{\"text\":\"<p>Dans son plan climat 2030, le Canton de Genève constatait que la mobilité terrestre (hors trafic aérien) était responsable de 25% des gaz à effet de serre (GES) émis sur son territoire et que, en particulier, les transports individuels motorisés et le transport routier de marchandises en portaient l’écrasante majorité (95% !) (SCDD 2021). Même si la part modale globale de la voiture individuelle est en légère réduction depuis le début du XXIème siècle, 72% des kilomètres parcourus en 2021 par les habitants du Canton de Genève le sont toujours en transports individuels motorisés (voiture conducteur, voiture passager et deux-roues motorisé) (OCSTAT 2023).<br>Dans ce contexte, faire évoluer effectivement les pratiques de mobilité constitue un levier indispensable pour limiter les émissions de gaz à effet de serre. La mobilité individuelle motorisée engendre également d’autres effets négatifs au niveau local en matière de pollution de l’air, de bruit, de sécurité ou encore d’occupation d’espace. Il est ainsi nécessaire de réduire la dépendance automobile et de faciliter la multimodalité, en développant conjointement les infrastructures et l’offre pour l’alternative à la voiture mais également en soutenant par des mesures incitatives les citoyens qui recourent déjà ou pourrait le faire à des formes de mobilité durables et saines, tant pour eux-mêmes que pour l’environnement et pour les autres usagers du territoire.</p>\"},\"id\":\"02c8c510-1fe6-43f9-9df7-ac6d5839da6b\",\"isHidden\":false,\"type\":\"body\"},{\"content\":{\"image\":[\"file://NnSGZ0u7EqSQaBEW\"],\"alt\":\"alt text\",\"caption\":\"legende de l'image\"},\"id\":\"c6be354b-b2d0-41cd-8e8f-d80828eae114\",\"isHidden\":false,\"type\":\"mdimage\"},{\"content\":{\"text\":\"<p>Le territoire du Grand Genève bénéficie d’une très forte dynamique économique et démographique qui s’inscrit dans un fort mouvement de métropolisation où les besoins en mobilité vont en augmentant. Or y répondre de manière durable et saine par des infrastructures et des offres à l’échelle de ce territoire fonctionnel de la métropole est encore compliqué par sa localisation sur une frontière nationale. La stratégie du Grand Genève pour faire face aux enjeux de mobilité vise notamment à promouvoir les changements de comportements et développer la multimodalité. Même la part des déplacements TP et MD avancent lentement, les images associées collectivement aux modes de transports se sont déjà massivement transformées (Kaufmann et al. 2019) et la figure de l’automobiliste exclusif ne disposant et ne croyant qu’à sa voiture individuelle a déjà presque entièrement disparu des centres urbains.</p>\"},\"id\":\"10b65419-ab68-41a5-9ecb-29896cf3f6f5\",\"isHidden\":false,\"type\":\"body\"},{\"content\":{\"image\":[\"file://ci1LQNrFL1eZ1uHX\"],\"alt\":\"\",\"caption\":\"\"},\"id\":\"098d3518-eb19-46c8-b586-02569bf7b215\",\"isHidden\":false,\"type\":\"mdimage\"},{\"content\":{\"text\":\"<p>Il s’agit maintenant d’activer ce passage effectif à l’usage plus systématique des modes doux et collectifs pour les déplacements sur le territoire du Grand Genève. Depuis quelques années se développent des initiatives basées sur un suivi de la mobilité d’individus récompensant certaines pratiques de mobilité vertueuses. De tels systèmes de récompense (« rewarding ») visant à orienter les pratiques de mobilité utilisent des formats de récompenses très variés, allant de coupons de réduction à des versements en argent ou des bénéfices en nature. Ces dispositifs intègrent aussi parfois des informations sur les niveaux d’émissions de CO2 ou proposent des trajets et des solutions alternatives de déplacement. De nombreuses applications actuellement présentes sur le marché permettant aujourd’hui ce type de dispositif.</p>\"},\"id\":\"82955d81-7b00-42c3-a0f4-6798f705ee42\",\"isHidden\":false,\"type\":\"body\"}]",
                "pdffile": "- file://jBcHkTKI0uoic1jq",
                "uuid": "0yIi7wVeY91h9G78"
            }
        },
        "projects/second-project": {
            "headerImage": [
                {
                    "caption": "",
                    "alt": null,
                    "link": null,
                    "photoCredit": null,
                    "url": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash.jpg",
                    "mediaUrl": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash.jpg",
                    "width": 1920,
                    "height": 2880,
                    "resize": {
                        "tiny": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash-50x-q10.jpg",
                        "small": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash-500x.jpg",
                        "reg": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash-1280x.jpg",
                        "large": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash-1920x.jpg",
                        "xxl": "http://localhost:8000/media/pages/projects/second-project/17c986e954-1719997987/eberhard-grossgasteiger-l4xuunampgu-unsplash-2500x.jpg"
                    }
                }
            ],
            "content": {
                "title": "second project",
                "headerimage": "- file://t9M6SGgPSQQC4Sl9",
                "showinnav": "false",
                "shownewsletter": "true",
                "headertitle": "Lorem ipsum project",
                "body": "[{\"content\":{\"text\":\"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id risus a felis aliquam elementum eu eget tellus. Mauris et placerat tellus. Aenean rutrum leo faucibus orci rhoncus eleifend. Maecenas volutpat lacus consequat risus tristique, a pellentesque eros maximus. Quisque quis sem ac ante dapibus blandit eleifend ut dui. Aliquam eleifend rutrum lorem id porttitor. Aliquam ac finibus orci, vitae scelerisque lacus. Etiam viverra, nulla eu venenatis facilisis, tortor nisl faucibus nibh, tincidunt iaculis lectus nulla sit amet est. Vestibulum consequat porta est sed ullamcorper. Donec ornare justo at massa pretium, ultrices rutrum nisl cursus. Vivamus accumsan mi vitae tellus fermentum, a ultrices magna euismod.</p><p>Aliquam erat volutpat. Nam commodo augue vulputate nibh interdum, tincidunt ultricies lectus accumsan. Aenean justo urna, tincidunt non finibus a, hendrerit vulputate lorem. Nulla non placerat neque. Sed gravida nisl nec diam dignissim maximus. Ut gravida, nulla sed laoreet ultricies, eros metus imperdiet odio, id sagittis arcu nisl ut ante. Ut quis nulla augue. Nunc suscipit felis sed iaculis accumsan. Nulla quis tempus massa, sed rutrum risus. Aenean condimentum felis sed ultrices suscipit.</p><p>In sed faucibus felis. Nulla non ex cursus, vehicula libero in, eleifend eros. Aenean tempor lobortis ante aliquam convallis. Etiam rhoncus molestie lacus sed molestie. Mauris id ligula ante. Maecenas sodales felis a mattis volutpat. Pellentesque vel erat ultrices, facilisis erat vitae, rutrum urna. Mauris vestibulum augue nunc, nec pulvinar sem dictum lacinia. Vivamus porttitor leo dolor, nec lacinia massa tincidunt id. Duis placerat sollicitudin sem.</p><p>In vel lorem vitae arcu tempus egestas. Cras ac mi nec lacus gravida bibendum. Nullam ut cursus ex. Aenean mi nisi, fermentum ac ante lacinia, facilisis sodales enim. Nam eu faucibus tellus. Donec cursus dolor eu nulla interdum condimentum vitae at lorem. Integer placerat volutpat gravida.</p><p>Fusce efficitur pretium mattis. Praesent sagittis nec nibh quis egestas. Cras eros lectus, dapibus in feugiat et, lobortis vel lorem. Praesent et suscipit eros. Quisque laoreet ex eget sollicitudin molestie. Sed efficitur eget libero at tincidunt. Nunc eget erat ac est lacinia euismod. Pellentesque ac condimentum enim. Sed ut dignissim nisi. Proin eget rhoncus ligula. Duis ut gravida augue. Curabitur id diam non arcu iaculis sagittis ac ac sem. Ut iaculis blandit ipsum, non sollicitudin ligula pharetra eget.</p>\"},\"id\":\"6f6387f9-d45f-40f8-9f90-281afb443131\",\"isHidden\":false,\"type\":\"body\"}]",
                "pdffile": "",
                "uuid": "oRdi03Tt1L4oF06q"
            }
        }
    }
}

