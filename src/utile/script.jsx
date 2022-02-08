export const timeForToday = (value) => {
  const today = new Date();
  const timeValue = new Date(value * 1000);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return 'a minute ago';
  if (betweenTime < 60) {
    return `${betweenTime} minute ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)} year ago`;
}

export const Karma = ({karma}) => {
  if(karma >= 30 && karma <= 500){
    return (
      <span className="user-rank daily__user-rank">Karma</span>
    );
  }else if(karma > 500 && karma <= 40000) {
    return (
      <span className="user-rank user-rank--normal daily__user-rank">Normal karma</span>
    );
  }else if(karma > 40000) {
    return (
      <span className="user-rank user-rank--super daily__user-rank">Super karma</span>
    );
  }else{
    return (
      <span className="user-rank daily__user-rank">Rookie</span>
    )
  }
}
