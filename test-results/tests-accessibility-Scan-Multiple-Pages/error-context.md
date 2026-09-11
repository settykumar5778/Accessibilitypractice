# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility.spec.js >> Scan Multiple Pages
- Location: tests\accessibility.spec.js:40:1

# Error details

```
Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 4
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - navigation "Global" [ref=f1e3]:
    - list [ref=f1e5]:
      - listitem [ref=f1e6]:
        - link "Apple" [ref=f1e7] [cursor=pointer]:
          - /url: /in/
      - listitem [ref=f1e8]:
        - generic [ref=f1e10]:
          - list [ref=f1e12]:
            - listitem [ref=f1e13]:
              - link "Store" [ref=f1e14] [cursor=pointer]:
                - /url: /in/shop/goto/store
            - listitem:
              - button "Store menu"
          - list [ref=f1e17]:
            - listitem [ref=f1e18]:
              - link "Mac" [ref=f1e19] [cursor=pointer]:
                - /url: /in/mac/
            - listitem:
              - button "Mac menu"
          - list [ref=f1e22]:
            - listitem [ref=f1e23]:
              - link "iPad" [ref=f1e24] [cursor=pointer]:
                - /url: /in/ipad/
            - listitem:
              - button "iPad menu"
          - list [ref=f1e27]:
            - listitem [ref=f1e28]:
              - link "iPhone" [ref=f1e29] [cursor=pointer]:
                - /url: /in/iphone/
            - listitem:
              - button "iPhone menu"
          - list [ref=f1e32]:
            - listitem [ref=f1e33]:
              - link "Watch" [ref=f1e34] [cursor=pointer]:
                - /url: /in/watch/
            - listitem:
              - button "Watch menu"
          - list [ref=f1e37]:
            - listitem [ref=f1e38]:
              - link "AirPods" [ref=f1e39] [cursor=pointer]:
                - /url: /in/airpods/
            - listitem:
              - button "AirPods menu"
          - list [ref=f1e42]:
            - listitem [ref=f1e43]:
              - link "TV and Home" [ref=f1e44] [cursor=pointer]:
                - /url: /in/tv-home/
                - generic [ref=f1e45]: TV & Home
            - listitem:
              - button "TV and Home menu"
          - list [ref=f1e47]:
            - listitem [ref=f1e48]:
              - link "Entertainment" [ref=f1e49] [cursor=pointer]:
                - /url: /in/entertainment/
            - listitem:
              - button "Entertainment menu"
          - list [ref=f1e52]:
            - listitem [ref=f1e53]:
              - link "Accessories" [ref=f1e54] [cursor=pointer]:
                - /url: /in/shop/goto/buy_accessories
            - listitem:
              - button "Accessories menu"
          - list [ref=f1e57]:
            - listitem [ref=f1e58]:
              - link "Support" [ref=f1e59] [cursor=pointer]:
                - /url: https://support.apple.com/en-in/?cid=gn-ols-home-hp-tab
            - listitem:
              - button "Support menu"
      - listitem [ref=f1e61]:
        - button "Search apple.com" [ref=f1e62] [cursor=pointer]
      - listitem [ref=f1e63]:
        - button "Shopping Bag" [ref=f1e65] [cursor=pointer]
  - navigation [ref=f1e67]:
    - generic [ref=f1e68]:
      - list [ref=f1e69]:
        - listitem [ref=f1e70]:
          - link "Apple TV 4K" [ref=f1e71] [cursor=pointer]:
            - /url: /in/apple-tv-4k/
            - figure [ref=f1e72]
        - listitem [ref=f1e74]:
          - link "Apple TV app" [ref=f1e75] [cursor=pointer]:
            - /url: /in/apple-tv-app/
            - figure [ref=f1e76]
        - listitem [ref=f1e78]:
          - link "Apple TV" [ref=f1e79] [cursor=pointer]:
            - /url: /in/apple-tv-plus/
            - figure [ref=f1e80]
        - listitem [ref=f1e82]:
          - link "HomePod" [ref=f1e83] [cursor=pointer]:
            - /url: /in/homepod-2nd-generation/
            - figure [ref=f1e84]
        - listitem [ref=f1e86]:
          - link "HomePod mini" [ref=f1e87] [cursor=pointer]:
            - /url: /in/homepod-mini/
            - figure [ref=f1e88]
        - listitem [ref=f1e90]:
          - link "Home app" [ref=f1e91] [cursor=pointer]:
            - /url: /in/home-app/
            - figure [ref=f1e92]
        - listitem [ref=f1e94]:
          - link "Accessories" [ref=f1e95] [cursor=pointer]:
            - /url: /in/shop/goto/smart_home/accessories
            - figure [ref=f1e96]
      - generic:
        - button [disabled] [ref=f1e98]: 
        - button [disabled] [ref=f1e99]: 
  - main [ref=f1e100]:
    - generic [ref=f1e102]:
      - heading "TV & Home" [level=1] [ref=f1e103]
      - generic [ref=f1e104]:
        - generic [ref=f1e107]:
          - generic [ref=f1e108]:
            - paragraph [ref=f1e109]: HomePod
            - heading "Profound sound." [level=3] [ref=f1e110]
            - paragraph [ref=f1e111]: ₹44900.00*
            - generic [ref=f1e112]:
              - link "buy - homepod 2nd generation" [ref=f1e113] [cursor=pointer]:
                - /url: /in/shop/goto/buy_homepod/homepod
                - text: Buy
              - link "learn more about homepod 2nd generation" [ref=f1e114] [cursor=pointer]:
                - /url: /in/homepod-2nd-generation/
                - text: Learn more
                - generic [ref=f1e115]: 
          - img "One White, and one Midnight HomePod pictured side-by-side" [ref=f1e118]
        - generic [ref=f1e121]:
          - generic [ref=f1e122]:
            - paragraph [ref=f1e123]: HomePod mini
            - heading "Surprising sound for its size." [level=3] [ref=f1e124]
            - paragraph [ref=f1e125]: ₹15900.00*
            - generic [ref=f1e126]:
              - link "buy homepod mini" [ref=f1e127] [cursor=pointer]:
                - /url: /in/shop/goto/buy_homepod/homepod_mini
                - text: Buy
              - link "learn more about homepod mini" [ref=f1e128] [cursor=pointer]:
                - /url: /in/homepod-mini/
                - text: Learn more
                - generic [ref=f1e129]: 
          - 'img "From left to right: one White, one Blue, one Orange, one Yellow, and one Midnight HomePod mini" [ref=f1e132]'
        - generic [ref=f1e135]:
          - generic [ref=f1e136]:
            - img "Apple TV 4K" [ref=f1e138]
            - heading "The Apple experience. Cinematic in every sense." [level=3] [ref=f1e139]: The Apple experience.Cinematic in every sense.
            - paragraph [ref=f1e140]: Starting from ₹25900.00*
            - generic [ref=f1e141]:
              - link "Buy apple tv 4k" [ref=f1e142] [cursor=pointer]:
                - /url: /in/shop/goto/buy_tv/apple_tv_4k
                - text: Buy
              - link "learn more about apple tv 4k" [ref=f1e143] [cursor=pointer]:
                - /url: /in/apple-tv-4k/
                - text: Learn more
                - generic [ref=f1e144]: 
          - img "Image shows Apple TV 4k and Siri remote" [ref=f1e147]
        - generic [ref=f1e150]:
          - generic [ref=f1e151]:
            - paragraph [ref=f1e153]: Home app
            - heading "The foundation for a smarter home." [level=3] [ref=f1e154]
            - link "learn more about home app" [ref=f1e156] [cursor=pointer]:
              - /url: /in/home-app/
              - text: Learn more
              - generic [ref=f1e157]: 
          - img "An iPhone showing the Home App 'My Home' UI" [ref=f1e160]
    - generic [ref=f1e162]:
      - heading "Every reason to turn your house into a smart home." [level=2] [ref=f1e164]
      - generic "smart home gallery" [ref=f1e165]:
        - generic [ref=f1e166]:
          - list [ref=f1e168]:
            - generic [ref=f1e170]:
              - generic [ref=f1e171]:
                - heading "Easily control your home from anywhere with your favourite devices." [level=4] [ref=f1e172]
                - link "learn more about the home app" [ref=f1e173] [cursor=pointer]:
                  - /url: /in/home-app/
                  - text: Learn more about the Home app
                  - generic [ref=f1e174]: 
              - img "A Midnight HomePod with iPhone showing 'My Home' UI on the Home app" [ref=f1e177]
            - generic [ref=f1e179]:
              - generic [ref=f1e180]:
                - heading "Seamlessly connected entertainment in every room." [level=4] [ref=f1e181]
                - link "learn more about homepod" [ref=f1e182] [cursor=pointer]:
                  - /url: /in/homepod/
                  - text: Learn more about HomePod
                  - generic [ref=f1e183]: 
              - img "Floor plan showing a HomePod or HomePod mini in multiple rooms" [ref=f1e186]
            - generic [ref=f1e188]:
              - generic [ref=f1e189]:
                - heading "Run it all with your voice." [level=4] [ref=f1e190]
                - link "learn more about siri" [ref=f1e191] [cursor=pointer]:
                  - /url: /in/siri/
                  - text: Learn more about Siri
                  - generic [ref=f1e192]: 
              - generic [ref=f1e193]:
                - paragraph [ref=f1e194]: Hey Siri, set my bedtime scene
                - paragraph [ref=f1e195]: Hey Siri, make it warmer
                - paragraph [ref=f1e196]: Hey Siri, turn off the lights downstairs
            - generic [ref=f1e198]:
              - generic [ref=f1e199]:
                - heading "All with the security and privacy of Apple." [level=4] [ref=f1e200]
                - link "learn more about privacy" [ref=f1e201] [cursor=pointer]:
                  - /url: /in/privacy/
                  - text: Learn more about Privacy
                  - generic [ref=f1e202]: 
              - img "Apple privacy icon" [ref=f1e205]
          - list [ref=f1e207]:
            - listitem [ref=f1e208]:
              - button "Previous" [disabled] [ref=f1e209]
            - listitem [ref=f1e210]:
              - button "Next" [ref=f1e211] [cursor=pointer]
    - generic [ref=f1e213]:
      - heading "Watch, sing, play and work out. On the big screen." [level=2] [ref=f1e217]
      - generic [ref=f1e219]:
        - img "A flatscreen television showing a video of all Apple services available on Apple TV" [ref=f1e221]
        - generic [ref=f1e223]:
          - button "play big screen video"
      - generic [ref=f1e226]:
        - generic [ref=f1e227]:
          - img "learn more about apple tv" [ref=f1e230]
          - heading "Stream award-winning Apple Originals on every screen." [level=2] [ref=f1e231]
          - generic [ref=f1e232]:
            - link "try apple tv free" [ref=f1e233] [cursor=pointer]:
              - /url: https://tv.apple.com/in?itscg=10000&itsct=pod-services-tv-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e234]: "1"
            - link "learn more about apple tv" [ref=f1e235] [cursor=pointer]:
              - /url: /in/apple-tv-plus/
              - text: Learn more
              - generic [ref=f1e236]: 
        - generic [ref=f1e237]:
          - img "learn more about apple music" [ref=f1e240]
          - heading "All music. Highest audio quality. Zero ads." [level=2] [ref=f1e241]
          - generic [ref=f1e242]:
            - link "try it free, 2 footnote, apple music" [ref=f1e243] [cursor=pointer]:
              - /url: https://music.apple.com/in/?itscg=10000&itsct=pod-services-music-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e244]: "2"
            - link "learn more about apple music" [ref=f1e245] [cursor=pointer]:
              - /url: /in/apple-music/
              - text: Learn more
              - generic [ref=f1e246]: 
        - generic [ref=f1e247]:
          - img "learn more about apple arcade" [ref=f1e250]
          - heading "Best collection of mobile games for every player." [level=2] [ref=f1e251]
          - generic [ref=f1e252]:
            - link "get started, apple arcade" [ref=f1e253] [cursor=pointer]:
              - /url: https://apps.apple.com/in/arcade?itscg=10000&itsct=pod-services-arcade-apl-tvhm-21_1019
              - text: Get started
            - link "learn more about apple arcade" [ref=f1e254] [cursor=pointer]:
              - /url: /in/apple-arcade/
              - text: Learn more
              - generic [ref=f1e255]: 
        - generic [ref=f1e256]:
          - img "learn more about apple fitness+" [ref=f1e259]
          - heading "From HIIT to Meditation, there’s something for everyone." [level=2] [ref=f1e260]
          - generic [ref=f1e261]:
            - link "try it free, 3 footnote, apple fitness+" [ref=f1e262] [cursor=pointer]:
              - /url: https://fitness.apple.com/in/subscribe?itscg=10000&itsct=pod-services-fitness-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e263]: "3"
            - link "learn more about apple fitness+" [ref=f1e264] [cursor=pointer]:
              - /url: /in/apple-fitness-plus/
              - text: Learn more
              - generic [ref=f1e265]: 
  - contentinfo [ref=f1e266]:
    - generic [ref=f1e267]:
      - heading "Apple Footer" [level=2] [ref=f1e268]
      - generic [ref=f1e270]:
        - generic [ref=f1e272]:
          - figure [ref=f1e273]
          - heading "Free delivery and pickup" [level=3] [ref=f1e274]
          - paragraph [ref=f1e275]: Get free delivery or pickup at your Apple Store.
          - link "Learn more" [ref=f1e276] [cursor=pointer]:
            - /url: /in/shop/shipping-pickup
        - generic [ref=f1e279]:
          - figure [ref=f1e280]
          - heading "Ways to buy" [level=5] [ref=f1e281]
          - paragraph [ref=f1e282]: Choose the way that′s right for you.
          - link "Learn more" [ref=f1e283] [cursor=pointer]:
            - /url: /in/shop/goto/ways_to_buy
        - generic [ref=f1e286]:
          - figure [ref=f1e287]
          - heading "Get help buying" [level=3] [ref=f1e288]
          - paragraph [ref=f1e289]: Have a question? Call a Specialist or chat online.
          - paragraph [ref=f1e290]: Call 000800 040 1966.
          - link "Contact us" [ref=f1e291] [cursor=pointer]:
            - /url: https://contactretail.apple.com/?pg=COM:tv-home&ap=COM&c=in&l=en
      - region "Footnotes" [ref=f1e292]:
        - list [ref=f1e293]:
          - listitem [ref=f1e294]: "*Listed pricing is Maximum Retail Price (inclusive of all taxes)."
        - list [ref=f1e295]:
          - listitem [ref=f1e296]: New subscribers only. ₹99/month after free trial. Apple TV subscription does not include third‑party branded subscription services or content available for rental or purchase in the Apple TV app. Plan automatically renews until cancelled. Terms apply.
          - listitem [ref=f1e297]: New subscribers only. ₹139/month after free trial. Plan automatically renews until cancelled. Terms apply.
          - listitem [ref=f1e298]: Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. ₹149/month after trial. Plan automatically renews until cancelled. Terms apply.
      - navigation "Breadcrumbs" [ref=f1e299]:
        - link "Apple" [ref=f1e300] [cursor=pointer]:
          - /url: /in/
          - generic [ref=f1e301]: 
        - generic [ref=f1e303]:
          - list:
            - listitem [ref=f1e304]: TV & Home
      - navigation "Apple Directory" [ref=f1e305]:
        - generic [ref=f1e306]:
          - generic:
            - heading "Shop and Learn" [level=3] [ref=f1e307]
            - list [ref=f1e309]:
              - listitem [ref=f1e310]:
                - link "Store" [ref=f1e311] [cursor=pointer]:
                  - /url: /in/shop/goto/store
              - listitem [ref=f1e312]:
                - link "Mac" [ref=f1e313] [cursor=pointer]:
                  - /url: /in/mac/
              - listitem [ref=f1e314]:
                - link "iPad" [ref=f1e315] [cursor=pointer]:
                  - /url: /in/ipad/
              - listitem [ref=f1e316]:
                - link "iPhone" [ref=f1e317] [cursor=pointer]:
                  - /url: /in/iphone/
              - listitem [ref=f1e318]:
                - link "Watch" [ref=f1e319] [cursor=pointer]:
                  - /url: /in/watch/
              - listitem [ref=f1e320]:
                - link "AirPods" [ref=f1e321] [cursor=pointer]:
                  - /url: /in/airpods/
              - listitem [ref=f1e322]:
                - link "TV & Home" [ref=f1e323] [cursor=pointer]:
                  - /url: /in/tv-home/
              - listitem [ref=f1e324]:
                - link "AirTag" [ref=f1e325] [cursor=pointer]:
                  - /url: /in/airtag/
              - listitem [ref=f1e326]:
                - link "Accessories" [ref=f1e327] [cursor=pointer]:
                  - /url: /in/shop/goto/buy_accessories
              - listitem [ref=f1e328]:
                - link "Gift Cards" [ref=f1e329] [cursor=pointer]:
                  - /url: /in/shop/goto/giftcards
          - generic:
            - heading "Apple Wallet" [level=3] [ref=f1e330]
            - list [ref=f1e332]:
              - listitem [ref=f1e333]:
                - link "Wallet" [ref=f1e334] [cursor=pointer]:
                  - /url: /in/wallet/
        - generic [ref=f1e335]:
          - generic:
            - heading "Account" [level=3] [ref=f1e336]
            - list [ref=f1e338]:
              - listitem [ref=f1e339]:
                - link "Manage Your Apple Account" [ref=f1e340] [cursor=pointer]:
                  - /url: https://account.apple.com/in/
              - listitem [ref=f1e341]:
                - link "Apple Store Account" [ref=f1e342] [cursor=pointer]:
                  - /url: /in/shop/goto/account
              - listitem [ref=f1e343]:
                - link "iCloud.com" [ref=f1e344] [cursor=pointer]:
                  - /url: https://www.icloud.com
          - generic:
            - heading "Entertainment" [level=3] [ref=f1e345]
            - list [ref=f1e347]:
              - listitem [ref=f1e348]:
                - link "Apple One" [ref=f1e349] [cursor=pointer]:
                  - /url: /in/apple-one/
              - listitem [ref=f1e350]:
                - link "Apple TV" [ref=f1e351] [cursor=pointer]:
                  - /url: /in/apple-tv/
              - listitem [ref=f1e352]:
                - link "Apple Music" [ref=f1e353] [cursor=pointer]:
                  - /url: /in/apple-music/
              - listitem [ref=f1e354]:
                - link "Apple Arcade" [ref=f1e355] [cursor=pointer]:
                  - /url: /in/apple-arcade/
              - listitem [ref=f1e356]:
                - link "Apple Fitness+" [ref=f1e357] [cursor=pointer]:
                  - /url: /in/apple-fitness-plus/
              - listitem [ref=f1e358]:
                - link "Apple Podcasts" [ref=f1e359] [cursor=pointer]:
                  - /url: /in/apple-podcasts/
              - listitem [ref=f1e360]:
                - link "Apple Books" [ref=f1e361] [cursor=pointer]:
                  - /url: /in/apple-books/
              - listitem [ref=f1e362]:
                - link "App Store" [ref=f1e363] [cursor=pointer]:
                  - /url: /in/app-store/
        - generic [ref=f1e364]:
          - generic:
            - heading "Apple Store" [level=3] [ref=f1e365]
            - list [ref=f1e367]:
              - listitem [ref=f1e368]:
                - link "Find a Store" [ref=f1e369] [cursor=pointer]:
                  - /url: /in/retail/
              - listitem [ref=f1e370]:
                - link "Genius Bar" [ref=f1e371] [cursor=pointer]:
                  - /url: /in/retail/geniusbar/
              - listitem [ref=f1e372]:
                - link "Today at Apple" [ref=f1e373] [cursor=pointer]:
                  - /url: /in/today/
              - listitem [ref=f1e374]:
                - link "Group Reservations" [ref=f1e375] [cursor=pointer]:
                  - /url: /in/today/groups/
              - listitem [ref=f1e376]:
                - link "Apple Camp" [ref=f1e377] [cursor=pointer]:
                  - /url: /in/today/camp/
              - listitem [ref=f1e378]:
                - link "Apple Trade In" [ref=f1e379] [cursor=pointer]:
                  - /url: /in/shop/goto/trade_in
              - listitem [ref=f1e380]:
                - link "Ways to Buy" [ref=f1e381] [cursor=pointer]:
                  - /url: /in/shop/goto/ways_to_buy
              - listitem [ref=f1e382]:
                - link "Recycling Programme" [ref=f1e383] [cursor=pointer]:
                  - /url: /in/recycling/
              - listitem [ref=f1e384]:
                - link "Order Status" [ref=f1e385] [cursor=pointer]:
                  - /url: /in/shop/goto/order/list
              - listitem [ref=f1e386]:
                - link "Shopping Help" [ref=f1e387] [cursor=pointer]:
                  - /url: /in/shop/goto/help
        - generic [ref=f1e388]:
          - generic:
            - heading "For Business" [level=3] [ref=f1e389]
            - list [ref=f1e391]:
              - listitem [ref=f1e392]:
                - link "Apple and Business" [ref=f1e393] [cursor=pointer]:
                  - /url: /in/business/
              - listitem [ref=f1e394]:
                - link "Shop for Business" [ref=f1e395] [cursor=pointer]:
                  - /url: /in/retail/business/
          - generic:
            - heading "For Education" [level=3] [ref=f1e396]
            - list [ref=f1e398]:
              - listitem [ref=f1e399]:
                - link "Apple and Education" [ref=f1e400] [cursor=pointer]:
                  - /url: /in/education/
              - listitem [ref=f1e401]:
                - link "Shop for Education" [ref=f1e402] [cursor=pointer]:
                  - /url: /in/education/k12/how-to-buy/
              - listitem [ref=f1e403]:
                - link "Shop for University" [ref=f1e404] [cursor=pointer]:
                  - /url: /in/shop/goto/educationrouting
          - generic:
            - heading "For Healthcare" [level=3] [ref=f1e405]
            - list [ref=f1e407]:
              - listitem [ref=f1e408]:
                - link "Apple and Healthcare" [ref=f1e409] [cursor=pointer]:
                  - /url: /in/healthcare/
          - generic:
            - heading "For Government" [level=3] [ref=f1e410]
            - list [ref=f1e412]:
              - listitem [ref=f1e413]:
                - link "Apple and Government" [ref=f1e414] [cursor=pointer]:
                  - /url: /in/government/
        - generic [ref=f1e415]:
          - generic:
            - heading "Apple Values" [level=3] [ref=f1e416]
            - list [ref=f1e418]:
              - listitem [ref=f1e419]:
                - link "Accessibility" [ref=f1e420] [cursor=pointer]:
                  - /url: /in/accessibility/
              - listitem [ref=f1e421]:
                - link "Education" [ref=f1e422] [cursor=pointer]:
                  - /url: /in/education-initiative/
              - listitem [ref=f1e423]:
                - link "Environment" [ref=f1e424] [cursor=pointer]:
                  - /url: /in/environment/
              - listitem [ref=f1e425]:
                - link "Privacy" [ref=f1e426] [cursor=pointer]:
                  - /url: /in/privacy/
              - listitem [ref=f1e427]:
                - link "Supply Chain Innovation" [ref=f1e428] [cursor=pointer]:
                  - /url: /in/supply-chain/
          - generic:
            - heading "About Apple" [level=3] [ref=f1e429]
            - list [ref=f1e431]:
              - listitem [ref=f1e432]:
                - link "Newsroom" [ref=f1e433] [cursor=pointer]:
                  - /url: /in/newsroom/
              - listitem [ref=f1e434]:
                - link "Apple Leadership" [ref=f1e435] [cursor=pointer]:
                  - /url: /in/leadership/
              - listitem [ref=f1e436]:
                - link "Career Opportunities" [ref=f1e437] [cursor=pointer]:
                  - /url: /careers/in/
              - listitem [ref=f1e438]:
                - link "Investors" [ref=f1e439] [cursor=pointer]:
                  - /url: https://investor.apple.com/
              - listitem [ref=f1e440]:
                - link "Ethics & Compliance" [ref=f1e441] [cursor=pointer]:
                  - /url: /compliance/
              - listitem [ref=f1e442]:
                - link "Events" [ref=f1e443] [cursor=pointer]:
                  - /url: /in/apple-events/
              - listitem [ref=f1e444]:
                - link "Contact Apple" [ref=f1e445] [cursor=pointer]:
                  - /url: /in/contact/
      - generic [ref=f1e446]:
        - generic [ref=f1e447]:
          - text: "More ways to shop:"
          - link "Find an Apple Store" [ref=f1e448] [cursor=pointer]:
            - /url: /in/retail/
          - text: or
          - link "other retailer" [ref=f1e449] [cursor=pointer]:
            - /url: https://locate.apple.com/in/en/
          - text: near you.
          - generic [ref=f1e450]:
            - text: Or call
            - link "000800 040 1966" [ref=f1e451] [cursor=pointer]:
              - /url: tel:000800 040 1966
            - text: .
        - generic [ref=f1e452]:
          - generic [ref=f1e453]:
            - generic [ref=f1e454]: Copyright © 2026 Apple Inc. All rights reserved.
            - list [ref=f1e455]:
              - listitem [ref=f1e456]:
                - link "Privacy Policy" [ref=f1e457] [cursor=pointer]:
                  - /url: /in/legal/privacy/
              - listitem [ref=f1e458]:
                - link "Terms of Use" [ref=f1e459] [cursor=pointer]:
                  - /url: /in/legal/terms/site.html
              - listitem [ref=f1e460]:
                - link "Sales Policy" [ref=f1e461] [cursor=pointer]:
                  - /url: /in/shop/goto/help/sales_refunds
              - listitem [ref=f1e462]:
                - link "Legal" [ref=f1e463] [cursor=pointer]:
                  - /url: https://www.apple.com/in/legal/
              - listitem [ref=f1e464]:
                - link "Site Map" [ref=f1e465] [cursor=pointer]:
                  - /url: /in/sitemap/
          - link "India. Choose your country or region" [ref=f1e467] [cursor=pointer]:
            - /url: /choose-country-region/
            - text: India
```

