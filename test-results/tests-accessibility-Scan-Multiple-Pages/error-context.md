# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility.spec.js >> Scan Multiple Pages
- Location: tests\accessibility.spec.js:39:1

# Error details

```
Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 6
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
        - figure [ref=f1e224]:
          - generic [ref=f1e225]: "|Hozier Nobody’s Soldier"
        - button "pause big screen video" [ref=f1e227] [cursor=pointer]
      - generic [ref=f1e230]:
        - generic [ref=f1e231]:
          - img "learn more about apple tv" [ref=f1e234]
          - heading "Stream award-winning Apple Originals on every screen." [level=2] [ref=f1e235]
          - generic [ref=f1e236]:
            - link "try apple tv free" [ref=f1e237] [cursor=pointer]:
              - /url: https://tv.apple.com/in?itscg=10000&itsct=pod-services-tv-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e238]: "1"
            - link "learn more about apple tv" [ref=f1e239] [cursor=pointer]:
              - /url: /in/apple-tv-plus/
              - text: Learn more
              - generic [ref=f1e240]: 
        - generic [ref=f1e241]:
          - img "learn more about apple music" [ref=f1e244]
          - heading "All music. Highest audio quality. Zero ads." [level=2] [ref=f1e245]
          - generic [ref=f1e246]:
            - link "try it free, 2 footnote, apple music" [ref=f1e247] [cursor=pointer]:
              - /url: https://music.apple.com/in/?itscg=10000&itsct=pod-services-music-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e248]: "2"
            - link "learn more about apple music" [ref=f1e249] [cursor=pointer]:
              - /url: /in/apple-music/
              - text: Learn more
              - generic [ref=f1e250]: 
        - generic [ref=f1e251]:
          - img "learn more about apple arcade" [ref=f1e254]
          - heading "Best collection of mobile games for every player." [level=2] [ref=f1e255]
          - generic [ref=f1e256]:
            - link "get started, apple arcade" [ref=f1e257] [cursor=pointer]:
              - /url: https://apps.apple.com/in/arcade?itscg=10000&itsct=pod-services-arcade-apl-tvhm-21_1019
              - text: Get started
            - link "learn more about apple arcade" [ref=f1e258] [cursor=pointer]:
              - /url: /in/apple-arcade/
              - text: Learn more
              - generic [ref=f1e259]: 
        - generic [ref=f1e260]:
          - img "learn more about apple fitness+" [ref=f1e263]
          - heading "From HIIT to Meditation, there’s something for everyone." [level=2] [ref=f1e264]
          - generic [ref=f1e265]:
            - link "try it free, 3 footnote, apple fitness+" [ref=f1e266] [cursor=pointer]:
              - /url: https://fitness.apple.com/in/subscribe?itscg=10000&itsct=pod-services-fitness-apl-tvhm-21_1019
              - text: Try it free
              - superscript [ref=f1e267]: "3"
            - link "learn more about apple fitness+" [ref=f1e268] [cursor=pointer]:
              - /url: /in/apple-fitness-plus/
              - text: Learn more
              - generic [ref=f1e269]: 
  - contentinfo [ref=f1e270]:
    - generic [ref=f1e271]:
      - heading "Apple Footer" [level=2] [ref=f1e272]
      - generic [ref=f1e274]:
        - generic [ref=f1e276]:
          - figure [ref=f1e277]
          - heading "Free delivery and pickup" [level=3] [ref=f1e278]
          - paragraph [ref=f1e279]: Get free delivery or pickup at your Apple Store.
          - link "Learn more" [ref=f1e280] [cursor=pointer]:
            - /url: /in/shop/shipping-pickup
        - generic [ref=f1e283]:
          - figure [ref=f1e284]
          - heading "Ways to buy" [level=5] [ref=f1e285]
          - paragraph [ref=f1e286]: Choose the way that′s right for you.
          - link "Learn more" [ref=f1e287] [cursor=pointer]:
            - /url: /in/shop/goto/ways_to_buy
        - generic [ref=f1e290]:
          - figure [ref=f1e291]
          - heading "Get help buying" [level=3] [ref=f1e292]
          - paragraph [ref=f1e293]: Have a question? Call a Specialist or chat online.
          - paragraph [ref=f1e294]: Call 000800 040 1966.
          - link "Contact us" [ref=f1e295] [cursor=pointer]:
            - /url: https://contactretail.apple.com/?pg=COM:tv-home&ap=COM&c=in&l=en
      - region "Footnotes" [ref=f1e296]:
        - list [ref=f1e297]:
          - listitem [ref=f1e298]: "*Listed pricing is Maximum Retail Price (inclusive of all taxes)."
        - list [ref=f1e299]:
          - listitem [ref=f1e300]: New subscribers only. ₹99/month after free trial. Apple TV subscription does not include third‑party branded subscription services or content available for rental or purchase in the Apple TV app. Plan automatically renews until cancelled. Terms apply.
          - listitem [ref=f1e301]: New subscribers only. ₹139/month after free trial. Plan automatically renews until cancelled. Terms apply.
          - listitem [ref=f1e302]: Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. ₹149/month after trial. Plan automatically renews until cancelled. Terms apply.
      - navigation "Breadcrumbs" [ref=f1e303]:
        - link "Apple" [ref=f1e304] [cursor=pointer]:
          - /url: /in/
          - generic [ref=f1e305]: 
        - generic [ref=f1e307]:
          - list:
            - listitem [ref=f1e308]: TV & Home
      - navigation "Apple Directory" [ref=f1e309]:
        - generic [ref=f1e310]:
          - generic:
            - heading "Shop and Learn" [level=3] [ref=f1e311]
            - list [ref=f1e313]:
              - listitem [ref=f1e314]:
                - link "Store" [ref=f1e315] [cursor=pointer]:
                  - /url: /in/shop/goto/store
              - listitem [ref=f1e316]:
                - link "Mac" [ref=f1e317] [cursor=pointer]:
                  - /url: /in/mac/
              - listitem [ref=f1e318]:
                - link "iPad" [ref=f1e319] [cursor=pointer]:
                  - /url: /in/ipad/
              - listitem [ref=f1e320]:
                - link "iPhone" [ref=f1e321] [cursor=pointer]:
                  - /url: /in/iphone/
              - listitem [ref=f1e322]:
                - link "Watch" [ref=f1e323] [cursor=pointer]:
                  - /url: /in/watch/
              - listitem [ref=f1e324]:
                - link "AirPods" [ref=f1e325] [cursor=pointer]:
                  - /url: /in/airpods/
              - listitem [ref=f1e326]:
                - link "TV & Home" [ref=f1e327] [cursor=pointer]:
                  - /url: /in/tv-home/
              - listitem [ref=f1e328]:
                - link "AirTag" [ref=f1e329] [cursor=pointer]:
                  - /url: /in/airtag/
              - listitem [ref=f1e330]:
                - link "Accessories" [ref=f1e331] [cursor=pointer]:
                  - /url: /in/shop/goto/buy_accessories
              - listitem [ref=f1e332]:
                - link "Gift Cards" [ref=f1e333] [cursor=pointer]:
                  - /url: /in/shop/goto/giftcards
          - generic:
            - heading "Apple Wallet" [level=3] [ref=f1e334]
            - list [ref=f1e336]:
              - listitem [ref=f1e337]:
                - link "Wallet" [ref=f1e338] [cursor=pointer]:
                  - /url: /in/wallet/
        - generic [ref=f1e339]:
          - generic:
            - heading "Account" [level=3] [ref=f1e340]
            - list [ref=f1e342]:
              - listitem [ref=f1e343]:
                - link "Manage Your Apple Account" [ref=f1e344] [cursor=pointer]:
                  - /url: https://account.apple.com/in/
              - listitem [ref=f1e345]:
                - link "Apple Store Account" [ref=f1e346] [cursor=pointer]:
                  - /url: /in/shop/goto/account
              - listitem [ref=f1e347]:
                - link "iCloud.com" [ref=f1e348] [cursor=pointer]:
                  - /url: https://www.icloud.com
          - generic:
            - heading "Entertainment" [level=3] [ref=f1e349]
            - list [ref=f1e351]:
              - listitem [ref=f1e352]:
                - link "Apple One" [ref=f1e353] [cursor=pointer]:
                  - /url: /in/apple-one/
              - listitem [ref=f1e354]:
                - link "Apple TV" [ref=f1e355] [cursor=pointer]:
                  - /url: /in/apple-tv/
              - listitem [ref=f1e356]:
                - link "Apple Music" [ref=f1e357] [cursor=pointer]:
                  - /url: /in/apple-music/
              - listitem [ref=f1e358]:
                - link "Apple Arcade" [ref=f1e359] [cursor=pointer]:
                  - /url: /in/apple-arcade/
              - listitem [ref=f1e360]:
                - link "Apple Fitness+" [ref=f1e361] [cursor=pointer]:
                  - /url: /in/apple-fitness-plus/
              - listitem [ref=f1e362]:
                - link "Apple Podcasts" [ref=f1e363] [cursor=pointer]:
                  - /url: /in/apple-podcasts/
              - listitem [ref=f1e364]:
                - link "Apple Books" [ref=f1e365] [cursor=pointer]:
                  - /url: /in/apple-books/
              - listitem [ref=f1e366]:
                - link "App Store" [ref=f1e367] [cursor=pointer]:
                  - /url: /in/app-store/
        - generic [ref=f1e368]:
          - generic:
            - heading "Apple Store" [level=3] [ref=f1e369]
            - list [ref=f1e371]:
              - listitem [ref=f1e372]:
                - link "Find a Store" [ref=f1e373] [cursor=pointer]:
                  - /url: /in/retail/
              - listitem [ref=f1e374]:
                - link "Genius Bar" [ref=f1e375] [cursor=pointer]:
                  - /url: /in/retail/geniusbar/
              - listitem [ref=f1e376]:
                - link "Today at Apple" [ref=f1e377] [cursor=pointer]:
                  - /url: /in/today/
              - listitem [ref=f1e378]:
                - link "Group Reservations" [ref=f1e379] [cursor=pointer]:
                  - /url: /in/today/groups/
              - listitem [ref=f1e380]:
                - link "Apple Camp" [ref=f1e381] [cursor=pointer]:
                  - /url: /in/today/camp/
              - listitem [ref=f1e382]:
                - link "Apple Trade In" [ref=f1e383] [cursor=pointer]:
                  - /url: /in/shop/goto/trade_in
              - listitem [ref=f1e384]:
                - link "Ways to Buy" [ref=f1e385] [cursor=pointer]:
                  - /url: /in/shop/goto/ways_to_buy
              - listitem [ref=f1e386]:
                - link "Recycling Programme" [ref=f1e387] [cursor=pointer]:
                  - /url: /in/recycling/
              - listitem [ref=f1e388]:
                - link "Order Status" [ref=f1e389] [cursor=pointer]:
                  - /url: /in/shop/goto/order/list
              - listitem [ref=f1e390]:
                - link "Shopping Help" [ref=f1e391] [cursor=pointer]:
                  - /url: /in/shop/goto/help
        - generic [ref=f1e392]:
          - generic:
            - heading "For Business" [level=3] [ref=f1e393]
            - list [ref=f1e395]:
              - listitem [ref=f1e396]:
                - link "Apple and Business" [ref=f1e397] [cursor=pointer]:
                  - /url: /in/business/
              - listitem [ref=f1e398]:
                - link "Shop for Business" [ref=f1e399] [cursor=pointer]:
                  - /url: /in/retail/business/
          - generic:
            - heading "For Education" [level=3] [ref=f1e400]
            - list [ref=f1e402]:
              - listitem [ref=f1e403]:
                - link "Apple and Education" [ref=f1e404] [cursor=pointer]:
                  - /url: /in/education/
              - listitem [ref=f1e405]:
                - link "Shop for Education" [ref=f1e406] [cursor=pointer]:
                  - /url: /in/education/k12/how-to-buy/
              - listitem [ref=f1e407]:
                - link "Shop for University" [ref=f1e408] [cursor=pointer]:
                  - /url: /in/shop/goto/educationrouting
          - generic:
            - heading "For Healthcare" [level=3] [ref=f1e409]
            - list [ref=f1e411]:
              - listitem [ref=f1e412]:
                - link "Apple and Healthcare" [ref=f1e413] [cursor=pointer]:
                  - /url: /in/healthcare/
          - generic:
            - heading "For Government" [level=3] [ref=f1e414]
            - list [ref=f1e416]:
              - listitem [ref=f1e417]:
                - link "Apple and Government" [ref=f1e418] [cursor=pointer]:
                  - /url: /in/government/
        - generic [ref=f1e419]:
          - generic:
            - heading "Apple Values" [level=3] [ref=f1e420]
            - list [ref=f1e422]:
              - listitem [ref=f1e423]:
                - link "Accessibility" [ref=f1e424] [cursor=pointer]:
                  - /url: /in/accessibility/
              - listitem [ref=f1e425]:
                - link "Education" [ref=f1e426] [cursor=pointer]:
                  - /url: /in/education-initiative/
              - listitem [ref=f1e427]:
                - link "Environment" [ref=f1e428] [cursor=pointer]:
                  - /url: /in/environment/
              - listitem [ref=f1e429]:
                - link "Privacy" [ref=f1e430] [cursor=pointer]:
                  - /url: /in/privacy/
              - listitem [ref=f1e431]:
                - link "Supply Chain Innovation" [ref=f1e432] [cursor=pointer]:
                  - /url: /in/supply-chain/
          - generic:
            - heading "About Apple" [level=3] [ref=f1e433]
            - list [ref=f1e435]:
              - listitem [ref=f1e436]:
                - link "Newsroom" [ref=f1e437] [cursor=pointer]:
                  - /url: /in/newsroom/
              - listitem [ref=f1e438]:
                - link "Apple Leadership" [ref=f1e439] [cursor=pointer]:
                  - /url: /in/leadership/
              - listitem [ref=f1e440]:
                - link "Career Opportunities" [ref=f1e441] [cursor=pointer]:
                  - /url: /careers/in/
              - listitem [ref=f1e442]:
                - link "Investors" [ref=f1e443] [cursor=pointer]:
                  - /url: https://investor.apple.com/
              - listitem [ref=f1e444]:
                - link "Ethics & Compliance" [ref=f1e445] [cursor=pointer]:
                  - /url: /compliance/
              - listitem [ref=f1e446]:
                - link "Events" [ref=f1e447] [cursor=pointer]:
                  - /url: /in/apple-events/
              - listitem [ref=f1e448]:
                - link "Contact Apple" [ref=f1e449] [cursor=pointer]:
                  - /url: /in/contact/
      - generic [ref=f1e450]:
        - generic [ref=f1e451]:
          - text: "More ways to shop:"
          - link "Find an Apple Store" [ref=f1e452] [cursor=pointer]:
            - /url: /in/retail/
          - text: or
          - link "other retailer" [ref=f1e453] [cursor=pointer]:
            - /url: https://locate.apple.com/in/en/
          - text: near you.
          - generic [ref=f1e454]:
            - text: Or call
            - link "000800 040 1966" [ref=f1e455] [cursor=pointer]:
              - /url: tel:000800 040 1966
            - text: .
        - generic [ref=f1e456]:
          - generic [ref=f1e457]:
            - generic [ref=f1e458]: Copyright © 2026 Apple Inc. All rights reserved.
            - list [ref=f1e459]:
              - listitem [ref=f1e460]:
                - link "Privacy Policy" [ref=f1e461] [cursor=pointer]:
                  - /url: /in/legal/privacy/
              - listitem [ref=f1e462]:
                - link "Terms of Use" [ref=f1e463] [cursor=pointer]:
                  - /url: /in/legal/terms/site.html
              - listitem [ref=f1e464]:
                - link "Sales Policy" [ref=f1e465] [cursor=pointer]:
                  - /url: /in/shop/goto/help/sales_refunds
              - listitem [ref=f1e466]:
                - link "Legal" [ref=f1e467] [cursor=pointer]:
                  - /url: https://www.apple.com/in/legal/
              - listitem [ref=f1e468]:
                - link "Site Map" [ref=f1e469] [cursor=pointer]:
                  - /url: /in/sitemap/
          - link "India. Choose your country or region" [ref=f1e471] [cursor=pointer]:
            - /url: /choose-country-region/
            - text: India
```

