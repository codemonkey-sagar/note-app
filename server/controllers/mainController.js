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

/**
 * HTTP Request: GET /features
 * Page: Features Page
 */
exports.featuresPage = async (req, res) => {
  const locals = {
    title: 'Features Page',
    description: 'Featureas of our Note App',
  };
  res.render('features');
};

/**
 * HTTP Request: GET /faq
 * Page: FAQ Page
 */
exports.faqPage = async (req, res) => {
  const locals = {
    title: 'FAQ Page',
    description: 'Frequently Asked Questions',
  };
  res.render('faq');
};
