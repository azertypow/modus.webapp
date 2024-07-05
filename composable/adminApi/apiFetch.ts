import {IApiPage} from "~/composable/adminApi/apiDefinitions";

const baseUrl = 'https://modus-admin.sdrvl.ch/'

export async function ApiFetchPage(apiPath: string): Promise<IApiPage> {
    return ((await fetch(`${baseUrl}${apiPath}.json`)).json())
}
