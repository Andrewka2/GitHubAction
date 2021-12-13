export interface NavBarInterface {
    text: string,
    href: string
}


export const navbar: NavBarInterface[] = [{
    text: 'Home',
    href: '/'
}, {
    text: 'Explorer',
    href: '/explore'
}, {
    text: 'Create Auction',
    href: '/auction'
}, {
    text: 'My Collection',
    href: '/my-collection'
},{
    text: "Faq",
    href: '/faq'
}]