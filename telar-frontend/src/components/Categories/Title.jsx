import { useState } from "react"
import subcategories from "../../../categoriesClassification.json"
const Title = ({ title, subcategories }) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      <a
        className="m-2 "
        href="/products/category/laptops"
        onMouseEnter={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(true)}
      >
        {title}

      {showModal && <div className="pepito"> DEAA</div>}
      </a>
    </>
  )
}

export default Title
