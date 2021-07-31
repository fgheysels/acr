(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{393:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"manage-repositories-in-teleport-enabled-registries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manage-repositories-in-teleport-enabled-registries"}},[e._v("#")]),e._v(" Manage Repositories in Teleport Enabled Registries")]),e._v(" "),s("h2",{attrs:{id:"existing-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#existing-limitations"}},[e._v("#")]),e._v(" Existing Limitations")]),e._v(" "),s("ul",[s("li",[e._v("Registries must first be Teleport enabled to enable repositories")]),e._v(" "),s("li",[e._v("There is a current 10 teleport enabled repository limit for registries")])]),e._v(" "),s("h2",{attrs:{id:"existing-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#existing-flow"}},[e._v("#")]),e._v(" Existing Flow")]),e._v(" "),s("p",[e._v("At the moment if a repository is teleport enabled, this means it can expand images that are pushed into it making them into the teleport format. Note that this does not interfere with regular registry storage and teleportable (expanded) layers are stored in a separate  storage than typical layers. Making a repository enabled does not however expand all existing images in it, rather all images pushed after the fact will be expanded.")]),e._v(" "),s("p",[e._v("This can be best illustrated with examples, take a new empty registry that has already been teleport enabled, in this case we can summarize its state as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Registry A\n    Properties\n    - Teleport enabled\n    -> Repositories \n        (none)\n")])])]),s("p",[e._v("Pushing any image to Registry A will result in the creation of a teleport enabled repository, for visualization:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Push ubuntu:18.0.1 to Registry A\n\nRegistry A\n    Properties\n    - Teleport enabled\n    -> Repositories \n        ubuntu (Teleport Enabled)\n            |-> Tag: 18.0.1 \n                Can be pulled from teleport client\n")])])]),s("p",[e._v("Now consider a non empty registry, registry B that has just had teleport enabled")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Registry B\n    Properties\n    - Teleport enabled\n    -> Repositories \n        python (Not Teleport Enabled)\n            |-> Tag: latest\n                Cannot be pulled from teleport client\n")])])]),s("p",[e._v("Pushing a new image not already present will result in:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Push ubuntu:18.0.1 to Registry B\n\nRegistry B\n    Properties\n    - Teleport enabled\n    -> Repositories \n        python (Not Teleport Enabled)\n            |-> Tag: latest\n                Cannot be pulled from teleport client\n\n        ubuntu (Teleport Enabled)\n            |-> Tag: 18.0.1 \n                Can be pulled from teleport client\n")])])]),s("p",[e._v("If we want to enable python we can similarly re push the python image resulting in:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Push python:latest to Registry B\n\nRegistry B\n    Properties\n    - Teleport enabled\n    -> Repositories \n        python (Teleport Enabled)\n            |-> Tag: latest\n                Can be pulled from teleport client\n\n        ubuntu (Teleport Enabled)\n            |-> Tag: 18.0.1 \n                Can be pulled from teleport client\n")])])]),s("p",[e._v("A tricky thing however is that if instead of the last step we pushed a different image for repository python (where latest and 2.2 dont share a digest) we would see this state:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Push python:2.2 to Registry B\n\nRegistry B\n    Properties\n    - Teleport enabled\n    -> Repositories \n        python (Teleport Enabled)\n            |-> Tag: latest\n                Cannot be pulled from teleport client\n                Tag: 2.2\n                Can be pulled from teleport client\n\n        ubuntu (Teleport Enabled)\n            |-> Tag: 18.0.1 \n                Can be pulled from teleport client\n")])])]),s("h2",{attrs:{id:"manually-select-which-repositories-are-teleport-enabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-select-which-repositories-are-teleport-enabled"}},[e._v("#")]),e._v(" Manually Select which Repositories Are Teleport Enabled")]),e._v(" "),s("p",[e._v("The previous operation does not give customers much control over which registries are teleport enabled as a result we do have an existing flow to chose which repositories are enabled and which arent, note however that as long as a repository is under the 10 repo limit all pushes to non teleport enabled repositories (new or otherwise) will become teleport enabled (even if the flag here was set manually to disabled)")]),e._v(" "),s("p",[e._v("The previous step should have provided some insights as to how we currently enable teleport on a repository. Here is how to explicitely set and check which repositories are teleport enabled.")]),e._v(" "),s("h3",{attrs:{id:"identify-which-repositories-are-teleport-enabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identify-which-repositories-are-teleport-enabled"}},[e._v("#")]),e._v(" Identify which repositories are teleport enabled")]),e._v(" "),s("p",[e._v("To currently identify if a speific repository is teleport enabled we can run the following command and looking at the teleport enabled field:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("az acr repository show --repository "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  -o jsonc\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"changeableAttributes"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deleteEnabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" true,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"listEnabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" true,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"readEnabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" true,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleportEnabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" true,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"writeEnabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("We have also provided a convenicence script to find this out for all repositories in a registry in case there are a lot and determining this becomes difficult. P.S this is not super fast but saves manually checking one by one.")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: Assure "),s("a",{attrs:{href:"./find-teleport-enabled-repositories.sh"}},[e._v("find-teleport-enabled-repositories.sh")]),e._v(" is set to execute: "),s("code",[e._v("sudo chmod +x find-teleport-enabled-repositories.sh")])])]),e._v(" "),s("p",[e._v("You can run this as follows:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./find-teleport-enabled-repositories.sh registry-name\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Sample output:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("/find-teleport-enabled-repositories.sh teleporttest\ngcc -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Enabled\nglassfish -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Enabled\njupyter/all-spark-notebook -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Enabled\npython -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Disabled\nrethinkdb -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Enabled\n\nSummary:\nEnabled Repositories:\n\ngcc\nglassfish\njupyter/all-spark-notebook\nrethinkdb\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("h3",{attrs:{id:"manually-disable-teleport-on-a-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-disable-teleport-on-a-repository"}},[e._v("#")]),e._v(" Manually disable teleport on a repository")]),e._v(" "),s("p",[e._v("For the time being we disable teleport on a repository using the "),s("a",{attrs:{href:"./edit-teleport-attribute.sh"}},[e._v("edit-teleport-attribute.sh")]),e._v("  included in this repo. This can be used by first setting env variables for credentials:")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: Assure "),s("a",{attrs:{href:"./edit-teleport-attribute.sh"}},[e._v("edit-teleport-attribute.sh")]),e._v(" is set to execute: "),s("code",[e._v("sudo chmod +x edit-teleport-attribute.sh")])])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ACR_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("teleport-token\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ACR_PWD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az acr token create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name teleport-token "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --registry $ACR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --scope-map _repositories_pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --query credentials.passwords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".value -o tsv"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\nedit-teleport-attribute.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("registry-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" disable --debug\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"manually-enable-teleport-on-a-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-enable-teleport-on-a-repository"}},[e._v("#")]),e._v(" Manually enable teleport on a repository")]),e._v(" "),s("p",[e._v("Once the registry has less than 10 teleportable repositories enabled, the next repository for which an image is pushed that is not already teleport enabled will become teleport enabled. As a result there is no direct need of enabling teleport for it, instead you can just push an image to said repository.")]),e._v(" "),s("p",[e._v("Nonetheless for completeness "),s("a",{attrs:{href:"./edit-teleport-attribute.sh"}},[e._v("edit-teleport-attribute.sh")]),e._v("  script can set this metadata field to enable teleport on a repository manually (you will still need to push afterwards so the image will expand in the background).")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ACR_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("teleport-token\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ACR_PWD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az acr token create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name teleport-token "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --registry $ACR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --scope-map _repositories_pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --query credentials.passwords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".value -o tsv"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\nedit-teleport-attribute.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("registry-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" --debug\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("After, new images pushed to the enabled repository will be expanded and teleportable.")]),e._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Can the Teleport 10 repository limit be raised?")]),e._v(" "),s("p",[s("code",[e._v("The 10 repository limit is a temporary measure during the private preview phase. We do not currently have a way to raise this value for a particular registry. If necessary users can request a second registry to be teleport enabled")])])]),e._v(" "),s("li",[s("p",[e._v("Will pushing one image to an existing repository (making it teleport enabled) expand all existing tags making them teleportable?")]),e._v(" "),s("p",[s("code",[e._v("Unfortnately we do not currently support backfill so only layers contained in pushes after teleport has been enabled on the registry will be fixed")])])]),e._v(" "),s("li",[s("p",[e._v("Is there a timeline to improve this behaviour?")]),e._v(" "),s("p",[s("code",[e._v("We have a plan to improve this behaviour but the exact timeline is not set in stone")])])]),e._v(" "),s("li",[s("p",[e._v("How can I tel if an image in a teleport enabled repository is actually teleportable?")]),e._v(" "),s("p",[s("code",[e._v("This can be done using the check-expansion script also provided in this registry")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);