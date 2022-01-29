// {id, by, title, link, score, comment}
import useDataFetcher from '../hooks/dataFetcher';
import { List } from './list';

export const ListView = ({type}) => {
  const { isLoading, stories } = useDataFetcher(type ? type : 'top');

  return (
    <ul>
      {
        isLoading ? <div>loading</div> :
        stories.map(
          ({ data: story }) => story && <List key={story.id} story={story} />
        )
      }
    </ul>
  )
}