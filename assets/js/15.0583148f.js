(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{384:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"azure-container-registry-s-support-of-getting-bearer-token-using-basic-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-s-support-of-getting-bearer-token-using-basic-authentication"}},[t._v("#")]),t._v(" Azure Container Registry's support of getting Bearer token using Basic Authentication")]),t._v(" "),s("p",[t._v("The Azure Container Registry supports both Basic Authentication and OAuth2 for getting a registry Bearer token. This document describes how to get a Bearer token using Basic Authentication. To get the token using OAuth2, please refer to the "),s("a",{attrs:{href:"https://github.com/Azure/acr/blob/master/docs/AAD-OAuth.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("AAD-OAuth doc"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"using-the-token-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-token-api"}},[t._v("#")]),t._v(" Using the token API")]),t._v(" "),s("p",[t._v("ACR has implemented the GET method on the token endpoint for user to retrieve a Bearer token using Basic Authentication:")]),t._v(" "),s("p",[t._v("GET /oauth2/token")]),t._v(" "),s("h3",{attrs:{id:"get-the-scope-of-the-token-to-be-requested"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-scope-of-the-token-to-be-requested"}},[t._v("#")]),t._v(" Get the scope of the token to be requested")]),t._v(" "),s("p",[t._v("The first thing you want is to obtain an authentication challenge for the operation you want to on the Azure Container Registry. That can be done by targetting the API you want to call without any authentication. Here's how to do that via "),s("code",[t._v("curl")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contosoregistry.azurecr.io"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$registry")]),t._v("/v2/hello-world/manifests/latest\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("Note that "),s("code",[t._v("curl")]),t._v(" by default does the request as a "),s("code",[t._v("GET")]),t._v(" unless you specify a different verb with the "),s("code",[t._v("-X")]),t._v(" modifier.")]),t._v(" "),s("p",[t._v("This will output the following payload, with "),s("code",[t._v("...")]),t._v(" used to shorten it for illustrative purposes:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v(" Unauthorized\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Www-Authenticate: Bearer "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("realm")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://contosoregistry.azurecr.io/oauth2/token"')]),t._v(",service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contosoregistry.azurecr.io"')]),t._v(",scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repository:hello-world:pull"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errors"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNAUTHORIZED"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authentication required"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"detail"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repository"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-world"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Action"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pull"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Notice the response payload has a header called "),s("code",[t._v("Www-Authenticate")]),t._v(" that gives us the following information:")]),t._v(" "),s("ul",[s("li",[t._v("The type of challenge: "),s("code",[t._v("Bearer")]),t._v(".")]),t._v(" "),s("li",[t._v("The realm of the challenge: "),s("code",[t._v("https://contosoregistry.azurecr.io/oauth2/token")]),t._v(".")]),t._v(" "),s("li",[t._v("The service of the challenge: "),s("code",[t._v("contosoregistry.azurecr.io")]),t._v(".")]),t._v(" "),s("li",[t._v("The scope of the challenge: "),s("code",[t._v("repository:hello-world:pull")]),t._v(".")])]),t._v(" "),s("p",[t._v("The body of the payload might provide additional details, but all the information you need is contained in the "),s("code",[t._v("Www-Authenticate")]),t._v(" header.")]),t._v(" "),s("p",[t._v("With this information we're now ready to call "),s("code",[t._v("GET /oauth2/token")]),t._v(" to obtain an ACR access token that will allow us to use the "),s("code",[t._v("GET /v2/hello-world/manifests/latest")]),t._v(" API.")]),t._v(" "),s("h3",{attrs:{id:"encode-the-username-and-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encode-the-username-and-password"}},[t._v("#")]),t._v(" Encode the username and password")]),t._v(" "),s("ul",[s("li",[t._v("You can use Windows Powershell or "),s("code",[t._v("base64")]),t._v(" command line utility in Linux/Mac\n"),s("ul",[s("li",[t._v("Encode using the following format: "),s("strong",[t._v("[username]")]),t._v(":"),s("strong",[t._v("[password]")])]),t._v(" "),s("li",[t._v("Powershell:\n"),s("ul",[s("li",[s("code",[t._v("[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('[username]:[password]'))")])])])]),t._v(" "),s("li",[t._v("Linux/Mac Terminal:\n"),s("ul",[s("li",[s("code",[t._v("echo -n '[username]:[password]' | base64")])])])]),t._v(" "),s("li",[t._v("Copy the encoded value and set it as a environment variable")])])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("acr_credential")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"get-a-pull-access-token-for-the-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-pull-access-token-for-the-user"}},[t._v("#")]),t._v(" Get a Pull access token for the user")]),t._v(" "),s("p",[s("strong",[t._v("REST format:")]),t._v(" "),s("code",[t._v("https://")]),s("strong",[t._v("[login-url]")]),s("code",[t._v("/oauth2/token?service=")]),s("strong",[t._v("[login-url]")]),s("code",[t._v("&scope=repository:")]),s("strong",[t._v("[image]")]),s("code",[t._v(":pull,push")])]),t._v(" "),s("p",[t._v("Set the header for Authorization, setting the 'Basic' word followed by a space and the encoded usr:pwd value")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("|Header | Value |\n|-------|-------|\n| Authorization | Basic [base64 encoded usr:pwd] |\n| Host | [login-url] |\n")])])]),s("p",[t._v("Here's how such a call looks when done via "),s("code",[t._v("curl")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contosoregistry.azurecr.io"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("scope")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repository:hello-world:pull"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$acr_credential")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$registry")]),t._v("/oauth2/token?service="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$registry")]),t._v("&scope="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scope")]),t._v('"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("The outcome of this operation will be a response with status 200 OK and a body with the following JSON payload:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ...xcg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("This response is the ACR access token which you can inspect with "),s("a",{attrs:{href:"https://jwt.ms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.ms"),s("OutboundLink")],1),t._v(". You can now use it to call APIs exposed by the Azure Container Registry.")]),t._v(" "),s("h3",{attrs:{id:"calling-an-azure-container-registry-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calling-an-azure-container-registry-api"}},[t._v("#")]),t._v(" Calling an Azure Container Registry API")]),t._v(" "),s("p",[t._v("In this example we'll call the "),s("code",[t._v("GET /v2/{repository}/manifests/{tag}")]),t._v(" API on an Azure Container Registry. Assume you have the following:")]),t._v(" "),s("ol",[s("li",[t._v("A valid container registry, which here we'll call "),s("code",[t._v("contosoregistry.azurecr.io")]),t._v(".")]),t._v(" "),s("li",[t._v("A valid ACR access token, created with the correct scope for the API we're going to call.")])]),t._v(" "),s("p",[t._v("Here's how a call to the "),s("code",[t._v("GET /v2/hello-world/manifests/latest")]),t._v(" API of the given registry would look like when done via "),s("code",[t._v("curl")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contosoregistry.azurecr.io"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("acr_access_token")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ...xcg"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$acr_access_token")]),t._v('"')]),t._v(" https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$registry")]),t._v("/v2/hello-world/manifests/latest\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("This should result in a status 200 OK.")])])}),[],!1,null,null,null);e.default=r.exports}}]);