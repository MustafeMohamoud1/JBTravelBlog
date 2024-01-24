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
        link: 'api/recommendation/recomJson/1',
        linkTarget: '_blank',
      },
      IT: {
        recommendationNum: 5,
        citiesNum: 5,
        topTraveller: 'Carmen',
        link: 'api/recommendation/recomJson/2',
        linkTarget: '_blank'
      },
      ES: {
        recommendationNum: 5,
        citiesNum: 4,
        topTraveller: 'Phileas',
        link: 'api/recommendation/recomJson/3',
        linkTarget: '_blank'
      }
      }
    }
});

addEventListener("mouseover", (event) => {});

onmouseover = (event) => {console.log(this)};