import {ListNav} from "./ListNav"
import {ListView} from "./ListView"
import "../css/cardlist.css"

export const ListWrap = () => {
  return (
    <section className="list-section">
      <ListNav />
      <ListView />
    </section>
  )
}