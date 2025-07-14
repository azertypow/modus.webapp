import { ApiPowerBIResponse, IApiPage, IApiProjects } from "~/composable/adminApi/apiDefinitions"

const getBaseUrl = () => useRuntimeConfig().public.apiBaseUrl

async function safeJsonFetch<T>(url: string): Promise<T> {
  const res = await fetch(url)
  const text = await res.text()

  if (!res.ok) {
    console.error(`❌ HTTP Error ${res.status} for ${url}`)
    console.error(text)
    throw new Error(`HTTP Error ${res.status} for ${url}`)
  }

  try {
    return JSON.parse(text)
  } catch (err) {
    console.error(`❌ JSON parse error for ${url}:`, err)
    console.error("↪ Raw response:\n", text)
    throw err
  }
}

export async function ApiFetchPage(apiPath: string): Promise<IApiPage> {
  const url = `${getBaseUrl()}/${apiPath}.json`
  return safeJsonFetch<IApiPage>(url)
}

export async function ApiFetchPage_powerBiSubPage(apiPath: string): Promise<IApiPage> {
  const url = `${getBaseUrl()}/${apiPath}.json`
  return safeJsonFetch<IApiPage>(url)
}

export async function ApiFetchPagePowerBIPage(apiPath: string): Promise<ApiPowerBIResponse> {
  const url = `${getBaseUrl()}/${apiPath}.json`
  return safeJsonFetch<ApiPowerBIResponse>(url)
}

export async function ApiFetchProjects(apiPath: string): Promise<IApiProjects> {
  const url = `${getBaseUrl()}/${apiPath}.json`
  return safeJsonFetch<IApiProjects>(url)
}

export async function ApiFetchPagesInfo() {
  const url = `${getBaseUrl()}/pages-info.json`
  return safeJsonFetch(url)
}

