export const request = (endpoint: string) => {
    return fetch(`https://nekos.life/api/v2${endpoint}`).then(e => e.json())
}

export type ResolvableResource = Promise<{ url: string }>