import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeButtonClassName = isActive ? 'active-tab-button' : 'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`${activeButtonClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