# Test source

```ts
  159 |             ${v.helpUrl}
  160 |             ${v.helpUrl}
  161 |             </a>
  162 |             </p>
  163 |             <p>
  164 |             <strong> Affected Element:</strong></p>
  165 |             ${v.nodes.map((node, nodeIndex) => `
  166 |                 
  167 |                 <p>
  168 |                 <strong>Target:</strong>
  169 |                 ${node.target.join(', ')}
  170 |                 </p>
  171 |                 <p>
  172 |                 <strong>HTML Snippet:</strong>
  173 |                 </p>
  174 |                 <pre>
  175 |                 ${node.html
  176 |                     .replace(/</g, '&lt;')
  177 |                     .replace(/>/g, '&gt;')
  178 |                 }
  179 |                 </pre>
  180 |                 <p>
  181 |                 <strong>Failure Summary:</strong>
  182 |                 </p>
  183 |                 <pre>
  184 |                 ${node.failureSummary || 'N/A'}
  185 |                 </pre>
  186 |                 <p>
  187 |                 <strong>Actual Result:</strong>
  188 |                 </p>
  189 |                 <pre>
  190 |                 ${node.failureSummary || 'N/A'}
  191 |                 </pre>
  192 |                 <p>
  193 |                 <strong>Fix Recommendation:</strong>
  194 |                 </p>
  195 |                 <p>Review and follow the remediation guidance:</p>
  196 |                 <p>
  197 |                 ${v.helpURL}
  198 |                 </p>
  199 |                 `).join('')
  200 |             }
  201 |             <hr>
  202 |             `;
  203 |         } );
  204 |      }
  205 | });
  206 | htmlContent += `
  207 | </body>
  208 | </html>
  209 | `;
  210 | 
  211 | const totalViolations = 
  212 | criticalCount +
  213 | seriousCount +
  214 | moderateCount +
  215 | minorCount;
  216 | 
  217 | let accessibilityScore =
  218 |  100 - (
  219 |     criticalCount * 10 +
  220 |     seriousCount * 5 +
  221 |     moderateCount * 2 +
  222 |     minorCount * 1
  223 |      );
  224 |  
  225 |      accessibilityScore = 
  226 |   Math.max(accessibilityScore, 0);
  227 | 
  228 | const summarySection = `
  229 |   <h2>Accessibility Summary</h2>
  230 |     <p><strong>Report ID:</strong> ${reportId}</p>
  231 |     <p><strong>Application:</strong> ${applicationName}</p>
  232 |     <p><strong>Scan Date:</strong> ${scanDate}</p>
  233 |     <p><strong>Pages Scanned:</strong> ${pages.length}</p>
  234 |     <p><strong>Total Violations:</strong> ${totalViolations}</p>
  235 |     <p><strong>Critical:</strong> ${criticalCount}</p>
  236 |     <p><strong>Serious:</strong> ${seriousCount}</p>
  237 |     <p><strong>Moderate:</strong> ${moderateCount}</p>
  238 |     <p><strong>Minor:</strong> ${minorCount}</p>
  239 | 
  240 |    <p>
  241 |      <strong>Accessibility Score:</strong>
  242 |       ${accessibilityScore}%
  243 |      </p>
  244 | 
  245 |    <p>
  246 |      <strong>Status:</strong>
  247 |      ${
  248 |     criticalCount > 0 ||
  249 |     seriousCount > 0
  250 |     ? 'Fail'
  251 |     : 'PASS'
  252 |    }
  253 |    </p>
  254 |    <hr>
  255 | `;
  256 |   htmlContent = summarySection + htmlContent;
  257 |   fs.writeFileSync('a11y-report.html', htmlContent);
  258 |   if (totalCriticalOrSeriousIssues > 0) {
> 259 |     throw new Error(
      |           ^ Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 4
  260 |         `Accessibility Quality Gate Failed. Critical/Serious Issues Found: ${totalCriticalOrSeriousIssues}`
  261 |     );
  262 |   }
  263 | 
  264 | console.log("Accessibility Scan Started");
  265 | console.log("Report Created Successfully");
  266 | });
```