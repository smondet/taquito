(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return c}));var a=t(2),i=t(9),l=(t(0),t(160)),r={title:"Validation functions",author:"Roxane Letourneau"},o={id:"validators",title:"Validation functions",description:"Taquito provides functions that allow us to see if an address, a chain, a key hash, a contract address, a public key or a signature is valid. Note that these validations do not rely on a node but are done based on checksums. Thus, they allow us to check if a value is valid and not if it exists on a chain. The ValidationResult returned by these functions is an enum which can take the following values:",source:"@site/../docs/validators.md",permalink:"/docs/validators",sidebar:"docs",previous:{title:"Estimate Operations",permalink:"/docs/estimate"},next:{title:"Working with Maps and BigMaps",permalink:"/docs/maps_bigmaps"}},d=[{value:"Validate an address",id:"validate-an-address",children:[]},{value:"Validate a chain",id:"validate-a-chain",children:[]},{value:"Validate a public key",id:"validate-a-public-key",children:[]},{value:"Validate a signature",id:"validate-a-signature",children:[]}],s={rightToc:d};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Taquito provides functions that allow us to see if an address, a chain, a key hash, a contract address, a public key or a signature is valid. Note that these validations do not rely on a node but are done based on checksums. Thus, they allow us to check if a value is valid and not if it exists on a chain. The ",Object(l.b)("inlineCode",{parentName:"p"},"ValidationResult")," returned by these functions is an enum which can take the following values:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"0 = NO_PREFIX_MATCHED,\n1 = INVALID_CHECKSUM,\n2 = INVALID_LENGTH,\n3 = VALID\n")),Object(l.b)("h3",{id:"validate-an-address"},"Validate an address"),Object(l.b)("h4",{id:"the-validateaddress-function"},"The ",Object(l.b)("inlineCode",{parentName:"h4"},"validateAddress")," function"),Object(l.b)("p",null,"This function can be used to validate implicit addresses (tz1, tz2, tz3) as well as originated addresses (KT1). "),Object(l.b)("p",null,"In the following example, the function is first called with a valid public key hash (pkh). Then, it is called with the same pkh where one character differs (e.g. 'p' instead of 'P'), which results in an invalid checksum."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validateAddress } from '@taquito/utils';\n\n//valid\nconst pkh = 'tz1L9r8mWmRPndRhuvMCWESLGSVeFzQ9NAWx'\nconst validation = validateAddress(pkh)\nprintln(`Calling the validateAddress function with ${pkh} returns ${validation}.`)\n\n//invalid checksum\nconst invalidPkh = 'tz1L9r8mWmRpndRhuvMCWESLGSVeFzQ9NAWx'\nconst invalidValidation = validateAddress(invalidPkh)\nprintln(`Calling the validateAddress function with ${invalidPkh} returns ${invalidValidation}.`)  \n")),Object(l.b)("h4",{id:"the-validatekeyhash-function"},"The ",Object(l.b)("inlineCode",{parentName:"h4"},"validateKeyHash")," function"),Object(l.b)("p",null,"This function is used to validate implicit addresses (tz1, tz2, tz3). "),Object(l.b)("p",null,"Here is a valid example with a pkh and an invalid one where the prefix is missing :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validateKeyHash } from '@taquito/utils';\n\n//valid\nconst keyHash = 'tz1L9r8mWmRPndRhuvMCWESLGSVeFzQ9NAWx'\nconst validation = validateKeyHash(keyHash)\nprintln(`Calling the validateKeyHash function with ${keyHash} returns ${validation}.`)\n\n//invalid prefix\nconst keyHashWithoutPrefix = 'L9r8mWmRPndRhuvMCWESLGSVeFzQ9NAWx'\nconst invalidValidation = validateKeyHash(keyHashWithoutPrefix)\nprintln(`Calling the validateKeyHash function with ${keyHash} returns ${invalidValidation}.`)\n")),Object(l.b)("h4",{id:"the-validatecontractaddress-function"},"The ",Object(l.b)("inlineCode",{parentName:"h4"},"validateContractAddress")," function"),Object(l.b)("p",null,"This function is used to validate originated addresses (KT1)."),Object(l.b)("p",null,"Here is a valid example with the address of an existing contract :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validateContractAddress } from '@taquito/utils';\n\n//valid\nconst contractAddress = 'KT1JVErLYTgtY8uGGZ4mso2npTSxqVLDRVbC'\nconst validation = validateContractAddress(contractAddress)\nprintln(`Calling the validateContractAddress function with ${contractAddress} returns ${validation}.`)\n")),Object(l.b)("h3",{id:"validate-a-chain"},"Validate a chain"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"validateChain")," function is used to validate a chain id. "),Object(l.b)("p",null,"The following example shows a valid result when using the mainnet chain id and an invalid result if the prefix is missing :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validateChain } from '@taquito/utils';\n\n//valid\nconst chainId = 'NetXdQprcVkpaWU'\nconst validation = validateChain(chainId)\nprintln(`Calling the validateChain function with ${chainId} returns ${validation}.`)\n\n//invalid prefix\nconst chainIdWithoutPrefix = 'XdQprcVkpaWU'\nconst invalidValidation = validateChain(chainIdWithoutPrefix)\nprintln(`Calling the validateChain function with ${chainIdWithoutPrefix} returns ${invalidValidation}.`)\n")),Object(l.b)("h3",{id:"validate-a-public-key"},"Validate a public key"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"validatePublicKey")," is used to check if a public key is valid."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validatePublicKey } from '@taquito/utils';\n\n//valid\nconst publicKey = 'edpkvS5QFv7KRGfa3b87gg9DBpxSm3NpSwnjhUjNBQrRUUR66F7C9g'\nconst validation = validatePublicKey(publicKey)\nprintln(`Calling the validatePublicKey function with ${publicKey} returns ${validation}.`)\n\n//invalid prefix\nconst value = 'tz1L9r8mWmRPndRhuvMCWESLGSVeFzQ9NAWx'\nconst invalidValidation = validatePublicKey(value)\nprintln(`Calling the validatePublicKey function with ${value} returns ${invalidValidation}.`)\n")),Object(l.b)("h3",{id:"validate-a-signature"},"Validate a signature"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"validateSignature")," function is used to check if a signature is valid."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { validateSignature } from '@taquito/utils';\n\n//valid\nconst signature = 'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg'\nconst validation = validateSignature(signature)\nprintln(`Calling the validateSignature function with ${signature} returns ${validation}.`)\n\n//invalid checksum\nconst invalidSignature = 'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuM'\nconst invalidValidation = validateSignature(invalidSignature)\nprintln(`Calling the validateSignature function with ${invalidSignature} returns ${invalidValidation}.`)\n")))}c.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,v=u["".concat(r,".").concat(p)]||u[p]||h[p]||l;return t?i.a.createElement(v,o(o({ref:n},s),{},{components:t})):i.a.createElement(v,o({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);