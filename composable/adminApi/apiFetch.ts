import {IApiPage, IApiProjects} from "~/composable/adminApi/apiDefinitions";

const baseUrl = 'https://modus-admin.sdrvl.ch/'
// const baseUrl = 'http://localhost:8000/'

export async function ApiFetchPage(apiPath: string): Promise<IApiPage> {
    return ((await fetch(`${baseUrl}${apiPath}.json`)).json())
}

export async function ApiFetchProjects(apiPath: string): Promise<IApiProjects> {
    return ((await fetch(`${baseUrl}${apiPath}.json`)).json())
}

