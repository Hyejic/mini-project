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

export const karmaSet = (karma) => {
  if(karma >= 30 && karma <= 500){
    return 'Karma';
  }else if(karma > 500 && karma <= 40000) {
    return 'Normal karma';
  }else if(karma > 40000) {
    return 'Super karma';
  }else{
    return 'rookie';
  }
}
