var posts=["posts/12874/","posts/1b1497bb/","posts/eff378d3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };