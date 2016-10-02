export function getEvents(clubId, championnatLabel) {
   let url = 'http://192.168.101.66:8000/scrape/club/' + clubId 
    + '/week/2016-10-10/championship/EXCELLENCE%20SENIORS%20-%20POULE%20A';

    console.log('url', url);
    return fetch(url, {
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
}

export function getClub(clubId) {
  let url = 'http://192.168.101.66:8000/club/get/' + clubId;
  return fetch(url, {
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
}

