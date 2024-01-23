//Create SVG map from package, hard coded with data viewed on mouse hover

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
        recommendationNum: 5,
        citiesNum: 4,
        topTraveller: 'Wally',
        link: 'https://en.wikipedia.org/wiki/France',
        linkTarget: '_blank',
      },
      IT: {
        recommendationNum: 5,
        citiesNum: 5,
        topTraveller: 'Carmen',
        link: 'https://en.wikipedia.org/wiki/Italy',
        linkTarget: '_blank'
      },
      ES: {
        recommendationNum: 5,
        citiesNum: 4,
        topTraveller: 'Phileas',
        link: 'https://en.wikipedia.org/wiki/Spain',
        linkTarget: '_blank'
      }
      }
    }
});