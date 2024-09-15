import {Ref} from "vue";
import {IApiSiteInfo} from "~/composable/adminApi/apiDefinitions";

export const arrayOfH2TitleIdInCurrentPage: () => Ref<{ anchor: string; name: string }[]> = () => {
    return useState(
        'h2TitleIdInCurrentPage',
        () => []
    )
}

export const useIsIntersected: () => Ref<boolean> = () => {
    return useState('isIntersected', () => {
        return false
    })
}


export const bodyScrollInfo: () => Ref<{ top: number }> = () => {
    return useState(
        'bodyScrollInfoStore',
        () => {
            return {
                top: 0
            }
        }
    )
}

export const showCookieBanner: () => Ref<boolean> = () => {
    return useState('showCookieBanner', () => {
        return true
    })
}

export const cookieIsValidate: () => Ref<boolean> = () => {
    return useState('cookieIsValidate', () => {
        return false
    })
}

export const showMenu: () => Ref<boolean> =
    () => useState('showMenu', () => false)

export const siteInfo: () => Ref<IApiSiteInfo | null > =
    () => useState('siteInfo', () => null)
