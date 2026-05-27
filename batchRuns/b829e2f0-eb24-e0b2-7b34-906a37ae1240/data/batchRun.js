var batchRun={
    "id": "b829e2f0-eb24-e0b2-7b34-906a37ae1240",
    "batchId": "0",
    "title": "Default Test Batch",
    "tests": [
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        },
        {
            "version": 11,
            "id": "135cc411-0b72-942b-7109-9869cfc6609a",
            "title": "OCR Web Test",
            "description": "",
            "libraryFolder": null,
            "steps": [
                {
                    "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                    "type": "startApp",
                    "optional": false,
                    "createdOn": "2026-04-20T08:59:47.997Z",
                    "recordedOn": "Chrome Portrait",
                    "packageName": "",
                    "activityName": "",
                    "deleteAppData": true,
                    "grantPermissions": [
                        "all"
                    ],
                    "allPermissions": [],
                    "grantIosPermissions": [],
                    "allIosPermissions": [],
                    "os": "Android",
                    "websiteUrl": "https://repeato.app/temp/test-ocr/",
                    "browserLanguage": "en",
                    "params": "",
                    "iosParams": "",
                    "recordingStatus": null
                },
                {
                    "id": "5f52bd10-a827-3580-9589-569192936d2b",
                    "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:13:43.960Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                    "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:13.755Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "ai-ocr"
                    ],
                    "region": {
                        "x": 0.4,
                        "y": 0.4,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "searchText": "08",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                    "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-21T09:14:31.715Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                    "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                    "type": "scanTextAssertion",
                    "optional": false,
                    "createdOn": "2026-04-22T10:07:34.357Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "tesseract"
                    ],
                    "region": {
                        "x": 0.3884169884169884,
                        "y": 0.21995661605206074,
                        "width": 0.2,
                        "height": 0.1
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "Tesseract",
                    "searchText": "April",
                    "operator": "contains",
                    "recordingStatus": null
                },
                {
                    "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                    "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:16:44.792Z",
                    "recordedOn": "Chrome Portrait",
                    "tags": [
                        "repeato-ocr"
                    ],
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "recordingStatus": null
                },
                {
                    "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:17:08.196Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "8838ae4c-c827-9e0c-b274-27b691e04ec9",
                    "originalFrame": "bc5abc0e-a829-4939-7f2c-f11f41410226_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-20T09:00:19.891Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "12",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "531790da-4647-da40-c174-d8eb2adb569e",
                    "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:07:02.029Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Log in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                    "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:07.236Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "LOGIN",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                    "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:21.981Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "692ce07e-fdb1-622e-2c96-9b479636f310",
                    "originalFrame": "95bcf015-0e81-374f-9d63-895f0a93b312_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:33.325Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "positive text",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "6b01c4b3-3a47-3532-3f10-b9405ccbb5b5",
                    "originalFrame": "02a47586-6d2c-b79b-e056-fbf726d3bad2_frame.jpg",
                    "timeout": 20,
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:13:51.444Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Favorites",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                    "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                    "type": "scanTextClick",
                    "optional": false,
                    "createdOn": "2026-04-21T08:14:04.164Z",
                    "recordedOn": "Chrome Portrait",
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "RepeatoOcr15",
                    "searchText": "Sign in",
                    "operator": "contains",
                    "longClick": false,
                    "recordingStatus": null
                },
                {
                    "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:37:55.751Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                },
                {
                    "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                    "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                    "type": "ocr",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:49.581Z",
                    "recordedOn": "Chrome Portrait",
                    "region": {
                        "x": 0.12200772200772199,
                        "y": 0.24598698481561818,
                        "width": 0.7289575289575291,
                        "height": 0.39067245119305855
                    },
                    "matchIndex": 0,
                    "variableName": "scannedText",
                    "ocrLanguage": "eng",
                    "ocrMethod": "AI",
                    "extractionPrompt": "The 3rd name in the list",
                    "recordingStatus": null
                },
                {
                    "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                    "type": "execScript",
                    "optional": false,
                    "createdOn": "2026-04-21T09:23:50.090Z",
                    "recordedOn": "Chrome Portrait",
                    "directory": "",
                    "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                    "isExpanded": true,
                    "language": "js",
                    "recordingStatus": null
                }
            ],
            "devices": [
                {
                    "cloudProvider": "rpto",
                    "platform": "Web",
                    "os": "macOS",
                    "size": "720x1280",
                    "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                    "name": "Chrome Portrait",
                    "model": "Chrome",
                    "currentRotation": 0,
                    "isSimulator": false,
                    "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                }
            ],
            "createdOn": "2026-04-20T08:59:43.609Z",
            "changedOn": "2026-05-01T12:51:45.044Z",
            "isWorkingCopy": false,
            "testRuns": [
                {
                    "id": "bcb57150-9fef-5498-92a3-b9382d7ba5a9",
                    "date": "2026-04-22T12:09:21.303Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "fb88955a-d5a6-c29f-c99e-5e07610e3755",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "561d6dd4-e37b-5ea1-f689-eac743832c86-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:27.089Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "52d775e1-95ca-967c-5c16-8c5c4de5af58",
                            "step": {
                                "id": "5f52bd10-a827-3580-9589-569192936d2b",
                                "originalFrame": "4de1f0bb-4173-5938-dd56-8069acaa958a_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:13:43.960Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "3a8ffe86-f41c-f2d7-0a46-791458352d56-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:28.293Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "25b9eca1-b0d8-369a-7d4e-7dbd7fb562bc",
                            "step": {
                                "id": "5d3237b8-d01b-9834-46b6-acecabff4d75",
                                "originalFrame": "71b36039-a59c-c67f-d54d-fd3bcea19099_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:13.755Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "ai-ocr"
                                ],
                                "region": {
                                    "x": 0.4,
                                    "y": 0.4,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "searchText": "08",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4,
                                        "y": 0.4
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "08"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"08\"",
                            "scannedText": "08",
                            "screenshot": "244ab911-2a98-9faa-8797-9ac83078a5ce-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:32.702Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "cdd29915-ea5a-07a2-7c4f-e8039f9913c5",
                            "step": {
                                "id": "07b76eba-9dcc-5be8-aa61-a7ba3bf85dab",
                                "originalFrame": "fa5b2bc4-bbd6-6e44-31e1-798ba6d0f309_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-21T09:14:31.715Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April2026\"",
                            "scannedText": "April2026",
                            "screenshot": "868bb9b4-6e32-478a-1cf0-295667fdc9f2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:33.666Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "2dfb4374-c792-8ad9-9976-197009d7079a",
                            "step": {
                                "id": "51ef8214-ed00-2e48-9feb-48cd07ed3860",
                                "originalFrame": "936cb644-2404-9164-8a08-b5cbdd7c38ad_frame.jpg",
                                "type": "scanTextAssertion",
                                "optional": false,
                                "createdOn": "2026-04-22T10:07:34.357Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "tesseract"
                                ],
                                "region": {
                                    "x": 0.3884169884169884,
                                    "y": 0.21995661605206074,
                                    "width": 0.2,
                                    "height": 0.1
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "Tesseract",
                                "searchText": "April",
                                "operator": "contains",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.3884169884169884,
                                        "y": 0.21995661605206074
                                    },
                                    "size": {
                                        "width": 0.2,
                                        "height": 0.1
                                    },
                                    "probability": 1,
                                    "text": "April 2026"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"April 2026\"",
                            "scannedText": "April 2026",
                            "screenshot": "1a921d35-f14d-173b-3659-44e04a4b87e2-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:34.770Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "de657085-ae11-3a4f-bb65-9063acc68d13",
                            "step": {
                                "id": "4a32cfa3-df77-387e-abbb-8dc58481afe7",
                                "originalFrame": "565d50bb-b404-3290-f027-4d67ede7ec58_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:16:44.792Z",
                                "recordedOn": "Chrome Portrait",
                                "tags": [
                                    "repeato-ocr"
                                ],
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24\"",
                            "scannedText": "April2026\nMo Tu We Th Fr\n01 02 03\n06 07 08 09 10\n13 14 15 16 17\n20 21 22 23 24",
                            "screenshot": "10611b84-527a-8d1d-510e-58ea54d8e245-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.181Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "1516ec3c-982a-d8d6-4d7c-f82639e32191",
                            "step": {
                                "id": "a419dd1d-a522-2aea-4d0e-f2e83344cf09",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:17:08.196Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('April')){\n    throw new Error(\"OCR failed, April not found!\")\n}",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "1a5ec416-6f89-26a3-e5d2-03f529d21c4f-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:36.223Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "43c36ac5-c6e2-3993-a439-061b248cb269",
                            "step": {
                                "id": "531790da-4647-da40-c174-d8eb2adb569e",
                                "originalFrame": "e668065b-fb95-8a85-dbaa-175d5bcc0cb2_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:07:02.029Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Log in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.4875,
                                        "y": 0.1046875
                                    },
                                    "size": {
                                        "width": 0.17083333333333334,
                                        "height": 0.040625
                                    },
                                    "probability": 0.9012820323308309,
                                    "text": "Log in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Log in\"",
                            "scannedText": "Image2/9\nLog in",
                            "screenshot": "5c324d24-0145-d294-1384-958249658d09-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:39.071Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "12070122-3ac1-570f-0720-bed68a0a6efc",
                            "step": {
                                "id": "9a192219-d412-c86c-d0eb-1f8e62992faa",
                                "originalFrame": "55be7dc6-1728-dd1c-cc45-8058f805efe6_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:07.236Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "LOGIN",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44722222222222224,
                                        "y": 0.76875
                                    },
                                    "size": {
                                        "width": 0.1111111111111111,
                                        "height": 0.025
                                    },
                                    "probability": 0.9984789013862609,
                                    "text": "LOGIN"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"LOGIN\"",
                            "scannedText": "Image3/9\n9:53\nRepeatoDemo App\nSecure sign in\nEmail *\nPassword*\nLOGIN",
                            "screenshot": "79a30458-c5cd-c6e2-b41a-c569e5164368-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:40.581Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "d4910b96-1974-39a6-4fea-342f9c8d1aab",
                            "step": {
                                "id": "36584496-674d-37fd-ba19-dd202e24fe91",
                                "originalFrame": "624938b7-d666-b28c-8545-ae3a62af58bb_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:13:21.981Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Favorites",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.10555555555555556,
                                        "y": 0.125
                                    },
                                    "size": {
                                        "width": 0.5694444444444444,
                                        "height": 0.0609375
                                    },
                                    "probability": 0.9952577948570251,
                                    "text": "Favorites"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Favorites\"",
                            "scannedText": "Favorites",
                            "screenshot": "1d5dd727-f39d-ffc9-0159-ff6341c3f917-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:41.818Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "fcab8103-5d0f-1255-5ae7-0485b71ccc39",
                            "step": {
                                "id": "4aba30f6-aac1-63b1-9ea7-3f59b2eb5232",
                                "originalFrame": "a99cf4f2-3818-6d10-1bbf-c611a91b46bd_frame.jpg",
                                "type": "scanTextClick",
                                "optional": false,
                                "createdOn": "2026-04-21T08:14:04.164Z",
                                "recordedOn": "Chrome Portrait",
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "RepeatoOcr15",
                                "searchText": "Sign in",
                                "operator": "contains",
                                "longClick": false,
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.44166666666666665,
                                        "y": 0.84140625
                                    },
                                    "size": {
                                        "width": 0.11805555555555555,
                                        "height": 0.02421875
                                    },
                                    "probability": 0.9516892007419041,
                                    "text": "Sign in"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Text found in region: \"Sign in\"",
                            "scannedText": "Image7/9\n12:05\nGoogl e\nSearch or type URL\nDemo App 10.0.2.2 Facebook YouTube Sanoo\nDiscover\nGetbetter content\ntoget contentbased onyour interests\nSign in\nHegsethLikensEaster\nRescue ofU.S.Airman",
                            "screenshot": "951c4fa4-a966-ca92-aa1a-a261b0d6d222-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.810Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "134b63ca-84d7-6a1b-8f2d-baddb68ec38e",
                            "step": {
                                "id": "24daeb87-d19d-7c8d-3803-25a341675d7e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:37:55.751Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "data.aiSuccessCount = 0\ndata.loopCount = 0",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "5bc08137-6c75-18ce-0031-3954f72d5adc-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:47.830Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "ab44b07c-4a68-9513-ad37-5ac1cbcb8ed1",
                            "step": {
                                "id": "02e64613-f169-1cde-c9b6-daed498c8248",
                                "originalFrame": "1a3ae647-5ff1-cc43-3aff-3b0a407ecf8a_frame.jpg",
                                "type": "ocr",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:49.581Z",
                                "recordedOn": "Chrome Portrait",
                                "region": {
                                    "x": 0.12200772200772199,
                                    "y": 0.24598698481561818,
                                    "width": 0.7289575289575291,
                                    "height": 0.39067245119305855
                                },
                                "matchIndex": 0,
                                "variableName": "scannedText",
                                "ocrLanguage": "eng",
                                "ocrMethod": "AI",
                                "extractionPrompt": "The 3rd name in the list",
                                "recordingStatus": null
                            },
                            "matches": [
                                {
                                    "position": {
                                        "x": 0.12200772200772199,
                                        "y": 0.24598698481561815
                                    },
                                    "size": {
                                        "width": 0.7277777777777777,
                                        "height": 0.390625
                                    },
                                    "probability": 1,
                                    "text": "Victor Nguyen"
                                }
                            ],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "Scanned text: \"Victor Nguyen\"",
                            "scannedText": "Victor Nguyen",
                            "screenshot": "e2e54d5b-8bfd-1225-3bc5-7ab55415b0f9-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.926Z",
                            "executedOn": "Chrome Portrait"
                        },
                        {
                            "id": "63827e92-fc7a-63cd-f5c4-e4b00df10538",
                            "step": {
                                "id": "e69cd75f-9071-f7f0-4037-659b55a15b0e",
                                "type": "execScript",
                                "optional": false,
                                "createdOn": "2026-04-21T09:23:50.090Z",
                                "recordedOn": "Chrome Portrait",
                                "directory": "",
                                "script": "if(!data.scannedText.includes('Victor')){\n    log(\"OCR failed. data.scannedText: \"+data.scannedText)\n} else if(data.scannedText.includes('Ethan')){\n    log(\"OCR failed, Extraction prompt didn't succeed: \"+data.scannedText)\n} else {\n    data.aiSuccessCount += 1\n}\n\ndata.loopCount += 1\n\nif(data.loopCount < 3){\n    testRunner.setNextStepId('02E646')\n} else {\n    log('Success rate: '+data.aiSuccessCount + ' of ' + data.loopCount + ' succeeded')\n}\n",
                                "isExpanded": true,
                                "language": "js",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": true,
                            "message": "",
                            "screenshot": "f179d092-f8a6-8b0b-b72d-e281a9ac0e5a-screenshot.jpg",
                            "createdOn": "2026-04-22T12:09:55.951Z",
                            "executedOn": "Chrome Portrait"
                        }
                    ],
                    "devices": [
                        {
                            "cloudProvider": "rpto",
                            "platform": "Web",
                            "os": "macOS",
                            "size": "720x1280",
                            "serial": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "deviceId": "97e887d2-0e75-827f-4d07-94c2913e74b8",
                            "name": "Chrome Portrait",
                            "model": "Chrome",
                            "currentRotation": 0,
                            "isSimulator": false,
                            "lastConnectedBundle": "app://69e8b8e15538b2d07b1b8021"
                        }
                    ],
                    "duration": 34679,
                    "appVersions": [],
                    "wasSuccessful": true
                },
                {
                    "id": "017c4078-76db-2650-7b65-7d63802c3ddf",
                    "date": "2026-05-05T07:10:23.312Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "95c9c9aa-7e0c-4d74-b3d5-bbaed6bd13ca",
                    "date": "2026-05-05T07:10:23.355Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "409d5200-0bd1-b00d-ff26-c17f542edb18",
                    "date": "2026-05-05T07:10:23.399Z",
                    "completed": true,
                    "stepResults": [],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 3,
                    "appVersions": [],
                    "wasSuccessful": false
                },
                {
                    "id": "7f442cac-3adf-a3b0-48b9-4bcb97ae9851",
                    "date": "2026-05-05T07:13:31.691Z",
                    "completed": true,
                    "stepResults": [
                        {
                            "id": "ccd3a8e2-1939-91d9-1c76-5af4a9afb5c2",
                            "step": {
                                "id": "22c9c53b-25e2-682e-9922-e41050676c0e",
                                "type": "startApp",
                                "optional": false,
                                "createdOn": "2026-04-20T08:59:47.997Z",
                                "recordedOn": "Chrome Portrait",
                                "packageName": "",
                                "activityName": "",
                                "deleteAppData": true,
                                "grantPermissions": [
                                    "all"
                                ],
                                "allPermissions": [],
                                "grantIosPermissions": [],
                                "allIosPermissions": [],
                                "os": "Android",
                                "websiteUrl": "https://repeato.app/temp/test-ocr/",
                                "browserLanguage": "en",
                                "params": "",
                                "iosParams": "",
                                "recordingStatus": null
                            },
                            "matches": [],
                            "scaleFactor": 1,
                            "success": false,
                            "message": "iosBundleId is not set in appStartConfig",
                            "createdOn": "2026-05-05T07:13:31.701Z",
                            "executedOn": "iPhone 8"
                        }
                    ],
                    "devices": [
                        {
                            "os": "iOS",
                            "osVersion": "15.5",
                            "size": "750x1334",
                            "serial": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "deviceId": "0D6730F1-6F13-4F55-AD7E-0F4567E31B4F",
                            "name": "iPhone 8",
                            "isSimulator": true
                        }
                    ],
                    "duration": 14,
                    "appVersions": [],
                    "wasSuccessful": false
                }
            ],
            "testRunExports": [],
            "externalStepsNeedOverride": [],
            "removeStepsFromSameStepGroups": [],
            "stepsCountWithSubTestSteps": 17,
            "sameStepGroupsTemp": [],
            "syncState": {
                "synced": 3,
                "total": 3,
                "error": "",
                "lastUpdated": "2026-05-05T07:13:34.292Z"
            }
        }
    ],
    "testRuns": [],
    "createdOn": "2026-05-05T07:13:31.686Z",
    "stats": {
        "totalCount": 14,
        "successCount": 0,
        "duration": "00:00:00",
        "failCount": 14,
        "stepsCount": 14
    }
}
var tagsMapping=[
    {
        "name": "repeato-ocr",
        "color": "#58A289"
    },
    {
        "name": "ai-ocr",
        "color": "#E5A09B"
    },
    {
        "name": "tesseract",
        "color": "#E9E7DD"
    }
]
var additionalData={}
var version="Repeato-Studio v1.9.5"