# The app for  Chef Christoffel
Mr Cristphel's  Barn is a fine dining eatery with new and reinventive way of making classic French, Italian and South African cuisine with a twist.

The establishment has asked to provide for them a new app which allow for catalogue all the items they are to serve for the night, and allow for the editing of the items. Then they also asked that we add a feature where the their custmers can order as well. 
## Design considerations
1.  Colour Scheme
 I chose the color red, cream and blue as they were the easiest for me to pick and chose to use them a gradient as it would be much much more visually engaging.
2.  The buttons and inputs
 - For the button I chose not to use border, as the shadow already made the view look enticing added another dark element to it would over stimulate the user.
 - The input however, I used borders for so that the user can  more easily notice the inputs and they need.
3.  List
- I made the list light blue so it woul not clash with the clue at the corder of the page and made it so that the there  are no border outlines as the light blue already draws the attention of the user and make each item distict.
4. Made it so that only the bottom part of the screen could swipe/scroll as it woul be redundant for the whole swipe when there is not more information beyond the array.
5.  Description 
- Made the description box white so that the user is more easily draw to th content and separate the description from  the rest of the item attributes.

## Changes
### Design 
 #### Color Scheme 
  Changed the color scheme to:
  - Red, for the Drawer and the bottom tab nav 
  - Yellow for the tab icons, certain text and content boxes,
  - Black for the text since everything is light,
  - White for the headings and titles, and the content boxes used in the the deleted  and bin pages.

  #### The Page
  For the page I decided to go with  background that has linear gradient and  and an image background, to make the page more interesting. Then for the buttons I used for the remove and 

  ### The Programming 
  #### The Screens 
  - Separate the  initial programme into multiple page which handle different function like the add off new items into the array and the remove of those items.

  - Added new pages like:
   1. The bin page display and and show  

   2. The Cart page to display the deleted items 

   Here are all Screen  folders containing the screen

   - [The Main Pages](./app/(tabs)/)
   - [The History Tabs](./app/History/)
   - [Editing](./app/EditPages/)

      


 

#### Arrays
 So i made new external arrays that I can call at any time and they are:
  - [The The dishes that are displayed.](./functions/theDishArray.ts)
  - [TheCart](./functions/Cart.ts)
  - [The Deleted Items](./functions/DeletedDishes.ts)

#### Functions 
I stored the function in  new file so that i can call them with zustand extension  with its key. Then I made function that would force the  bottom navigation to disappear once the user began to scroll threw items. Here are the files as follows. 

- [The Function for changing of array items in the initial  items and the adding of prices](./functions/DishesEntries.ts)
- [The adding of item to the array ]( ./functions/DishesEntries.ts)
- [The handling of the disappearance of bottom bar  ](./functions/AutoHidTabBar.ts)
- [Where the style for the tab bar is stored](./functions/theDishArray.ts)

I stored the styling of the bottom navigation separately as the nav bar reverted to the default style, without me calling the style separately. 
 
 #### The navigation 

 I used a router template, so that i would not need to restart my item. So in this template there is main file called index this is the file where the app will begin. This where the menu will be displayed the name of the file is [index](./app/(tabs)/index.tsx). Then I have my navigation files on that inside the folder which contain the main page like index and the page its the child navigation file called [layout](./app/(tabs)/_layout.tsx), then there is [drawer](./app/_layout.tsx) the parent which is the parent and has the same.




