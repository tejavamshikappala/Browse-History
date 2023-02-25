import './index.css'

const ForList = props => {
  const {each, OnDelete} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = each

  const Deleting = () => {
    OnDelete(id)
  }

  return (
    <li className="forList">
      <p className="forpara">{timeAccessed}</p>
      <div className="forInner">
        <img src={logoUrl} className="forImage" alt="domain logo" />

        <div className="forClass">
          <p className="forPara1">{title} </p>
          <p className="forParaDomain">{domainUrl}</p>
        </div>

        <button
          data-testid="delete"
          type="button"
          className="forButton"
          onClick={Deleting}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="forImageDelete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default ForList
