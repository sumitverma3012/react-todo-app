/**
 * input = time in milliseconds
 * output = Aug 1, 1990, 5:13 PM
 * */
export const formatMillisecondsToDateTime = (millis, format = 'en-US') => new Intl.DateTimeFormat(
    format,{
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(millis);