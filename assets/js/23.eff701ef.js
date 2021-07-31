(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{420:function(e,r,t){"use strict";t.r(r);var n=t(45),s=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-container-registry-image-signing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-image-signing"}},[e._v("#")]),e._v(" Azure Container Registry Image Signing")]),e._v(" "),t("p",[e._v("Azure Container Registry supports image signing through "),t("a",{attrs:{href:"https://docs.docker.com/notary/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Content Trust"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To push signed images to ACR, the following configuration is required:")]),e._v(" "),t("ul",[t("li",[e._v("The user or Service Principal used for automated signing must be assigned the "),t("code",[e._v("AcrImageSigner")]),e._v(" role to your registry in addition to the "),t("code",[e._v("Owner")]),e._v(", "),t("code",[e._v("Contributor")]),e._v(" roles for signing. Role assignment can be done by the following methods.\n"),t("ul",[t("li",[e._v("Azure Portal: Your registry -> Access Control (IAM) -> Add (Select "),t("code",[e._v("AcrImageSigner")]),e._v(" for the Role).")]),e._v(" "),t("li",[e._v("Azure CLI: Find the resource id "),t("code",[e._v("id")]),e._v(" of the registry by running"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr show -n myRegistry\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),e._v("Then you can assign the "),t("code",[e._v("AcrImageSigner")]),e._v(" role to a user"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az role assignment create --scope resource_id --role AcrImageSigner --assignee user@example.com\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),e._v("or a service principle identified by its application ID"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az role assignment create --scope resource_id --role AcrImageSigner --assignee 00000000-0000-0000-0000-000000000000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])])]),e._v(" "),t("li",[e._v("To pull trusted images, a "),t("code",[e._v("Reader")]),e._v(" role is enough for normal users. No additional roles like an "),t("code",[e._v("AcrImageSigner")]),e._v(" role are required.")])]),e._v(" "),t("p",[e._v("You can use Docker Client and Notary Client to interact trusted images with ACR.\nDetailed documentation can be found at "),t("a",{attrs:{href:"https://docs.docker.com/engine/security/trust/content_trust/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content trust in Docker"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);r.default=s.exports}}]);