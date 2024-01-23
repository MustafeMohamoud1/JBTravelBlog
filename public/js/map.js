new svgMap({
  targetElementID: 'svgMap',
  data: {
    data: {
      recommendationNum: {
        name: 'Recommendations: '
      },
      citiesNum: {
        name: 'Cities: '
      },
      topTraveller: {
        name: 'Top user: '
      },
      link: {
        name: 'Wiki: ',
      }
    },
    applyData: 'link',
    values: {
      FR: {
        recommendationNum: 78,
        citiesNum: 8,
        topTraveller: 'Wally',
        link: 'https://en.wikipedia.org/wiki/France',
        linkTarget: '_blank',
      },
      IT: {
        recommendationNum: 56,
        citiesNum: 12,
        topTraveller: 'Carmen',
        link: 'https://en.wikipedia.org/wiki/Italy',
        linkTarget: '_blank'
      },
      ES: {
        recommendationNum: 34,
        citiesNum: 3,
        topTraveller: 'Phileas',
        link: 'https://en.wikipedia.org/wiki/Spain',
        linkTarget: '_blank'
      }
      }
    }
});