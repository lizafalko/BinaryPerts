var size = 264,
    newsContent = document.getElementsByClassName('main-block__article-text');

function truncate(newsContent, size) {
   if ( newsContent.length > size )
      return newsContent.substring(0, size) + '...';
   else
      return newsContent;
}
