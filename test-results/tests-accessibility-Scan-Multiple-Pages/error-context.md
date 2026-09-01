# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility.spec.js >> Scan Multiple Pages
- Location: tests\accessibility.spec.js:4:1

# Error details

```
Error: Critical/Serious accessibility violations found: ${url}: ${criticalOrSeriousIssues.length}
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - complementary "Choose country or region" [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]: Choose another country or region to see content specific to your location and shop online.
      - generic [ref=e5]:
        - generic [ref=e6]:
          - button " India " [ref=e7]:
            - generic [ref=e8]:
              - generic [ref=e9]: 
              - generic [ref=e10]: India
            - text: 
          - text: 
        - button "Continue" [ref=e11] [cursor=pointer]
        - button "Close country or region selector" [ref=e12] [cursor=pointer]
  - heading "Apple" [level=1] [ref=e16]
  - navigation "Global" [ref=e17]:
    - list [ref=e19]:
      - listitem [ref=e20]:
        - link "Apple" [ref=e21] [cursor=pointer]:
          - /url: /
      - listitem [ref=e22]:
        - generic [ref=e24]:
          - list [ref=e26]:
            - listitem [ref=e27]:
              - link "Store" [ref=e28] [cursor=pointer]:
                - /url: /us/shop/goto/store
            - listitem:
              - button "Store menu"
          - list [ref=e31]:
            - listitem [ref=e32]:
              - link "Mac" [ref=e33] [cursor=pointer]:
                - /url: /mac/
            - listitem:
              - button "Mac menu"
          - list [ref=e36]:
            - listitem [ref=e37]:
              - link "iPad" [ref=e38] [cursor=pointer]:
                - /url: /ipad/
            - listitem:
              - button "iPad menu"
          - list [ref=e41]:
            - listitem [ref=e42]:
              - link "iPhone" [ref=e43] [cursor=pointer]:
                - /url: /iphone/
            - listitem:
              - button "iPhone menu"
          - list [ref=e46]:
            - listitem [ref=e47]:
              - link "Watch" [ref=e48] [cursor=pointer]:
                - /url: /watch/
            - listitem:
              - button "Watch menu"
          - list [ref=e51]:
            - listitem [ref=e52]:
              - link "Vision" [ref=e53] [cursor=pointer]:
                - /url: /apple-vision-pro/
            - listitem:
              - button "Vision menu"
          - list [ref=e56]:
            - listitem [ref=e57]:
              - link "AirPods" [ref=e58] [cursor=pointer]:
                - /url: /airpods/
            - listitem:
              - button "AirPods menu"
          - list [ref=e61]:
            - listitem [ref=e62]:
              - link "TV and Home" [ref=e63] [cursor=pointer]:
                - /url: /tv-home/
                - generic [ref=e64]: TV & Home
            - listitem:
              - button "TV and Home menu"
          - list [ref=e66]:
            - listitem [ref=e67]:
              - link "Entertainment" [ref=e68] [cursor=pointer]:
                - /url: /entertainment/
            - listitem:
              - button "Entertainment menu"
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "Accessories" [ref=e73] [cursor=pointer]:
                - /url: /us/shop/goto/buy_accessories
            - listitem:
              - button "Accessories menu"
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Support" [ref=e78] [cursor=pointer]:
                - /url: https://support.apple.com/?cid=gn-ols-home-hp-tab
            - listitem:
              - button "Support menu"
      - listitem [ref=e80]:
        - button "Search apple.com" [ref=e81] [cursor=pointer]
      - listitem [ref=e82]:
        - button "Shopping Bag" [ref=e84] [cursor=pointer]
  - main [ref=e85]:
    - generic [ref=e86]:
      - generic [ref=e87]:
        - link [ref=e88] [cursor=pointer]:
          - /url: /v/apple-events/home/ak/built/assets/event/event.ics
        - generic [ref=e89]:
          - generic:
            - heading "Surprise and shine." [level=2]
            - paragraph: Watch a special Apple Event online on 9/9 at 10 a.m. PT.
          - link "Add to calendar, September 2026 Apple Event" [ref=e91] [cursor=pointer]:
            - /url: /v/apple-events/home/ak/built/assets/event/event.ics
            - text: Add to calendar
        - img "Apple logo with a glowing neon effect in blue and pink hues, a bright white flare at its center, on a gradient background" [ref=e94]
      - generic [ref=e95]:
        - link [ref=e96] [cursor=pointer]:
          - /url: /us/shop/goto/edu_store
        - generic [ref=e97]:
          - generic:
            - heading "College, sorted." [level=2]
            - paragraph: Get a gift card from $100 to $150* when you buy Mac or iPad with education savings.
          - link "Shop, Education Store" [ref=e99] [cursor=pointer]:
            - /url: /us/shop/goto/edu_store
            - text: Shop
        - img "Animated cutouts of smiling students each carrying various MacBook and iPad models, and assorted dorm room supplies" [ref=e103]
      - generic [ref=e104]:
        - link [ref=e105] [cursor=pointer]:
          - /url: /iphone/
        - generic [ref=e106]:
          - generic:
            - heading "iPhone" [level=2]
            - paragraph: Meet the latest iPhone lineup.
          - generic [ref=e107]:
            - link "Learn more, iPhone" [ref=e108] [cursor=pointer]:
              - /url: /iphone/
              - text: Learn more
            - link "Shop iPhone" [ref=e109] [cursor=pointer]:
              - /url: /us/shop/goto/buy_iphone
        - img "iPhone 17 Pro, back exterior, deep blue color, Pro Fusion camera system in top left corner, Apple logo in center, iPhone 17, back exterior, white color, Dual Fusion camera system in top left corner, Apple logo in center, iPhone 17e, back exterior, soft pink color, Fusion camera system in top left corner, Apple logo in center, iPhone Air, side, titanium frame profile, Fusion camera system in top left corner" [ref=e112]
    - generic [ref=e113]:
      - generic [ref=e114]:
        - link [ref=e115] [cursor=pointer]:
          - /url: /mac-mini/
        - generic [ref=e116]:
          - generic:
            - heading "Mac mini" [level=3]
            - paragraph: Now with M6 and M5 Pro.
            - paragraph: Available starting 9.22
          - generic [ref=e117]:
            - link "Learn more, Mac mini M6 and M5 Pro" [ref=e118] [cursor=pointer]:
              - /url: /mac-mini/
              - text: Learn more
            - link "Pre-order, Mac mini M6 and M5 Pro" [ref=e119] [cursor=pointer]:
              - /url: /us/shop/goto/buy_mac/mac_mini
              - text: Pre-order
        - img "Front view of Mac mini balanced on the fingertips of an up-stretched hand, front shows two Thunderbolt ports, status indicator light and headphone jack, tapered black base at bottom, flat top, rounded sides, straight edges, silver color" [ref=e122]
      - generic [ref=e123]:
        - link [ref=e124] [cursor=pointer]:
          - /url: /macbook-air/
        - generic [ref=e125]:
          - generic:
            - heading "MacBook Air" [level=3]
            - paragraph: Now supercharged by M5.
          - generic [ref=e126]:
            - link "Learn more, MacBook Air with M5" [ref=e127] [cursor=pointer]:
              - /url: /macbook-air/
              - text: Learn more
            - link "Buy, MacBook Air with M5" [ref=e128] [cursor=pointer]:
              - /url: /us/shop/goto/buy_mac/macbook_air
              - text: Buy
        - img "Two open MacBook Air laptops in sky blue color forming arrow shape, emphasizing narrow profile" [ref=e131]
      - generic [ref=e132]:
        - link [ref=e133] [cursor=pointer]:
          - /url: /ipad-air/
        - generic [ref=e134]:
          - generic:
            - heading "iPad Air" [level=3]
            - paragraph: Now supercharged by M4.
          - generic [ref=e135]:
            - link "Learn more, iPad Air" [ref=e136] [cursor=pointer]:
              - /url: /ipad-air/
              - text: Learn more
            - link "Buy, iPad Air" [ref=e137] [cursor=pointer]:
              - /url: /us/shop/goto/buy_ipad/ipad_air
              - text: Buy
        - img "iPad Air models floating, back exterior, single-lens camera, front exterior, rounded corners, black display bezel" [ref=e140]
      - generic [ref=e141]:
        - link [ref=e142] [cursor=pointer]:
          - /url: /ipad-pro/
        - generic [ref=e143]:
          - generic:
            - heading "iPad Pro" [level=3]
            - paragraph: Advanced AI performance and game-changing capabilities.
          - generic [ref=e144]:
            - link "Learn more, iPad Pro" [ref=e145] [cursor=pointer]:
              - /url: /ipad-pro/
              - text: Learn more
            - link "Buy, iPad Pro" [ref=e146] [cursor=pointer]:
              - /url: /us/shop/goto/ipad_pro/select
              - text: Buy
        - img "Two iPad Pro devices, front exterior, portrait orientation, black display bezel, display showing multicolored, curved line art, side exterior, thin profile, volume-up button, volume-down button, raised Pro Camera System" [ref=e149]
      - generic [ref=e150]:
        - link [ref=e151] [cursor=pointer]:
          - /url: /us/shop/goto/trade_in
        - generic [ref=e152]:
          - generic:
            - heading "Apple Trade In" [level=3]
            - paragraph:
              - generic:
                - text: Get up to $205–$720 in credit when you trade in iPhone 13 or higher.
                - superscript: "1"
          - link "Get your estimate" [ref=e154] [cursor=pointer]:
            - /url: /us/shop/goto/trade_in
        - img "Side-by-side, hand holding iPhone 13 in silicon case with stickers on back exterior, trade-in with hand holding new iPhone box for iPhone 17 Pro" [ref=e157]
      - generic [ref=e158]:
        - link [ref=e159] [cursor=pointer]:
          - /url: /apple-card/
        - generic [ref=e160]:
          - generic:
            - heading "Apple Card" [level=3]
            - paragraph: Get up to 3% Daily Cash back with every purchase.
          - generic [ref=e161]:
            - link "Learn more, Apple Card" [ref=e162] [cursor=pointer]:
              - /url: /apple-card/
              - text: Learn more
            - link "Apply now, Apple Card" [ref=e163] [cursor=pointer]:
              - /url: https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false
              - text: Apply now
        - img "Apple Card, front, Apple logo in top left, cardholder name in middle left Marisa Robertson, card chip in middle right." [ref=e166]
    - generic [ref=e168]:
      - heading "Endless entertainment." [level=2] [ref=e170]
      - generic [ref=e171]:
        - tablist [ref=e172]:
          - tab "Item 1" [selected]
          - tab "Item 2" [ref=e173] [cursor=pointer]
          - tab "Item 3" [ref=e175] [cursor=pointer]
          - tab "Item 4" [ref=e177] [cursor=pointer]
          - tab "Item 5" [ref=e179] [cursor=pointer]
          - tab "Item 6" [ref=e181] [cursor=pointer]
          - tab "Item 7" [ref=e183] [cursor=pointer]
          - tab "Item 8" [ref=e185] [cursor=pointer]
          - tab "Item 9" [ref=e187] [cursor=pointer]
        - button "Play endless entertainment gallery" [ref=e189] [cursor=pointer]
      - group "Gallery of Apple TV shows, movies, and sports." [ref=e193]:
        - list [ref=e194]:
          - tabpanel "Item 1" [ref=e195]:
            - link "Stream now, Ted Lasso - Comedy - The hit comedy is back and Tedder than ever." [ref=e196] [cursor=pointer]:
              - /url: https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic [ref=e200]:
                - generic [ref=e201]: Stream now
                - paragraph [ref=e202]: Comedy•The hit comedy is back and Tedder than ever.
          - tabpanel [ref=e203]:
            - link:
              - /url: https://tv.apple.com/us/show/dark-matter/umc.cmc.4luj45vtqpmjsvb6sc2675oeg?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: Stream now
                  - paragraph: Sci-Fi•New season.
          - tabpanel [ref=e204]:
            - link:
              - /url: https://tv.apple.com/us/room/formula-1/uts.room.formula-1?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: F1 on Apple TV
                  - paragraph: Every Grand Prix™, live and on demand—all in one place, all year long.
          - tabpanel [ref=e205]:
            - link:
              - /url: https://tv.apple.com/us/show/silo/umc.cmc.3yksgc857px0k0rqe5zd4jice?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: Stream now
                  - paragraph: Sci-Fi•The truth lies in the past.
          - tabpanel [ref=e206]:
            - link:
              - /url: https://tv.apple.com/us/channel/mls/tvs.sbd.7000?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: MLS on Apple TV
                  - paragraph: Watch every club, every match, live—all season long.
          - tabpanel [ref=e207]:
            - link:
              - /url: https://tv.apple.com/us/show/lucky/umc.cmc.5qo7t3nngb2vj0m9dxkwebw1o?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: Stream now
                  - paragraph: Action•Anya Taylor-Joy is a grifter running for her life after a heist goes sideways.
          - tabpanel [ref=e208]:
            - link:
              - /url: https://tv.apple.com/us/room/friday-night-baseball/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: See the schedule
                  - paragraph: Live MLB games, every Friday.
          - tabpanel [ref=e209]:
            - link:
              - /url: https://tv.apple.com/us/movie/the-dink/umc.cmc.5tugaz9vt498ajn7q64ypaqxn?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: Stream now
                  - paragraph: Comedy•It’s pickleball vs. tennis in the hilarious new movie.
          - tabpanel [ref=e210]:
            - link:
              - /url: https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh2?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic: Stream now
                  - paragraph: Mystery•19 Emmy® Nominations Including Best Comedy
      - group "Gallery of Apple services, including Fitness Plus, Apple Arcade, and Apple Music" [ref=e211]:
        - list [ref=e212]:
          - tabpanel "Item 1" [ref=e213]:
            - 'link "Listen now, Sabrina Carpenter: The Zane Lowe Interview" [ref=e214] [cursor=pointer]':
              - /url: https://music.apple.com/us/station/sabrina-carpenter-the-zane-lowe-interview/ra.1837392419?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - paragraph [ref=e217]: "Sabrina Carpenter: The Zane Lowe Interview"
              - generic [ref=e218]: Listen now
          - tabpanel [ref=e225]:
            - link [ref=e226] [cursor=pointer]:
              - /url: https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic [ref=e234]:
                - generic [ref=e235]: Play now
                - paragraph [ref=e236]: Hello Kitty Island Adventure
          - tabpanel [ref=e237]:
            - link:
              - /url: https://fitness.apple.com/us/studio-collection/david-bowie/1896935217?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic:
                - generic:
                  - generic: Watch now
                  - paragraph: David Bowie
          - tabpanel [ref=e238]:
            - link:
              - /url: https://music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - generic:
                - paragraph: A-List Pop
              - generic: Listen now
          - tabpanel [ref=e239]:
            - link:
              - /url: https://apps.apple.com/us/app/powerwash-simulator/id6477445344?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic:
                - generic:
                  - generic: Play now
                  - paragraph: PowerWash Simulator
          - tabpanel [ref=e240]:
            - link:
              - /url: https://fitness.apple.com/us/workout/hiit-with-bakari/6783451184?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic:
                - generic:
                  - generic: Watch now
                  - paragraph: HIIT with Bakari
          - tabpanel [ref=e241]:
            - link:
              - /url: https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - generic:
                - paragraph: New Music Daily
              - generic: Listen now
          - tabpanel [ref=e242]:
            - link:
              - /url: https://apps.apple.com/us/app/balatro/id6502451661?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic:
                - generic:
                  - generic: Play now
                  - paragraph: Balatro+
          - tabpanel [ref=e243]:
            - link [ref=e244] [cursor=pointer]:
              - /url: https://fitness.apple.com/us/studio-collection/programs/1896349052?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic [ref=e252]:
                - generic [ref=e253]: Watch now
                - paragraph [ref=e254]: Programs
  - contentinfo [ref=e255]:
    - generic [ref=e256]:
      - heading "Apple Footer" [level=2] [ref=e257]
      - region "Footnotes" [ref=e258]:
        - list [ref=e259]:
          - listitem [ref=e260]:
            - text: "* Available for Qualified Purchasers only. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad (“Eligible Product”) at a Qualifying Location through September 24, 2026. Gift card values may vary by Eligible Product. Customers will receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Only one Apple Gift Card per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms"
            - link "here" [ref=e261] [cursor=pointer]:
              - /url: /us-edu/shop/goto/browse/home/back_to_school/terms_conditions
            - text: .
        - list [ref=e262]:
          - listitem [ref=e263]: Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
        - list [ref=e264]:
          - listitem [ref=e265]:
            - generic [ref=e266]:
              - paragraph [ref=e267]: To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              - paragraph [ref=e268]: Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
              - paragraph [ref=e269]: All communications from Apple and Goldman Sachs Bank USA about Apple Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Apple Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          - listitem [ref=e270]:
            - generic [ref=e271]:
              - text: Learn more about how Apple Card applications are evaluated at
              - link "support.apple.com/kb/HT209218" [ref=e272] [cursor=pointer]:
                - /url: https://support.apple.com/kb/HT209218
              - text: .
          - listitem [ref=e273]: A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          - listitem [ref=e274]: Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
      - navigation "Apple Directory" [ref=e275]:
        - generic [ref=e276]:
          - generic:
            - heading "Shop and Learn" [level=3] [ref=e277]
            - list [ref=e279]:
              - listitem [ref=e280]:
                - link "Store" [ref=e281] [cursor=pointer]:
                  - /url: /us/shop/goto/store
              - listitem [ref=e282]:
                - link "Mac" [ref=e283] [cursor=pointer]:
                  - /url: /mac/
              - listitem [ref=e284]:
                - link "iPad" [ref=e285] [cursor=pointer]:
                  - /url: /ipad/
              - listitem [ref=e286]:
                - link "iPhone" [ref=e287] [cursor=pointer]:
                  - /url: /iphone/
              - listitem [ref=e288]:
                - link "Watch" [ref=e289] [cursor=pointer]:
                  - /url: /watch/
              - listitem [ref=e290]:
                - link "Vision" [ref=e291] [cursor=pointer]:
                  - /url: /apple-vision-pro/
              - listitem [ref=e292]:
                - link "AirPods" [ref=e293] [cursor=pointer]:
                  - /url: /airpods/
              - listitem [ref=e294]:
                - link "TV & Home" [ref=e295] [cursor=pointer]:
                  - /url: /tv-home/
              - listitem [ref=e296]:
                - link "AirTag" [ref=e297] [cursor=pointer]:
                  - /url: /airtag/
              - listitem [ref=e298]:
                - link "Accessories" [ref=e299] [cursor=pointer]:
                  - /url: /us/shop/goto/buy_accessories
              - listitem [ref=e300]:
                - link "Gift Cards" [ref=e301] [cursor=pointer]:
                  - /url: /us/shop/goto/giftcards
          - generic:
            - heading "Apple Wallet" [level=3] [ref=e302]
            - list [ref=e304]:
              - listitem [ref=e305]:
                - link "Wallet" [ref=e306] [cursor=pointer]:
                  - /url: /wallet/
              - listitem [ref=e307]:
                - link "Apple Card" [ref=e308] [cursor=pointer]:
                  - /url: /apple-card/
              - listitem [ref=e309]:
                - link "Apple Pay" [ref=e310] [cursor=pointer]:
                  - /url: /apple-pay/
              - listitem [ref=e311]:
                - link "Apple Cash" [ref=e312] [cursor=pointer]:
                  - /url: /apple-cash/
        - generic [ref=e313]:
          - generic:
            - heading "Account" [level=3] [ref=e314]
            - list [ref=e316]:
              - listitem [ref=e317]:
                - link "Manage Your Apple Account" [ref=e318] [cursor=pointer]:
                  - /url: https://account.apple.com/
              - listitem [ref=e319]:
                - link "Apple Store Account" [ref=e320] [cursor=pointer]:
                  - /url: /us/shop/goto/account
              - listitem [ref=e321]:
                - link "iCloud.com" [ref=e322] [cursor=pointer]:
                  - /url: https://www.icloud.com
          - generic:
            - heading "Entertainment" [level=3] [ref=e323]
            - list [ref=e325]:
              - listitem [ref=e326]:
                - link "Apple One" [ref=e327] [cursor=pointer]:
                  - /url: /apple-one/
              - listitem [ref=e328]:
                - link "Apple TV" [ref=e329] [cursor=pointer]:
                  - /url: /apple-tv/
              - listitem [ref=e330]:
                - link "Apple Music" [ref=e331] [cursor=pointer]:
                  - /url: /apple-music/
              - listitem [ref=e332]:
                - link "Apple Arcade" [ref=e333] [cursor=pointer]:
                  - /url: /apple-arcade/
              - listitem [ref=e334]:
                - link "Apple Fitness+" [ref=e335] [cursor=pointer]:
                  - /url: /apple-fitness-plus/
              - listitem [ref=e336]:
                - link "Apple News+" [ref=e337] [cursor=pointer]:
                  - /url: /apple-news/
              - listitem [ref=e338]:
                - link "Apple Podcasts" [ref=e339] [cursor=pointer]:
                  - /url: /apple-podcasts/
              - listitem [ref=e340]:
                - link "Apple Books" [ref=e341] [cursor=pointer]:
                  - /url: /apple-books/
              - listitem [ref=e342]:
                - link "App Store" [ref=e343] [cursor=pointer]:
                  - /url: /app-store/
        - generic [ref=e344]:
          - generic:
            - heading "Apple Store" [level=3] [ref=e345]
            - list [ref=e347]:
              - listitem [ref=e348]:
                - link "Find a Store" [ref=e349] [cursor=pointer]:
                  - /url: /retail/
              - listitem [ref=e350]:
                - link "Genius Bar" [ref=e351] [cursor=pointer]:
                  - /url: /retail/geniusbar/
              - listitem [ref=e352]:
                - link "Today at Apple" [ref=e353] [cursor=pointer]:
                  - /url: /today/
              - listitem [ref=e354]:
                - link "Group Reservations" [ref=e355] [cursor=pointer]:
                  - /url: /today/groups/
              - listitem [ref=e356]:
                - link "Apple Camp" [ref=e357] [cursor=pointer]:
                  - /url: /today/camp/
              - listitem [ref=e358]:
                - link "Apple Store App" [ref=e359] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/apple-store/id375380948
              - listitem [ref=e360]:
                - link "Certified Refurbished" [ref=e361] [cursor=pointer]:
                  - /url: /us/shop/goto/special_deals
              - listitem [ref=e362]:
                - link "Apple Upgrade" [ref=e363] [cursor=pointer]:
                  - /url: /us/shop/goto/apple_upgrade
              - listitem [ref=e364]:
                - link "Apple Trade In" [ref=e365] [cursor=pointer]:
                  - /url: /us/shop/goto/trade_in
              - listitem [ref=e366]:
                - link "Financing" [ref=e367] [cursor=pointer]:
                  - /url: /us/shop/goto/payment_plan
              - listitem [ref=e368]:
                - link "Carrier Deals at Apple" [ref=e369] [cursor=pointer]:
                  - /url: /us/shop/goto/buy_iphone/carrier_offers
              - listitem [ref=e370]:
                - link "Order Status" [ref=e371] [cursor=pointer]:
                  - /url: /us/shop/goto/order/list
              - listitem [ref=e372]:
                - link "Shopping Help" [ref=e373] [cursor=pointer]:
                  - /url: /us/shop/goto/help
        - generic [ref=e374]:
          - generic:
            - heading "For Business" [level=3] [ref=e375]
            - list [ref=e377]:
              - listitem [ref=e378]:
                - link "Apple and Business" [ref=e379] [cursor=pointer]:
                  - /url: /business/
              - listitem [ref=e380]:
                - link "Shop for Business" [ref=e381] [cursor=pointer]:
                  - /url: /retail/business/
          - generic:
            - heading "For Education" [level=3] [ref=e382]
            - list [ref=e384]:
              - listitem [ref=e385]:
                - link "Apple and Education" [ref=e386] [cursor=pointer]:
                  - /url: /education/
              - listitem [ref=e387]:
                - link "Shop for K-12" [ref=e388] [cursor=pointer]:
                  - /url: /education/k12/how-to-buy/
              - listitem [ref=e389]:
                - link "Shop for College" [ref=e390] [cursor=pointer]:
                  - /url: /us/shop/goto/educationrouting
          - generic:
            - heading "For Healthcare" [level=3] [ref=e391]
            - list [ref=e393]:
              - listitem [ref=e394]:
                - link "Apple and Healthcare" [ref=e395] [cursor=pointer]:
                  - /url: /healthcare/
          - generic:
            - heading "For Government" [level=3] [ref=e396]
            - list [ref=e398]:
              - listitem [ref=e399]:
                - link "Apple and Government" [ref=e400] [cursor=pointer]:
                  - /url: /government/
              - listitem [ref=e401]:
                - link "Shop for Veterans and Military" [ref=e402] [cursor=pointer]:
                  - /url: /us/shop/goto/eppstore/veteransandmilitary
              - listitem [ref=e403]:
                - link "Shop for State and Local Employees" [ref=e404] [cursor=pointer]:
                  - /url: /us_epp_67909/store
              - listitem [ref=e405]:
                - link "Shop for Federal Employees" [ref=e406] [cursor=pointer]:
                  - /url: /us_epp_55499/store
        - generic [ref=e407]:
          - generic:
            - heading "Apple Values" [level=3] [ref=e408]
            - list [ref=e410]:
              - listitem [ref=e411]:
                - link "Accessibility" [ref=e412] [cursor=pointer]:
                  - /url: /accessibility/
              - listitem [ref=e413]:
                - link "Education" [ref=e414] [cursor=pointer]:
                  - /url: /education-initiative/
              - listitem [ref=e415]:
                - link "Environment" [ref=e416] [cursor=pointer]:
                  - /url: /environment/
              - listitem [ref=e417]:
                - link "Inclusion and Diversity" [ref=e418] [cursor=pointer]:
                  - /url: /diversity/
              - listitem [ref=e419]:
                - link "Privacy" [ref=e420] [cursor=pointer]:
                  - /url: /privacy/
              - listitem [ref=e421]:
                - link "Racial Equity and Justice" [ref=e422] [cursor=pointer]:
                  - /url: /racial-equity-justice-initiative/
              - listitem [ref=e423]:
                - link "Supply Chain Innovation" [ref=e424] [cursor=pointer]:
                  - /url: /supply-chain/
          - generic:
            - heading "About Apple" [level=3] [ref=e425]
            - list [ref=e427]:
              - listitem [ref=e428]:
                - link "Newsroom" [ref=e429] [cursor=pointer]:
                  - /url: /newsroom/
              - listitem [ref=e430]:
                - link "Apple Leadership" [ref=e431] [cursor=pointer]:
                  - /url: /leadership/
              - listitem [ref=e432]:
                - link "Career Opportunities" [ref=e433] [cursor=pointer]:
                  - /url: /careers/us/
              - listitem [ref=e434]:
                - link "Investors" [ref=e435] [cursor=pointer]:
                  - /url: https://investor.apple.com/
              - listitem [ref=e436]:
                - link "Ethics & Compliance" [ref=e437] [cursor=pointer]:
                  - /url: /compliance/
              - listitem [ref=e438]:
                - link "Events" [ref=e439] [cursor=pointer]:
                  - /url: /apple-events/
              - listitem [ref=e440]:
                - link "Contact Apple" [ref=e441] [cursor=pointer]:
                  - /url: /contact/
      - generic [ref=e442]:
        - generic [ref=e443]:
          - text: "More ways to shop:"
          - link "Find an Apple Store" [ref=e444] [cursor=pointer]:
            - /url: /retail/
          - text: or
          - link "other retailer" [ref=e445] [cursor=pointer]:
            - /url: https://locate.apple.com/
          - text: near you.
          - generic [ref=e446]:
            - text: Or call
            - link "1-800-MY-APPLE" [ref=e447] [cursor=pointer]:
              - /url: tel:1-800-692-7753
            - text: (1-800-692-7753).
        - generic [ref=e448]:
          - generic [ref=e449]:
            - generic [ref=e450]: Copyright © 2026 Apple Inc. All rights reserved.
            - list [ref=e451]:
              - listitem [ref=e452]:
                - link "Privacy Policy" [ref=e453] [cursor=pointer]:
                  - /url: /legal/privacy/
              - listitem [ref=e454]:
                - link "Terms of Use" [ref=e455] [cursor=pointer]:
                  - /url: /legal/internet-services/terms/site.html
              - listitem [ref=e456]:
                - link "Sales and Refunds" [ref=e457] [cursor=pointer]:
                  - /url: /us/shop/goto/help/sales_refunds
              - listitem [ref=e458]:
                - link "Legal" [ref=e459] [cursor=pointer]:
                  - /url: /legal/
              - listitem [ref=e460]:
                - link "Site Map" [ref=e461] [cursor=pointer]:
                  - /url: /sitemap/
          - link "United States. Choose your country or region" [ref=e463] [cursor=pointer]:
            - /url: /choose-country-region/
            - text: United States
```

