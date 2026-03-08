import './App.css'

function App () {
  const favFragrancesArray = [
    {
      name: "Prada Paradoxe Eau de Parfum",
      fragranceFamily: "Florals",
      scentType: "Warm Florals",
      notes: "Neroli Bud, White Amber, White Musk",
      description:
        "This is a floral, ambery perfume that reinvents freshness with a neroli bud extraction to capture the flower’s fresh scent, sensuality with bio-converted amber to reveal a vibrant warmth, and intensity through a revolutionary musk molecule for an intense yet subtle trail.",
      isLayerable: false,
      image: "./images/prada-paradoxe.jpg",
    },

    {
      name: "Kayali Yum Boujee Marshmallow Eau de Parfum",
      fragranceFamily: "Warm & Spicy",
      scentType: "Warm & Sweet Gourmands",
      notes: "Strawberry, Pink Marshmallow, Whipped Vanilla",
      description:
        "TThis fragrance features a delightful menu of mouthwatering notes, including fluffy pink marshmallow, succulent strawberry, flaky coconut, delicate freesia, whipped vanilla, and pink musk. Boujee, fluffy, and delicious, this luxurious scent will linger with sweet temptation with every spritz.",
      isLayerable: true,
      image: "./kayali-boujee-marsh.jpg",
    },

    {
      name: "Valentino Donna Born in Roma Eau de Parfum",
      fragranceFamily: "Florals",
      scentType: "Warm Florals",
      notes: "Blackcurrant, Jasmine Grandiflorum, Bourbon Vanilla",
      description:
        "Inspired by Rome, a place where past and present coexist, Born in Roma fragrances tell a story of self-expression: a celebration of people living freely, while embracing their heritage.",
      isLayerable: false,
      image: "./valentino-born-in-roma.jpg",
    },

    {
      name: "Chanel Chance Eau Tendre Eau de Parfum",
      fragranceFamily: "Florals",
      scentType: "Fruity Florals",
      notes: "Grapefruit, Quince, Rose Accord, White Musk",
      description:
        "An enhanced interpretation of the unexpected floral-fruity fragrance, CHANCE EAU TENDRE Eau de Parfum sweeps you into an intensified whirlwind of tenderness. The signature CHANCE bottle is reinvented with a silver cap and golden accent.",
      isLayerable: false,
      image: "./public/images/chanel-chance.jpg"
    },

    {
      name: "DedCool Mochi Milk Eau de Parfum",
      fragranceFamily: "Warm & Spicy",
      scentType: "Warm & Sweet Gourmands",
      notes: "Marshmallow, Vanilla Bean, Sweet Rice Milk",
      description:
        "Mochi Milk is the newest extension of DedCool’s MILK family of skin scents—fragrances that smell like you, only cozier. Mochi Milk is a sweeter, gourmand take on the warm notes found in both Milk and Xtra Milk. Think sweet rice milk, marshmallows, and vanilla. Words that describe Mochi Milk are sweet, whimsical, and nostalgic.",
      isLayerable: true,
      image: "./dedcool-mochi-milk.jpg"
    },
  ];

  return (
    <>
      <h1>My Fragrance Collection</h1>
      <p>Showing {favFragrancesArray.length} fragrances in my collection.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Fragrance Family</th>
            <th>Scent Type</th>
            <th>Notes</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{favFragrancesArray[0].name}</td>
            <td>{favFragrancesArray[0].fragranceFamily}</td>
            <td>{favFragrancesArray[0].scentType}</td>
            <td>{favFragrancesArray[0].notes}</td>
            <td>{favFragrancesArray[0].description}</td>
            <td><img src={favFragrancesArray[0].image} alt={favFragrancesArray[0].name} /></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App
