var transliteration = require('transliteration.cyr');

function translit(url) {
  return transliteration.transliterate(url).toLowerCase();
}


hexo.extend.generator.register('post', function(locals) {
  return locals.posts.map(function(post){
    post.slug = translit(post.slug);
    return {
      path: translit(post.path),
      data: post,
      layout: 'post'
    };
  });
});

hexo.extend.generator.register('page', function(locals) {
  return locals.pages.map(function(page){
    page.slug = translit(page.slug);
    return {
      path: translit(page.path),
      data: page,
      layout: 'page'
    };
  });
});

hexo.extend.generator.register('category', function(locals) {
  return locals.categories.map(function(category){
    return {
      path: translit(category.path),
      data: category,
      layout: 'category'
    };
  });
});

hexo.extend.generator.register('tag', function(locals) {
  return locals.tags.map(function(tag) {
    return {
      path: translit(tag.path),
      data: tag,
      layout: 'tag'
    }
  });
});