# Test source

```ts
  1   | const { test } = require('@playwright/test');
  2   | const AxeBuilder = require('@axe-core/playwright').default;
  3   | const fs = require ('fs');
  4   | test('Scan Multiple Pages', async ({page}) => {
  5   |     const pages = ['https://apple.com',
  6   |        // 'https://www.apple.com/in/tv-home'
  7   |     ];
  8   |     
  9   |     let allResults = [];
  10  |     for (const url of pages) {
  11  |         console.log(`Scanning: ${url}`);
  12  |         await page.goto(url);
  13  |         const filename = 
  14  |         url.replace(/https?:\/\//, "")
  15  |         .replace(/[\/:\.?&=]/g, "_");
  16  |         
  17  |         await page.screenshot({
  18  |             path: 'screenshots/${fileName}.png',
  19  |             fullPage: true
  20  |         });
  21  |         const results = 
  22  |         await new AxeBuilder({page}).analyze();
  23  |         const criticalOrSeriousIssues = 
  24  |         results.violations.filter(
  25  |             violation =>
  26  |                 violation.impact === 'critical'  ||
  27  |                 violation.impact === 'Serious'
  28  |                );
  29  |         if (criticalOrSeriousIssues.length > 0) {
  30  | 
> 31  |             throw new Error('Critical/Serious accessibility violations found: ${url}: ${criticalOrSeriousIssues.length}'
      |                   ^ Error: Critical/Serious accessibility violations found: ${url}: ${criticalOrSeriousIssues.length}
  32  |             );
  33  |         }
  34  | 
  35  |         allResults.push({ 
  36  |             page: url, 
  37  |             violationsCount: results.violations.length,
  38  |             violations: results.violations
  39  |         });
  40  |     }
  41  | fs.writeFileSync(
  42  |     'multi-page-report.json',
  43  |     JSON.stringify(allResults, null, 2)
  44  | );
  45  | let htmlContent = `
  46  | <html> 
  47  | <head> 
  48  | <title>A11y Report</title>
  49  | </head>
  50  | <body>
  51  | <h1>Accessibility Report<h1>
  52  | `;
  53  | 
  54  | allResults.forEach(result => {
  55  | 
  56  |     htmlContent += `
  57  |     <h2>Page: ${result.page}</h2>
  58  |     <p>
  59  |        <strong>Total Violations: </strong>
  60  |        ${result.violationCount}
  61  |     </p> 
  62  |      `;
  63  | 
  64  |      if (result.violationCount === 0) {
  65  |         htmlContent += `
  66  |         <p>No Accessibility Violations Found</p>
  67  |         `;
  68  |      }
  69  |      else {
  70  |         result.violations.forEach(v => {
  71  |             htmlContent += `
  72  |             <h3>${v.id}</h3>
  73  |             <p>
  74  |             <strong>Impact: </strong>
  75  |             ${v.impact}
  76  |             </p>
  77  |             <p>
  78  |             <strong>Wcag:</strong>
  79  |             ${v.Wcag}
  80  |             </p>
  81  |             <p>
  82  |             <strong>Description:</strong>
  83  |             ${v.description}
  84  |             </p>
  85  |             <p>
  86  |             <strong>Help:</strong>
  87  |             ${v.help}
  88  |             </p>
  89  |             <hr>
  90  |             `;
  91  |         } );
  92  |      }
  93  | });
  94  | 
  95  | htmlContent += `
  96  | </body>
  97  | </html>
  98  | `;
  99  | 
  100 | fs.writeFileSync(
  101 |     'a11y-report.html',
  102 |     htmlContent
  103 | );
  104 | console.log("Accessibility Scan Started");
  105 | console.log("Report Created Successfully");
  106 | });
```