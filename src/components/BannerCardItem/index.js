// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className, key} = cardDetails
  return (
    <li className={className}>
      <div className="listdiv">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
