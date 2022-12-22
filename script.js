

    const productlist = document.createElement("ul");
    productlist.id = "productlist";
    document.body.appendChild(productlist);
    productlist.innerHTML = "";

    /* const products = document.createElement("li");
    products.id = "products";
    productlist.appendChild(products);
    products.innerHTML = "produkter"; */

    produkter = [
        { "id": 1, "namn": "Svart T-shirt", "pris": 199 },
        { "id": 2, "namn": "Bruna skor", "pris": 499 },
        { "id": 3, "namn": "Grön keps", "pris": 299 }
      ];

      produkter.sort((a, b) => a.pris - b.pris);

      function produkterNamn() {
        for (index = 0; index < produkter.length; index++) {
            console.log(produkter[index].namn);
            const products = document.createElement("li");
            products.id = produkter[index].id;
            productlist.appendChild(products);
            products.innerHTML = produkter[index].namn;
        }
      }

      function produkterId() {
        for (index = 0; index < produkter.length; index++) {
            console.log(produkter[index].id);
        }
      }

      function produkterPris() {
        for (index = 0; index < produkter.length; index++) {
            console.log(produkter[index].pris);
        }
      }
      produkterNamn();
      produkterId();
      produkterPris();