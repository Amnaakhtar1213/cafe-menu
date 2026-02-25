const menu = [
  {
    id: 1,
    title: "Buttermilk pancake",
    category: "breakfast",
    price:  8000,
    img: "fluffy-pancakes.jpg",
    desc: "Soft buttermilk pancakes made with farm-fresh ingredients, served with a lots of blueberries for a perfect balance of sweet and tangy.",
  },
  {
    id: 2,
    title: "Bibim-guksu",
    category: "lunch",
    price: 9000,
    img: "Bibim-Guksu.jpg",
    desc: "Cool, spicy noodles mixed with fresh veggies and topped with a soft egg — a refreshing summer favorite.",
  },
  {
    id: 3,
    title: "Bulgogi",
    category: "dinner",
    price: 13000,
    img: "Bulgogi-beef-2.jpg",
    desc: "Juicy marinated beef, grilled and served with rice and veggies — a Korean comfort classic.",
  },
  {
    id: 4,
    title: "Bibimbap",
    category: "lunch",
    price: 10000,
    img: "Bibimbap-12.webp",
    desc: "A hearty rice bowl loaded with veggies, beef, and egg — mix it all up with our signature spicy sauce for a flavor-packed meal",
  },
  {
    id: 5,
    title: "Buldak-noodles",
    category: "lunch",
    price: 8000,
    img: "buldak-noodle.webp",
    desc: "Savory, smoky, and irresistibly spicy — these noodles are a fiery treat that keeps you coming back for more."
,
  },
  {
    id: 6,
    title: "Fried-Rice",
    category: "dinner",
    price: 8000,
    img: "Fried-Rice.jpg",
    desc: "Simple, delicious, and full of flavor and veggies — our fried rice is comfort in every bite."
,
  },
  {
    id: 7,
    title: "Fried-Chicken",
    category: "lunch",
    price: 12000,
    img: "fried-chicken.jpg",
    desc: "juicy golden chicken, Tender inside, crispy outside — fried chicken done right."
,
  },
  {
    id: 8,
    title: "Tteokbokki",
    category: "dinner",
    price: 7000,
    img: "tteokbokki.jpg",
    desc: "Soft rice cake in a fiery sauce. Chewy, saucy, and addictive — our tteokbokki brings the heat and comfort in every bite.",
  },
  {
    id: 9,
    title: "Vanilla shake",
    category: "breakfast",
    price: 7000,
    img: "Vanilla-protein-shake.jpg",
    desc: "A classic vanilla shake that’s rich, creamy, and loaded with protein to keep you fueled.",
  },
  {
     id: 10,
       title: "Naengmyeong",
     category: "lunch",
     price: 7000,
     img: "naengmyeong.webp",
     desc: "Chewy buckwheat noodles served in an icy, tangy broth — a refreshing Korean summer classic.",

  },
  
   {
     id: 11,
       title: "Mango cake",
     category: "sweets",
     price: 7000,
     img: "mango-cake.jpg",
     desc: "Bright, fruity, Moist sponge cake with juicy mango and cream,— our mango cake is sunshine on a plate."
  },
  {
    id: 12,
    title: "Tiramisu",
    category: "sweets",
    price: 7000,
    img: "TIRAMISU.jpg",
    desc: "Coffee, cream, and cocoa — our tiramisu is a perfect sweet pick-me-up.",
  },
  {
    id: 13,
    title: "Jjajangmyeong",
    category: "dinner",
    price: 7000,
    img: "jjajangmyeong.jpg",
    desc: "Noodles in a bold black bean sauce —hearty, savory, and full of flavor.",
  },
  {
    id: 14,
     title: "kimbap",
     category: "dinner",
     price: 3500,
     img: "Kimbap.jpg",
     desc: "Colorful rice rolls wrapped in seaweed — fresh, fun, and delicious in every bite.",
   },
   {
     id: 15,
     title: "Cold coffee",
     category: "drinks",
     price: 4000,
     img: "cold-coffee.avif",
     desc: "Icy coffee that’s refreshing and full of flavor, — our cold coffee is the ultimate chill."
    },
    {
     id: 16,
     title: "Spicy fried chicken",
     category: "dinner",
     price: 9000,
     img: "Korean_Fried_Chicken.webp",
     desc: "Crunchy, saucy, and spicy — our fried chicken brings the heat in every bite."
    },
    {
     id: 17,
     title: "Ice cream",
     category: "sweets",
     price: 4000,
     img: "ice-cream.jpg",
     desc: "Icy, creamy friutfull and chocolaty ......."
    },
    {
     id: 18,
     title: "Coffee",
     category: "drinks",
     price: 4000,
     img: "flat-white-coffee.jpg",
     desc: "A strong scente of coffee only one sip and all your tiredness gone!!!."
    },
     {
     id: 19,
     title: "Japgokbap",
     category: "lunch",
     price: 7000,
     img: "gyeran-bap.jpg",
     desc: "Healthy multigrain rice — simple, filling, and full of flavor."
    },
     {
     id: 20,
     title: "Kimchi",
     category: "lunch",
     price: 4000,
     img: "Kimchi.jpg",
     desc: "Spicy, tangy fermented cabbage - our kimchi brings a punch of flavor to the table."
    },
     {
     id: 21,
     title: "Hotteok",
     category: "dinner",
     price: 3000,
     img: "Hotteok.jpg",
     desc: "So sweet and savory pancake with a lot of brown sugar, choclate, crushed nuts and cinnamon.Its specially available in winter."
    },
     {
     id: 22,
     title: "Japchae",
     category: "dinner",
     price: 11000,
     img: "japchae.webp",
     desc: "Stir‑fried glass noodles with veggies and beef — light, tasty, and satisfying."
    },
     {
     id: 23,
     title: "Samgyetang",
     category: "lunch",
     price: 10000,
     img: "samgyetang.jpg",
     desc: "Tender chicken soup with rice and ginseng — hearty and wholesome."
    },
     {
     id: 24,
     title: "Galbi",
     category: "lunch",
     price: 13000,
     img: "galbi.jpg",
     desc: "Sticky, smoky, and finger‑licking good — galbi is BBQ happiness on a plate."
    },
]
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
const btnContainer = document.querySelector(".btn-container")



window.addEventListener("DOMContentLoaded", function() {
displayMenuItems(menu);
displayMenuBtns()

})

function displayMenuItems(menuItems) {
let displayMenu = menuItems.map(function(item) {
 
return `   <article class="menu-item">
        <img src= ${item.img} alt=${item.title} class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
          <h3 class="price">${item.price}</h4>
          </header>
          <div class="info-underline"></div>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`
})
displayMenu = displayMenu.join("")
sectionCenter.innerHTML = displayMenu;
}


function displayMenuBtns() {
  const categories = menu.reduce(function(values, item) {
   if(!values.includes(item.category)) {
    values.push(item.category);
   }
   return values;
  }, ['all']);
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem) {
if(menuItem.category === category){
return menuItem;
}
})
if(category === "all") {
  displayMenuItems(menu)
} else {
  displayMenuItems(menuCategory);
}
  })
})
};




