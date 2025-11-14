import { DishEntries } from "./DishesEntries";
// storing of the images in constant variables
// The Desserts

const tiramisuImage = require  ('../assets/images/Dishes/Dessert/Tiramisu-14.jpg'); /**(Anon,2025) */
const sacherTorteImage = require ( '../assets/images/Dishes/Dessert/sachertorte-sacher-torte-1-.webp'); /**(Anon,2025.) */
const orangCremeBrulee = require('../assets/images/Dishes/Dessert/DuckEggCremeBrulee.jpeg'); /**(Anon,2025.) */
const milleFeuille =require('../assets/images/Dishes/Dessert/Millefeuille.webp');/**(Camille, 2021) */

//The Entrees 
const chickenTagliatelle =require('../assets/images/Dishes/Entree/chicken_tagliatelle_04066_16x9.jpg'); /**(BBC Food, 2025) */
const queenScallops = require('../assets/images/Dishes/Entree/Little-French-Scallops-sauternes-butter_9780-7d4e275.webp'); /**(Anon,2025.) */
const wreathBread = require('../assets/images/Dishes/Entree/Wreath-bread.jpg.webp'); /**(Anon,2025.) */
const  Pheasant = require('../assets/images/Dishes/Entree/Pheasant-white-wine-mustard-cream-1.jpg.webp'); /**(London Unattached, 2018) */

// The Mains
const stoveLamb = require('../assets/images/Dishes/Mains/StoveTopLamb.webp'); /**(Anon,2025.) */
const altSundayRoast = require('../assets/images/Dishes/Mains/SundayRoastFancy.webp'); /**(Anon,2025.) */
const wildChicken= require('../assets/images/Dishes/Mains/White-wine-roast-umleqwa.jpg.webp');/**(Anon,2025.) */
const splitPeaSoup = require('../assets/images/Dishes/Mains/WoolWorthDish.webp'); /**(Anon,2025.) */


type Dishes = DishEntries; // use the type definition in the Dishes Entries folder since it already has everything just re-using and  redefining the types


export  const dishes : Dishes[] = [ // this is the standardized array for the set dishes in app 
{id: 1, dishName: 'Tiramisu', description: 'Espresso-soaked ladyfingers layered with mascarpone cream.  Finished with a dusting of cocoa. Rich, velvety, and perfectly balanced.', courseName: 'Dessert', price: 500, image: tiramisuImage, isDeleted: false},
{id: 2, dishName: 'Sacher Torte', description: 'Dense chocolate sponge layered with apricot jam is sealed beneath a glossy dark chocolate glaze.Subtle fruit brightness and deep cocoa richness deliver an elegant finish in every bite.', courseName: 'Dessert', price: 700, image:sacherTorteImage, isDeleted: false },
{id: 3, dishName: 'Duck Egg and Orange Creme Brulee', description: 'Duck Egg and Orange Crème Brûlée is a refined twist on the classic French dessert, offering a richer, silkier custard thanks to the higher fat content of duck eggs. Infused with bright citrus notes from fresh orange zest or juice, the custard base is gently baked until just set, then topped with a delicate layer of caramelized sugar that cracks under the spoon. The combination of creamy depth and vibrant citrus creates a luxurious contrast, while the duck egg lends an indulgent mouthfeel that elevates this brûlée into something truly special.', courseName: 'Dessert', price: 800, image: orangCremeBrulee, isDeleted: false},
{id: 4, dishName: 'Lemon Mille Feuille', description: 'Lemon Mille Feuille is a sophisticated dessert that layers crisp, golden sheets of puff pastry with luscious lemon-infused pastry cream, creating a striking contrast of textures and flavors. The pastry’s flaky crunch complements the smooth, tangy citrus filling, which is often brightened with zest or curd for extra depth. Finished with a dusting of powdered sugar or a glossy glaze, each bite delivers a refreshing burst of lemon wrapped in buttery richness. Its a refined twist on the traditional mille feuille, offering elegance and vibrancy in every delicate slice.', courseName: 'Dessert', price: 950, image: milleFeuille, isDeleted: false},
{id: 5, dishName: 'Chicken Tagliatelle', description: "Tender strips of grilled chicken tossed with silky tagliatelle pasta in a creamy garlic-parmesan sauce, finished with cracked black pepper and fresh parsley.", courseName: 'Entrée', price: 1000, image: chickenTagliatelle, isDeleted: false},
{id: 6,dishName: 'Wreath Bread', description: 'Artisan bread shaped into a golden wreath, baked to a crisp crust with a soft airy center. Infused with rosemary and sea salt, this centerpiece loaf brings warmth and elegance to any table. Ideal for sharing, dipping, or pairing with cheese and wine.', courseName: 'Entrée', price: 450, image: wreathBread, isDeleted: false},
{id: 7, dishName: 'Queen Scallops', description: "Delicate queen scallops lightly seared and served with a citrus herb butter. Their natural sweetness is balanced by a touch of sea salt and lemon zest, offering a clean elegant flavor. Perfect as a starter or paired with seasonal greens for a refined main.", courseName: 'Entrée', price: 550, image: queenScallops, isDeleted: false},
{id: 8, dishName: 'Split peas soup ', description: 'Velvety split pea soup slow simmered with garden vegetables and aromatic herbs. Crafted by a five star kitchen, this dish balances earthy depth with refined texture. Finished with a drizzle of cold pressed olive oil and a touch of microgreens for a clean, elegant presentation.', courseName: 'Main', price: 350, image: splitPeaSoup, isDeleted: false },
{id: 9, dishName: 'Stove Top Lamb', description: "Tender lamb seared and slow cooked on the stove top with aromatic herbs and root vegetables. Finished with a rich reduction of stock and wine, this dish delivers deep flavor and comforting warmth in every bite. A rustic yet refined option for hearty appetites.", courseName: 'Main', price: 900, image: stoveLamb, isDeleted: false},
{id: 10, dishName: 'Sunday Roast', description: "A refined take on the classic Sunday roast, crafted by The Savoy's five star kitchen. Featuring seasonal vegetables, slow roasted meats or elegant plant based mains, each plate is balanced with light sauces and modern garnishes. Designed for comfort and sophistication, this dish reimagines tradition with flair.", courseName: 'Main', price: 1200, image: altSundayRoast, isDeleted: false},
{id: 11, dishName: 'Pheasant with Mustard and White whine  sauce', description: 'Tender wild pheasant pan roasted and served with a creamy mustard and white wine sauce. Balanced with hints of garlic and thyme, the sauce enhances the rich flavor of the game bird. Accompanied by seasonal vegetables and rustic potatoes for a hearty, elegant dish', courseName: 'Entrée', price: 1300, image: Pheasant, isDeleted: false},
{id: 12, dishName: 'Wild Chicken', description: 'Succulent free range wild chicken slow roasted to golden perfection, infused with a delicate blend of herbs and a splash of crisp white wine. Each bite reveals tender juicy meat with subtle notes of garlic, rosemary, and citrus, balanced by the wines gentle acidity. The skin is irresistibly crispy, locking in rich aromatic flavors. Served with pan roasted seasonal vegetables and a drizzle of white wine reduction, this dish is a rustic yet refined celebration of natural ingredients and timeless technique.', courseName: 'Main', price: 500, image:wildChicken, isDeleted: false},
]


