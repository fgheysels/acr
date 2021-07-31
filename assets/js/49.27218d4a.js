(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{397:function(a,s,t){"use strict";t.r(s);var e=t(45),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"task-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-run"}},[a._v("#")]),a._v(" Task run")]),a._v(" "),t("h2",{attrs:{id:"create-a-resource-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-group"}},[a._v("#")]),a._v(" Create a resource group")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -n mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -l westus\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"deploy-a-task-run-which-will-create-the-registry-task-and-schedule-a-run-using-the-following-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-task-run-which-will-create-the-registry-task-and-schedule-a-run-using-the-following-command"}},[a._v("#")]),a._v(" Deploy a task run, which will create the registry, task and schedule a run using the following command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az deployment group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --resource-group "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mytaskrunrg"')]),a._v(" --template-file azuredeploy.json --parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("registryName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mytaskrunrg"')]),a._v(" --parameters --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("taskName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"huanwudfwesttask02"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("taskRunName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mytaskname"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);