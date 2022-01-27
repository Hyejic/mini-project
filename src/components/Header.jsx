import "../css/header.css"
export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="ir-blind">svelte</span>
      </h1>
      <form className="search-form">
        <label htmlFor="search">
          <span className="ir-blind">검색</span>
        </label>
        <input id="search" type="text" />
      </form>
      <button className="btn btn_about">
        <span className="ir-blind">about</span>
      </button>
    </header>
  )
}