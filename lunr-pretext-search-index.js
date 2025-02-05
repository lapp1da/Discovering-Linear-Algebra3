var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec11-section-name",
  "level": "1",
  "url": "sec11-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Modeling Data and Moving Between Worlds",
  "body": " Modeling Data and Moving Between Worlds  In this section we will look at linear algebra as a way to encode information and operate on it allowing us to move between different sets of information. We begin by considering a case where we want to move between a pricing scheme and the revenue it generates for three different companies with three different sets of orders.        "
},
{
  "id": "sec12-section-name",
  "level": "1",
  "url": "sec12-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Global vs Local Coordinates",
  "body": " Global vs Local Coordinates  In this section we will look at how we can describe locations from within a small region around us and within the a larger space where our small world might exist.  "
},
{
  "id": "sec21-section-name",
  "level": "1",
  "url": "sec21-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Gridding the Space",
  "body": " Gridding the Space  In this section we will look at how a space can be described by many different types of of coordinates and coordinate systems.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
