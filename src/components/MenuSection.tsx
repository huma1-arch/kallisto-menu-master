import Flourish from "./Flourish";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Chef Specials",
    items: [
      { name: "Chef Signature Soup", price: 1700, description: "A rich, velvety creation from our head chef's secret recipe" },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Nachos Grande", price: 1900, description: "Loaded tortilla chips with jalapeños, cheese, and house salsa" },
      { name: "Dynamite Fish", price: 1900, description: "Crispy fish bites tossed in spicy dynamite sauce" },
      { name: "Dynamite Chicken", price: 1288, description: "Tender chicken morsels in fiery dynamite glaze" },
      { name: "Wasabi Prawns", price: 1900, description: "Crispy prawns with wasabi-infused cream sauce" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "King Caesar Salad", price: 999, description: "Romaine hearts, parmesan, croutons, classic caesar dressing" },
      { name: "Waldorf Salad", price: 1330, description: "Apples, walnuts, celery, grapes in creamy dressing" },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Chicken Penne Pasta", price: 1299, description: "Penne in rich cream sauce with grilled chicken" },
      { name: "Seafood Pasta", price: 1790, description: "Fresh seafood medley in garlic white wine sauce" },
    ],
  },
  {
    title: "Sandwiches & Panini",
    items: [
      { name: "Jalapeño Chicken Panini", price: 1180, description: "Grilled chicken with jalapeños and melted cheese" },
      { name: "Club Sandwich", price: 1380, description: "Triple-decker with chicken, egg, lettuce, and mayo" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Crispy Chicken Burger", price: 1350, description: "Crunchy fried chicken fillet with house slaw" },
      { name: "Jalapeño Grilled Chicken Burger", price: 1450, description: "Chargrilled chicken with jalapeño relish" },
    ],
  },
  {
    title: "Chicken Specials",
    items: [
      { name: "Spinach Stuffed Chicken", price: 2600, description: "Chicken breast stuffed with spinach and ricotta" },
      { name: "Swiss Polo Chicken", price: 2600, description: "Pan-seared chicken with Swiss cheese and mushroom sauce" },
    ],
  },
  {
    title: "Chinese Corner",
    items: [
      { name: "Chicken Cashew Nut", price: 1890, description: "Wok-tossed chicken with roasted cashews and bell peppers" },
      { name: "Chilli Bang Bang", price: 1790, description: "Crispy chicken in sweet chilli glaze with sesame" },
    ],
  },
  {
    title: "Steaks",
    items: [
      { name: "Tarragon Steak (Beef)", price: 2499, description: "Prime beef with tarragon butter sauce" },
      { name: "Tarragon Steak (Chicken)", price: 2299, description: "Chicken steak with tarragon herb butter" },
      { name: "Pepper Corn Steak (Beef)", price: 2499, description: "Beef steak in crushed peppercorn cream sauce" },
      { name: "Pepper Corn Steak (Chicken)", price: 2299, description: "Chicken steak with peppercorn cream" },
      { name: "American Steak", price: 2499, description: "Classic American-style grilled beef steak" },
      { name: "Pepper Steak", price: 2499, description: "Seared beef with cracked black pepper crust" },
      { name: "Mushroom Steak", price: 2499, description: "Beef steak topped with wild mushroom ragout" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-charcoal-deep section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Curated Excellence</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-[0.15em] gold-gradient-text mb-6">
            The Menu
          </h2>
          <Flourish size="md" />
        </div>

        <div className="space-y-16">
          {menuData.map((category, idx) => (
            <div key={category.title}>
              {idx > 0 && <Flourish size="sm" className="mb-12" />}
              <h3 className="font-display text-xl md:text-2xl tracking-[0.2em] text-primary text-center mb-8 uppercase">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex justify-between items-baseline gap-4 py-3 border-b border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-display text-base md:text-lg tracking-[0.1em] text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="font-body text-sm text-muted-foreground mt-1 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-display text-base md:text-lg text-primary whitespace-nowrap">
                      PKR {item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Flourish size="lg" className="mt-16" />
      </div>
    </section>
  );
};

export default MenuSection;
