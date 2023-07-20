function FilterButtonsGroup({ filter, setFilter }) {
  const filterOptions = ['All', 'Active', 'Completed']
  const filterOptionsChinese = ['所有', '進行中', '已完成']
  return (
    <>
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={filter === v ? 'filter-btn-active' : 'filter-btn-normal'}
            onClick={() => {
              setFilter(v)
            }}
          >
            {filterOptionsChinese[i]}({v})
          </button>
        )
      })}
    </>
  )
}

export default FilterButtonsGroup
