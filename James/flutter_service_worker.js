'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ca7692eb0f5df50cd78852de8c550320",
"assets/assets/fonts/Poppins-Bold.ttf": "12413cac332af030dc15202842de8afb",
"assets/assets/fonts/Poppins-Light.ttf": "32b18121a85a090c974baa27eaa801fb",
"assets/assets/fonts/Poppins-Medium.ttf": "c7b158e33a04cfacdc79a1dd1a48dbdd",
"assets/assets/fonts/Poppins-Regular.ttf": "d709511cfc58f9d8f59353de4be8bb17",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4ca619e8c7c56746c94ef50a95f8d598",
"assets/assets/fonts/Product-Sans-Bold-Italic.ttf": "79750b1d82b2558801373d62dd7e5280",
"assets/assets/fonts/Product-Sans-Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/Product-Sans-Italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/images/arrow_right.svg": "a3d029bcfa6e9b4a0ac3743b17c3526e",
"assets/assets/images/btn_app_store.png": "48da56a8a379c0a848cc1409ee39b53b",
"assets/assets/images/btn_play_store.png": "fcf4b21f548b65e960fe44b9fdb1d3f0",
"assets/assets/images/businessman.svg": "f15f7eec3f82251b115a5b768e9c7892",
"assets/assets/images/calendar.svg": "29e2233f082e96e2ff8743dd89cac466",
"assets/assets/images/chat.svg": "4eaccc2c6eaa2d4907040e8e5949f95a",
"assets/assets/images/education.svg": "185da77d2fb00e653add8eeeee1b8deb",
"assets/assets/images/emoji.svg": "85e0bc90d69423ab0ace4a62620eadf1",
"assets/assets/images/filter_options.svg": "60f2b73cb6f6dcfa57938dfc9f176ff0",
"assets/assets/images/gender.svg": "26977a0c276d9ee17a06ccbe8a433cb0",
"assets/assets/images/height.svg": "f34c29658bdd6c9ac5817fe09457972b",
"assets/assets/images/history.svg": "9dbfe74446ef0644f2635d437ef0b5b1",
"assets/assets/images/ic_add.svg": "d52d470f6ec8efd71ef5f90ed4cd07e6",
"assets/assets/images/ic_add_white.svg": "030e579feb526ee42f4ef8c846932295",
"assets/assets/images/ic_drop_down.svg": "f394b4fdb94720b49672a688350fc865",
"assets/assets/images/ic_dummy_pic.png": "70a6fe7407e92a6554dc18de0dda6c9e",
"assets/assets/images/ic_education.svg": "b8f74d2146a989331309f3c472461d45",
"assets/assets/images/ic_email.svg": "eb7a6e7a7cc28d30b69bc00974347ed2",
"assets/assets/images/ic_google.svg": "4b0f520f8d5f0ed9bca929bedea4e29f",
"assets/assets/images/ic_google_map_dummy.png": "be734f9857fb36091b048ebacb9f2284",
"assets/assets/images/ic_home.svg": "29a36a6e92c5f5d19ba79b79218e1625",
"assets/assets/images/ic_james_bg.png": "97c41515e17ed6a85cdccf053fb96ba7",
"assets/assets/images/ic_logo_horizontal.svg": "7d4f88d6f05b12ac571eca10d0b16b81",
"assets/assets/images/ic_looking_for.svg": "56a78d1e2ff93eaca8f89e8d51b4702f",
"assets/assets/images/ic_more.svg": "2b715afb7ada2233a9b701bfa5e8a7df",
"assets/assets/images/ic_nationality.svg": "a73654ac28bc97d73228ae16bfed4e13",
"assets/assets/images/ic_new_member.svg": "6d8b062dda3baa9474da7b93e8ebbf6a",
"assets/assets/images/ic_online.svg": "cd02b3099715f847d1a440ea18739adf",
"assets/assets/images/ic_password.svg": "53015b920a1f3f0c363ff641b4eaf0e8",
"assets/assets/images/ic_phone.svg": "8383cbc752588c0407aa672ef4de6111",
"assets/assets/images/ic_physical_type.svg": "8775f7f12ddd0429986c1683f824a51f",
"assets/assets/images/ic_pin.svg": "084530de82ad0b99ebd74299ff121e6b",
"assets/assets/images/ic_profile_dummy.svg": "34d33853b83f5e6eec50de9f53642d2f",
"assets/assets/images/ic_region.svg": "2f095d6a2931c39d5d693bd22b7dd97f",
"assets/assets/images/ic_relationship_status.svg": "4394a410705587cd3f7c06864e7950cf",
"assets/assets/images/ic_sexual.svg": "25d2ae3d34f11b369297864478a8f684",
"assets/assets/images/ic_star.svg": "31f54e03dfe6d16f8605ac4733a89a24",
"assets/assets/images/ic_switch_off.svg": "5a281a6b2defafb7df47b8ca767c0df6",
"assets/assets/images/ic_switch_on.svg": "49014d01131fdce669233f21c6d4eff5",
"assets/assets/images/icn_about_me.svg": "6fd7c7cf92c84d6cc82aaacda1694b0d",
"assets/assets/images/icn_about_us.svg": "92f35e0d8c89292f87e10a512de9363a",
"assets/assets/images/icn_alcohol.svg": "5d819bab7d77c18ce12c1bbbb8f1c2b4",
"assets/assets/images/icn_annual_income.svg": "e470b69cdf2e90deca830c8306298857",
"assets/assets/images/icn_app_bg_round.svg": "18f312124dec09f2d689cbf2e2b8c6e5",
"assets/assets/images/icn_app_logo.png": "e9765900dfb331bde22c6ec352220590",
"assets/assets/images/icn_app_logo.svg": "ce3926cc022219b5c48082d2aa12c936",
"assets/assets/images/icn_app_logo_vertical.png": "13704fd06fa25c6474aca991f62122d0",
"assets/assets/images/icn_app_logo_vertical.svg": "4919d3b31fed8743fe5a2af335fe2fdf",
"assets/assets/images/icn_apple_logo.svg": "d62180bf51184ff836c77c1bd0f5974a",
"assets/assets/images/icn_back.svg": "681e8d965a3f104b7fce3e8409cde6a5",
"assets/assets/images/icn_block_user.svg": "6111f69eaedbd32d5149b14a82a266d1",
"assets/assets/images/icn_bodyart.svg": "0eca399465e46cc2a9c117c3f31a3d5c",
"assets/assets/images/icn_businessman.svg": "a99eabc58935bb31aabd4d8e9d592ad4",
"assets/assets/images/icn_calender.svg": "29e2233f082e96e2ff8743dd89cac466",
"assets/assets/images/icn_diary.svg": "7bf2a7a9b4cc23f8678f725881912202",
"assets/assets/images/icn_distance_pin.svg": "b0dcf3608abbf51b8f214f49b356ff16",
"assets/assets/images/icn_edit_profile.svg": "25dcabdd2c43065412ce4d6a044051ae",
"assets/assets/images/icn_education.svg": "b8f74d2146a989331309f3c472461d45",
"assets/assets/images/icn_email.svg": "e869cf958cee3b19227ce2db285a9156",
"assets/assets/images/icn_event.svg": "94c64dfde2f134716b054c2231573ac1",
"assets/assets/images/icn_facebook_logo.svg": "3d18e4a1e86a81c7610033e34c03a81e",
"assets/assets/images/icn_festiches.svg": "8c6a5da7d4e48f4586796915c7a3e5d3",
"assets/assets/images/icn_forgot_password.svg": "21e0d9b86605b04984f88c915863c6eb",
"assets/assets/images/icn_gender.svg": "cdf39798c3eb1131efae8156874f1422",
"assets/assets/images/icn_google_logo.svg": "561f2189dbe832f36d2c2c6d19a7722e",
"assets/assets/images/icn_height.svg": "c83114063ce217063ced28308e91b120",
"assets/assets/images/icn_hobbies.svg": "21a91d8f1064a1899a2e1f39d072520d",
"assets/assets/images/icn_income.svg": "e470b69cdf2e90deca830c8306298857",
"assets/assets/images/icn_logout.svg": "9bd7572066bacb0d62ac15c0c751095c",
"assets/assets/images/icn_looking_for.svg": "851ae146cf069c42c0344f5680d6c3c9",
"assets/assets/images/icn_nationality.svg": "a73654ac28bc97d73228ae16bfed4e13",
"assets/assets/images/icn_notification.svg": "db87e9add5165d62fe3633f184bd3918",
"assets/assets/images/icn_online_show.svg": "d51aa60fb91ff5a2230e50dfe7cc52ed",
"assets/assets/images/icn_password.svg": "53015b920a1f3f0c363ff641b4eaf0e8",
"assets/assets/images/icn_physical.svg": "8775f7f12ddd0429986c1683f824a51f",
"assets/assets/images/icn_pin.svg": "6df22465ec0d747c1527b226a17a4114",
"assets/assets/images/icn_plan.svg": "eede13bf4431754dee5efe8dc1f10c57",
"assets/assets/images/icn_price_draw.svg": "cd9c1b29892c947b1b867f83a5dd05ae",
"assets/assets/images/icn_privacy_policy.svg": "78e9ae43a912f543db05c0beafe8da9b",
"assets/assets/images/icn_profile.svg": "4c7c56823b6528630d6c429129a28627",
"assets/assets/images/icn_profile_add.svg": "3079d827f807bbfacaa434d64410294f",
"assets/assets/images/icn_profile_white.svg": "59378cf9d6e15868c5ffe46194bc0d0e",
"assets/assets/images/icn_region.svg": "ce8352cf317a63bdae0a70156a660dbe",
"assets/assets/images/icn_relationship.svg": "396abdaa92b9e3266cd270e61382f165",
"assets/assets/images/icn_setting.svg": "2fbdd53dcd0cca7b45a96ba9504d1cb7",
"assets/assets/images/icn_settings.png": "d5acc76fa854bd1fa7197b56e17a15f5",
"assets/assets/images/icn_settings.svg": "d88529a16cc6ff620c86587150928792",
"assets/assets/images/icn_sexual.svg": "7232c9d35901381a1367623fa0599a77",
"assets/assets/images/icn_sign.svg": "479dafc9a3e055dd6e10c7eaffb8f81c",
"assets/assets/images/icn_single_service.svg": "ca63c4f275d6533db18f467f14ca692b",
"assets/assets/images/icn_smoking.svg": "1b0ca09e4950c949b2123a3b65d928b4",
"assets/assets/images/icn_terms_conditions.svg": "dabb670579f2066a472972be2c25a422",
"assets/assets/images/icn_user.svg": "507cd2a10e206892f9945d6846d7ec60",
"assets/assets/images/icn_vaccine.svg": "7937b36dbab440b416f99266ce2bd79a",
"assets/assets/images/icn_vip_account.svg": "8ce6606e5d2758adae764d0c795bde62",
"assets/assets/images/icn_where_pin.svg": "7903db6c7dfc5be1121cbf68ee4c9f7f",
"assets/assets/images/icn_yajna.svg": "cfda934d88fae6050575a7b09b3983a3",
"assets/assets/images/location.svg": "0981dc0453244447d871700a6a4a4510",
"assets/assets/images/logo.png": "fa4ab9719ec379df85c62e7c49bb66d9",
"assets/assets/images/menu.svg": "ccae8a57737ffa20ede340b73a1365d5",
"assets/assets/images/mobile_screen_shot.png": "3e1f69935fbd6e73cf5df26bf6cc43a1",
"assets/assets/images/notification_bell.svg": "69359a6c11e53b1d6716e9c2fc865487",
"assets/assets/images/onboarding_bg.png": "aaea1f8fc946ad03b4802c7963129f82",
"assets/assets/images/person.svg": "35f7fd16fc3bc9f3682a5df15372de0e",
"assets/assets/images/person_outline.svg": "cfa0ebf0ef0343d8cc1c426a7743d203",
"assets/assets/images/portfolio.svg": "e3368185703540691e3c9c1096bdaad7",
"assets/assets/images/register_bg.png": "d402dfd9adbf6b3317bc362ed5fd2918",
"assets/assets/images/register_bg_2.png": "3b47b35001a6809d56145253f1cb9d00",
"assets/assets/images/register_bg_3.png": "ec6d17127fd561f0122ee83c0542a956",
"assets/assets/images/register_bg_4.png": "44b2fc3dfed1566b409aa22991fba8e9",
"assets/assets/images/registercamera.svg": "9e8f8a5b50e091dd4a3df40e1904d208",
"assets/assets/images/search.svg": "84e4ab858c8d0f3a7c97b59fe0911acc",
"assets/assets/images/selected_chat.svg": "4d1acd768a884ee7f07d71bcca3a49e0",
"assets/assets/images/selected_discover.svg": "feaff1a9db981900b4d71a2c0ad7ed11",
"assets/assets/images/selected_matches.svg": "da120204a1f45a7fdc5233c841d027d9",
"assets/assets/images/selected_profile.svg": "97a2f6765919279b7551579ad6fcf24c",
"assets/assets/images/send.svg": "48f7028967f66ed9822791f114b5b423",
"assets/assets/images/splash_bg.png": "c2963e59be3e8a05a289408cea1f9e19",
"assets/assets/images/start-up.svg": "3b5df3ba75a2b72709889ddbe26494c8",
"assets/assets/images/unselected_discover.svg": "53a9ee1f4a07d929211311302f2b5785",
"assets/assets/images/unselected_matches.svg": "f800732d58726d0a020f72fcb94c41e5",
"assets/assets/images/verification_phone.svg": "afe1159e95009a6fe8960cedae003001",
"assets/assets/images/welcome_bg.svg": "52b84fcf931332f4f0927ca055abf04f",
"assets/assets/images/your_plan.svg": "eede13bf4431754dee5efe8dc1f10c57",
"assets/FontManifest.json": "8dbc5736803fea87dd1512bf702f7b4e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "386a0fd715613aa94762245dc4941aa1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "1029825c26f545a39eb6219a34711d3a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "2288536931393544042ddeea2c64cc1c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "4e1d17c6bd88fe87aea6cd71c076994d",
"icons/Icon-512.png": "0ea8fd9c5fd237f20d030bfb39bc5e33",
"icons/Icon-maskable-192.png": "a9d5f3862d884283e329a50b58ed2f7d",
"icons/Icon-maskable-512.png": "c373af2457632b2dda5b880217970af6",
"index.html": "660f023a3013c642d756775dc0291b03",
"/": "660f023a3013c642d756775dc0291b03",
"main.dart.js": "3b73d804c012f6d1494c4a81b831628c",
"manifest.json": "71ea3f828f021a435a1af3ce4984b4b4",
"version.json": "8d920792e55438b9503c1e691a264b4e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
