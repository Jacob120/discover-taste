export const select = {
  containerOf: {    
    pages: '#pages',
    homePage: '.home-wrapper',
    searchPage: '.search-wrapper',
    discoverPage: '.discover-wrapper',
    categoriesContainer: '.categories-links .list', 
    selectContainer: '.select-container' 
  },
  filter: {
    dataCategories: '[data-categories]',
    linkCategory: '.list a',
  },
  nav: {
    links: '.main-nav a',
  },
  player: {
    homeWrapper: '.players-home-wrapper',
    searchWrapper: '.players-search-wrapper',
    discoverWrapper: '.players-discover-wrapper',
    author_title: '.song-author-title',
    playerGlobal: '.players-wrapper',
    description: '.player-description',
    audio: 'audio',
    dataCategories: '[data-categories]',
  },
  search: {
    input: '.search-input',
    searchResult: '.search-result',
   
  },
  button: {
    searchButton: '.btn-search'
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',    
  },
  elements: {
    hidden: 'hide',
    clicked: 'clicked',
    homePageSongs: 'players-home-wrapper',
    searchPageSongs: 'players-search-wrapper',
    discoverPageSongs: 'players-discover-wrapper',
    selected: '.selected',
  },
  audioPlayer: {
    home: 'player-homepage',
    search: 'player-searchpage',
    discover: 'player-discoverpage',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};

// export const templates = {
//   homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
//   searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
//   discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
// };