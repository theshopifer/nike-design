
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DN86xAlG.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DRWS1Zwt.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094-legacy.DSlFj0EB.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0-legacy.qCffHcjO.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.CdDUm-Sq.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a-legacy.CuSCqDke.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa-legacy.BzfnrDUU.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.Co9sVS3u.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.DYdC894X.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786-legacy.CZdEtEGC.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987-legacy.D4h295ge.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8-legacy.CpBXmpw2.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45-legacy.jguYDjsU.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d-legacy.CtXmbUXr.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2-legacy._MEX-4t1.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b-legacy.DlnOLr--.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda-legacy.DeV9ucQd.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8-legacy.CmnpZOpF.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78-legacy.DFS0uZce.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97-legacy.BrEXR0Ac.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749-legacy.Bnwo-Ith.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668-legacy.DH-fkznk.js","/cdn/shopifycloud/checkout-web/assets/c1/e7cc4629-legacy.CbSSUFFr.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc-legacy.BIH-BhpZ.js","/cdn/shopifycloud/checkout-web/assets/c1/4661cd61-legacy.BFzFi6os.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30-legacy.BUJce28P.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758-legacy.CyJFt8Xa.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f-legacy.C-DEUNNl.js","/cdn/shopifycloud/checkout-web/assets/c1/08e2c58d-legacy.CP7ryxTR.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753-legacy.C4C1z7u2.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab-legacy.B6N3BtJW.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f-legacy.By3WywRj.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5-legacy.BP6gCzF3.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46-legacy.-aa3vGmA.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337-legacy.Db-m8UkO.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7-legacy.DTKbxPHL.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3-legacy.B2fmaciQ.js","/cdn/shopifycloud/checkout-web/assets/c1/8da28279-legacy.HogVHkie.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81-legacy.CvA9Liv4.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54-legacy.D9fBJPSb.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f-legacy.Cb4Mtg76.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79-legacy.B2h3ZX3g.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548-legacy.DTQtOy0l.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304-legacy.BCiGgbWw.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d-legacy.BguykLqi.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576-legacy.Df9Y92uL.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b-legacy.BmwDEi1c.js","/cdn/shopifycloud/checkout-web/assets/c1/4e32eceb-legacy.CrHEUX54.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33-legacy.5dmAjJLc.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a-legacy.Du2Ziv9G.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25-legacy.CE5KtyPx.js","/cdn/shopifycloud/checkout-web/assets/c1/890c145f-legacy.DdGQul7s.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9-legacy.CRwAHmMM.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0-legacy.CWv_7Lhd.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226-legacy.DM756HNO.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0-legacy.DVIIVfrP.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c-legacy.DbYWWx63.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6-legacy.BFs2VLB8.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba-legacy.CLqf_sL3.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf-legacy.CoyVu0gB.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a-legacy.EzNEctGw.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e-legacy.CC_PFUD_.js","/cdn/shopifycloud/checkout-web/assets/c1/29cc4709-legacy.CTn1YlUU.js","/cdn/shopifycloud/checkout-web/assets/c1/d84045bf-legacy.z1OqXd1M.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860-legacy.DIOvJB5b.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6-legacy.CunXxg0V.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289-legacy.CnyP47Fb.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e-legacy.DIkx8xCr.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d-legacy.CdzN9aUK.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8-legacy.Mp1WgDXN.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71-legacy.CHpdemlY.js","/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6-legacy.DNXiRqT_.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656-legacy.D70_pg-_.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d-legacy.zHLXxh6c.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958-legacy.CaDYaMV1.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5-legacy.0AAesD8W.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c-legacy.Blr92vGA.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c-legacy.DTV-A3Q9.js","/cdn/shopifycloud/checkout-web/assets/c1/ff52cf6d-legacy.hQgw5_c2.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557-legacy.CV7GSPey.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee-legacy.hiWY5dnT.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646-legacy.85as-3-t.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81-legacy.C7uA8cfd.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291-legacy.BcDLHJnt.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1-legacy.7y_RUBa9.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74-legacy.Dve4ltF6.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6-legacy.DYTFb_-x.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e-legacy.DYQHfPme.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132-legacy.6yLtELpV.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836-legacy.kdW8F5oh.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e-legacy.Ba3_8Y5s.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded-legacy.Bgtj0meK.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116-legacy.D8JztQSY.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3-legacy.igAyT5Iz.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36-legacy.CsL0-QMB.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5-legacy.CPLgbDpK.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00-legacy.CXcRvopJ.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.BVQGihFB.js","/cdn/shopifycloud/checkout-web/assets/c1/38cb0284-legacy._Gaw2qtH.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128-legacy.j_YFTbNN.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226-legacy.BMEflspV.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b-legacy.DyAcOafz.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81-legacy.DEkqN6v2.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507-legacy.CokU_qaN.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b-legacy.C1uBOyhv.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b-legacy.n6ftDVDO.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08-legacy.CZziMLCs.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2-legacy.B_kyBbTF.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2-legacy.ChA26dXN.js","/cdn/shopifycloud/checkout-web/assets/c1/3481de02-legacy.Ca2lDuJl.js","/cdn/shopifycloud/checkout-web/assets/c1/f7986671-legacy.mZModkMl.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9-legacy.C6njRYek.js","/cdn/shopifycloud/checkout-web/assets/c1/9961965b-legacy.B1s-wQa9.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930-legacy.0iZWJLyL.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd-legacy.geTtuaFG.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74-legacy.BHcO12vT.js","/cdn/shopifycloud/checkout-web/assets/c1/b068efe0-legacy.DkAcd1nA.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b-legacy.mDtiRIfB.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96-legacy.DubZxFxD.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c-legacy.CxvmQBWG.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc-legacy.DRQ5UpHk.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20-legacy.B3L0fEnP.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c-legacy.CQ6DbEVt.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18-legacy.DCuI5CBl.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8-legacy.DNUnUhgf.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf-legacy.BWrD2kOT.js","/cdn/shopifycloud/checkout-web/assets/c1/1493337c-legacy.DfomvSwR.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5-legacy.BdXd1lyx.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a-legacy.CkRUEP3Q.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320-legacy.u5pu34Ca.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f-legacy.C6SDN1-e.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb-legacy.HOuIR98z.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664-legacy.C-UolV1m.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466-legacy.CIFKX6S6.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3-legacy.to7imwfK.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02-legacy.5aGdolyF.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416-legacy.pVkk-mIn.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a-legacy.2uGMxEQD.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9-legacy.C6-4F9v-.js","/cdn/shopifycloud/checkout-web/assets/c1/35fb5eb6-legacy.Bj97aLf6.js","/cdn/shopifycloud/checkout-web/assets/c1/05f561d4-legacy.Beqx0_ul.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d-legacy.CN_lRFfL.js","/cdn/shopifycloud/checkout-web/assets/c1/4b77f49a-legacy.D__ng_71.js","/cdn/shopifycloud/checkout-web/assets/c1/41038fc5-legacy.Dn807OJK.js","/cdn/shopifycloud/checkout-web/assets/c1/071c0ba4-legacy.YWers8KD.js","/cdn/shopifycloud/checkout-web/assets/c1/8d9b1fe6-legacy.6lmUgtvl.js","/cdn/shopifycloud/checkout-web/assets/c1/58f88e89-legacy.B7lpUOlr.js","/cdn/shopifycloud/checkout-web/assets/c1/4db11b69-legacy.HKqXz14b.js","/cdn/shopifycloud/checkout-web/assets/c1/66ce9bb7-legacy.xBKGgvJp.js","/cdn/shopifycloud/checkout-web/assets/c1/10dab80e-legacy.FJFKW5P0.js","/cdn/shopifycloud/checkout-web/assets/c1/2bff2525-legacy.ChGlC9kt.js","/cdn/shopifycloud/checkout-web/assets/c1/c1e3be47-legacy.CpCfdC99.js","/cdn/shopifycloud/checkout-web/assets/c1/4431ba3a-legacy.Cjs8I1EN.js","/cdn/shopifycloud/checkout-web/assets/c1/aa1a9f41-legacy.iA9dwUsb.js","/cdn/shopifycloud/checkout-web/assets/c1/70676095-legacy.BzPHNB0R.js","/cdn/shopifycloud/checkout-web/assets/c1/3cbb1bee-legacy.BCpsB-H0.js","/cdn/shopifycloud/checkout-web/assets/c1/b0920c52-legacy.5hP8j95d.js","/cdn/shopifycloud/checkout-web/assets/c1/0754daa8-legacy.DDhDudAa.js","/cdn/shopifycloud/checkout-web/assets/c1/8b7d6012-legacy.BOSzItiD.js","/cdn/shopifycloud/checkout-web/assets/c1/565bff04-legacy.DsPID59X.js","/cdn/shopifycloud/checkout-web/assets/c1/33cd60c3-legacy.BidqO2Q4.js","/cdn/shopifycloud/checkout-web/assets/c1/394584e5-legacy.DK6usBOU.js","/cdn/shopifycloud/checkout-web/assets/c1/40bf165a-legacy.DOxinD9r.js","/cdn/shopifycloud/checkout-web/assets/c1/3c7ea602-legacy.DLw-QXJH.js","/cdn/shopifycloud/checkout-web/assets/c1/8b1d1f25-legacy.RPBcnSQY.js","/cdn/shopifycloud/checkout-web/assets/c1/49758c58-legacy.DA_7ihQf.js","/cdn/shopifycloud/checkout-web/assets/c1/6073d960-legacy.B1Cm5Uz9.js","/cdn/shopifycloud/checkout-web/assets/c1/68101692-legacy.D0_9KSd-.js","/cdn/shopifycloud/checkout-web/assets/c1/729daf6a-legacy.BH8bDNZ_.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.Bkw9oav-.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.CZdpQ8gH.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.Ba_5OrSr.worker.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  