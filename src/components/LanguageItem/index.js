import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="item-container">
        <img src={imageUrl} alt={imageAltText} className="item-image" />
      </li>
    </>
  )
}

export default LanguageItem
