import React from "react";

// Recipe Data (Static Array)
const recipes = [
  {
    name: "Delicious Biryani",
    description: "A flavorful rice dish made with fragrant spices, tender meat, and saffron.",
    image: "https://source.unsplash.com/400x300/?biryani,food",
    steps: [
      "Marinate the meat with yogurt, spices, and herbs for at least 2 hours.",
      "Cook basmati rice until it's 70% done.",
      "Sauté onions, tomatoes, and spices in a pan, then add marinated meat.",
      "Layer rice over the cooked meat and sprinkle saffron milk on top.",
      "Cover and cook on low heat for 30 minutes.",
      "Garnish with coriander and serve hot."
    ]
  },
  {
    name: "Crispy Dosa",
    description: "A thin, crispy South Indian pancake served with chutney and sambar.",
    image: "https://source.unsplash.com/400x300/?dosa,food",
    steps: [
      "Soak rice and urad dal separately for 4-6 hours.",
      "Grind to a smooth batter and ferment overnight.",
      "Heat a pan and pour a ladleful of batter, spreading it in a circular motion.",
      "Drizzle oil around the edges and cook until golden brown.",
      "Fold and serve hot with chutney and sambar."
    ]
  },
  {
    name: "Soft Idly",
    description: "Steamed rice cakes that are soft, fluffy, and a staple South Indian breakfast.",
    image: "https://source.unsplash.com/400x300/?idly,food",
    steps: [
      "Soak rice and urad dal separately for 4-6 hours.",
      "Grind into a smooth batter and ferment overnight.",
      "Grease idly molds and pour batter into them.",
      "Steam for 10-12 minutes until soft and fluffy.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    name: "Paneer Tikka",
    description: "A spicy, grilled Indian cottage cheese dish served with mint chutney.",
    image: "https://source.unsplash.com/400x300/?paneer,tikka,food",
    steps: [
      "Cut paneer into cubes and marinate with yogurt, spices, and lemon juice.",
      "Let it rest for 1-2 hours for better flavor.",
      "Skewer the paneer pieces and grill them until golden brown.",
      "Serve hot with mint chutney and onion rings."
    ]
  },
  {
    name: "Butter Naan",
    description: "Soft, fluffy Indian bread topped with butter, best enjoyed with curries.",
    image: "https://source.unsplash.com/400x300/?naan,food",
    steps: [
      "Mix flour, yogurt, baking powder, and salt to make a dough.",
      "Let it rest for 2 hours.",
      "Roll out into oval shapes and cook on a hot tandoor or pan.",
      "Brush with butter and serve hot."
    ]
  },
  {
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings soaked in sugar syrup, a perfect Indian dessert.",
    image: "https://source.unsplash.com/400x300/?gulab,jamun,food",
    steps: [
      "Make a soft dough using milk powder, flour, and a little milk.",
      "Shape into small balls and deep-fry until golden brown.",
      "Prepare sugar syrup with cardamom and saffron.",
      "Soak fried balls in warm syrup for 30 minutes.",
      "Serve warm and enjoy."
    ]
  }
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Image */}
      <img
        src="https://source.unsplash.com/1600x500/?food,indian"
        className="img-fluid w-100 banner-img"
        alt="Delicious Food"
      />

      {/* Recipe Cards Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        {recipes.map((recipe, index) => (
          <div key={index} className="col">
            <div className="card shadow-lg recipe-card">
              <img src={recipe.image} className="card-img-top" alt={recipe.name} />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.description}</p>
                <h6>How to Make:</h6>
                <ul>
                  {recipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
