import store from "@/state";

export async function get(relativePath, baseUrl = process.env.VUE_APP_API_URL) {
    const jwtToken = localStorage.getItem('funJwt')
    const options = jwtToken ? {
        headers: { 'Authorization': `Bearer ${jwtToken}` },
    } : {}
    const response = await fetch(`${baseUrl}${relativePath}`, options)
    return response.json()
}

export async function post(relativePath, data = {}, baseUrl = process.env.VUE_APP_API_URL) {

    const jwtToken = localStorage.getItem('funJwt')
    const headers = jwtToken ? {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
    } : {
        'Content-Type': 'application/json'
    }

    const response = await fetch(`${baseUrl}${relativePath}`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    return response.json()
}
