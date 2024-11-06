export const merge = (a, b, predicate = (a, b) => a === b) => {
    const c = [...a]; // copy to avoid side effects
    // add all items from B to copy C if they're not already present
    b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)))
    return c;
}



export function autoMerge(lists) {
    let d = [];
    for(let i = 0; i < lists.length; i++) {
        d = merge(d, lists[i]);
    }
    return d;
}



export let items = [
    {
        "name": "Dashboard",
        "link": "/dashboard",
        "icon": "icons/dashboard.svg"
    },
    {
        "name": "Prosjekter",
        "link": "/projects",
        "icon": "icons/projects.svg"
    },
    {
        "name": "Favoritter",
        "link": "/favorites",
        "icon": "icons/favorites.svg"
    },
    {
        "name": "Innboks",
        "link": "/inbox",
        "icon": "icons/inbox.svg"
    },
    {
        "name": "Utregninger",
        "link": "/last_calcs",
        "icon": "icons/calculators.svg"
    }
]


export let calcs = [
    {
        "name": "Bæreevne",
        "calc-id": 1
    },
    {
        "name": "Materialberegning",
        "calc-id": 2
    },
    {
        "name": "Kostnad",
        "calc-id": 3
    },
    {
        "name": "Tidsbruk",
        "calc-id": 4
    },
    {
        "name": "Areal & Volumn",
        "calc-id": 5
    },
    {
        "name": "Transport",
        "calc-id": 6,
    },
    {
        "name": "Maskiner kostnad",
        "calc-id": 7
    }
]