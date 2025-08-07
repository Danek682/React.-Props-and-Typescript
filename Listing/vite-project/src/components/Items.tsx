export type propsItemsData = {
    listing_id: number
    url: string
    MainImage: {
        url_570xN:string
    }
    title: string
    currency_code: string
    price: string
    quantity: number
    TitleNameCount?: () => void
    PayCount?: () => void
    getLevelClass?: () => void
}

type ItemsProps = {
  itemsData: propsItemsData[]
}

export function Items ({itemsData = []}:ItemsProps) {
return(
    <div className="item-list">
        {itemsData.map(item => (
            <div className="item" key={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} alt={item.title} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{TitleNameCount(item.title)}</p>
                    <p className="item-price">{
                    PayCount(item.currency_code,item.price)}</p>
                    <p className={`item quantity ${getLevelClass(item.quantity)}`}>{
                        item.quantity}</p>
                </div>
            </div>
        ))}
    </div>
)
}

function TitleNameCount (title:string) {
    if(title.length > 50) {
        return (
            title.slice(0,50) + "..."
        )
    } else {
        return title
    }
}

function PayCount (currency_code:string, price: string) {
    if(currency_code === "USD") {
        return (
            "$" + price
        )
    }
    if (currency_code === "EUR") {
        return (
            "€" + price
        )
    }
    else {
        return (
            currency_code + price
        )
    }
}

function getLevelClass (quantity:number):string {
    if (quantity <= 10) {
        return (
            "level low"
        )
    }
    if (quantity <= 20) {
        return (
            "level-medium"
        )
    }
    else {
        return (
            "level-high"
        )
    }
}
