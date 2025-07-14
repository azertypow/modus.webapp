export function formatDateRange(stringStartDate: string, stringEndDate?: string): string {

    const startDate = new Date(stringStartDate)
    const endDate = stringEndDate ? new Date(stringEndDate) : null

    const options: Intl.DateTimeFormatOptions = { month: 'long', year: '2-digit' }
    const formatter = new Intl.DateTimeFormat('fr-FR', options)

    const start = formatter.format(startDate)

    if (!endDate) return start

    const end = formatter.format(endDate)

    if(start === end) return start

    return `${start} > ${end}`
}
