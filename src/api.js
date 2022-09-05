import store from "@/state";

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

export async function get(relativePath, baseUrl = process.env.VUE_APP_API_URL) {
    const jwtToken = localStorage.getItem('funJwt')
    const options = jwtToken ? {
        headers: { 'Authorization': `Bearer ${jwtToken}`, ...defaultHeaders, },
    } : defaultHeaders
    const response = await fetch(`${baseUrl}${relativePath}`, options)
    if (response.statusCode === 401) store.authConfirmed(false)
    if (!response.ok) throw new Error(response.statusMessage)
    return response.json()
}

export async function post(relativePath, data = {}, baseUrl = process.env.VUE_APP_API_URL, method = 'POST') {

    const jwtToken = localStorage.getItem('funJwt')
    const headers = jwtToken ? {
        'Authorization': `Bearer ${jwtToken}`,
        ...defaultHeaders
    } : defaultHeaders

    const response = await fetch(`${baseUrl}${relativePath}`, {
        method: method,
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    if (response.statusCode === 401) store.authConfirmed(false)
    if (!response.ok) throw new Error(response.statusMessage)
    return response.json()
}
