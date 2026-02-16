import {ApiPowerBIResponse, IApiPage, IApiProjects} from "~/composable/adminApi/apiDefinitions";


export async function ApiFetchPage(apiPath: string): Promise<IApiPage> {
    return ((await fetch(`${useRuntimeConfig().public.cmsBaseUrl}${apiPath}.json`)).json())
}

export async function ApiFetchPage_powerBiSubPage(apiPath: string): Promise<IApiPage> {
    return ((await fetch(`${useRuntimeConfig().public.cmsBaseUrl}${apiPath}.json`)).json())
}

export async function ApiFetchPagePowerBIPage(apiPath: string): Promise<ApiPowerBIResponse> {
    return ((await fetch(`${useRuntimeConfig().public.cmsBaseUrl}${apiPath}.json`)).json())
}

export async function ApiFetchProjects(apiPath: string): Promise<IApiProjects> {
    return ((await fetch(`${useRuntimeConfig().public.cmsBaseUrl}${apiPath}.json`)).json())
}

export async function ApiFetchPagesInfo() {
    return ((await fetch(`${useRuntimeConfig().public.cmsBaseUrl}pages-info.json`)).json())
}