## Links 
1. GithubLink [https://github.com/VCNMB-HAM/vcnmb-mast5112-2025-poe-Not4PplPrsn.git] & [https://github.com/Not4PplPrsn/NewRestaurant.git]

2. Youtube Link [https://youtube.com/shorts/mr0Ck3cftyU]

## References 
  Expo, 2025. Authentication in Expo Router. [online] Expo Documentation. Available at: <https://docs.expo.dev/router/advanced/authentication/> [Accessed 5 November 2025].


  Robin, 2022. Reset persisted stated of an application State managed with Zustand. [Forum post] Stack Overflow. Available at: <https://stackoverflow.com/q/74071660/31752930> [Accessed 11 November 2025].

  W3Schools, 2025. JavaScript Timing Events. [online] Available at: <https://www.w3schools.com/js/js_timing.asp> [Accessed 11 November 2025].

  The IIE, 2025. MAST5112MM.docx [WWW Document]. URL https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true (accessed 10.22.25).

  W3Schools, 2025. TypeScript Tutorial [WWW Document]. URL https://www.w3schools.com/typescript/index.php (accessed 10.22.25).


## Images:

ChatGPT, 2025. Logo. [online] ChatGPT. Available at: <https://chatgpt.com/> [Accessed 10 November 2025].


our horse Veronica’s barn into this incredible restaurant, built with stone, delicate craftsmanship, and the hands-on dedication of our entire team. Now its a Michelin recognised restaurant!🍀A true labor of love. For reservations and information: Link in bio. 👆 📩info@grandmaswonderland.com 📞0542 253 50 80 #theBARNintheFarm #MichelinRecommended #ZeroWaste #FarmFresh #FarmToTable #NewMenu #GreenMichelin’. [online] Instagram. Available at: <https://www.instagram.com/thebarn_in_thefarm/p/DFSw3hvgYS9/> [Accessed 8 November 2025].

Rust en Vrede, n.d. Restaurant. Rust en Vrede. Available at: <https://rustenvrede.com/restaurant/> [Accessed 14 November 2025]

Anon. n.d. Tiramisu-14.jpg (683×1024). Available at: <https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tiramisu-14.jpg> [Accessed 7 November 2025].

Camille, 2021. Lemon Mille-Feuille. Baker Street Society. Available at: <https://bakerstreetsociety.com/lemon-mille-feuille/> [Accessed 7 November 2025].

Anon. n.d. 39e677d8-0746-4e8b-8b90-1d73e436078b--DuckEggCremeBrulee_horiz.JPG (2000×1334). Available at: <https://images.food52.com/ObMfFKaGpH0oNCLXF8U9u_YfgvQ=/39e677d8-0746-4e8b-8b90-1d73e436078b--DuckEggCremeBrulee_horiz.JPG?w=1920&q=75> [Accessed 7 November 2025a].

Anon. n.d. sachertorte-sacher-torte-1-.webp (1100×733). Available at: <https://www.wien.info/resource/image/308404/3x2/1100/733/457879c252f72cf043a23d0e44820d39/84A2958DEC3AE4BEA489B1F5B7237604/sachertorte-sacher-torte-1-.webp> [Accessed 7 November 2025b].

Anon. n.d. Tiramisu-14.jpg (683×1024). Available at: <https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tiramisu-14.jpg> [Accessed 7 November 2025c].

Anon. n.d. Wreath-bread.jpg.webp (1200×800). Available at: <https://taste.co.za/wp-content/uploads/2021/05/Wreath-bread.jpg.webp> [Accessed 6 November 2025d].
BBC Food, 2025. Chicken tagliatelle recipe. [online] BBC Food. Available at: <https://www.bbc.co.uk/food/recipes/chicken_tagliatelle_04066> [Accessed 7 November 2025].

London Unattached, 2018. Pheasant Breast recipe with White Wine and Mushroom Sauce. Available at: <https://www.london-unattached.com/pheasant-breast-white-wine-mushroom/> [Accessed 8 November 2025].

Anon. n.d. Split-pea-soup.jpg.webp (1200×800). Available at: <https://taste.co.za/wp-content/uploads/2021/05/Split-pea-soup.jpg.webp> [Accessed 6 November 2025c].

Anon. n.d. Stovetop-leg-of-lamb.jpg.webp (1200×800). Available at: <https://taste.co.za/wp-content/uploads/2021/05/Stovetop-leg-of-lamb.jpg.webp> [Accessed 6 November 2025d].

Anon. n.d. 0_DBR_MEN_130522Marton_18jpeg.jpg (1200×900). Available at: <https://i2-prod.manchestereveningnews.co.uk/article23957379.ece/ALTERNATES/s1200e/0_DBR_MEN_130522Marton_18jpeg.jpg> [Accessed 6 November 2025a].




