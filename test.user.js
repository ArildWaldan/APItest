// ==UserScript==
// @name         API Request Test
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Test API with specific headers and payload via POST request
// @author       Your Name
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Define the URL
    const url = 'https://dc.dps.kd.kfplc.com/product/product-query/5059340124469?hasGapi=true';

    // Define the headers
    const headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Cookie": "_ga=GA1.2.1181425549.1669898244; rxVisitor=1709371112846BRG4FS1TBS3NT0HBEIVG7AH6I69AKEKO; _ga_N710XKQQTC=GS1.2.1709401506.62.1.1709401556.0.0.0; dtCookie=v_4_srv_8_sn_153480E76BCCC767DCD9DFEE6D508E38_perc_100000_ol_0_mul_1_app-3A7d44f3180bfefcc9_1_app-3A674f2a0ba0ad7533_1_app-3A3b6bec876a798237_1; _gid=GA1.2.2094107074.1715239493; dtSa=-; _ga_7ZEKC228F0=GS1.2.1715322029.160.1.1715322174.0.0.0; _gat=1; rxvt=1715324076500|1715321893890; dtPC=8$521893878_480h1p8$522275619_373h5vEUDCDSPJMDHFCPCINGHIPMPPDKJQFCMR-0e0",
        "Host": "dc.dps.kd.kfplc.com",
        "Origin": "https://dc.kfplc.com",
        "Pragma": "no-cache",
        "Referer": "https://dc.kfplc.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "accept-language": "fr",
        "kits-app-version": "2.0.0",
        "kits-application-name": "DigitalColleague",
        "kits-device-id": "desktop_1715322275993",
        "kits-device-type": "desktop",
        "kits-operating-company": "CF01",
        "kits-process-name": "Default",
        "kits-release-version": "CHG0148724",
        "kits-store-code": "1502",
        "kits-tenant-id": "CAFR",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    };

    // Define the payload
    const payload = JSON.stringify({
        "sapi": {"productSupplierInfo": true, "replacementInfo": true, "fulfilmentOption": true, "stockVisibility": true, "manualOrder": false, "salePrice": true, "dcQuantity": true},
        "gapi": {},
        "productReviews": {},
        "prices": {"company": "CF01", "tradepoint": true},
        "locations": {"byProductNumber": true},
        "expectedDeliveries": {"startDate": "2024-04-30", "endDate": "2024-06-09"},
        "layoutModules": true,
        "supplier": true
    });

    // Make the API request
    GM_xmlhttpRequest({
        method: 'POST',
        url: url,
        headers: headers,
        data: payload,
        onload: function(response) {
            console.log('Response:', response.responseText);
        },
        onerror: function(error) {
            console.log('Error:', error);
        }
    });
})();
