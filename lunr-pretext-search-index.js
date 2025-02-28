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
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book is an application of research I have conducted on the teaching and learning of linear algebra with my colleagues and friends, the late Dr. Melvin Nyman from Alma College, and Dr. John Berry of the University of Plymouth in the UK. As we conducted research together on students in linear algebra classes, I so valued our stimulating conversations and genuine friendship. I could not have created this text without the insights they shared as we analyzed our data and crafted our journal articles. As Mel was only a few miles away from Central Michigan University, I truly miss my frequent visits to his campus. While Mel is no longer with us, his influence on my thinking and teaching are still an ever present reminder of a great friend and mathematician. While John is still active in working to inspire the mathematically talented youth of the UK, I do miss the opportunity to engage with him for the sake of my own professional development. His ideas always prompted deeper understanding for me and I cherish our work together.  "
},
{
  "id": "sec11-section-name",
  "level": "1",
  "url": "sec11-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Modeling Data and Moving Between Worlds",
  "body": " Modeling Data and Moving Between Worlds  In this section we will look at linear algebra as a way to encode information and operate on it allowing us to move between different sets of information. To this end, we will define how matrices and vectors are operated on with binary operations like addition and multiplication. While multiplication of matrices may seem weird at first, you will see that it is defined as it is for convenience in manipulating data and transforming different types of values into other computed values based on them. We begin by considering a case where we want to move between a pricing scheme and the revenue it generates for three different companies with three different sets of orders of our products.  To accomplish this, we will use constructs created to deal with objects that contain multiple entries. In the scenario we are using where companies place orders for products, we want to encode the numerical values for the orders organizing them according to the product and company placing the order. Here just want to reduce the information to an array of values and so we define a matrix as an array of values (or objects) consisting of rows and columns. We typically contain these values with brackets or parentheses like: In the matrices above, the columns could represent the numbers of each of four products being ordered and the rows could represent the three different companies placing the orders (see the table of orders for this situation given in Table 1.1.1).  We also define a vector as matrix with a single column such as or . Note that we are using boldface to denote the names of the vectors for convenience to distinguish them from numerical objects that we call scalars . In a text like this, using boldface makes sense in print, but typically, in written work, we use a harpoon over the name since boldface is not practical with a pen. In this case, we would write the names as or respectively.  You may have encountered vectors before in geometry or physics. We will go into greater detail later with respect to the geometric interpretation, but for now, the behavior remains the same in that operations still work as they do in geometry and physics. Essentially, vectors consist of components so that when the vectors are added, we simply add the components. For example, suppose we have the two vectors in , . Adding these would result in .  The other basic operation we can do with vectors is to scale them (geometrically make them longer or shorter or in the case of negative values, make them go in the opposite direction). For this reason, when we multiply the vector by a numerical value, we call that value a scalar . For example, In essence, we scaled the vector by a factor of 2.  In general, we can define scalar multiplication of a vector as where .  Combining scalar multiplication with vector addition, we get We can use these linear combinations applying them to our previous scenario for moving between price of materials and the revenue they generate.   Linear Combinations and Dealing with Data  Continuing our scenario from the introduction. Suppose that a supplier provides four different products with prices, , to three companies. One thing we may want to do is to play with pricing schemes and look at the generated revenue we would get from each of the three companies. Suppose we have orders from the three companies for each of our four products as given in the table below.    Product Orders    Clients  Product 1  Product 2  Product 3  Product 4    Company 1  14  9  34  41    Company 2  32  7  12  52    Company 3  21  8  5  23          Consider the scenario given above for the orders by three companies for four different products.    Thinking of the four Products from Table 1.1.1 as each being a vector where the entries of the vector store the orders made for each of the three companies, express this information as a set of four vectors in .   Since there are four Products , we can express the orders from the three companies for each Product as an ordered triple (or vector) containing three entries (one for each company) for that product. This would give us a set of four vectors:     If Product 1 is priced at $12, Product 2 is priced at $9, Product 3 is priced at $15, and Product 4 is priced at $7, using these prices for each of the four Products in the table as scalars, write a linear combination of the vectors from your set from part (a) that when added will give a vector in that represents the revenue generated from each company. How much did you collect from each company? Feel free to use your CAS to do the computation here.    This means we received $1046 from Company 1, $991 from Company 2, and $560 from Company 3.    Since you allowed your CAS to do the computation for part (b), let's think about how it is doing the arithmetic. Using what we have defined for combining scalar multiplication and vector addition in Equation 1.1.2, show the details of how the CAS was computing the resulting vector that you obtained in part (b).           In general, we can think of the selling price for each of the four Products as scalars . Give a general expression in terms of for the revenue generated by the purchases for the three companies expressing them as a linear combination of three-entry revenue vectors (one entry for each company) resulting in the revenue vector, .         Notice that where the product and sum are combined in part (c) we have the scalar values (or prices) of each Product ($12, $9, $15, and $7) being multipled by all entries in their respective vectors where the number of orders of each Product is placed in the vector in order by the company. When these vectors are then added, we get the total revenue for each company organized as an ordered triple (since there are three companies).  Here we are purposefully using an example where the number of entries in each set of values of interest (prices and revenue) are different to highlight that although we can have the same number of entries in each set be the same, it is not necessary. Eventually we will express the prices as a vector consisting of four entries and the revenue as a vector consisting of three entries. In this case we will have four entries in one set of vectors (prices of different products) meaning that these vectors exist in such as and three entries in the other set of vectors (revenue from each of the three companies) existing in like .      Transforming Data and Matrix Multiplication  As we have seen, we can use vectors to represent any entity that might have components. This allows us to manipulate values of common components by adding or multiplying them while keeping the components separated in the process. This use of linear combinations of vectors is useful, but the real desire of the previous scenario is to examine how manipulating one set of values (say, prices of products) affects another set of values (revenue for each company). Just as we explored functional relationships in algebra and calculus, we also might want to explore functional relationships with objects that have not just one value as an input and one corresponding value as an output, but rather inputs that have many component values and a corresponding output that also has many component values.  Recall that one of our first experiences with functions dealt with simple linear relationships. For example, Hooke's Law states that there is a simple linear relationship between force on a stretched or compressed spring and the distance of the associated stretch or compression, , where is a constant of proportionality. If we use function notation to express that force, , is a function of stretch, , we indicate the independent variable by placing it in parentheses getting, .  In this situation, we obtain the force as an output by multiplying the stretch, , by a numerical value, . What if in our scenario for the relationship between pricing of products and the revenue generated from each of our three companies, we could have a simple multiplication by something that acted like in our Hooke's Law relationship? In the case, there is a single value, , that affects the output, , for a given input, . However, in the situation with price vs revenue, there are many values impacting the output of revenue for an input vector of prices (namely, all of the different order values provided by the companies placing orders). So, our k -equivalent must take into account all of the values of the orders placed by the companies. Here we can think of our single multiplier (like that of ) as being comprised of an array of order values for the products like we had for the linear combination of the vectors except now we express this set of vectors as a single matrix where each column is a vector (called a column vector ). This gives an entity (matrix) that serves the role that did in .  What this does for us is it allows us to think of the scalars (prices) we used in the linear combination, as an input vector, , so that we get a relationship that is structurally similar to : where acts like , acts like , and acts like .  The use of a matrix as a single entity that we can use to multiply by a vector brings an interesting question. What does it mean to multiply by a matrix. If we look at what we want to do from our functional perspective in the case above, we would like to have the outputs represent the revenue in the way we ultimately added them up in the linear combination of the vectors with the prices viewed as scalars for the column vectors in the matrix. This means that we will need to define the multiplication of a matrix and a vector in such a way that we get: Now this may seem complicated, but one way to look at the process is that we proceed across a row in the matrix while moving down the vector component by component adding the products of the row entries of the matrix and the corresponding component entries of the vector. For example, for the top entry in the resulting revenue vector, we obtained it by moving across the first row with values 14, 9, 34, and 41, while multiplying each by their respective position price value , , , and and then adding these four products together. This gives . Now we proceed similarly for each row moving across the row and down the vector creating product combinations and adding them together as we go. The row of the matrix we use for the computation becomes the row position in the resulting vector we are creating (in this case, revenue). You will likely notice that the result of the way we have chosen to define the multiplication of a matrix and a vector only makes sense if the number of columns of the matrix matches the number of entries (rows of components) of the vector.    Transformations of Vectors  Now that we have defined what it means to multiply a matrix and a vector, we can go back to the concept that motivated it, namely, the desire to move between an input vector and an output vector. In a way, we are looking to transform one type of vector into another type of vector. Just as the relationship of Hooke's Law can be thought of as transforming stretch into force , in our scenario between pricing structures and the revenue generated, we are similarly looking to transform a pricing scheme into the resulting revenue for our three companies. We can even use function notation to represent this relationship. If we let the vector , we can think of the product of the matrix of orders by the companies and the vector as a revenue transformation (or function), , given by This is effectively a mapping between vectors in and vectors in . We can represent this mapping as .   "
},
{
  "id": "sec-Linear-Comb-Data-3-1",
  "level": "2",
  "url": "sec11-section-name.html#sec-Linear-Comb-Data-3-1",
  "type": "Table",
  "number": "1.1.1",
  "title": "Product Orders",
  "body": " Product Orders    Clients  Product 1  Product 2  Product 3  Product 4    Company 1  14  9  34  41    Company 2  32  7  12  52    Company 3  21  8  5  23    "
},
{
  "id": "sec-Linear-Comb-Data-4",
  "level": "2",
  "url": "sec11-section-name.html#sec-Linear-Comb-Data-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Products Products Product Products "
},
{
  "id": "sec-Linear-Comb-Data-5",
  "level": "2",
  "url": "sec11-section-name.html#sec-Linear-Comb-Data-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Product Product "
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
