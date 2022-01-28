import {ListNav} from "./ListNav"
import {ListView} from "./ListView"
import {DailyNews} from "./DailyNews"
import "../css/cardlist.css"

export const ListWrap = () => {
  return (
    <section className="list-section">
      <DailyNews />
      <ListNav />
      <ListView />
    </section>
  )
}