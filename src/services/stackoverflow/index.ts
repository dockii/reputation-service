const url = "https://api.stackexchange.com/2.3/"

export async function getStackOverflowUserByToken(token: string) {
    const headers = new Headers({
        Authorization: token
    })

    const userResponse = await fetch(`${url}/me`, {
        headers
    })
    const userData = await userResponse.json()

    return { ...userData }
}
