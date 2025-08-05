import { Star } from "./Star"

export type CountProps = {
    count: number
onLikePlus?: () => void
onLikeMinus?: () => void
}
export type CountType = 1 | 2 | 3 | 4 | 5
export function Count ({count,onLikePlus,onLikeMinus}:CountProps) {
    const stars = []
    for (let i = 0; i < count; i++) {
        stars.push(
            <li className="star" key={i}><Star/></li>
        )
    }
    return (
        <div className="stars-container">
            <div className="stars">
                    <button className="minus" onClick={onLikeMinus}>-</button>
                    <button className="plus" onClick={onLikePlus}>+</button>
                <ul className="card-body-stars">
                   {stars}
                </ul>
            </div>
        </div>
    )
}