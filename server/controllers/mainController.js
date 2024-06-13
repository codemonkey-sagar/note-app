/**
 * HTTP Request: GET /
 * Page: Index Page
 */
exports.indexPage = async (req, res) => {
  const locals = {
    title: 'Note-App',
    description: 'Note Keeping App',
  };

  res.render('index', locals);
};

/**
 * HTTP Request: GET /about
 * Page: About Page
 */
exports.aboutPage = async (req, res) => {
  const locals = {
    title: 'About Page',
    description: 'About the creator of the Note App',
  };
  res.render('about');
};
