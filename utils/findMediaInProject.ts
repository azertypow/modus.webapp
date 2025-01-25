export function findMediaInProject(projectBody: unknown) {
    if ( ! (typeof projectBody === 'string') ) {
        console.error('projectBody must be type of string')
        return null
    }

    const projectBodyParsed = JSON.parse(projectBody) as
        ({
            content: {
                url: string,
                caption: string
                credits: string
                date: string
            },
            id: string,
            isHidden: false,
            type: "spotify"
        }
        |
        {
            content: {
                url: string,
                caption: string
                credits: string
                date: string
            },
            id: string,
            isHidden: false,
            type: "video"
        })[]

    return projectBodyParsed.find(item => item.type === 'spotify')
}