# Test source

```ts
  144 |             <p>
  145 |             <strong>Description:</strong>
  146 |             ${v.description}
  147 |             </p>
  148 |             <p>
  149 |             <strong>Expected Result:</strong>
  150 |             Element should satisfy accessibility requirements
  151 |             for ${v.id}.
  152 |             </p>
  153 | 
  154 |             <p>
  155 |             <strong>Actual Result:</strong>
  156 |             Accessibility validation failed for this element.
  157 |             </p>
  158 |             <p>
  159 |             <strong>Help:</strong>
  160 |             ${v.help}
  161 |             </p>
  162 |             <p>
  163 |             <strong> Affected Element:</strong></p>
  164 |             ${v.nodes.map(node => `
  165 |                 
  166 |                 <p>
  167 |                 <strong>Target:</strong>
  168 |                 ${node.target.join(', ')}
  169 |                 </p>
  170 |                 <p>
  171 |                 <strong>HTML Snippet:</strong>
  172 |                 </p>
  173 |                 <pre>
  174 |                 ${node.html
  175 |                     .replace(/</g, '&lt;')
  176 |                     .replace(/>/g, '&gt;')
  177 |                 }
  178 |                 </pre>
  179 |                 <p>
  180 |                 <strong>Failure Summary:</strong>
  181 |                 </p>
  182 |                 <pre>
  183 |                 ${node.failureSummary || 'N/A'}
  184 |                 </pre>
  185 |                 `).join('')
  186 |             }
  187 |             <hr>
  188 |             `;
  189 |         } );
  190 |      }
  191 | });
  192 | htmlContent += `
  193 | </body>
  194 | </html>
  195 | `;
  196 | 
  197 | const totalViolations = 
  198 | criticalCount +
  199 | seriousCount +
  200 | moderateCount +
  201 | minorCount;
  202 | 
  203 | let accessibilityScore =
  204 |  100 - (
  205 |     criticalCount * 10 +
  206 |     seriousCount * 5 +
  207 |     moderateCount * 2 +
  208 |     minorCount * 1
  209 |      );
  210 |  
  211 |      accessibilityScore = 
  212 |   Math.max(accessibilityScore, 0);
  213 | 
  214 | const summarySection = `
  215 |   <h2>Accessibility Summary</h2>
  216 |     <p><strong>Application:</strong> ${applicationName}</p>
  217 |     <p><strong>Scan Date:</strong> ${scanDate}</p>
  218 |     <p><strong>Pages Scanned:</strong> ${pages.length}</p>
  219 |     <p><strong>Total Violations:</strong> ${totalViolations}</p>
  220 |     <p><strong>Critical:</strong> ${criticalCount}</p>
  221 |     <p><strong>Serious:</strong> ${seriousCount}</p>
  222 |     <p><strong>Moderate:</strong> ${moderateCount}</p>
  223 |     <p><strong>Minor:</strong> ${minorCount}</p>
  224 | 
  225 |    <p>
  226 |      <strong>Accessibility Score:</strong>
  227 |       ${accessibilityScore}%
  228 |      </p>
  229 | 
  230 |    <p>
  231 |      <strong>Status:</strong>
  232 |      ${
  233 |     criticalCount > 0 ||
  234 |     seriousCount > 0
  235 |     ? 'Fail'
  236 |     : 'PASS'
  237 |    }
  238 |    </p>
  239 |    <hr>
  240 | `;
  241 |   htmlContent = summarySection + htmlContent;
  242 |   fs.writeFileSync('a11y-report.html', htmlContent);
  243 |   if (totalCriticalOrSeriousIssues > 0) {
> 244 |     throw new Error(
      |           ^ Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 6
  245 |         `Accessibility Quality Gate Failed. Critical/Serious Issues Found: ${totalCriticalOrSeriousIssues}`
  246 |     );
  247 |   }
  248 | 
  249 | console.log("Accessibility Scan Started");
  250 | console.log("Report Created Successfully");
  251 | });
```