const Filters = ({setFilters, filters, maxPrice}) => {

  const handleChangeMinPrice = (event) => {
    setFilters({maxPrice: event.target.value})
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price from </label>
        <input
          type='range'
          id='price'
          min='0'
          max={maxPrice}
          onChange={handleChangeMinPrice}
          value={filters.maxPrice}
        />
        <span>{maxPrice}</span>
      </div>
    </section>
  )
}

export default Filters
