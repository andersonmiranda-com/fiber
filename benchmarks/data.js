window.BENCHMARK_DATA = {
  "lastUpdate": 1677248471866,
  "repoUrl": "https://github.com/gofiber/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "c5691c7de55701400c4636793225058f5192f1dc",
          "message": "change output folder for the benchmarks result (gh-pages)",
          "timestamp": "2023-01-19T21:41:33+01:00",
          "tree_id": "6ab13bce1ff7851f5f105171e2299a3a7c25e866",
          "url": "https://github.com/gofiber/fiber/commit/c5691c7de55701400c4636793225058f5192f1dc"
        },
        "date": 1674161588875,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1014,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1016935 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6470,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "181568 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6556,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "187555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7424312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 63.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17202162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13832176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 63.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19111798 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 249.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4730000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 311.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3422546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "362841788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1163,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 826.7,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1424790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3011,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "385224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1468,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "805544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1330,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "820357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 151.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8648728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 150.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7579088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 353.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3243952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1989,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "577422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 568.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1953051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9884202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 216.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6101664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 312.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3789142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 282.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4403713 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 472,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2555467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28174094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 95.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12948499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 47.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21709687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 50.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24093350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 680.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1742629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 81.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14544187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 412.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3163270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4901,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "223498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69723354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 218.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5150427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 377.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3248815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 523.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2182874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2645,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "472726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 177.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6608695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1394,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "832915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 310.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3580408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 892.8,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 873.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1465027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 816.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1416282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1439928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 233.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5150469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.298,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "196456492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 61.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18971475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26099049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9777568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10099905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 46.42,
            "unit": "ns/op\t      79 B/op\t       0 allocs/op",
            "extra": "29721241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 186.9,
            "unit": "ns/op\t      95 B/op\t       1 allocs/op",
            "extra": "6185314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20748391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96556598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4663,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "239049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3822,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "275800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5177,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "211603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4488,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "239092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1492,
            "unit": "ns/op\t     799 B/op\t       8 allocs/op",
            "extra": "747592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6307,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "193119 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6449,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "169224 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 166.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7417065 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20623924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 62.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19110518 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273815924 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220358961 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 3.887,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "311512422 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1009,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1196367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1001,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 204.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5855613 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 178.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6537832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 687.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1771796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 689.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1711320 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 916248,
            "unit": "ns/op\t  372994 B/op\t    5608 allocs/op",
            "extra": "1288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 110.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10461960 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 33.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38123733 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.095,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278117144 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.394,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "343383288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 178.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6387777 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 254.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4801902 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 190.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5793307 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 288901,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4153 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 248174,
            "unit": "ns/op\t   24576 B/op\t    1000 allocs/op",
            "extra": "4756 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 211165,
            "unit": "ns/op\t     719 B/op\t       0 allocs/op",
            "extra": "5972 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 546.2,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2241634 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 457.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2581954 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 960.2,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1273999 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 572.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2112463 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2513,
            "unit": "ns/op\t     334 B/op\t       7 allocs/op",
            "extra": "672315 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 3040,
            "unit": "ns/op\t     609 B/op\t       7 allocs/op",
            "extra": "620512 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1514,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "737244 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2336,
            "unit": "ns/op\t     278 B/op\t       5 allocs/op",
            "extra": "662389 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2255,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "757722 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8652430 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 133.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9081772 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 67.34,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "17282614 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 25.61,
            "unit": "ns/op\t 507.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "47470344 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 56.28,
            "unit": "ns/op\t 231.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21390576 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 829.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1448811 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 164.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7336246 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 563.2,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2114076 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 381.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3240020 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 408.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2981322 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 725.1,
            "unit": "ns/op\t      14 B/op\t       1 allocs/op",
            "extra": "1635606 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 454.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2546672 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 840.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1448026 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28772,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42235 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 29439,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "41665 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 57.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20422135 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 167.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7409836 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21329828 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 149.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7905306 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.39,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49306098 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53013937 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 23.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54521774 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44113968 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 36.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32079794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.31,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27977097 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 115.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10438424 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3150303 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 77.47,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14760084 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 554.3,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2269332 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 37.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32876138 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.32,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35986180 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.811,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "639311977 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 36.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32001248 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 85.52,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13191540 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 92.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12311416 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5844382 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 79.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14129043 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132587577 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897882908 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 14.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85140668 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 33.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34085438 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 78.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "15204343 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 106.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11200962 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 170.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7295899 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 110,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11142541 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3787648 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 107.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10302885 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3987882 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.603,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "476339263 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.458,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210720548 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "366207996 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199539974 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "135404373 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130794320 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 91.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13378956 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 312.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3771868 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22178870 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dozheiny@gmail.com",
            "name": "Iliya",
            "username": "dozheiny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0004cf8a82d57a00d7078b8cdbdbbe356934957",
          "message": "🔥 write integer Query Parser. (#2306)\n\n* Feature: write integer Query Parser.\r\n\r\n* request changes on https://github.com/gofiber/fiber/pull/2306#discussion_r1082171003\r\n\r\n* ref(test): separate test cases for QueryInt",
          "timestamp": "2023-01-23T19:06:12+01:00",
          "tree_id": "26625ba2ad16be96c9a6d7e99815dd7d92030413",
          "url": "https://github.com/gofiber/fiber/commit/a0004cf8a82d57a00d7078b8cdbdbbe356934957"
        },
        "date": 1674497842231,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1449,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "768720 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7411,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "154491 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7579,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "162650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6809748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17562300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13310421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 267.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4638418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 328.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3551422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "468425943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1185,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "977707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 891,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1359915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3161,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "354349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1609,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "685198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1469,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "751962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 145.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8180142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6860683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7909887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 364.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3283040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1903,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "566721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 644.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1893552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 148.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8182750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5495685 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 303.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3964137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 286.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4076086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 542.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2297695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 48.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24148592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 98.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12564825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 44.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24766395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 54.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21692905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 801.8,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1502421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 80.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14379597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 358.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3153482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5338,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "214827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 191.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6108762 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 357.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3353445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 504.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2302704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2359,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "463304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 174.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6471325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1389,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "859294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 291.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4110942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 938.2,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 907.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1310376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 885,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1364449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1398123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 234.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5053303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.485,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184726642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 65.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17290909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23589618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 113.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10573092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 123.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9592125 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 57.61,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "17973868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 201,
            "unit": "ns/op\t      96 B/op\t       1 allocs/op",
            "extra": "6093315 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 58.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19760886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4594,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "232286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3975,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "292002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4970,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "222144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5098,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "230208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1397,
            "unit": "ns/op\t     784 B/op\t       8 allocs/op",
            "extra": "783021 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7189,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "153338 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7611,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "154839 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7016199 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21722336 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 70.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16773686 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275628884 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203305051 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.596,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "215361669 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1069,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1068,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 205.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5879510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 187.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6521797 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 660,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1780681 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 676.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1820707 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 838253,
            "unit": "ns/op\t  373004 B/op\t    5608 allocs/op",
            "extra": "1446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10914853 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 30.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39675220 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "303636690 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "383789728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 180.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6505810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 250.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4831470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 186.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6527484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 302986,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3817 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 234065,
            "unit": "ns/op\t   24597 B/op\t    1000 allocs/op",
            "extra": "5162 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 192904,
            "unit": "ns/op\t     663 B/op\t       0 allocs/op",
            "extra": "6141 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 565.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2121816 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 479.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2543722 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 947.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1205614 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 589.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2042474 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2318,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "724348 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2723,
            "unit": "ns/op\t     621 B/op\t       7 allocs/op",
            "extra": "702360 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1624,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "753326 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1968,
            "unit": "ns/op\t     272 B/op\t       5 allocs/op",
            "extra": "696134 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2037,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "754914 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 135.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8809038 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 122.6,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9840074 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 60.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19299002 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 23.92,
            "unit": "ns/op\t 543.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48956082 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 55.75,
            "unit": "ns/op\t 233.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21209366 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 856.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1376536 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 155.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7710748 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 550.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2146141 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 361.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3290838 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 419.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2866766 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 789.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1528935 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 467.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2540281 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 821,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1455331 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28193,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "43795 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28254,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42543 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 72.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17075296 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 150.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7901425 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 55.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21000088 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 168.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7041903 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 21.68,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50447910 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 22.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49729724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 21.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51720637 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47677485 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 34.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33944959 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.48,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31022834 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 121.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9665793 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 350.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3309218 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 81.21,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14626831 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 571.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2126726 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30639976 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8928,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30794572 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "596200748 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.34,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28573249 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 90.66,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13208463 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 97.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12083332 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 194.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6268594 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 83.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14435397 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130702057 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.385,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "867205167 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 12.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83101117 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 31.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36055963 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 80.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14333984 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 104.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11624107 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 176.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6984745 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 118.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10137025 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 304.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3912338 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 98.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10592233 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 312.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3932724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270916100 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225614181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "359042656 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198228328 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132437754 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.799,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "136301419 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 98.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12181531 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 299.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3948556 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 69.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17646075 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66cc869b1f76905368696ba6c53397bbd6f45ca4",
          "message": "Doc: Remove the redundant space beside a comma (#2309)\n\n📚 Doc: Remove the redundant space beside a comma",
          "timestamp": "2023-01-25T20:35:00+01:00",
          "tree_id": "a5ac38b3ee1b93eb3422d81fe5e204d664ae81e5",
          "url": "https://github.com/gofiber/fiber/commit/66cc869b1f76905368696ba6c53397bbd6f45ca4"
        },
        "date": 1674675964659,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1452,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "733915 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7656,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "163455 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7761,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "148972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 185.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6537519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17516384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 97.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13069100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17129340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 280.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4282065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 351.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3455608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.772,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "433797031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1187,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "913124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 885,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1366178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3125,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "351526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1584,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "716806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1496,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "730807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8240497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6764332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7979140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 371.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3250910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2046,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "526516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 673.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1836832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 154.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8094714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5344508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 311.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3785370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 292.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4030034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 518,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2226637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 48.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24477229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 96.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11974976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 46.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25971712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21126165 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 799.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1497926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 81.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14067664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 369.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3148426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5289,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "221119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64900914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 191.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6193746 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 356.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3364999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 502.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2322368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2434,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "448606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 177.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6392791 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1401,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "741051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 294.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4049856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 932,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1347732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 884.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1299008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 881.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1370121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 904.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1306755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 233.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4860888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.569,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171410202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 67.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17120476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23779202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 122.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9843254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 131.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9646051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 61.84,
            "unit": "ns/op\t      68 B/op\t       0 allocs/op",
            "extra": "17650016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 204.8,
            "unit": "ns/op\t      91 B/op\t       1 allocs/op",
            "extra": "5185657 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19555300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 12.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99532999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4833,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "237981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 4130,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "278390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5339,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "227514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5351,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "218629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1675,
            "unit": "ns/op\t     801 B/op\t       8 allocs/op",
            "extra": "754760 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7695,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "152575 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7985,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "155226 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6516826 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 59.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20341275 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 74.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16814500 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.791,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "256636598 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.996,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199362278 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.734,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200559151 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1142,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1091,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 211.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5745507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 201.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6098571 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 697.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1711858 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 688.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1688164 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 929372,
            "unit": "ns/op\t  373009 B/op\t    5608 allocs/op",
            "extra": "1272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 115.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10770830 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 32.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37815745 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284560152 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "352213794 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 205.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6075273 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 264.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4599661 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 192.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6360140 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 335911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3542 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 247274,
            "unit": "ns/op\t   24538 B/op\t    1000 allocs/op",
            "extra": "4764 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 196829,
            "unit": "ns/op\t     674 B/op\t       0 allocs/op",
            "extra": "6060 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 589.2,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2041628 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 506.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2421318 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 1013,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "998487 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 619.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1949317 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2495,
            "unit": "ns/op\t     327 B/op\t       7 allocs/op",
            "extra": "707774 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2625,
            "unit": "ns/op\t     599 B/op\t       7 allocs/op",
            "extra": "635234 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1616,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "734730 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2182,
            "unit": "ns/op\t     286 B/op\t       5 allocs/op",
            "extra": "629001 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2185,
            "unit": "ns/op\t     274 B/op\t       5 allocs/op",
            "extra": "682250 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 145.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8491386 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 130.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9301501 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 65.06,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "15820177 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 24.52,
            "unit": "ns/op\t 530.15 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48848359 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 55.48,
            "unit": "ns/op\t 234.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20735240 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 868.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1406966 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 158.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7099404 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 602.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "1959015 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 382.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3108700 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 471.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2588083 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 826.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1452002 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 506.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2482299 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 999.4,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1227361 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 29133,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "39769 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 30091,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "41204 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 77.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16355317 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 154.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7590573 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20947770 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 175.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6829672 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 23.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52453993 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47342275 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 22.19,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47245350 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39805105 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 35.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33206820 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 35.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31877596 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9331326 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3432933 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 78.16,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14493019 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 564.7,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2172757 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31126532 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32992603 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "565641124 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 38.12,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28867555 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 86.19,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "12830264 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 91.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12871489 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6417183 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 81.82,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14368713 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132081680 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.387,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "831530752 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 13.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85825362 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 32.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38007270 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 81.33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14275927 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 114.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10785582 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 174.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6590228 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 117.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10081581 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 313.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3732950 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 100,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11911651 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3814832 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.301,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277342794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.076,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "235592103 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.319,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357316510 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "195763434 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "126126150 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.528,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "139740774 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 98.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12139069 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 298.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4070695 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4616,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 67.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17640742 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66315042+rhabichl@users.noreply.github.com",
            "name": "Limux",
            "username": "rhabichl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2cb81ddd31c76689deb351b3da665f84e8795e7",
          "message": "🚨 added testcases and minor algorithm improvment (#2308)\n\n* Deleted redundant check for an ipv4 address octet block that is bigger than 255 in utils/ip.go. Also added a testcase for octetblocks that are bigger than 255.\n\n* Added extra testcases",
          "timestamp": "2023-01-25T20:38:29+01:00",
          "tree_id": "701367d82b5f96bc7da53826e19d503d803a14ff",
          "url": "https://github.com/gofiber/fiber/commit/e2cb81ddd31c76689deb351b3da665f84e8795e7"
        },
        "date": 1674676156258,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 836,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1298935 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3334,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "344157 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3372,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "339207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 146.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8250970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 51.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23203652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 71.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16708969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22227949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5677128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 284.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4211744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "525409275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1022,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1207158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 782.1,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1535181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2672,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "420772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1387,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "791506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1247,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "877542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 114.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10578414 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 137.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8286913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10378904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 294.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4071681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1689,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "653828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 509.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2303067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10398583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 155.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7663051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 234,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5116935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5518171 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 426.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2815748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31923259 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14330658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "30654519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 44.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25830334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 650.5,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1863012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16142269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 307.7,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3975538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4577,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "252062 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77107273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 141.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8554177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 297.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4061764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 418.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2945683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2032,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "550827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7448037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1155,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "1041050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 234.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5081151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 756.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1573184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 780.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1525988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 767.9,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1568968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 757.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1585976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 184.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6416334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211757787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22133815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28498530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 95.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11934030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 104.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11403324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 44.97,
            "unit": "ns/op\t      78 B/op\t       0 allocs/op",
            "extra": "29981158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 146.5,
            "unit": "ns/op\t      91 B/op\t       1 allocs/op",
            "extra": "8130632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24803790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128203668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4014,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "260185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3530,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "325875 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4368,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264103 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4419,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "262579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1192,
            "unit": "ns/op\t     797 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3360,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "340525 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3423,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "336628 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 144.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8322667 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 44.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "26101129 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19749944 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296284354 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171083503 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.723,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201872953 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 901.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1331523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 864.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1405425 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7469005 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8042656 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 621.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1916677 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 623.7,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1942570 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 712190,
            "unit": "ns/op\t  373005 B/op\t    5608 allocs/op",
            "extra": "1512 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13046082 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45367257 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373254548 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "430712706 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 149.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8234037 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 213.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5411718 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 145.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7840380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 248086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4701 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212824,
            "unit": "ns/op\t   24576 B/op\t    1000 allocs/op",
            "extra": "5344 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 180209,
            "unit": "ns/op\t     677 B/op\t       0 allocs/op",
            "extra": "6636 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 449.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2669613 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 408.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2949864 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 817.8,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1475691 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 508.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2288326 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1787,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "830671 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2221,
            "unit": "ns/op\t     573 B/op\t       7 allocs/op",
            "extra": "795848 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1435,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "845013 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1578,
            "unit": "ns/op\t     253 B/op\t       5 allocs/op",
            "extra": "838419 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1884,
            "unit": "ns/op\t     348 B/op\t       5 allocs/op",
            "extra": "901418 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 108.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10597256 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 97.91,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12187329 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 47.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25147105 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 20,
            "unit": "ns/op\t 650.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "59986142 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.62,
            "unit": "ns/op\t 284.99 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23185765 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 714,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1665090 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9906284 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 480.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2485725 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 323.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3752314 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 361.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3240624 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 683.7,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1696497 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 407.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2890029 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 798.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1516693 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23809,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50854 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24288,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50536 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18204645 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 139.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8605718 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 42.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29069460 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 155.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7672002 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53914383 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55680800 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58692282 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53114478 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 30.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38175496 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37203220 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11557910 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 281.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4240958 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 62.46,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18580468 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 442.1,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2710470 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 33.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34658078 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.809,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.93,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43703920 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.626,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "742551948 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.53,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37379949 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.65,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "17238698 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 78.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15204252 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 149.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8095618 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 67.57,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17988028 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "148446328 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995154270 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 12.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99450106 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46421311 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 69.62,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17289889 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 100.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11721680 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 143.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8047987 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11427680 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 328.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3675535 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.64,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14692544 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 316.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3769898 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368815878 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.582,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "260881723 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372843896 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "221668936 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.036,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149330924 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.629,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124619487 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12458521 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 264.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4814187 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.424,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21825927 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b564f944013ca239f90250c050b2ab2eed6daa99",
          "message": "📚 Doc: Correct the figure link in READMEs (#2312)",
          "timestamp": "2023-01-26T11:57:25+03:00",
          "tree_id": "44265bd252c76e11484339b56f197d3215df81e2",
          "url": "https://github.com/gofiber/fiber/commit/b564f944013ca239f90250c050b2ab2eed6daa99"
        },
        "date": 1674724090339,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 674.5,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1643281 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3275,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "345202 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3356,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "341178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7937221 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 51.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21686688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 70.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16951276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22365656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5684935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 274.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3663330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "535991053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 978.9,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1215718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 767.3,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1566895 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2676,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "411982 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1380,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "787270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1247,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "893186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 114.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10307083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8603990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10356032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 290.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4118056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1713,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "716688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 513.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2351499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10386364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 154.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7659752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 229.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5148423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 212.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5103398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 423.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2816460 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31453370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14472042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31138006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 42.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28784988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 689.2,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1727613 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16125096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 298.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4009558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4446,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "255075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77496705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 137.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8648089 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 292,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4080405 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 403.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2968605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2024,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "552554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7447580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1147,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "899566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 232.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5113702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 747.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1597570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 785.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1503354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 779.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1518991 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 775.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1547205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 183.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6533989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.673,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211467294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22202571 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 39.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29996064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 92.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12757317 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 103.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11514258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 37.78,
            "unit": "ns/op\t      67 B/op\t       0 allocs/op",
            "extra": "27743806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 156.5,
            "unit": "ns/op\t      92 B/op\t       1 allocs/op",
            "extra": "8090949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24197410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 10.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3953,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "281346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3478,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "325117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4329,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4339,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "263427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1121,
            "unit": "ns/op\t     784 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3307,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "344252 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3382,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "338666 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 141.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8483205 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 46.24,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25786992 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19897650 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296688000 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.015,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159102040 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.772,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192076456 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 970.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1284687 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 848.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1414508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 155.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7580392 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7940996 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 613.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1957590 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 611.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1953247 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 678776,
            "unit": "ns/op\t  372992 B/op\t    5608 allocs/op",
            "extra": "1729 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 92.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13087239 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45992006 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373374379 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.757,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "434196554 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 143.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8322409 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 207.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5678275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 144.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8256361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 249265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4706 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212072,
            "unit": "ns/op\t   24550 B/op\t    1000 allocs/op",
            "extra": "5590 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 178969,
            "unit": "ns/op\t     737 B/op\t       0 allocs/op",
            "extra": "6603 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 447.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2678179 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 401.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2993800 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 826.5,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1475492 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 508.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2362879 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1775,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "835638 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2277,
            "unit": "ns/op\t     569 B/op\t       7 allocs/op",
            "extra": "805068 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1439,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "865284 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1605,
            "unit": "ns/op\t     259 B/op\t       5 allocs/op",
            "extra": "784663 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1807,
            "unit": "ns/op\t     348 B/op\t       5 allocs/op",
            "extra": "904330 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 111.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10619883 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 97.35,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12230008 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 46.88,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25206747 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.89,
            "unit": "ns/op\t 653.57 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60332862 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.28,
            "unit": "ns/op\t 287.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26470604 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 732.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1699819 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 123.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9936476 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 471.4,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2546378 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 314,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3794700 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 363.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3264162 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 691.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1747981 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 410.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2894587 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 786.9,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1460142 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23306,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23362,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50760 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18182325 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 137.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8690702 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29075817 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 157.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7761548 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58663785 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 19.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55409215 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "59805181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53533321 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 29.76,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37829444 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37368680 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12445671 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 281.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4229144 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 62.98,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18791898 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 437.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2720058 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 32.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36148986 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8037,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.55,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43957814 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.608,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746904105 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38511159 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.47,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "16809312 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 80.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14927842 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 148.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8022376 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17777076 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147519672 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995927419 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 9.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "120836692 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45012500 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 66.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17588114 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 105.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11832879 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8423524 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11530396 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 324.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3699303 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14678132 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 318,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3753807 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.241,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372755986 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.595,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "262751456 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373037916 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.426,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220308492 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149397705 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.636,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124435605 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12452584 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 247.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4968660 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4267,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21807991 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7327a17951228f6ea8e36b160e78218f7dbd46ed",
          "message": "📚 Docs: Rework Chinese (Taiwan) translation of documentation (#2310)\n\n* 📚 Doc: Reset zh_TW translation\r\n\r\n* 📚 Doc: 1st revision of Chinese (Taiwan) translation\r\n\r\n* 📚 Doc: Language Flag\r\n\r\n* 📚 Doc: 2nd rev. of Chinese (Taiwan) translation\r\n\r\n* 📚 Doc: Translated the middlewares list\r\n\r\n* Docs: Fixup space\r\n\r\n* 📚 Doc: Correct the figure link in READMEs\r\n\r\n* 📚 Doc: Update according to review suggestions\r\n\r\n* 📚 Doc: Update according to review suggestions",
          "timestamp": "2023-01-27T00:30:49+08:00",
          "tree_id": "2e184fca894f4c40378f82f666250575dde4fc3e",
          "url": "https://github.com/gofiber/fiber/commit/7327a17951228f6ea8e36b160e78218f7dbd46ed"
        },
        "date": 1674751309258,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1154,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3294,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "352183 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3351,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "334706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 143.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8276683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16984486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 71.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16741723 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22597462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5677630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 276.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3979348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.249,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "525922371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 984.5,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1216683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 765,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1562899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2698,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "420565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1385,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "785442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1253,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "870718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 115.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10457406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 140.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8532379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10410258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 293.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4105755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1666,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "627568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 511.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2341339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 114.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10389776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 156.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7527632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 230.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5140705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5600744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 423.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2823226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31053327 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14382693 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31506812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 41.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28606162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 693.1,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1788530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16400652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 299.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3987276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4452,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "255268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77624162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 137.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8654702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 291.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4073904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 405.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2929108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2003,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "521226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7457624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1155,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "896773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 233.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5100504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 748.1,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1595955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 799.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1504081 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 795.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1537705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 776.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1543452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 184.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6455035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211700652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22122538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 39.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30933562 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 92.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12863413 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 103.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11456466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 39.12,
            "unit": "ns/op\t      70 B/op\t       0 allocs/op",
            "extra": "26492512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 149.6,
            "unit": "ns/op\t      94 B/op\t       1 allocs/op",
            "extra": "7841166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24824974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "127766937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3961,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "286622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3515,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "308653 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4378,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264501 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4360,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1175,
            "unit": "ns/op\t     785 B/op\t       8 allocs/op",
            "extra": "899610 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3338,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "341787 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3415,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "334489 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 142,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8421273 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 44.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25825556 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19938986 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.061,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "297246022 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.438,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159957454 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.727,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "208309910 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 938.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1303882 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 855.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1402141 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 156.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7471050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8205963 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 618.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1950420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 616,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1942730 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 706539,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1705 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13142415 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45127534 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373150171 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.764,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "427253139 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 146.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8235206 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5742076 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 143.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8216864 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 248983,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4742 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212196,
            "unit": "ns/op\t   24524 B/op\t    1000 allocs/op",
            "extra": "5557 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 178774,
            "unit": "ns/op\t     676 B/op\t       0 allocs/op",
            "extra": "6654 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 448.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2672936 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 400.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "3007170 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 811.4,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1493362 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 505.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2366227 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1822,
            "unit": "ns/op\t     316 B/op\t       7 allocs/op",
            "extra": "791634 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2036,
            "unit": "ns/op\t     588 B/op\t       7 allocs/op",
            "extra": "764505 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1435,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "852652 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1625,
            "unit": "ns/op\t     255 B/op\t       5 allocs/op",
            "extra": "821174 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1894,
            "unit": "ns/op\t     351 B/op\t       5 allocs/op",
            "extra": "890346 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 107.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10922175 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 101.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12185905 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 47.43,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25189070 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.99,
            "unit": "ns/op\t 650.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60488736 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.25,
            "unit": "ns/op\t 287.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26538686 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 704.5,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1694226 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9857053 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 472.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2528968 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 316.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3762402 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 361.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3293251 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 692.6,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1737144 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 407.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2925210 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 730.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1646721 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23386,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50967 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23510,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50726 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18204182 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 142.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8433751 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29059480 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 153.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7767596 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57879566 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56363418 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.49,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58408357 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53277202 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 29.96,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37916959 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.45,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37546808 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12432073 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 284.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4198450 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 63.03,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18489097 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 441.2,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2740429 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 33.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35699510 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.77,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44382298 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746210964 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38286418 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.68,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "17428582 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 77.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15469934 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 150.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8072078 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.68,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17582413 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147258892 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994989200 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 9.154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129717628 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 26.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44667276 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 67.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17532218 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 101.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11832240 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 142,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8356479 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 103.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11362148 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 325.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3668390 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 79.95,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14826049 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 319.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3740146 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368242773 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.611,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "254960462 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373102917 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.424,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "218776676 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149291758 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.594,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "125364072 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12345396 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 249.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4807771 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4249,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 57.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20822338 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "committer": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "distinct": true,
          "id": "d5ecf06286968ec93a37693dbde3d338cd70dfd8",
          "message": "fix benchmarks",
          "timestamp": "2023-02-02T22:37:59+03:00",
          "tree_id": "da236d195f16932cae562b9f58d5627ab211ae12",
          "url": "https://github.com/gofiber/fiber/commit/d5ecf06286968ec93a37693dbde3d338cd70dfd8"
        },
        "date": 1675367346774,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1271,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "790476 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3286,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "348064 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3336,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "343958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7950756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20168169 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 81.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14825235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19983547 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 244.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4934842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 270.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4345384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517251074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 959.6,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1245500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 746.6,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1603662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2593,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "439426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1415,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "773316 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1305,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "898984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10198738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8558536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9464604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 302.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3914950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1860,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "584053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 572.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2107465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8981466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 150.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7883712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 224.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5314161 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 200.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5966593 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 396.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3015805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26784801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 87.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13684921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 37.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31007563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 45.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26096133 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 643.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1855401 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17090565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 291.9,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4086981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4302,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "268816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82222342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8676051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 288.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4214835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 395.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3041365 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2237,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "512656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 140.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8172146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1175,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "880605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 235.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5055852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 731.3,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1642994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 780,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1532002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 769.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1556404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 762,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1576407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 178.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6696442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226073518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 58.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20571757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27706826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11868318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 112.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10513732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 40.99,
            "unit": "ns/op\t      76 B/op\t       0 allocs/op",
            "extra": "24446208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 141.3,
            "unit": "ns/op\t      82 B/op\t       1 allocs/op",
            "extra": "7429495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 53.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22024078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.405,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "126876422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3792,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "301809 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3314,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "346093 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4130,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "276765 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4112,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "280603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1202,
            "unit": "ns/op\t     794 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3345,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "352024 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3389,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "340642 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 143.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8359701 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 51.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "23072899 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20530340 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298170654 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "161416250 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201419161 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 900.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1334985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 891.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1347352 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 162.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7475055 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8123402 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 614,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1952876 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 611.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1952868 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 704679,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1687 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13055349 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46347338 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373462233 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.734,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "437932846 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8119444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 225.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5261336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 147.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8196387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 246703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4743 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 218578,
            "unit": "ns/op\t   24570 B/op\t    1000 allocs/op",
            "extra": "5410 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 176618,
            "unit": "ns/op\t     669 B/op\t       0 allocs/op",
            "extra": "6727 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 481.3,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2488143 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 431.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2772028 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 862.9,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1466258 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 537.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2231031 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1789,
            "unit": "ns/op\t     310 B/op\t       7 allocs/op",
            "extra": "844185 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2013,
            "unit": "ns/op\t     569 B/op\t       7 allocs/op",
            "extra": "805856 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1451,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "768990 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1787,
            "unit": "ns/op\t     355 B/op\t       5 allocs/op",
            "extra": "877918 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1780,
            "unit": "ns/op\t     347 B/op\t       5 allocs/op",
            "extra": "908857 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9777912 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 105.7,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11242616 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.26,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24584059 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.31,
            "unit": "ns/op\t 673.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60931130 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.83,
            "unit": "ns/op\t 303.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "28037823 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 715.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1670835 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 129.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9246453 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 491.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2450288 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 330.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3684494 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 376,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3219212 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 704.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1710230 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2892016 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 751,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1470331 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 22963,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51624 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 22996,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51204 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18062281 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 139.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8571852 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28972820 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 154,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7696045 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 20.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57237532 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.92,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54162717 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58540400 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51324909 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40336747 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38416047 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12443816 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10257698 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 63.86,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18387258 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 438.7,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2726149 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39170949 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.03,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44682000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746283447 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.61,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35939076 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 75.29,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15664862 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 72.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16463012 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 150.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7949239 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18135823 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146568510 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994733004 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298401398 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 26.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43597441 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 70.11,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16755733 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11664026 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 140.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8464028 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 102.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11295082 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 383.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3149524 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 82.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14522472 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3845856 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "369405552 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "258208456 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.638,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331214241 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199158508 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149201959 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144102128 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12362641 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10326009 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21900726 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "committer": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "distinct": true,
          "id": "7d81680fb4e0c4ab9e4ab8bbfcbc31f1a157a6e8",
          "message": "fix benchmarks",
          "timestamp": "2023-02-02T22:41:36+03:00",
          "tree_id": "cd502ad6265647819ea6363ed0482c4fc2776390",
          "url": "https://github.com/gofiber/fiber/commit/7d81680fb4e0c4ab9e4ab8bbfcbc31f1a157a6e8"
        },
        "date": 1675367571737,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1470,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "989775 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3284,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "307090 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3359,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "343075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8044566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20291635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14744187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19902688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4884181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 270.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4224814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "509984287 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 961.4,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1249196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 757.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1610103 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2593,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "426680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1391,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "779472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1243,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "854253 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10196121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 144.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8448444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9437712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 306.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3927105 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1822,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "655314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 570,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2111337 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9018484 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 150.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7909471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 224.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5311995 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 203.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5927836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 394.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3023820 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27451057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 87.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13568977 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 37.81,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "29595372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 46.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26300416 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 647.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1850023 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17218129 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 293.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4067914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4313,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "269995 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81049377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8747812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 292,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4135362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 394.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3029985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2296,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "503589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 137.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8369121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1179,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "886816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 236.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5053051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 731.5,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1635010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 784.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1532464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 769.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1551342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 760.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1579244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 182.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6491826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.307,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225845803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 57.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20953986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27504325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11893335 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 112.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10558696 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 39.09,
            "unit": "ns/op\t      67 B/op\t       0 allocs/op",
            "extra": "27812300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 145.3,
            "unit": "ns/op\t      90 B/op\t       1 allocs/op",
            "extra": "8275546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 54.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22241439 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.397,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "127633774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3793,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "298218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3299,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "343963 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4123,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "281870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4123,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "280237 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1203,
            "unit": "ns/op\t     800 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3291,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "357662 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3340,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "345873 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 139.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8516228 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 51.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "22970485 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20714610 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298191478 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159652441 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.841,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "209645628 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 944.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1316374 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 910.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1314153 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 160.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7442911 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 146.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7980300 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 619.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1944513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 617.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1950832 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 694019,
            "unit": "ns/op\t  372999 B/op\t    5608 allocs/op",
            "extra": "1713 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13197567 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43728492 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373080247 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.748,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "438773613 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 183.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8129415 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 228.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5226073 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 147.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8208036 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 247046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4748 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 221144,
            "unit": "ns/op\t   24620 B/op\t    1000 allocs/op",
            "extra": "5264 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177112,
            "unit": "ns/op\t     695 B/op\t       0 allocs/op",
            "extra": "6685 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 494,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2429475 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 429,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2786776 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 831.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1447734 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 539.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2222713 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1958,
            "unit": "ns/op\t     313 B/op\t       7 allocs/op",
            "extra": "809878 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2092,
            "unit": "ns/op\t     568 B/op\t       7 allocs/op",
            "extra": "807801 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1466,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "849729 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1764,
            "unit": "ns/op\t     358 B/op\t       5 allocs/op",
            "extra": "864146 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1860,
            "unit": "ns/op\t     339 B/op\t       5 allocs/op",
            "extra": "941011 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9873309 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 105.9,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11044561 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.15,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24673864 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.37,
            "unit": "ns/op\t 671.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62507803 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.86,
            "unit": "ns/op\t 303.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27909128 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 718,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1665145 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9324939 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 494.6,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2452002 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 325.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3653355 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3247914 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 699.3,
            "unit": "ns/op\t      14 B/op\t       1 allocs/op",
            "extra": "1717752 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 411.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2901948 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 788.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1478127 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23128,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51448 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23099,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51478 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18197073 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 140.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8549450 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29004289 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 155.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7670626 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56522474 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53654096 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58210899 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50872934 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39554553 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38285641 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12435192 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10305424 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.34,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18173125 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 440.3,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2730591 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39313525 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.804,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42587686 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.608,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "745944439 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 32.17,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34892924 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 76.64,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15270108 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 70.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16626938 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8068454 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.14,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17782134 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146484505 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "992386000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.022,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298033299 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44798074 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 70.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16443642 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11638904 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8391523 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11560933 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 367.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3239666 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.47,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14524932 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 319.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3772704 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "369165951 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.597,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259628475 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.648,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328850498 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.993,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200012052 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.033,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149269158 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.387,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143196186 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12430456 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10320886 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21804146 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "committer": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "distinct": true,
          "id": "b8ac29d0516ab4441726ff54761a546842410756",
          "message": "fix benchmarks",
          "timestamp": "2023-02-02T22:48:04+03:00",
          "tree_id": "673931f01beff7a38f0fd8767acdeded997a415a",
          "url": "https://github.com/gofiber/fiber/commit/b8ac29d0516ab4441726ff54761a546842410756"
        },
        "date": 1675367983761,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1604,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "881354 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3505,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "348691 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3331,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "357781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 153.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20064427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14803098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19890030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 244.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4897069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 270.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4275428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517930312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 961.4,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1221625 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 746,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1606297 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2599,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "432511 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1390,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "785956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1245,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "877075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10212624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8593438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 126.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9465783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 305.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3925900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1884,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "598461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 569,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2102973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8982022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 153.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7802124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 225.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5279288 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 200.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5926924 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 395.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3020398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27210184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 87.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13694976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 37.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "29825923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 46.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26146626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 651.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1825928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16884813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 295.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3969151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4308,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "270349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82427817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8687955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 284.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4198671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 394.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3032182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2238,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "505408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 137.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8360258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1173,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "885254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 236.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5053185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 736,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1627518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 782,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1525442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 774.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1548571 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 762.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1569274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 180.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6556016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226033671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 57.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20112517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27712898 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 99.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12041990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 113.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10602110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 45.05,
            "unit": "ns/op\t      77 B/op\t       0 allocs/op",
            "extra": "30489492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 141.4,
            "unit": "ns/op\t      88 B/op\t       1 allocs/op",
            "extra": "8498346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 53.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22162844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128290348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3786,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "302806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3317,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "342717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4138,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "280476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4152,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "281028 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1248,
            "unit": "ns/op\t     798 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3309,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "344526 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3363,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "341906 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 166.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7047710 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 55.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21543300 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 64.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20701875 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.025,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298094928 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.354,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "160463590 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "195640800 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 900.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1330364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 891,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1345060 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 160.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7473285 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 147.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8102503 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 614,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1954656 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 612.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1945741 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 674074,
            "unit": "ns/op\t  373002 B/op\t    5608 allocs/op",
            "extra": "1735 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13145352 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45760399 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373320062 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.738,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "439627485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8052190 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 228.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5344165 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 145.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8230383 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 247392,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4785 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 218396,
            "unit": "ns/op\t   24589 B/op\t    1000 allocs/op",
            "extra": "5431 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 176905,
            "unit": "ns/op\t     700 B/op\t       0 allocs/op",
            "extra": "6714 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 486.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2470957 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 431.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2793991 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 822.6,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1441849 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 538.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2229368 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1816,
            "unit": "ns/op\t     310 B/op\t       7 allocs/op",
            "extra": "844126 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2024,
            "unit": "ns/op\t     564 B/op\t       7 allocs/op",
            "extra": "816468 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1439,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "775836 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1543,
            "unit": "ns/op\t     253 B/op\t       5 allocs/op",
            "extra": "842140 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1758,
            "unit": "ns/op\t     336 B/op\t       5 allocs/op",
            "extra": "953798 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9847376 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 106.4,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10951713 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.15,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24628059 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.31,
            "unit": "ns/op\t 673.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "61490520 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.84,
            "unit": "ns/op\t 303.49 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27989337 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 719.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1539922 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9163544 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 493.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2438487 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 347.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3661410 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 369.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3208290 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 707.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1705939 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 413.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2902867 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 761.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1568523 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23309,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50821 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23221,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51280 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18063842 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 140.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8526601 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28960888 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 156.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7710367 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.23,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57309570 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54539253 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.92,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58867344 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50625037 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40414908 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.77,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38613766 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12441369 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10320346 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.08,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18317175 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 440.4,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2715386 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39136887 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44560724 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "745413058 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35758578 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 75.84,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "14855872 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 71.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16887939 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 158.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7524860 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 76.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18152336 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146003794 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "993066829 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.018,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298707487 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44975563 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 69.91,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16811986 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11662935 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 144.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8424304 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 102.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11689782 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 359.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3335012 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.58,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14476732 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 311.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3844710 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "370510819 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.437,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "255164684 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.633,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "330763741 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.025,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199151487 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149354974 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.331,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143919298 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12373669 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10319167 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4259,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18622347 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "efectn@protonmail.com",
            "name": "M. Efe Çetin",
            "username": "efectn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2820aef585a976caa8a3026c4774efb0fe5d1410",
          "message": ":broom: chore: add go 1.20 to ci and readmes (#2322)\n\n* :white_check_mark: chore: add go 1.20 to ci and readmes\r\n\r\n* :broom: chore: add go 1.20 to ci and readmes\r\n\r\n* update linter\r\n\r\n* fix linter\r\n\r\n* fix benchmarks\r\n\r\n* fix benchmarks\r\n\r\n* fix benchmarks",
          "timestamp": "2023-02-02T23:01:37+03:00",
          "tree_id": "673931f01beff7a38f0fd8767acdeded997a415a",
          "url": "https://github.com/gofiber/fiber/commit/2820aef585a976caa8a3026c4774efb0fe5d1410"
        },
        "date": 1675368794133,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1838,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "649570 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6353,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "186532 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6448,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "182524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 192.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6389533 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16222234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12147552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15967492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 309.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3749446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 345.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3252597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.558,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "329763459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1222,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "833896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 906.1,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1325432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3275,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "330418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1659,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "641754 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1517,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "781963 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7301054 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 192.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5967992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 167.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7395657 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 398.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3021553 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2653,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "398073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 682.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1702594 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 163.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7651778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 206.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5680234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 312.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3891981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 272.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4423396 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 547.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2233036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 53.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22792383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 104.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11714438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 58.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "19577787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 62.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19835389 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 794.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1531597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 88.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12552141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 393.7,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3075565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5267,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "212592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 22.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58952073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 203.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5808729 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 390.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3087018 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 513.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2348863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2946,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "378372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 184.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6016880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1509,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "738156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 308.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3766040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 929.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1265169 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 941.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1231429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 932.2,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1271974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 947.2,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1268092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 245.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5037782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.871,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "174366915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 77.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16134238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19788154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 128.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9410986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 154.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7516304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 35.11,
            "unit": "ns/op\t      65 B/op\t       0 allocs/op",
            "extra": "28517116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 189.2,
            "unit": "ns/op\t      83 B/op\t       1 allocs/op",
            "extra": "5790268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 67.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18336020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 12.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84715663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4730,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "245012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3983,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "298806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5131,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "240117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5119,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "220378 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1601,
            "unit": "ns/op\t     793 B/op\t       8 allocs/op",
            "extra": "698751 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6412,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "175857 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6470,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "178774 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6180726 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 65.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "16166707 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 72.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16642574 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 5.455,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "222457428 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.409,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "185828088 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "188739450 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1133,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1124,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 215.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5459984 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 202,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5611857 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 742.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1618977 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 742.7,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1644463 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 874902,
            "unit": "ns/op\t  372993 B/op\t    5608 allocs/op",
            "extra": "1365 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 125.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9883440 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 33.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31948191 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.888,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "234030974 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "330654630 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 203.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5836429 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 289.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4052418 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 202.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5870694 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 329419,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3726 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 264709,
            "unit": "ns/op\t   24565 B/op\t    1000 allocs/op",
            "extra": "4508 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 207992,
            "unit": "ns/op\t     721 B/op\t       0 allocs/op",
            "extra": "5642 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 637.9,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1853307 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 508,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2322223 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 1047,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 633.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1872038 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2490,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "720595 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2880,
            "unit": "ns/op\t     627 B/op\t       7 allocs/op",
            "extra": "595906 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1692,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "675037 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2157,
            "unit": "ns/op\t     277 B/op\t       5 allocs/op",
            "extra": "666859 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2063,
            "unit": "ns/op\t     258 B/op\t       5 allocs/op",
            "extra": "794528 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 162.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7392732 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 135.9,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "8922250 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 62.35,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19798980 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 27.13,
            "unit": "ns/op\t 479.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "45448593 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 53.37,
            "unit": "ns/op\t 243.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "22206080 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 955.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1347837 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6939639 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 580.7,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2068574 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 403.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "2970457 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 450.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2555056 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 844.8,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1437328 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 509.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2386479 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 885.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1363497 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 32651,
            "unit": "ns/op\t    8535 B/op\t     207 allocs/op",
            "extra": "36987 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 33001,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "36462 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 63.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16610989 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 182.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6568298 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 67.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18816928 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 170.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7039674 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 24.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46971513 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 26.01,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45395478 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 25.53,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45946500 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 28.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41197676 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 35.04,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32803167 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 37.22,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32940769 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9545205 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 133.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9155922 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 86.61,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "13661102 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 632.2,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "1851138 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 40.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27052688 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.9213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35504818 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.975,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "612671617 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 41.52,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27463404 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 105,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "10881471 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12098880 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 196.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6059916 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 83.65,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13431150 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 10.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "818834665 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 5.422,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220679744 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 32.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35628748 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 89.12,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13252429 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 119.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10277686 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 187.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6443808 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 118,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10246653 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 471.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2556378 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 116.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10647254 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 394.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3118674 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "408478586 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211395672 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.661,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "337385719 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.595,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "172706818 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 10.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 10.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "115800489 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 101.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12006020 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 134.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9039050 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4399,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 60.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18759939 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kolesnikov.khv@yandex.ru",
            "name": "Алексей Колесников",
            "username": "0xdeface"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21cd45b750a723a5fc87a8bfb9d4b12016a901fa",
          "message": "PR: add url for favicon middleware, for correct handling different of… (#2231)\n\n* PR: add url for favicon middleware, for correct handling different of ico formats\r\n\r\n* pr:  efectn > URL would be better naming i think\r\n\r\n* pr: add test case\r\n\r\n* apply reviews\r\n\r\n* remove json annotinos, since they are unnecessary\r\n\r\n* readme fixes\r\n\r\n* linting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: koalan <kolesnikov.khv@gmail.com>\r\nCo-authored-by: Muhammed Efe Çetin <efectn@protonmail.com>",
          "timestamp": "2023-02-03T10:14:24+01:00",
          "tree_id": "812da106648e6c23973bf813732754bd8a290b60",
          "url": "https://github.com/gofiber/fiber/commit/21cd45b750a723a5fc87a8bfb9d4b12016a901fa"
        },
        "date": 1675416357078,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 2033,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "893288 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6245,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "168127 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6380,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "184738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 189.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6218912 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16914028 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 97.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12360859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15375661 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 314.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3797522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 343.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3205892 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336887845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1179,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "981320 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 899.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1331682 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3319,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "355138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1630,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "685772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1546,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "740684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 160.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7475908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 190.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6445267 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7407886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 390,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "2982759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2633,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "446224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 678.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1804144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 157.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7747500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 206.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5791008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 301.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3922390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 265.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4568877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 529.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2334235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 52.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22981496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 108.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11803826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 58.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20020779 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 55.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22241791 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 773.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1529132 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 86.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13626640 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 392.7,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3134304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5176,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "226273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60185156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 205.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5734933 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 392.3,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3095154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 517.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2261833 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 3098,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "393031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 180.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6324705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1460,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "733862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 305.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3835876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 921,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1258896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 970.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1237561 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 934.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1258920 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 937.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1284310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 246.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4986684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167810594 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 76.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15340022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22540490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 120.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10078167 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 153.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7928407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 37.36,
            "unit": "ns/op\t      74 B/op\t       0 allocs/op",
            "extra": "31448954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 194.6,
            "unit": "ns/op\t      95 B/op\t       1 allocs/op",
            "extra": "6212742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 67.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17578544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 12.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4845,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "233845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 4064,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "299295 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5148,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "230839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5090,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "227425 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1644,
            "unit": "ns/op\t     794 B/op\t       8 allocs/op",
            "extra": "731582 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6402,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "182482 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6580,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "174078 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 176.7,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6319098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 64.53,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "17338809 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 71.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16638195 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 5.431,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220196485 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "190286572 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192471328 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1096,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1110,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 211.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5575230 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 202.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6150621 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 738,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1645893 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 756,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1581620 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 898518,
            "unit": "ns/op\t  373016 B/op\t    5608 allocs/op",
            "extra": "1312 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 121.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9752778 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 33.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34507806 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.748,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "252246631 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "341031822 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 201.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5927662 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 277.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4368927 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 196.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5912623 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 314585,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3758 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 258306,
            "unit": "ns/op\t   24602 B/op\t    1000 allocs/op",
            "extra": "4790 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 206134,
            "unit": "ns/op\t     641 B/op\t       0 allocs/op",
            "extra": "5930 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 643.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1934332 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 500.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2444812 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 971.3,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1201944 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 634.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1949930 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2523,
            "unit": "ns/op\t     324 B/op\t       7 allocs/op",
            "extra": "730525 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2808,
            "unit": "ns/op\t     590 B/op\t       7 allocs/op",
            "extra": "650376 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1710,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "780541 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2223,
            "unit": "ns/op\t     286 B/op\t       5 allocs/op",
            "extra": "627218 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2048,
            "unit": "ns/op\t     259 B/op\t       5 allocs/op",
            "extra": "786046 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 162.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323825 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 135.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "8972199 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 63.56,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "18887161 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 27.06,
            "unit": "ns/op\t 480.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "46647504 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 53.36,
            "unit": "ns/op\t 243.65 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23290208 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 865,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1380027 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 169.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7257537 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 582.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2042520 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 393.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "2997165 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 449.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2707100 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 819.5,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1484504 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 496.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2349816 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 830.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1429756 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 33714,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "35149 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 32598,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "36357 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 64.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17965135 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 186.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "5425894 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 64.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18573889 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 165.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7052906 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 24.51,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47126376 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 26.29,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40049185 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 23.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47326174 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 26.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41327644 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 34.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32789240 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.42,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32076666 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 123.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9815040 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 133.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8798288 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 83.49,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "13765118 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 619.9,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "1899178 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 40.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29684614 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.9036,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 31.18,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "36146031 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.958,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "624971755 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.83,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27143678 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 103.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "11464645 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 97.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12129139 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 191.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6038937 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 81.77,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14684956 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.902,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "123345252 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "840586897 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 5.255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229441995 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 32.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35757954 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 88.72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12654490 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 117.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10303689 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 183.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6446487 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 115.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10618592 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 465.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2553664 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 116.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9948943 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 388.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3119984 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.819,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "431153082 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.431,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "218827549 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.507,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345570813 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "189033178 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.903,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "135680346 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.713,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124777653 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12280989 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 129.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9090050 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4439,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 60.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19952274 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "675f5181ce303056719720ea8338cfed3b5fc171",
          "message": "prepare release for v2.42.0",
          "timestamp": "2023-02-03T13:01:33+01:00",
          "tree_id": "54a543ded608d8ecd764357d86726687af3959d4",
          "url": "https://github.com/gofiber/fiber/commit/675f5181ce303056719720ea8338cfed3b5fc171"
        },
        "date": 1675426373762,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1595,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "891783 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6161,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "203271 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5980,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "197926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 155.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7747563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 61.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19624928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 81.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14687811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 61.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19503156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 246.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4862665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 266.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3896173 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "549095892 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1130,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "957292 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 709.9,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1684641 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2578,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "435314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1310,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "813333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1177,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "925129 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 126.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9501522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 145.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8222307 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9453456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 306,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3939808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2044,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "530624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 566,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2120449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 129.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9255020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 164,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7318522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 236.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5074838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 212.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5645617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 394.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3037515 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 42.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27895856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 84.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14234208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 39.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "29195655 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 46.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26047657 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 644,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1861962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17485485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 301.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3984656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4149,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "280011 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "74687176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 155.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7646224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 292.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3987777 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 393.3,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3036190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2418,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "478278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 144.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7942570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1191,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "1006452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 239.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4977494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 714.5,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1670722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 758.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1590534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 753.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1600197 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 742.9,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1581799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 187,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6414043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225246712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 61.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19315608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27421644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 98.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12235257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 116.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10298982 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 57.28,
            "unit": "ns/op\t      79 B/op\t       0 allocs/op",
            "extra": "18988263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 165.6,
            "unit": "ns/op\t      86 B/op\t       1 allocs/op",
            "extra": "7020781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 53.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22382319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.624,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124214436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3778,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "294082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3121,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "372265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4023,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "279482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4026,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "285918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1281,
            "unit": "ns/op\t     789 B/op\t       8 allocs/op",
            "extra": "908618 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5870,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "200082 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5982,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "197044 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 139,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8612780 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 50.95,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "22341690 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 57.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20695353 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 3.789,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316507630 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238377618 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 4.724,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253619162 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 891.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1343394 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 905.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1336257 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 167.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6953630 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 161.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7774252 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 592.3,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1977322 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 593.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "2021419 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 678211,
            "unit": "ns/op\t  373008 B/op\t    5608 allocs/op",
            "extra": "1665 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 94.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12748243 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45071587 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "355344358 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.687,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "446133192 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 157.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7696989 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 214.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5569702 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 159.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7697029 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 257838,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4452 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 206031,
            "unit": "ns/op\t   24573 B/op\t    1000 allocs/op",
            "extra": "5696 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 162174,
            "unit": "ns/op\t     671 B/op\t       0 allocs/op",
            "extra": "7333 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 504.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2385666 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 416.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2864721 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 799.5,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1488067 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 517.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2305374 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2140,
            "unit": "ns/op\t     418 B/op\t       7 allocs/op",
            "extra": "854124 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2286,
            "unit": "ns/op\t     566 B/op\t       7 allocs/op",
            "extra": "812067 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1336,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "791629 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1811,
            "unit": "ns/op\t     357 B/op\t       5 allocs/op",
            "extra": "867373 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1902,
            "unit": "ns/op\t     344 B/op\t       5 allocs/op",
            "extra": "917679 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 125.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9511654 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 111.2,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10771786 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 50.05,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "23800003 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.64,
            "unit": "ns/op\t 661.87 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "61243321 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.69,
            "unit": "ns/op\t 297.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26815306 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 703.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1703502 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 135.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8882401 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 475.8,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2520722 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 320.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3729670 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 368.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3192046 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 701.6,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1739402 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 414,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2952169 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 754.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1594635 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23492,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50820 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23311,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50431 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 61.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19349191 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 129.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9255873 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 47.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24995560 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 143.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8271332 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 18.56,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "60207163 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 19.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55915086 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57644916 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53514015 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 26.82,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40927185 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 28.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38440346 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 99.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12018301 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 109.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10847277 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 66.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "17419950 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 489.5,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2453442 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 31.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38564498 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.7531,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 26,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40885626 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.945,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "644581180 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.52,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35424078 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 77.46,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15280718 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 81.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14909040 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316175 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.88,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18113918 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147011640 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 3.683,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325894178 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 25.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47713368 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 68.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17257113 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 86.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13930994 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 140.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8460442 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 94.05,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "12311976 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 333.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3594426 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 82.92,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14270574 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 296.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4079560 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.689,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324675927 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274977307 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398339281 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231277087 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 7.698,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "155864356 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "145208870 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 81.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14661507 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 109.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10944291 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3713,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21427701 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "028d821beae35dac01a795269e58db5ab5a9cc50",
          "message": "prepare release",
          "timestamp": "2023-02-03T13:59:47+01:00",
          "tree_id": "0a44658ce918edc91108b013773c9f3ed024a63f",
          "url": "https://github.com/gofiber/fiber/commit/028d821beae35dac01a795269e58db5ab5a9cc50"
        },
        "date": 1675429866152,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1520,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "705510 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 5970,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "196958 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6182,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "194684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 154.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7742391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 60.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19732359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14719281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 60.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19551164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 247.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4852592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 278.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4070178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "548583162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1149,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 761.2,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1586126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2843,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "413391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1392,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "799332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1250,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "909957 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9470818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 142.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8397134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9414212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 305.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3994198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2355,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "505268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 566.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2107706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 129.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9258302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 170.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7023494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 246.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4864294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5295513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 407.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2857552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 42.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28138684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 83.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14268723 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 40.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "27587522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 43.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27450012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 633,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1885852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17796825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 309.5,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3716541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4317,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "272715 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "75390835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7373100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 297.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3952132 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 400.8,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3013096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2655,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "430998 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 143.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8033275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1250,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "860299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 240.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4985077 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 736.2,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1636975 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 785.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1535203 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 784.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1531675 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 773.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1520373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 189.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6135666 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224443158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 61.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19267875 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28806346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 98.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12419308 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 116.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10019799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 54.85,
            "unit": "ns/op\t      80 B/op\t       0 allocs/op",
            "extra": "23223289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 175.7,
            "unit": "ns/op\t      90 B/op\t       1 allocs/op",
            "extra": "6561402 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 53.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22317284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124543245 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3944,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "286906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3243,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "315806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4162,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "279847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4148,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "279472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1453,
            "unit": "ns/op\t     794 B/op\t       8 allocs/op",
            "extra": "847305 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6154,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "193498 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6112,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "187404 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 145.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8180226 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 52.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "22538338 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 57.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20776503 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 3.834,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "309778227 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.041,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "237968172 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 4.736,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253259007 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 918.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1320254 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 921.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1308584 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 170.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7007640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 155.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7543044 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 603.1,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1985961 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 611.3,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1992058 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 735136,
            "unit": "ns/op\t  372993 B/op\t    5608 allocs/op",
            "extra": "1605 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 96.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12914055 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40607780 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "356582227 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.693,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "445632274 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 156.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7590606 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5524402 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 155.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7587750 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 259077,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4542 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 213452,
            "unit": "ns/op\t   24590 B/op\t    1000 allocs/op",
            "extra": "5238 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 163494,
            "unit": "ns/op\t     710 B/op\t       0 allocs/op",
            "extra": "7230 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 522.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2339619 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 420.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2755347 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 813.6,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1468228 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 518.4,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2319312 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2026,
            "unit": "ns/op\t     314 B/op\t       7 allocs/op",
            "extra": "807627 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2238,
            "unit": "ns/op\t     576 B/op\t       7 allocs/op",
            "extra": "789610 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1377,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "877485 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1710,
            "unit": "ns/op\t     264 B/op\t       5 allocs/op",
            "extra": "747828 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2123,
            "unit": "ns/op\t     351 B/op\t       5 allocs/op",
            "extra": "890793 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9491152 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 111.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10747230 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 52.44,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "22701127 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.65,
            "unit": "ns/op\t 661.54 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "59042631 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.79,
            "unit": "ns/op\t 296.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "25247073 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 770.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1641910 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 135.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8629911 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 485.6,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2433012 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 329.1,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3659780 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 373.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3244768 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 700.5,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1707873 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 412,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2882205 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 779.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1479946 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 24806,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "48150 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 26518,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "48256 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 61.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19504166 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 134.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8884455 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 48.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24946634 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 156,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8041502 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 20.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57863910 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.06,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53270277 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57031734 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 22.33,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53420866 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.89,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35209250 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34417522 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 99.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12003861 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10910654 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 71.18,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14569765 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 502.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2280643 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 31.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37527174 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.7554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 28.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40791426 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.055,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "600224742 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 33.43,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31040565 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 81.08,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "14745488 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 78.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15401085 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 161.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7382328 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 67.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17436428 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146337483 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 3.689,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325118301 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 25.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47733140 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 71.76,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16775976 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 86.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13220943 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 144.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8416195 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 96.16,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11926854 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 349,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3380196 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 93.74,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "12358056 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 307.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3935805 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324424436 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274451403 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.015,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398047759 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231078079 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 7.711,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "155675203 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146290587 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 82.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14605467 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 109.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10946968 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3718,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21457538 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryanbekhen.official@gmail.com",
            "name": "ACHMAD IRIANTO EKA PUTRA",
            "username": "ryanbekhen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61a3336119fa4bde5911d9af34950e1ae3144dbb",
          "message": "add forward from domain (#2323)\n\n* add forward from domain\r\n\r\n* add balancer forward\r\n\r\n* add unittest and readme\r\n\r\n* add short description new feature\r\n\r\n* add short description on signature\r\n\r\n* golangci-lint fix\r\n\r\n---------\r\n\r\nCo-authored-by: René Werner <rene@gofiber.io>",
          "timestamp": "2023-02-03T14:45:27+01:00",
          "tree_id": "620bc363316579e144009263d3e51f85a8476e71",
          "url": "https://github.com/gofiber/fiber/commit/61a3336119fa4bde5911d9af34950e1ae3144dbb"
        },
        "date": 1675432626810,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1632,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "641626 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7380,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "164661 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7470,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "158797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6365154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15702876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11280984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15676260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 295.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4057178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 336.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3246904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.692,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "448409439 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1434,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "800258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 921,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1314759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3182,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "353769 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1640,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "665002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1507,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "763351 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7818331 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 185.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6231235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7916126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 377.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3169707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2428,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "412141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 673,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1792437 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 152.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7811886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 190.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5932873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 284.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4405213 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 255.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4804420 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 472.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2508078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 51.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23725236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 98.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12641827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 50.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24182770 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 54.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22197363 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 784.3,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1565420 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 77.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15262245 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 352.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3337724 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4991,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "232359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66060938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 179.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6583646 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 361.2,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3384024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 481.2,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2381287 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2706,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "418200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 166.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6737600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1398,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "789924 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 298.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4210843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 891.5,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1414387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 910.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1336473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 855,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1351143 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 833.2,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1431606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 225.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5372810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193814127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 72.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15556789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23946422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 114.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10562230 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 131.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9052024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 52.62,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "22441710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 209.8,
            "unit": "ns/op\t      92 B/op\t       1 allocs/op",
            "extra": "6420849 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 64.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18817006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90502138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4735,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "265945 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 4134,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "307538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5216,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "226606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5152,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "237202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1630,
            "unit": "ns/op\t     798 B/op\t       8 allocs/op",
            "extra": "788244 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7517,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "170181 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7237,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "162042 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 183.8,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7782568 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 65.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "18915157 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 73.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17296458 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.921,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "254846994 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198219315 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200741480 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1112,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1044,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 195.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5863246 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 195.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5900865 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 674.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1796605 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 661.4,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1726312 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 829110,
            "unit": "ns/op\t  373018 B/op\t    5608 allocs/op",
            "extra": "1384 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 116.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10622503 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 32.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33658131 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "294686588 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "367957357 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 191.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6394616 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 265.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4528960 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 183.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6528331 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 302654,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3541 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 246124,
            "unit": "ns/op\t   24563 B/op\t    1000 allocs/op",
            "extra": "4869 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 190990,
            "unit": "ns/op\t     672 B/op\t       0 allocs/op",
            "extra": "6074 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 607.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2011762 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 498.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2465041 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 969.3,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1235466 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 600.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2052548 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2432,
            "unit": "ns/op\t     347 B/op\t       7 allocs/op",
            "extra": "613765 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2548,
            "unit": "ns/op\t     576 B/op\t       7 allocs/op",
            "extra": "674473 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1602,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "647240 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1850,
            "unit": "ns/op\t     265 B/op\t       5 allocs/op",
            "extra": "743067 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1876,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "813228 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 150.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8281616 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 133.6,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "8287693 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 59.54,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19383982 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 24.8,
            "unit": "ns/op\t 524.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52734243 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 52.04,
            "unit": "ns/op\t 249.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23125272 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 849.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1411974 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 157.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7737247 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 583.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2057504 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 403.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3088128 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 479.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2747540 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 846.1,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1503128 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 511.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2344495 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 885.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1324638 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 27800,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "42392 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 27778,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "44283 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 72.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16394437 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 155,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7279970 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 54.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21873355 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 172.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6709844 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51300979 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44865675 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 21.83,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54910855 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44069486 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 33.04,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35632730 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 34.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30691849 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 116.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9954638 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8954242 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 80.58,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14398058 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 602.5,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2044992 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 36.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31165272 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8867,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37801159 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "529600466 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30087063 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 90.54,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13169738 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 96.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12355000 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 189.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6294702 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 78.49,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14565343 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129981136 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.324,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906546184 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "272956898 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 31.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41389000 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 82.67,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14414522 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12027246 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 180,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7053384 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 115.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10244454 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 396.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3029743 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 104.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11640699 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 358,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3420672 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "271229629 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "236793181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "348759964 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200179076 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "127876525 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 10.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "123622197 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 99.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12527026 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 135.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8925040 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4629,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 65.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18972952 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryanbekhen.official@gmail.com",
            "name": "ACHMAD IRIANTO EKA PUTRA",
            "username": "ryanbekhen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61a3336119fa4bde5911d9af34950e1ae3144dbb",
          "message": "add forward from domain (#2323)\n\n* add forward from domain\r\n\r\n* add balancer forward\r\n\r\n* add unittest and readme\r\n\r\n* add short description new feature\r\n\r\n* add short description on signature\r\n\r\n* golangci-lint fix\r\n\r\n---------\r\n\r\nCo-authored-by: René Werner <rene@gofiber.io>",
          "timestamp": "2023-02-03T14:45:27+01:00",
          "tree_id": "620bc363316579e144009263d3e51f85a8476e71",
          "url": "https://github.com/gofiber/fiber/commit/61a3336119fa4bde5911d9af34950e1ae3144dbb"
        },
        "date": 1675433137769,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1850,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "582297 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7916,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "142663 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7285,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "157170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 180.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6647410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15805359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12177471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16682612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 288.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4164524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 313.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3638269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.561,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "461435624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1384,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "871551 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 844.3,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1426698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3067,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "378056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1545,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "681002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1377,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "808429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8067649 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 173.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7055344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 152.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7883366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 370.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3246331 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2407,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "465427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 680.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1768524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 155.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7709126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 196.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6107702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 282.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4224753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 267.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4407502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 478.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2546282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 50.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23933710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 98.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12059364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 47.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "23347885 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 54.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21825867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 786.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1518223 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 80.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14801757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 358,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3432372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5065,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "224226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63526532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 184,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6425558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 357.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3418843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 472.3,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2514270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2835,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "391582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 169.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6823078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1409,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "732388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 294,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4167429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 851.2,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1421233 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 883.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1360041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 865,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1378645 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 857.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1390406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 227.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5331237 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "191945755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 72.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16785836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23879421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 115.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10232719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8689806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 56.01,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "18094749 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 207.5,
            "unit": "ns/op\t      95 B/op\t       1 allocs/op",
            "extra": "6215473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 62.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18727437 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4700,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "259455 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3686,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "291219 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4983,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "242127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5041,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "243930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1440,
            "unit": "ns/op\t     787 B/op\t       8 allocs/op",
            "extra": "729100 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7072,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "173322 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7202,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "164626 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162.5,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7254025 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 60.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "18614169 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 68.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17605806 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.453,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264007857 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.963,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202248350 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212509429 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1107,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1074,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5923504 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 185.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6320334 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 661.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1814442 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 656.3,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1827957 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 811507,
            "unit": "ns/op\t  373004 B/op\t    5608 allocs/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 112.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10860940 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 31.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36124509 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.011,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298960890 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "374088556 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 187.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6412566 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 257.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4578285 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 187.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6392155 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 307877,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3604 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 249514,
            "unit": "ns/op\t   24558 B/op\t    1000 allocs/op",
            "extra": "4866 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 194090,
            "unit": "ns/op\t     630 B/op\t       0 allocs/op",
            "extra": "6121 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 637.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1825701 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 498.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2408275 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 965,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1247298 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 612,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1931557 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2326,
            "unit": "ns/op\t     326 B/op\t       7 allocs/op",
            "extra": "716215 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2480,
            "unit": "ns/op\t     584 B/op\t       7 allocs/op",
            "extra": "678918 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1596,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "675878 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1891,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "755961 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1988,
            "unit": "ns/op\t     262 B/op\t       5 allocs/op",
            "extra": "765008 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7913931 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 136.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9159949 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 59.89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19832158 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 23.36,
            "unit": "ns/op\t 556.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51061803 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 51.99,
            "unit": "ns/op\t 250.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23165389 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 835.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1432612 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7439731 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 588.6,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2070312 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 393.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3093784 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 447.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2662053 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 846.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1477070 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 494.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2398622 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 899.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1278235 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28139,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "42866 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28635,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "38748 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 73.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16253794 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 155.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7732747 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21131716 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 169.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7017585 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 21.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51043546 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46748805 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 21.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51291840 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44907762 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 31.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "36139525 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 34.06,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33867774 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10252521 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 130.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9257517 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 78.11,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14991658 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 569.5,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2066139 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 36.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32168502 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8829,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.35,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39109064 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.239,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "543868581 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 37.45,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "29794221 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 90.34,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13192646 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 98.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12283682 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 191.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6195939 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 76.54,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "15443887 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.556,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124243734 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "872777810 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279119253 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 29.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40154940 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 83.65,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13504767 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 101.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11941909 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 174.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7119304 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 112.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10526096 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 405.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2893574 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 97.14,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11781270 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 354.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3322962 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276811317 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "234941886 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.597,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "338378926 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193969524 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130579728 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.868,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "121066128 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12263221 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 129.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9167260 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 66.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18410742 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dozheiny@gmail.com",
            "name": "Iliya",
            "username": "dozheiny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54439a5bde246577331b6e345c9d640b289568c2",
          "message": "🔥 Feature: add queryFloat parser (#2328)",
          "timestamp": "2023-02-09T13:44:13+08:00",
          "tree_id": "1e5c04e2f901a8aff499bee82825baec9f746337",
          "url": "https://github.com/gofiber/fiber/commit/54439a5bde246577331b6e345c9d640b289568c2"
        },
        "date": 1675922138263,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1966,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "704508 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7595,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "155852 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6308,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "185776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 185.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6272610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17133072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 94.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12824382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16572799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 300.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3905151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 337.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3297200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.402,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "335715259 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1174,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "895410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 879.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1387195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3159,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "363170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1640,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "727425 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1480,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "738728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 155.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7681255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 186.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6587312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7597923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 372,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3169422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2542,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "461094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 643.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1773290 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8104512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 207,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5597952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 295.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4151202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 265.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4667404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 526.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2325819 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 50.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23694422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 99.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12058304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 56.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20703662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 56.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20962923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 755.5,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1625889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 86.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14664445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 369.1,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3123220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5138,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "227774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62505976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 197.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5952524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 382.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3326643 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 494.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2396553 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2867,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "402602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6503611 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1439,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "717117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 292.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4049954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 886.3,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1341336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 918.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1307938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 925.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1328432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 899.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1320277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 229,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4991034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.479,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "185027150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 70.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17117002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 52.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23427933 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9840116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8125020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 37.27,
            "unit": "ns/op\t      70 B/op\t       0 allocs/op",
            "extra": "33327598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 192.7,
            "unit": "ns/op\t      90 B/op\t       1 allocs/op",
            "extra": "6639487 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 65.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18663925 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4464,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "259617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3885,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "295873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4916,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "239563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4902,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "226030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1636,
            "unit": "ns/op\t     803 B/op\t       8 allocs/op",
            "extra": "685514 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6227,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "186682 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6249,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "180027 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 182.8,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6893702 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 63.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "16457521 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 70.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17061652 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.947,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229089234 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200177761 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.008,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "205853671 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1082,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1064,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 216.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5535711 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 199.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5727093 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 715.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1601184 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 691.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1725460 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 840446,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1423 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 116.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9995689 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 32.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36660643 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.237,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284689528 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.458,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "312098455 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 189.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6194700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4551747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 193.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6152971 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 301476,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3802 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 253754,
            "unit": "ns/op\t   24616 B/op\t    1000 allocs/op",
            "extra": "4730 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 201246,
            "unit": "ns/op\t     693 B/op\t       0 allocs/op",
            "extra": "5466 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 618.9,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1953968 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 483.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2486276 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 937.3,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1279712 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 596.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1963346 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2469,
            "unit": "ns/op\t     321 B/op\t       7 allocs/op",
            "extra": "751159 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2960,
            "unit": "ns/op\t     629 B/op\t       7 allocs/op",
            "extra": "593659 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1593,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "822619 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2131,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "753475 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2088,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "812564 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7890177 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 131.7,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9237873 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 59.26,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19842369 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 25.44,
            "unit": "ns/op\t 510.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48392072 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 50.57,
            "unit": "ns/op\t 257.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "24097396 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 853.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1416146 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 162.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7186243 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 553.8,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2160274 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 396.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3057739 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 434.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2679004 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 792,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1542398 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 490.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2503170 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 967.9,
            "unit": "ns/op\t     160 B/op\t       1 allocs/op",
            "extra": "1212355 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 29836,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "39646 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 30203,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "39841 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18739101 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 179.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6282975 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 61.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18874898 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 162.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7305030 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 23.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51298543 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 24.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46491446 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 22.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47165398 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 26.39,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46590558 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 33.35,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34957784 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 34.33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32952164 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 123.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10183904 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 136.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8949979 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 82.42,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14346810 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 612.7,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "1863651 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30951019 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8878,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.64,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37443834 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "625912233 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 38.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "26811727 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 102.9,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "12171591 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 97.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12243429 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 195.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6185688 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 79.46,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14401707 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.418,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "126409407 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.323,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912474606 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 5.067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230646990 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 32.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39303288 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 85.26,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13958254 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 114.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10408122 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 179.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6470791 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 114.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10364482 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 452.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2632309 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 110.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10345494 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 377.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3279640 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.675,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "447439726 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "228146391 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.379,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "359249406 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198977544 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.555,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "138918802 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.433,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129035373 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 95.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12690880 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 122.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9824378 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21296853 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dozheiny@gmail.com",
            "name": "Iliya",
            "username": "dozheiny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3b151a1fe058abd91650cdd905e63dbf2409165",
          "message": "🔥 Feature: add queryBool parser (#2329)\n\n* 🔥 Feature: add queryBool parser\r\n\r\n* 🩹 pass linter",
          "timestamp": "2023-02-09T22:33:09+08:00",
          "tree_id": "0599df2298b765eababc8c73f4f22efe60d91a92",
          "url": "https://github.com/gofiber/fiber/commit/c3b151a1fe058abd91650cdd905e63dbf2409165"
        },
        "date": 1675953862692,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1538,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "718743 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 5866,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "191996 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6043,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "195501 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 151.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7922601 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 60.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19758408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14870469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 61.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19521130 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 246.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4854631 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 268.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4019041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "549633057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1129,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "982798 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 709.1,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1690268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2608,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "430923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1310,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "812922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1167,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "945220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9517959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 142.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8465646 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 125.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9502782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 303.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3967035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2042,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "508441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 565.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2124735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 130.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9141182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 162.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7399288 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 234.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5121710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 215.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5601111 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 395,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3009646 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27567998 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 84.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14307289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 39.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "28603426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 44.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26999576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 641.3,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1870214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17433885 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 298.3,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3976808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4191,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "269913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "76061167 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7693094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 297.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4048498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 394.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3009855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2433,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "453564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 142.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8050071 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1192,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "1003161 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 243.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4965550 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 713.8,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1669552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 756.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1592542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 749.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1596960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 738.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1613485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 187.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6464811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224674438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 60.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19370445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28711476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 98.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12216522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 115.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10374044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 52.68,
            "unit": "ns/op\t      73 B/op\t       0 allocs/op",
            "extra": "25408251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 172.5,
            "unit": "ns/op\t      87 B/op\t       1 allocs/op",
            "extra": "6892592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 54.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21694905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.709,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "123801812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3833,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "299719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3177,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "367708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4081,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "279057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4108,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "287018 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1325,
            "unit": "ns/op\t     788 B/op\t       8 allocs/op",
            "extra": "904524 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5857,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "199724 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5960,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "194402 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 139.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8531421 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 51.78,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "23056651 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20275821 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 3.728,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "322107262 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 4.881,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "240350928 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 4.728,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253141477 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 918.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1292974 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 922.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1332166 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 166.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7169551 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7716780 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 602.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1963312 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 601.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1977640 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 674311,
            "unit": "ns/op\t  373006 B/op\t    5608 allocs/op",
            "extra": "1728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 93.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12868120 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46322961 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "356244483 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "443832438 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 155.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7739416 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5626100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 156.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7717036 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 258183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4587 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212271,
            "unit": "ns/op\t   24612 B/op\t    1000 allocs/op",
            "extra": "5896 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 162201,
            "unit": "ns/op\t     658 B/op\t       0 allocs/op",
            "extra": "7348 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 511.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2341954 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 419.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2867235 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 804.9,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1487542 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 520.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2299178 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2482,
            "unit": "ns/op\t     414 B/op\t       7 allocs/op",
            "extra": "869202 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2424,
            "unit": "ns/op\t     574 B/op\t       7 allocs/op",
            "extra": "793930 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1340,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "800947 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1620,
            "unit": "ns/op\t     259 B/op\t       5 allocs/op",
            "extra": "783265 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2119,
            "unit": "ns/op\t     343 B/op\t       5 allocs/op",
            "extra": "923628 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 125.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9534568 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 111.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10735424 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 50.12,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "23416630 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.64,
            "unit": "ns/op\t 662.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "61375730 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.73,
            "unit": "ns/op\t 297.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27493770 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 705.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1702854 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 134.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8861035 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 495.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2492580 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 322.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3695952 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 376.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3247280 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 705.3,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1738812 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 420,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2938849 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 753.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1588208 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23725,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50640 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23638,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50104 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 61.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19534899 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 129.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9185806 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 48.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24986941 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 144.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8305942 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 18.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "59385937 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 19.45,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57250512 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "60664868 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54033046 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 26.68,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42341937 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 28.73,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39537128 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 99.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12016576 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 109.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10927125 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 65.97,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "17667592 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 486.1,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2482754 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 31.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37874295 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.7547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.81,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42619966 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.907,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "617829358 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.44,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35558631 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 77.54,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15328857 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 83.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14418055 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 162.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7392430 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.79,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17652198 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146604364 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 3.687,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325041766 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 25.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47652753 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 68.94,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17159118 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 86.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13939719 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8372172 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 95.11,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11990528 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 334.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3555795 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 83.19,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14188089 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 294.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4018287 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.696,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325216826 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275029647 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398319807 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231266670 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 7.707,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "155835973 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.371,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144968390 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 81.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14583806 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 109.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10872463 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3718,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21511954 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "956394fd1b3ebf79bfbe740ec4014f880e0da76b",
          "message": "🐛 [Bug]: Mounted subapps don't work correctly if parent app attached additional middlewares after mounting (v2.40.1 bug) #2233",
          "timestamp": "2023-02-10T15:30:25+01:00",
          "tree_id": "9b8bd0627f63188775ca652c5f4577205b4572d3",
          "url": "https://github.com/gofiber/fiber/commit/956394fd1b3ebf79bfbe740ec4014f880e0da76b"
        },
        "date": 1676040141909,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 2057,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "520138 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6822,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "175084 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7013,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "175016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6181440 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15764344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11560546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15333085 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 309.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3701050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 362.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3308442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.732,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "315853492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1253,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "867633 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 971.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1239190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3431,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "334671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1737,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "709902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1570,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "703023 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7389441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 193.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6489831 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7042513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 410,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "2940345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2855,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "402681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 705.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1715607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 162.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 210.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5660667 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 317.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3745654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 282.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4267698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 538.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2142382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 54.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22198250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 106.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11357672 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 61.1,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "18885364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 55.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22386058 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 792.3,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1511017 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 93.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13106960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 406.4,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "2933972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5458,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "207165 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 21.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58373216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 215.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5366418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 403,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3050788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 536,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2227532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 3241,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "366099 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 187.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6175105 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1558,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "647109 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 404.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "2947137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 1097,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "985422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 987.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1191205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 971.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1235529 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 954.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1241722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 324.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3543974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.942,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168388634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 78.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15993382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 52.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22581631 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 127.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9440602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8054281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 54.32,
            "unit": "ns/op\t      73 B/op\t       0 allocs/op",
            "extra": "20515976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 206.5,
            "unit": "ns/op\t      85 B/op\t       1 allocs/op",
            "extra": "5660722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 69.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15506827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 12.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4977,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "225495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 4055,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "290727 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5403,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "204450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5249,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "229312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1910,
            "unit": "ns/op\t     808 B/op\t       8 allocs/op",
            "extra": "602637 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6870,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "172268 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7234,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "172794 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 201.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6136436 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 68.36,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "15878563 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 78.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15465895 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 5.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "235128601 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "179341587 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 4.596,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265370864 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1135,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1148,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 216.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5450005 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 207.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5909329 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 756.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1583475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 747.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1595180 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 949713,
            "unit": "ns/op\t  373007 B/op\t    5608 allocs/op",
            "extra": "1213 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 121.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10199305 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 35.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34880312 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.508,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269110363 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.675,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "329776764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 200.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5920342 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 288.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3942714 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 202.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6017016 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 324500,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3830 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 290280,
            "unit": "ns/op\t   24649 B/op\t    1000 allocs/op",
            "extra": "4208 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 232886,
            "unit": "ns/op\t     699 B/op\t       0 allocs/op",
            "extra": "5142 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 662.5,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1823074 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 528.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2254675 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 1026,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 669.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1828592 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2646,
            "unit": "ns/op\t     334 B/op\t       7 allocs/op",
            "extra": "670359 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 3211,
            "unit": "ns/op\t     636 B/op\t       7 allocs/op",
            "extra": "510320 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1787,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "764200 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2462,
            "unit": "ns/op\t     276 B/op\t       5 allocs/op",
            "extra": "675248 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2320,
            "unit": "ns/op\t     267 B/op\t       5 allocs/op",
            "extra": "724268 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 169.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7331618 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 140.8,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "8340944 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 66.45,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "18091670 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 28.73,
            "unit": "ns/op\t 452.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "42955784 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 56.68,
            "unit": "ns/op\t 229.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21767322 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 928,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1283538 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 180.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6663294 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 625.7,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "1937344 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 439.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "2744684 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 475.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2520151 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 845.9,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1418384 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 536,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2302897 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 998.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1230950 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 39800,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "30706 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 38975,
            "unit": "ns/op\t    8535 B/op\t     207 allocs/op",
            "extra": "31249 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 66.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17848916 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 194.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6115026 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 66.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17489380 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 176.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6554079 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 26.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42902336 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 27.24,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44138976 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 26.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44405796 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 28.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39842769 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 38.36,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30271190 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 38.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27996734 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 129.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9251212 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 137.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8167078 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 92.12,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12128529 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 655,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "1783122 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 43.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28364866 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.9531,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33.49,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31826630 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "583734224 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 42.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27165825 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 113.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "11428262 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 106.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11276570 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 226.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5587926 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 89.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13662338 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 10.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.444,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "835531837 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 5.489,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "219540819 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 34.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33323545 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 96.33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11972815 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 126.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9807817 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 191.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6527152 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 124.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9261978 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 498.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2472272 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 124,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9663976 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 426.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2876712 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.972,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "397282122 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.889,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "207177913 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.826,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316256121 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.802,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "180035148 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 10.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 10.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 107.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11491372 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 137.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8784666 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4393,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 65.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18655560 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "d35f4f2300fa1e079b073f80b70f8007ad46fcdb",
          "message": "Add support for DoRedirects\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>",
          "timestamp": "2023-02-12T00:02:53-08:00",
          "tree_id": "af08d19799396b80780a3bd3e8a43dc0dcf990d5",
          "url": "https://github.com/gofiber/fiber/commit/d35f4f2300fa1e079b073f80b70f8007ad46fcdb"
        },
        "date": 1676189663966,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 636.5,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1852256 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3329,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "340538 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3419,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "337041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8008222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20334432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14987150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20096373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 244.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4894724 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 279.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3858218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517043137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 975.5,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1232472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 764.5,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1565894 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2706,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "417254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1425,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "754958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1275,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "859585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 118.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10140242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8621503 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9476371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 302.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3959359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2089,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "519218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 569.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2110268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9024738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 156.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7600076 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 232.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5139664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 204.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5845669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 403.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2954376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27425680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 87.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13762363 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 38.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "29942877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 42.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27709141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 657.5,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1831239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17047146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 318.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3798092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4382,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "264780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82143912 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 143.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8271213 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 290.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4126394 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 402.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2993376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2468,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "447295 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 137.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8307676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1219,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "874921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 237.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5007877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 764.6,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1564150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 818.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1468299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 808.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1480629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 792.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1503529 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 182.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6503052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225740670 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 57.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20664702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28650480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 97.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12444939 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 113.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10578433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 41.86,
            "unit": "ns/op\t      68 B/op\t       0 allocs/op",
            "extra": "27369888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 149.4,
            "unit": "ns/op\t      93 B/op\t       1 allocs/op",
            "extra": "7955256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 54.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21825277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "127768453 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3878,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "299043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3390,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "336782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4226,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "273967 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4221,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "276525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1320,
            "unit": "ns/op\t     797 B/op\t       8 allocs/op",
            "extra": "929654 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3352,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "336393 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3410,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "336704 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 147.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8111618 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 52.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "22617262 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20620922 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "297774776 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.075,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "161252192 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.969,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "204929032 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 915.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1316656 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 904.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1335697 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7312083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 153.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8106258 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 619.1,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1934426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 617,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1936668 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 704729,
            "unit": "ns/op\t  373002 B/op\t    5608 allocs/op",
            "extra": "1700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13140514 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45463832 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373022115 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.744,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "436724284 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 149.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7997272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 227.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5202727 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 146.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8221911 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 247761,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4414 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 221180,
            "unit": "ns/op\t   24568 B/op\t    1000 allocs/op",
            "extra": "5395 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177290,
            "unit": "ns/op\t     703 B/op\t       0 allocs/op",
            "extra": "6690 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 492.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2435818 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 430.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2724445 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 831.3,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1446084 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 537.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2227150 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1857,
            "unit": "ns/op\t     312 B/op\t       7 allocs/op",
            "extra": "828330 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2092,
            "unit": "ns/op\t     571 B/op\t       7 allocs/op",
            "extra": "800683 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1462,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "831754 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1827,
            "unit": "ns/op\t     358 B/op\t       5 allocs/op",
            "extra": "864235 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1900,
            "unit": "ns/op\t     345 B/op\t       5 allocs/op",
            "extra": "914979 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9840228 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 109.8,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9561006 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 49.63,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "22618464 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.34,
            "unit": "ns/op\t 672.12 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62147480 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.87,
            "unit": "ns/op\t 303.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27980366 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 736.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1612062 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9327774 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 497,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2415675 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 328.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3629451 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 376.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3215396 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 705.2,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1704298 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 413.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2894325 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 817.7,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1409569 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23724,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50342 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24095,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "49917 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18177614 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 143.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8338087 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28921846 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 158.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7581009 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57802178 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53051067 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56964660 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 22.83,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51066380 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39399522 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.51,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37453290 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12429561 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10253749 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 65.62,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "17784789 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 448.5,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2682243 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39068220 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.805,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 26.07,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43258878 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.609,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "745211258 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 32.72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34609225 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 78.06,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15150558 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 80.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14856831 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 153.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7791476 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17839309 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146812465 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994570654 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298469950 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44445380 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 71.21,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16436164 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11644134 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 142,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8365234 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11274241 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 365.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3257377 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 82.71,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14352684 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 318.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3743971 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "379632925 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.559,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265338046 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.636,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "327162873 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200493640 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.047,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149279506 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "143750842 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12355728 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10312764 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21833724 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "71b9ba210fc8f54c8e71e2d027b36af816ecacd4",
          "message": "Fix linter issues\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>",
          "timestamp": "2023-02-12T00:13:06-08:00",
          "tree_id": "9de58dd391ac201630a5d4a31ad848652d5f116d",
          "url": "https://github.com/gofiber/fiber/commit/71b9ba210fc8f54c8e71e2d027b36af816ecacd4"
        },
        "date": 1676190256737,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1898,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "561372 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 8083,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "129150 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7426,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "164160 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 182.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6582694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15303003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12192302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 73.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16438964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4091707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 324.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3704401 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.606,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "460541185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1359,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "857544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 876.3,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1378123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3371,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "353298 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1623,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "664104 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1414,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "776371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 150.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7901614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5984629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7932704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 363.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3230607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2581,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "437362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 679.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1765906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 154.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7198990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 200.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5941725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 288.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4193922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 258.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4593759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 483.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2506572 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 50.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23566720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 100.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11773602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 47.74,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "23819187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 52.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22321634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 772.7,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1541922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 80.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14915246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 383.5,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3273488 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5051,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "241078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62660472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 188.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6319399 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 361.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3375567 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 482.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2449768 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2959,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "365515 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 170.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6665979 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1454,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "843471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 290.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4055352 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 876.9,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1379918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 909.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1335086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 924.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1347188 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 870,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1363327 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 227.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5243415 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.409,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183873208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 71.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16718391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24118927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 112.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10440885 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 133.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9273348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 55.07,
            "unit": "ns/op\t      65 B/op\t       0 allocs/op",
            "extra": "23098838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 202,
            "unit": "ns/op\t      94 B/op\t       1 allocs/op",
            "extra": "6285393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 62.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19390675 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96336762 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4580,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "256334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3783,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "300816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4954,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "240282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4964,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "237906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1627,
            "unit": "ns/op\t     799 B/op\t       8 allocs/op",
            "extra": "777814 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7090,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "169243 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7170,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "161864 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 167.2,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7131343 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 62.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "18949700 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 69.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17130704 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.545,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264058957 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198485929 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.684,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210582266 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1063,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1086,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 213.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5969155 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 188.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6192986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 657.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1836836 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 651.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1803538 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 841995,
            "unit": "ns/op\t  373010 B/op\t    5608 allocs/op",
            "extra": "1400 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 111.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10599195 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 31.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38035022 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.999,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298563082 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372450951 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 185.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6423394 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 253.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4719541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 186.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6582049 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 302972,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3706 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 246832,
            "unit": "ns/op\t   24605 B/op\t    1000 allocs/op",
            "extra": "4783 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 195356,
            "unit": "ns/op\t     688 B/op\t       0 allocs/op",
            "extra": "5944 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 630,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1994942 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 491.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2388992 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 945.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1242044 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 611.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1937412 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2495,
            "unit": "ns/op\t     343 B/op\t       7 allocs/op",
            "extra": "629708 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2619,
            "unit": "ns/op\t     583 B/op\t       7 allocs/op",
            "extra": "662635 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1609,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "702201 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1912,
            "unit": "ns/op\t     266 B/op\t       5 allocs/op",
            "extra": "736626 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1939,
            "unit": "ns/op\t     255 B/op\t       5 allocs/op",
            "extra": "817184 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8040873 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 129.1,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9117936 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 61.07,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19647328 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 23.75,
            "unit": "ns/op\t 547.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "49840555 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 51.27,
            "unit": "ns/op\t 253.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "22530846 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 845.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1323091 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 161.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7409233 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 569.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2119515 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 385.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "2996577 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 438.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2759814 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 847.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1456300 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 483.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2477534 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 883,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1325241 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28282,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "42135 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28212,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "42086 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 73.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16289083 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 156.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7619758 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21342715 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 172.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6916255 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49609759 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46895505 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 22,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "48914319 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44903089 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 31.83,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35516305 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 34.74,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32899399 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 118.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10240708 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 130.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8778698 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 78.74,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14356352 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 579.4,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2064048 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 37.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31788296 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 31.21,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33830820 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "548408577 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 37.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "29246121 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 92.24,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "12852810 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 96.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12374664 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 192.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6040630 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 77.81,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14838805 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.603,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "123775220 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "870640243 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274060830 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 29.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38754609 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 81.88,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14556066 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11585192 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 168,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6905293 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 114.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10628440 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 398.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2861794 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 98.23,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11633036 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 355.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3365076 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276642576 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231630234 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.571,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331369798 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "196200154 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132404155 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.863,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "123928249 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 95.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12340334 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 129.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9194001 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4407,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 66.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18203125 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "febe920dec381667483f24601cf0f7155d2eaf71",
          "message": "Add example to README",
          "timestamp": "2023-02-12T00:20:31-08:00",
          "tree_id": "0ee74a3a9a6d6fb64d2c523a02ccee53c1fac72a",
          "url": "https://github.com/gofiber/fiber/commit/febe920dec381667483f24601cf0f7155d2eaf71"
        },
        "date": 1676190698969,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1602,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "733213 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3698,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "285231 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3359,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "346989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7800102 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20124207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14744684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20131940 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 244.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4893673 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 278.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3666010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.278,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "520877229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 979.8,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1244468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 745.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1605751 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2582,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "435748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1390,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "781494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1243,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "878284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10245730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8569086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9443943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 304,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3948049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1883,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "531378 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 570.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2089188 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8817236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 150.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7893368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 224.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5307162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 201.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5937080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 395.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2968864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27576391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 88.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13696743 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 37.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "29759331 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 45.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26221779 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 646.2,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1839073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17054036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 294.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3943047 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4291,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "269408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82104040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8748885 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 283.2,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4213754 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 393.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3038712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2280,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "501175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 137.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8265022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1177,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "891364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 236.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5046632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 761.1,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1631430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 820.9,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1515891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 772.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1531519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 764.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1568306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 177.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6676436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.306,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225742639 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 58.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20514686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 44.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27228058 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11861602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 112.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10719603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 37.92,
            "unit": "ns/op\t      65 B/op\t       0 allocs/op",
            "extra": "28699491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 146.4,
            "unit": "ns/op\t      92 B/op\t       1 allocs/op",
            "extra": "8071755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 54.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21953784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.342,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128442478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3799,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "301210 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3310,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "342162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4129,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "276793 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4142,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "279615 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1198,
            "unit": "ns/op\t     795 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3286,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "318844 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3351,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "342088 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 158.7,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7398562 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 51.18,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "19858711 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20728688 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "248472799 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159741426 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "204534190 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 897.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1338364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 893.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1348976 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 159.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7447662 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 152.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8105840 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 610.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1965747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 609.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1956116 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 658169,
            "unit": "ns/op\t  372996 B/op\t    5608 allocs/op",
            "extra": "1789 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12939687 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46284362 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372337800 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.739,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "438856774 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 147.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8071113 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 229.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5323096 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 150.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8203748 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 249876,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4774 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 217655,
            "unit": "ns/op\t   24573 B/op\t    1000 allocs/op",
            "extra": "5395 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177083,
            "unit": "ns/op\t     691 B/op\t       0 allocs/op",
            "extra": "6760 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 488.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2469554 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 429.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2777612 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 818.6,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1466178 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 536.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2230809 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1801,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "834330 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2052,
            "unit": "ns/op\t     567 B/op\t       7 allocs/op",
            "extra": "809842 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1465,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "819997 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1750,
            "unit": "ns/op\t     358 B/op\t       5 allocs/op",
            "extra": "863794 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1852,
            "unit": "ns/op\t     342 B/op\t       5 allocs/op",
            "extra": "929851 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9887733 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 106.4,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11132829 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.13,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24577746 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.31,
            "unit": "ns/op\t 673.08 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "61614663 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.82,
            "unit": "ns/op\t 303.62 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27991104 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 715.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1673378 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9184213 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 490.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2452269 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 324.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3687682 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 367.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3257058 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 706.9,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1704040 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 414.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2875746 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 737.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1607248 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23020,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51794 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 22929,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51428 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18212629 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 140.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8522080 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28992745 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 154.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7711161 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57331280 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.63,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53473359 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "59297085 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51969469 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40536466 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.73,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38561559 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12446929 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10311891 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.19,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18125506 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 442.2,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2703876 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39127873 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.804,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.12,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44538344 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746874511 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35713358 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 75.69,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15404694 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 73.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16251256 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 157.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7633928 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.94,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17980424 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146211582 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994859024 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298700517 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44708259 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16062914 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11644750 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 140.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8433582 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 101.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11669050 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 360.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3284076 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.83,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14757998 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 315.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3834897 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.317,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "367081756 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "256070617 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.633,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "330397658 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199229247 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149354780 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144226416 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12372444 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10315356 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4224,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21916704 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "msaf1980@gmail.com",
            "name": "Michail Safronov",
            "username": "msaf1980"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "497eb02b48190484d842748a08b2a84aba2ced62",
          "message": "Basic auth alloc (#2333)\n\n* basic_auth: extend benchmark for uppercase Basic\n\n* basic_auth: check space after basic (and avoid alloc if Basic)\n\n* fixup! basic_auth: check space after basic (and avoid alloc if Basic)",
          "timestamp": "2023-02-13T22:48:55+01:00",
          "tree_id": "fbe4769b01972e470a95ba7a8bbde727216f01df",
          "url": "https://github.com/gofiber/fiber/commit/497eb02b48190484d842748a08b2a84aba2ced62"
        },
        "date": 1676325621551,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1858,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "698319 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6801,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "161090 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7197,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "172669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7471617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16738338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 90.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12660117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 65.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18601564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 266.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4555796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 310.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3750120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.401,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "494615018 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1295,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "879740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 802.4,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1451940 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2839,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "403615 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1437,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "745023 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1303,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "877694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 136.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8520105 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 152.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7899818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 137.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8114686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 353.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3453146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2169,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "531565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 611.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1926956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8335800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 184.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6348532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 258.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4681651 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 254.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4916799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 440.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2600428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 47.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24634774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 89.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13343244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 45.93,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24551608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 49.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23884270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 760,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1619859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15489838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 349.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3187906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4718,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "251082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61504274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 176.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6818426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 336.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3380922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 468.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2735683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2767,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "403348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 156.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7432786 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1375,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "761971 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 273.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4241394 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 820.6,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1510485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 877,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1388911 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 836.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1471137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 832.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1397596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 218.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5399326 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199351069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 65.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17163637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25544282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 112.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10239430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9202569 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 67.77,
            "unit": "ns/op\t      75 B/op\t       0 allocs/op",
            "extra": "19858554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 189.3,
            "unit": "ns/op\t      86 B/op\t       1 allocs/op",
            "extra": "5606278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18632424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 10.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4499,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "250066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3606,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "341900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4551,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "253753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4566,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "237288 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1503,
            "unit": "ns/op\t     799 B/op\t       8 allocs/op",
            "extra": "822531 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6632,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "179160 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6937,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "169779 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 158.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7605856 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 58.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20031565 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 64.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18381877 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 3.976,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283511206 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "217579201 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "227689194 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1060,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1025,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 184.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6750610 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 170.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7292836 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 596.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "2014440 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 603.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1996495 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 780369,
            "unit": "ns/op\t  373000 B/op\t    5608 allocs/op",
            "extra": "1466 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 99.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11366199 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 27.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43082227 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.646,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "340635538 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.837,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "426622180 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 167.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6989295 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 238.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5233534 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 171.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6913227 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 285421,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4333 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 235583,
            "unit": "ns/op\t   24538 B/op\t    1000 allocs/op",
            "extra": "5080 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 172123,
            "unit": "ns/op\t     648 B/op\t       0 allocs/op",
            "extra": "6886 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 591.7,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2029466 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth_Upper",
            "value": 575.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2021223 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 449.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2715825 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 885.7,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1365957 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 584.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2084564 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2266,
            "unit": "ns/op\t     322 B/op\t       7 allocs/op",
            "extra": "739952 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2479,
            "unit": "ns/op\t     582 B/op\t       7 allocs/op",
            "extra": "682678 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1520,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "677564 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1759,
            "unit": "ns/op\t     257 B/op\t       5 allocs/op",
            "extra": "804127 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1980,
            "unit": "ns/op\t     354 B/op\t       5 allocs/op",
            "extra": "881234 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 138.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8752132 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 126.4,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9438555 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 57.23,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "20608040 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 21.11,
            "unit": "ns/op\t 615.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "57902568 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 48.67,
            "unit": "ns/op\t 267.11 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26332159 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 777.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1524535 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 149.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7928623 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 537.7,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2158275 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 363.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3473161 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 407.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2895601 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 795.6,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1618725 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 442.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2558275 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 861.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1378562 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 26963,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "41074 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 27337,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "43886 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 68.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17221086 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 150.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7771550 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 52.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22090252 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 164.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7128982 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 20.82,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51447950 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 22.94,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50571553 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53740044 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 22.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53308876 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 30.08,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "36653191 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 31.79,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34756767 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11331741 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 114.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10780357 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 72.91,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "16248992 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 533.1,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2254442 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 33.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36987499 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 28.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "41599219 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "597232620 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 35.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31751540 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 83.33,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13426999 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 85.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14287837 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 169.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6969384 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 69.49,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17606854 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.892,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "138772077 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.243,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 3.876,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "307232139 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 26.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43396560 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 79.38,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14333457 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 92.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13012905 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 164.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7013810 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 107.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "12104238 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 370.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3198375 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 99.54,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "12343993 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 324.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3743594 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.986,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "304917614 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.659,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "252209359 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "366277208 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.594,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "216145268 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.326,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "139087824 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133500679 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 91.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12837976 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10327813 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3892,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 60.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21190570 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "c12b233a5ddcf3b2140ecb928adde7a8908f2600",
          "message": "🐛 [Bug]: Mounted subapps don't work correctly if parent app attached additional middlewares after mounting (v2.40.1 bug) #2233",
          "timestamp": "2023-02-18T19:13:55+01:00",
          "tree_id": "2f298834770948a951c1f142f66f6c331c35a50d",
          "url": "https://github.com/gofiber/fiber/commit/c12b233a5ddcf3b2140ecb928adde7a8908f2600"
        },
        "date": 1676744722624,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1235,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "834320 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3663,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "313020 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3717,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "309205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7726306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 71.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16845806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16604802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22456878 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 215.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5596515 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 273.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4207144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.817,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "424606756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 957.5,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1242253 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 746.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1613355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2590,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "427994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1378,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "788349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1238,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "872539 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10248370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 141.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8419278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 145.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10157612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 301.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3948770 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1850,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "624072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 494,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2434836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10549548 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 141.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "8399424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 215.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5577468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 203.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5888119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 396.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3031338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 36.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32531686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 80.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14904116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 42.45,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "26264211 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 46.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25694691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 644.9,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1854960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16647282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 298.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4000044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4341,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "266539 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83025848 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 129.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9095368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 283.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4177333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 392.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3048726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2238,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "501043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 143.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7913703 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1238,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "877375 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 244,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4932844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 737.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1561261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 792.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1501405 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 780.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1536531 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 774,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1552585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 183.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6465223 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224642090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21926659 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26773962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11934056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 107.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10978374 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 38,
            "unit": "ns/op\t      71 B/op\t       0 allocs/op",
            "extra": "26410809 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 140.2,
            "unit": "ns/op\t      88 B/op\t       1 allocs/op",
            "extra": "8446704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24360493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.317,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128863542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3892,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "294720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3389,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "338754 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4246,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "272589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4246,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "275354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1195,
            "unit": "ns/op\t     796 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3666,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "313093 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3723,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "307420 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 140.7,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8424990 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 44.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25869896 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 57.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20737568 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.022,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298140477 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "169385172 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.827,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "204203932 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 892.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1341462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 883.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1229803 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 164.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7253575 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 147.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8086286 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 616.4,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1943426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 619.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1941415 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 657362,
            "unit": "ns/op\t  373005 B/op\t    5608 allocs/op",
            "extra": "1774 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 94.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13059079 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44874098 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373099734 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.799,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "427126990 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 150.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8014485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 227.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5403902 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 151.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7834340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 246674,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4735 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 219986,
            "unit": "ns/op\t   24537 B/op\t    1000 allocs/op",
            "extra": "5418 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177504,
            "unit": "ns/op\t     699 B/op\t       0 allocs/op",
            "extra": "6711 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 490.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2448787 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 418.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2861638 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 797.4,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1509148 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 530.4,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2275936 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1811,
            "unit": "ns/op\t     310 B/op\t       7 allocs/op",
            "extra": "846826 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2251,
            "unit": "ns/op\t     586 B/op\t       7 allocs/op",
            "extra": "656474 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1427,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "806740 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1839,
            "unit": "ns/op\t     354 B/op\t       5 allocs/op",
            "extra": "879330 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1894,
            "unit": "ns/op\t     341 B/op\t       5 allocs/op",
            "extra": "931970 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9867568 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 103.7,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10971883 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.58,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24307951 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.23,
            "unit": "ns/op\t 675.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62398072 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.08,
            "unit": "ns/op\t 301.78 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27671293 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 708.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1689792 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9375847 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 498.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2414212 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 334,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3588723 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 368.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3220069 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 709.4,
            "unit": "ns/op\t      14 B/op\t       1 allocs/op",
            "extra": "1701460 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 413.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2878018 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 770.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1578014 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23559,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50270 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24692,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50467 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18183159 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 141.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8530960 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28948930 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 156.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7635307 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "59613703 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55219708 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58272890 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 22.34,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51208794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.36,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40024016 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38031366 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12436700 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10294359 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.78,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "17934238 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 442.2,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2706162 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39235430 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8073,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.36,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43776783 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746001288 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35344522 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 76.41,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15494494 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 81.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14796297 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 149.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8068898 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 65.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17596954 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 7.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149467569 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995216482 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.022,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298478007 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43775690 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 71.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16625496 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11653146 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8332846 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11451344 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 377.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3230811 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 81.87,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14510828 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 315.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3799248 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "377520171 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.443,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270215004 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.641,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "324375984 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.971,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200331664 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149206845 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.291,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144307011 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12351802 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 119.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10031656 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21895377 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "192a495248106bfd7f026677ce3b53fb16c2360c",
          "message": "Add support for DoDeadline and DoTimeout. Expand unit-tests",
          "timestamp": "2023-02-19T21:15:17-08:00",
          "tree_id": "46b2ac9907efb12f92a70e7734247f33e4297a28",
          "url": "https://github.com/gofiber/fiber/commit/192a495248106bfd7f026677ce3b53fb16c2360c"
        },
        "date": 1676870797121,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 913.2,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1489119 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6293,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "188736 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6460,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "181819 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 185.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6522450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17146612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12834960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17032026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 268.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4477410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 332.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3610466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373450321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1239,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "940722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 875.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1365560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3117,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "341420 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1591,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "692569 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1409,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "787310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7826632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 177.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6649006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 149.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8215239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 381.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3071306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2446,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "411272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 632.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1908931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7765518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 188.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5948210 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 268.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4360382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 257.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4648564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 480.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2492676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 49.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24378504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 101.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12160868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 53.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21830847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 61.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19373839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 779.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1524786 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 84.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13446993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 365,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3246860 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5078,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "227068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66562429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 184.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6424186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 355.8,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3342262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 481.8,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2445842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2978,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "373876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 170.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6691978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1560,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "715470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 294.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4073749 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 902.7,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1297730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 1000,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 907.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1307148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 871.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1358443 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 224.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5400284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "188572435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 70.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16977890 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20880928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 128.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9400334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 134.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9005304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 60.4,
            "unit": "ns/op\t      68 B/op\t       0 allocs/op",
            "extra": "17613642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 191.2,
            "unit": "ns/op\t      81 B/op\t       1 allocs/op",
            "extra": "5983128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 61.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19676456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4755,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "240909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3969,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "298749 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5272,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "226491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5347,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "207224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1494,
            "unit": "ns/op\t     785 B/op\t       8 allocs/op",
            "extra": "788450 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6391,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "188360 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6498,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "180486 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 172.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6814936 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 57.82,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20690768 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 73.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16974543 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.528,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265731745 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "194931972 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.846,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "209599142 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1086,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1090,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 200.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5679022 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 190.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6284602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 663.3,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1799078 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 661,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1815889 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 831561,
            "unit": "ns/op\t  373008 B/op\t    5608 allocs/op",
            "extra": "1357 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 118.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10837989 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 30.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38005137 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.022,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287237484 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.246,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368453955 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 190.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6285162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 258.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4741966 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 189.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6321709 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 305221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3555 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 255673,
            "unit": "ns/op\t   24614 B/op\t    1000 allocs/op",
            "extra": "4749 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 195836,
            "unit": "ns/op\t     734 B/op\t       0 allocs/op",
            "extra": "6049 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 610.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1868139 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 509.4,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2409387 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 978.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1253870 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 621.4,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1934686 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2355,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "724369 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2624,
            "unit": "ns/op\t     582 B/op\t       7 allocs/op",
            "extra": "682718 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1622,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "683728 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2069,
            "unit": "ns/op\t     271 B/op\t       5 allocs/op",
            "extra": "698649 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2030,
            "unit": "ns/op\t     259 B/op\t       5 allocs/op",
            "extra": "785671 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 147.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7975785 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 131.4,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9264199 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 61.53,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19471501 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 22.99,
            "unit": "ns/op\t 565.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "46056386 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 52.26,
            "unit": "ns/op\t 248.74 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23189161 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 852.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1427296 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 161.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7410148 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 591.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2050272 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 396.1,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3137611 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 453.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2686700 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 818.9,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1426881 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 516.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2306694 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 924.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1277510 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 29034,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "41509 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28120,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "42051 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 72.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16337346 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 158,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7420448 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20959659 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 181.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6549542 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.64,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47569831 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 24.84,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46798958 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 22.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53528487 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44543973 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 32.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34385002 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 35.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33124406 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 119.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10003092 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 130.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9309516 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 80.21,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14346493 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 590.9,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "1990878 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 40.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32203068 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.9262,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 31.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33571399 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "538822678 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.48,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28548318 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 98.27,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "12396874 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 96.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12734077 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 195.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6140494 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 81.51,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14964894 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "122681758 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.405,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "854222428 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.406,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "271626237 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 30.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39803031 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 86.51,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13589319 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 108.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10828689 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 173.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6718710 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 115,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10221914 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 414.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "2833910 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 103.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11447215 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 373.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3188770 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.429,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "271175318 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.267,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "218278423 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.615,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331749295 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193289758 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130237917 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.962,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "120237049 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12194863 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 135.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9147360 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4526,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 66.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17631787 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "c871cb7955282fa2e5e5d78fd00e85db1e9a382b",
          "message": "Fix linter errors\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>",
          "timestamp": "2023-02-19T21:23:06-08:00",
          "tree_id": "1baa3f746f6b3db8c38b4d76b85fab8408f8460b",
          "url": "https://github.com/gofiber/fiber/commit/c871cb7955282fa2e5e5d78fd00e85db1e9a382b"
        },
        "date": 1676871249296,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1596,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "821397 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3661,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "310750 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3736,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "307946 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7942610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 52.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23028178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 72.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16327557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 52.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22898852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 214.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5573605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 281.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4184944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.818,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "426440024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 961.3,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1247019 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 739.9,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1613372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2590,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "428395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1381,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "784916 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1250,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "878114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10214810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 142.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8429678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 123.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9662008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 301.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3977828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1887,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "590521 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 494.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2422321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10610284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 143.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "8321534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 220.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5464736 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 199.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5970205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 399.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3012828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 36.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31973784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 80.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14946277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 42.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "27006585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 43.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27077828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 643.4,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1862352 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16716938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 295.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3950701 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4360,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "268491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83013758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 133.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8865620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 283.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4172874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 391.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3047600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2260,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "515364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 142.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8129527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1193,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "883252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 236.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5066964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 743.1,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1595984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 790.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1518826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 775.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1548642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 766.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1563644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 179.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6621271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.326,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225314766 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22208216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 38.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31279956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 97.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12238270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 110.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10875819 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 41.81,
            "unit": "ns/op\t      74 B/op\t       0 allocs/op",
            "extra": "25096411 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 145.7,
            "unit": "ns/op\t      93 B/op\t       1 allocs/op",
            "extra": "7960228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 49.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24392532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129124381 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3946,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "293035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3396,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "335512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4247,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "271814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4222,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "275828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1233,
            "unit": "ns/op\t     797 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3670,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "320190 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3727,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "307580 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 140.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8413902 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 46.29,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25489936 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 59.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20345793 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "297728858 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198543014 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.828,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202686547 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 892.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1352751 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 877.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1372233 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 159.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7541407 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7940598 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 616.1,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1940028 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 615.3,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1946236 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 680750,
            "unit": "ns/op\t  372995 B/op\t    5608 allocs/op",
            "extra": "1765 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 94.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12592353 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44673782 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331858905 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "444616656 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 148.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8067188 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 223.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5374092 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 149.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8026899 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 247542,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4771 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 219669,
            "unit": "ns/op\t   24543 B/op\t    1000 allocs/op",
            "extra": "5356 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177008,
            "unit": "ns/op\t     689 B/op\t       0 allocs/op",
            "extra": "6706 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 487.3,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2435839 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 413.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2890098 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 791.8,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1414701 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 526.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2274495 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2041,
            "unit": "ns/op\t     414 B/op\t       7 allocs/op",
            "extra": "870003 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2164,
            "unit": "ns/op\t     667 B/op\t       7 allocs/op",
            "extra": "856539 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1404,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "778874 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1769,
            "unit": "ns/op\t     356 B/op\t       5 allocs/op",
            "extra": "872616 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1835,
            "unit": "ns/op\t     341 B/op\t       5 allocs/op",
            "extra": "931933 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9884742 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 99.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11966052 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24680638 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.23,
            "unit": "ns/op\t 676.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62259964 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.04,
            "unit": "ns/op\t 302.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27776281 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 706.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1668879 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 127.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7838439 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 499.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2413027 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 330.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3595347 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 367.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3211915 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 708.2,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1689225 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 411.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2895777 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 803.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1442128 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23681,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51016 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23403,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50660 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18198600 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 141.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8448762 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28964215 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 155.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7651266 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57464340 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.63,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54384744 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58764427 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51702058 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.44,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40345518 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38448877 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12430915 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10316959 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.07,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18148700 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 441.8,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2709456 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39156468 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.18,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44569416 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.608,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746143588 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.76,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "36093410 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 75.77,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15457942 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 76.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15767234 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 154.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7762486 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18097654 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.068,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149798018 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994943884 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.018,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298653304 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44868211 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 70.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16667450 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11664358 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8436692 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 103.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11615425 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 360.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3318319 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.93,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14954467 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 314.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3838932 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372884450 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.434,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270408199 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.625,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "330825812 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199878374 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149297204 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144196388 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12352844 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10330334 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.427,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21922380 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "jgcalderonperez@protonmail.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "distinct": true,
          "id": "f25e3b5d86e822b53aa1021b3e8393c9827dd5ae",
          "message": "Add examples for Proxy Middleware",
          "timestamp": "2023-02-19T21:31:31-08:00",
          "tree_id": "2150725b9265aeaddd149a230ad278465babb142",
          "url": "https://github.com/gofiber/fiber/commit/f25e3b5d86e822b53aa1021b3e8393c9827dd5ae"
        },
        "date": 1676871763777,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1336,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "893376 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 4154,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "295964 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3706,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "312398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7990074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 52.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22854826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 73.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16444070 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 52.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22623361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 215.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5531362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 281.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4305198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.853,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "426189788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 953.3,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1253944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 738.2,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1624189 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2571,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "433180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1373,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "785136 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1237,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "890056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 116.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10214797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8076595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 123.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9504570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 311,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3896604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1833,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "632096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 497.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2425448 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10379362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 143.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "8409285 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 218.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5445580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 198.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5976334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 395.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3028291 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 36.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32871429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 81.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14785944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 42.68,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "26964418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 48.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24730563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 641.5,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1877421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 72.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16613668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 295.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4043334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4322,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "266392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83203518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8963406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 284.3,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4249710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 387.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3087687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2265,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "517528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 142.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8085477 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1188,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "882866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 235.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5088048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 744.9,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1608189 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 787,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1516833 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 769.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1552575 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 768.2,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1561858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 178.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6656360 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.326,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225192460 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21862260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28228107 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 101.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11873958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 110.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10831575 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 35.5,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "28209840 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 141.5,
            "unit": "ns/op\t      88 B/op\t       1 allocs/op",
            "extra": "8435745 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 49.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23976147 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.342,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129030475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3928,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "290817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3398,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "336340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4258,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "274876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4268,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "270152 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1227,
            "unit": "ns/op\t     794 B/op\t       8 allocs/op",
            "extra": "902454 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3663,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "315822 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3717,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "309133 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 139.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8561380 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 46.01,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25771875 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 59.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20236926 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298038586 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 6.028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199006064 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 6.144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198734527 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 887.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1353088 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 870.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1377058 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 158.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7575487 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7858890 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 614.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1963923 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 613.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1936498 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 652395,
            "unit": "ns/op\t  373016 B/op\t    5608 allocs/op",
            "extra": "1753 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 95.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11793270 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45083760 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331698214 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "444452692 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 149.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7970252 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 226.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5399134 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7985485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 246438,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4393 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 220210,
            "unit": "ns/op\t   24568 B/op\t    1000 allocs/op",
            "extra": "5373 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 177185,
            "unit": "ns/op\t     699 B/op\t       0 allocs/op",
            "extra": "6705 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 487.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2458874 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 414,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2893416 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 819.4,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1519449 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 522.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2286578 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2034,
            "unit": "ns/op\t     416 B/op\t       7 allocs/op",
            "extra": "861576 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2159,
            "unit": "ns/op\t     662 B/op\t       7 allocs/op",
            "extra": "866841 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1403,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "911959 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1790,
            "unit": "ns/op\t     347 B/op\t       5 allocs/op",
            "extra": "906010 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1844,
            "unit": "ns/op\t     341 B/op\t       5 allocs/op",
            "extra": "932764 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9849548 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 103.6,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11524328 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 47.91,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24727836 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.23,
            "unit": "ns/op\t 676.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62240650 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.09,
            "unit": "ns/op\t 301.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27714355 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 700.3,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1548261 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9179281 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 498.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2406819 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 332,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3607539 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 368.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3242278 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 702.9,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1722345 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 415.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2895326 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 776.3,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1570623 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23182,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50892 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23195,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51067 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18200341 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 141.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8470695 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28973904 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 160.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7711540 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57970482 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.63,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54436148 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58968657 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.64,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51118513 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40038176 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.65,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38381353 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12442128 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10327118 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 64.23,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18062244 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 439.8,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2719797 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39310634 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.02,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44159331 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "745877785 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35377195 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 76.16,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15442800 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 73.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16371422 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 152.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7974240 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 65.91,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18072171 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.055,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "148571457 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991736536 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298495699 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43994960 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 69.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16813822 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11688858 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 140.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8482069 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 103.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11470328 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 358.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3329149 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14738978 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3858528 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372952369 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.431,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269795031 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.625,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331407541 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.018,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199729135 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149324534 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.305,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "139837506 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12368036 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10313167 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.426,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21916574 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rwdevenney@gmail.com",
            "name": "Ryan Devenney",
            "username": "ryand67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b634ba0a58315308f488a4a5a920d46f095465fc",
          "message": "fix cors * behavior #2338 (#2339)\n\n🐛- fix cors * behavior #2338",
          "timestamp": "2023-02-20T22:36:34+01:00",
          "tree_id": "71473f0e2f4afd6c0da579e9bfb5d0ba5dc8c9a9",
          "url": "https://github.com/gofiber/fiber/commit/b634ba0a58315308f488a4a5a920d46f095465fc"
        },
        "date": 1676929662029,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1533,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "780439 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3702,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "276764 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3776,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "297981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7874523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 51.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21791275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 72.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16762502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 52.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22257416 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 215.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5626755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 279.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3971994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.819,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "426083346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 977,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1209346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 768.8,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1570920 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2722,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "434662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1430,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "792709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1300,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "876318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 118.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10179780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8268777 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 119.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10008330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 301.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3856119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1888,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "585164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 489.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2435298 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10480491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 148.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "8047641 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 230.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5317719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 211.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5817040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 407.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2926237 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32592534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 80.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14828863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 43.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "27194470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 45.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25076949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 648.9,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1856810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16767126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 313.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3874518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4447,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "255601 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82762381 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8900198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 292.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4187672 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 397,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3033880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2366,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "507158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 145.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7986253 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1229,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "871260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 249.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4903624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 772,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1501881 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 831.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1468549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 820.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1435086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 810.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1479049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 185.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6467737 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224404773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22241956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25922676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11917344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 107.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11256841 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 38.97,
            "unit": "ns/op\t      69 B/op\t       0 allocs/op",
            "extra": "27090490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 143.8,
            "unit": "ns/op\t      93 B/op\t       1 allocs/op",
            "extra": "7921987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24560024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.298,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128933692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3981,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "293214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3459,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "304897 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4377,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "271005 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4374,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "269251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1273,
            "unit": "ns/op\t     801 B/op\t       8 allocs/op",
            "extra": "993866 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3818,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "312901 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3963,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "279370 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 157.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6913581 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 47.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25839495 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 57.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19740753 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.024,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298142167 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.041,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "170474520 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.901,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203336518 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 907.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1334588 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 879.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1352976 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6950000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 151.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7980414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 617.7,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1931229 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 623.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1944090 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 692001,
            "unit": "ns/op\t  373009 B/op\t    5608 allocs/op",
            "extra": "1635 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 92.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12753855 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46409300 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372992814 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.809,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "424745389 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 149.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8015506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 224.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5174312 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 149.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8067968 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 250271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4767 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 223902,
            "unit": "ns/op\t   24563 B/op\t    1000 allocs/op",
            "extra": "4868 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 176928,
            "unit": "ns/op\t     697 B/op\t       0 allocs/op",
            "extra": "6738 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 490.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2436133 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth_Upper",
            "value": 493.5,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2450254 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 412.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2896605 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 798.7,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1504970 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 525.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2289637 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1827,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "831085 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2038,
            "unit": "ns/op\t     560 B/op\t       7 allocs/op",
            "extra": "828246 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1414,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "834316 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1595,
            "unit": "ns/op\t     252 B/op\t       5 allocs/op",
            "extra": "847060 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1794,
            "unit": "ns/op\t     339 B/op\t       5 allocs/op",
            "extra": "943778 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9886368 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 101.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11711608 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.51,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24162338 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.23,
            "unit": "ns/op\t 675.88 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62318856 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.07,
            "unit": "ns/op\t 301.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27997416 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 718.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1653508 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 128.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9317718 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 514.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2367675 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 338,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3591759 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 369.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3242454 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 707.6,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1683225 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 416.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2879342 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 775,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1515472 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23733,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "49122 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24797,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "50832 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17581290 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 141.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8446105 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28921724 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 160.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7632159 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56452700 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 21.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53517124 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 19.22,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58214773 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 22.34,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50953704 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 29.81,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37680452 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37933446 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12420134 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10304688 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 66.37,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "15452536 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 446,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2665162 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38634949 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8037,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43500358 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "745846135 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 33.03,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "34084279 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 78.41,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15466834 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 67.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17577754 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 148.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8088572 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17743765 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147874497 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995182965 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289219778 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44781673 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 71.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16423047 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11683712 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 143,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8228978 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 106.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11059815 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 371.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3172972 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 81.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "13698411 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 319.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3703603 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "371772444 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.441,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "245298940 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.636,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "330576597 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.977,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201186628 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149239299 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144854634 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 97.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12360616 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10310629 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21877317 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "835733+gaby@users.noreply.github.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc038d8233b486960a87d30253d4a888e376ff0b",
          "message": "Feature: Add DoRedirects, DoTimeout and DoDeadline to Proxy middleware (#2332)\n\n* Add support for DoRedirects\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>\n\n* Fix linter issues\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>\n\n* Add example to README\n\n* Add support for DoDeadline and DoTimeout. Expand unit-tests\n\n* Fix linter errors\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>\n\n* Add examples for Proxy Middleware\n\n---------\n\nSigned-off-by: Juan Calderon-Perez <jgcalderonperez@protonmail.com>",
          "timestamp": "2023-02-24T15:09:00+01:00",
          "tree_id": "9f101933ef642c64bcf41d05e08a1121de159f6c",
          "url": "https://github.com/gofiber/fiber/commit/dc038d8233b486960a87d30253d4a888e376ff0b"
        },
        "date": 1677248421924,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 658.2,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1888722 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 5377,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "216478 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5327,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "219175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7530806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20482264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 80.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15231896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 61.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19797510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 228.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5342265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 275.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4052683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.724,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "437659298 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1029,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 721.3,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1645100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2621,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "396610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1309,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "777880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1176,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "875228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9598800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8142760 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 126.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9507100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 315,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3878485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2183,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "521427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 536.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2271903 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 126.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9503757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 156.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7608250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 220.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5314371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5622201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 392.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3010675 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 41.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29056676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 83.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14396116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 44.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25916056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 46.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25909174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 637.2,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1834434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16978042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 302.6,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3826412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4226,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "280524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "78932209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 152.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7893127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 293.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4106383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 389.8,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3052034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2577,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "516208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 147.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8146818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1307,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "795844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 248.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4870077 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 721.9,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1635488 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 836.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1364763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 829.2,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1441950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 800.9,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1491693 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 191.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6225375 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "223299117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 57.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20179480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27852105 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 98.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12178252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 110.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10908607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 55.47,
            "unit": "ns/op\t      78 B/op\t       0 allocs/op",
            "extra": "19043900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 166.2,
            "unit": "ns/op\t      84 B/op\t       1 allocs/op",
            "extra": "7181422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 51.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20296010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130654622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3846,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "290325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3147,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "352306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4404,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "266503 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4316,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "263884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1360,
            "unit": "ns/op\t     802 B/op\t       8 allocs/op",
            "extra": "946112 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5094,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "225794 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5327,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "223515 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 144.9,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7855708 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 47.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25575145 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 59.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20361441 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 3.876,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "322282317 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.216,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "232647930 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 4.735,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "248037776 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 895.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1327479 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 901,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1340394 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 170.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7010808 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7280001 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 592.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "2021220 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 606,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "2017503 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 722809,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1628 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 97.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12750426 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 25.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46353468 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "356136560 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.682,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "445926517 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 157.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7484434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 222.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5650227 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 157.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7689798 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 255903,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4557 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 210044,
            "unit": "ns/op\t   24565 B/op\t    1000 allocs/op",
            "extra": "5780 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 162364,
            "unit": "ns/op\t     699 B/op\t       0 allocs/op",
            "extra": "7326 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 513.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2317723 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth_Upper",
            "value": 520.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2327217 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 416.4,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2903061 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 817.6,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1500265 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 521.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2300994 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2340,
            "unit": "ns/op\t     419 B/op\t       7 allocs/op",
            "extra": "852806 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2664,
            "unit": "ns/op\t     578 B/op\t       7 allocs/op",
            "extra": "784472 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1349,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "938484 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1758,
            "unit": "ns/op\t     254 B/op\t       5 allocs/op",
            "extra": "829824 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1875,
            "unit": "ns/op\t     359 B/op\t       5 allocs/op",
            "extra": "860740 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 129.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9171480 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 119.8,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "10102334 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 50.42,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "23717970 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.25,
            "unit": "ns/op\t 675.27 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "62458207 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 43.68,
            "unit": "ns/op\t 297.63 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "27465006 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 705.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1714117 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 133.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8748775 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 485.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2474850 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 328.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3648918 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 369.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3238908 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 695,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1778452 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 426.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2761242 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 805,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1463278 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 24280,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "47714 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24769,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "49096 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 61.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19415059 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 132.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8966779 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 49.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24768252 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 149.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7862182 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.1,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "62604273 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "48809628 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57989324 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54096496 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "41802429 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.28,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39631970 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 99.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12009310 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 109.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10914846 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 67.95,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "17082386 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 489.1,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2390280 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 31.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38474132 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.7546,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 26.51,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "41510197 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.928,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "654794964 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 32.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35445363 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 79.34,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "14634942 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 81.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14522965 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 166.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7204828 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.22,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18063760 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146847333 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 3.682,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325742986 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 25.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46345412 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 69.05,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17210200 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 86.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13866915 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 144.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8296795 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 96.26,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11793866 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 333.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3466867 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 83.52,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14071412 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 304.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3937566 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.695,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325211365 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.518,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275101302 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.095,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "387727717 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226148997 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 7.698,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "155721454 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.582,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146141758 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 84.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14599224 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 109.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10938136 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3712,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21535166 times\n2 procs"
          }
        ]
      }
    ]
  }
}