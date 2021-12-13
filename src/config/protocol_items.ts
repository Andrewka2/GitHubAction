export interface ProtocolItemsInterface {
    marked: boolean,
    title: string,
    spanTitle: string,
    text: string,
    end_title?: string
}

export const protocol_items:ProtocolItemsInterface[] = [
    {
        marked: false,
        title: 'Reserve ',
        spanTitle: 'Auction',
        text: 'Put you NFT on sale, first buy start 24h auction, highest bet define the winner.',
    },
    {
        marked: true,
        title: 'Flash ',
        spanTitle: ' NFTs',
        end_title: "",
        text: 'Sell your NFT and start farming DFR or get DFR loan. Buyers can buy NFT with 33% disscount, only for NFT with last sell known price',
    },
    {
        marked: false,
        title: 'Wormhole ',
        spanTitle: "xstream",
        text: "Its crazy shit hole, looking for random will be black or white for you. Good luck)"
    }
]