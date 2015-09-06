var translit_table = require('./translit');

function translit(text) {
  if (text) {
    text = text.toLowerCase();
    var result = '';
    var prev = '';
    for (var i=0; i < text.length; i++) {
      if (/\w/.test(text[i]) == false) {
        if (translit_table[text[i]] != undefined) {
          result += translit_table[text[i]];
          prev = text[i];
        } else {
          if (prev != "-") {
            result += "-";
            prev = "-";
          }
        }
      } else {
        result += text[i];
      }
    }
    return result;
  }
  return text;
}


hexo.extend.generator.register('post', function(locals) {
  return locals.posts.map(function(post){
    post.slug = translit(post.slug);
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});

hexo.extend.generator.register('page', function(locals) {
  return locals.pages.map(function(page){
    page.slug = translit(page.slug);
    return {
      path: page.path,
      data: page,
      layout: 'page'
    };
  });
});
