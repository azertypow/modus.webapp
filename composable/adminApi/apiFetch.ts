import {IApiPage} from "~/composable/adminApi/apiDefinitions";

const baseUrl = 'http://localhost:8000/'

export async function ApiFetchPage(apiPath: string): Promise<IApiPage> {
    return ((await fetch(`${baseUrl}${apiPath}.json`)).json())
}
