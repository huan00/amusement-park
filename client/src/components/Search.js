const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className="mainSearchBar"
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Park"
        onChange={props.onChange}
      ></input>
      <button className="submitButton" text="Submit">
        Search
      </button>
    </form>
  )
}
export default Search
