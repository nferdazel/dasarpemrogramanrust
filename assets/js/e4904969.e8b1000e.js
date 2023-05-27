"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[8732],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>s});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),o=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=o(e.components);return t.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),s=i,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?t.createElement(c,r(r({ref:a},m),{},{components:n})):t.createElement(c,r({ref:a},m))}));function s(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4510:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=n(7462),i=(n(7294),n(3905));const l={sidebar_position:38,title:"A.38. Tipe Data \u2192 Option",sidebar_label:"A.38. Tipe Data \u2192 Option"},r=void 0,p={unversionedId:"basic/option-type",id:"basic/option-type",title:"A.38. Tipe Data \u2192 Option",description:"Option adalah salah satu tipe data penting pada Rust programming, digunakan untuk menampung data yang isinya bisa berpotensi kosong (None). Chapter ini membahas tentang tipe data tersebut.",source:"@site/docs/basic/option-type.md",sourceDirName:"basic",slug:"/basic/option-type",permalink:"/basic/option-type",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,title:"A.38. Tipe Data \u2192 Option",sidebar_label:"A.38. Tipe Data \u2192 Option"},sidebar:"tutorialSidebar",previous:{title:"A.37. Generics",permalink:"/basic/generics"},next:{title:"A.39. Tipe Data \u2192 Result",permalink:"/basic/result-type"}},d={},o=[{value:"A.38.1. Konsep <code>Option</code>",id:"a381-konsep-option",level:2},{value:"A.38.2. Pattern matching pada tipe <code>Option</code>",id:"a382-pattern-matching-pada-tipe-option",level:2},{value:"\u25c9 Tips pattern matching",id:"-tips-pattern-matching",level:3},{value:"A.38.3. Method tipe data <code>Option</code>",id:"a383-method-tipe-data-option",level:2},{value:"\u25c9 Method <code>unwrap</code>",id:"-method-unwrap",level:3},{value:"\u25c9 Method <code>is_some</code> &amp; <code>is_none</code>",id:"-method-is_some--is_none",level:3},{value:"\u25c9 Method <code>unwrap_or_default</code>",id:"-method-unwrap_or_default",level:3},{value:"\u25c9 Method <code>unwrap_or</code>",id:"-method-unwrap_or",level:3},{value:"\u25c9 Method <code>unwrap_or_else</code>",id:"-method-unwrap_or_else",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],m={toc:o};function u(e){let{components:a,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Option")," adalah salah satu tipe data penting pada Rust programming, digunakan untuk menampung data yang isinya bisa berpotensi kosong (",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"). Chapter ini membahas tentang tipe data tersebut."),(0,i.kt)("h2",{id:"a381-konsep-option"},"A.38.1. Konsep ",(0,i.kt)("inlineCode",{parentName:"h2"},"Option")),(0,i.kt)("p",null,"Tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," adalah enum dengan isi 2 buah enum value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Option::Some<T>")," (atau ",(0,i.kt)("inlineCode",{parentName:"li"},"Some<T>"),"), digunakan untuk menandai bahwa data memiliki value/nilai."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Option::None")," (atau ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"), digunakan untuk menandai bawah data adalah tidak ada nilainya.")),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None")," bisa disamakan dengan nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," atau ",(0,i.kt)("inlineCode",{parentName:"li"},"nil")," pada bahasa pemrograman lain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T")," merupakan parameter generic. Lebih jelasnya mengenai generic dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/generics"},"Generics"),"."))),(0,i.kt)("p",null,"Tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," memiliki notasi penulisan ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<T>")," dimana ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," adalah tipe data sebenarnya yang dibungkus oleh enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some"),"."),(0,i.kt)("p",null,"Berikut adalah contoh cara penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn divider(a: i32, b: i32) -> Option<i32> {\n    if b == 0 {\n        return None;\n    }\n\n    let result = a / b;\n    return Some(result);\n}\n\nfn main() {\n    let result1 = divider(10, 5);\n    println!("result: {:?}", result1);\n\n    let result2: Option<i32> = divider(10, 0);\n    println!("result: {:?}", result2);\n}\n')),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"divider")," di atas tugasnya adalah melakukan operasi aritmatika pembagian angka numerik ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),", parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," dibagi ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,i.kt)("p",null,"Pada fungsi tersebut terdapat pengecekan apabila nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", maka yang dikembalikan adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", selainnya maka hasil operasi pembagian dikembalikan dibungkus dalam enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<i32>"),". Bisa dilihat pada statement return value fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"divider"),", nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," dibungkus menggunakan tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Some"),"."),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"divider")," nilai baliknya bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<i32>"),". Dari tipe data yang digunakan nantinya bisa diprediksi pasti akan ada 2 potensi value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return value adalah enum value ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", muncul ketika nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},"Return value adalah nilai hasil numerik yang dibungkus oleh enum value ",(0,i.kt)("inlineCode",{parentName:"li"},"Some<i32>"))),(0,i.kt)("p",null,"Output program di atas saat di-run:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Option type",src:n(1384).Z,width:"450",height:"127"})),(0,i.kt)("h2",{id:"a382-pattern-matching-pada-tipe-option"},"A.38.2. Pattern matching pada tipe ",(0,i.kt)("inlineCode",{parentName:"h2"},"Option")),(0,i.kt)("p",null,"Dalam penerapannya, ketika ada data bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," artinya data tersebut berpotensi untuk berisi nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>"),", pasti antara 2 nilai tersebut."),(0,i.kt)("p",null,"Umumnya penggunaan tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," selalu diikuti dengan seleksi kondisi. Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," bisa digunakan dalam seleksi kondisi, namun dalam Praktiknya lebih baik menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," karena memberikan kemudahan dalam pengaksesan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," milik ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," (dimana ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," adalah data yang kita cari dibungkus dalam enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some"),")."),(0,i.kt)("p",null,"Mari kita praktikkan. Ubah isi fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," dengan kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result1 = divider(10, 5);\nmatch result1 {\n    None    => println!("cannot divide by 0"),\n    Some(x) => println!("result: {x}"),\n}\n\nlet result2 = divider(10, 0);\nmatch result2 {\n    None    => println!("cannot divide by 0"),\n    Some(x) => {\n        println!("result: {}", x)\n    },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Option type",src:n(4890).Z,width:"446",height:"124"})),(0,i.kt)("p",null,"Bisa dilihat cara mengambil nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," dari enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>")," cukup mudah dengan menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". Penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," untuk seleksi kondisi biasa disebut dengan ",(0,i.kt)("strong",{parentName:"p"},"pattern matching")," dan teknik ini sangat fleksibel dan advance."),(0,i.kt)("p",null,"Sebagai contoh, dengan penerapan match yang seperti ini kita bisa meng-handle 3 skenario seleksi kondisi:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result1 = divider(10, 5);\nmatch result1 {\n    None    => println!("cannot divide by 0"),\n    Some(2) => println!("the result is 2"),\n    Some(x) => println!("result: {x}"),\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kondisi ke-1: jika nilai adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", maka munculkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"cannot divide by 0")),(0,i.kt)("li",{parentName:"ul"},"Kondisi ke-2: jika nilai adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", maka munculkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"the result is 2")),(0,i.kt)("li",{parentName:"ul"},"Kondisi ke-1: jika nilai adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"Some")," selain dari ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," dan ",(0,i.kt)("inlineCode",{parentName:"li"},"Some(2)"),", maka munculkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"result: {x}"))),(0,i.kt)("h3",{id:"-tips-pattern-matching"},"\u25c9 Tips pattern matching"),(0,i.kt)("p",null,"Silakan perhatikan kode yang sudah kita praktikkan berikut ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result = divider(10, 5);\nmatch result {\n    None    => println!("cannot divide by 0"),\n    Some(x) => println!("result: {x}"),\n}\n')),(0,i.kt)("p",null,"Penerapan pattern matching seperti contoh di atas memiliki konsekuensi, yaitu variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," hanya bisa diakses pada block ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(x)")," saja."),(0,i.kt)("p",null,"Adakalanya kita butuh untuk mengeluarkan variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," ke luar block. Hal seperti ini mudah untuk dilakukan, dan ada beberapa cara yang bisa dipilih, namun menurut penulis yang paling elegan adalah cara berikut ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let result = match divider(10, 5) {\n        None => {\n            println!("cannot divide by 0");\n            0\n        },\n        Some(x) => x,\n    };\n\n    println!("result: {:?}", result);\n}\n')),(0,i.kt)("p",null,"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"divider(10, 5)")," mengembalikan data bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<i32>"),". Data tersebut digunakan pada keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," seperti biasa. Namun pada contoh di atas ada yang berbeda, yaitu return value dari statement ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," ditampung ke variabel (",(0,i.kt)("inlineCode",{parentName:"p"},"result"),")."),(0,i.kt)("p",null,"Isi dari pattern matching ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," sendiri ada dua:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ketika block ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," match, pesan error di-print kemudian nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," dijadikan return statement ",(0,i.kt)("inlineCode",{parentName:"li"},"match"),"."),(0,i.kt)("li",{parentName:"ul"},"Ketika block ",(0,i.kt)("inlineCode",{parentName:"li"},"Some")," match, data ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," dijadikan return value statement ",(0,i.kt)("inlineCode",{parentName:"li"},"match"),".")),(0,i.kt)("p",null,"Dengan penerapan pattern matching seperti di atas, maka variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," akan selalu berisi data hasil operasi ",(0,i.kt)("inlineCode",{parentName:"p"},"divider(10, 5)"),". Dengan pengecualian ketika ada error, pesan errornya dimunculkan kemudian hasil operasi pembagian di-set sebagai ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai pattern matching dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/pattern-matching"},"Pattern Matching"))),(0,i.kt)("h2",{id:"a383-method-tipe-data-option"},"A.38.3. Method tipe data ",(0,i.kt)("inlineCode",{parentName:"h2"},"Option")),(0,i.kt)("h3",{id:"-method-unwrap"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"unwrap")),(0,i.kt)("p",null,"Isi dari enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>")," bisa diakses tanpa menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," dengan cara memanfaatkan method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," milik ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<T>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result1 = divider(10, 5);\nif result1 != None {\n    let number = result1.unwrap();\n    println!("result: {}", number);\n}\n')),(0,i.kt)("p",null,"Penggunaan method tersebut sangat dianjurkan diiringi dengan seleksi kondisi untuk memastikan data ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," tidak berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),". Jika data ternyata adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," dan method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," diakses, hasilnya adalah panic error. Contohnya bisa dilihat pada gambar berikut:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Option type",src:n(5499).Z,width:"659",height:"262"})),(0,i.kt)("p",null,"Selain method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," ada beberapa method sejenis lainnya yang bisa dimanfaatkan untuk pengambilan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),". Kita akan bahas satu per satu."),(0,i.kt)("h3",{id:"-method-is_some--is_none"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_some")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_none")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"is_some")," menghasilkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," jika data isinya adalah enum value ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>"),". Sedangkan ",(0,i.kt)("inlineCode",{parentName:"p"},"is_none")," bernilai ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," jika data berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,"Contoh penerapannya bisa dilihat pada program berikut. Kesemua seleksi kondisi pada konteks ini menghasilkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result1 = divider(10, 5);\n\nif result1 != None {\n    let number = result1.unwrap();\n    println!("result: {}", number);\n}\n\nif result1.is_some() {\n    let number = result1.unwrap();\n    println!("result: {}", number);\n}\n\nif !result1.is_none() {\n    let number = result1.unwrap();\n    println!("result: {}", number);\n}\n')),(0,i.kt)("h3",{id:"-method-unwrap_or_default"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"unwrap_or_default")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap_or_default")," mengembalikan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ketika data berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>"),". Jika data ternyata isinya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", maka nilai yang dikembalikan adalah ",(0,i.kt)("em",{parentName:"p"},"default value")," dari tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,i.kt)("p",null,"Sebagai contoh, pada kode berikut statement ",(0,i.kt)("inlineCode",{parentName:"p"},"divider(10, 0)")," return type-nya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<i32>"),", sedangkan return value-nya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),". Pengaksesan method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap_or_default")," menghasilkan ",(0,i.kt)("em",{parentName:"p"},"default value")," dari tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),", yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result2 = divider(10, 0);\nlet number = result2.unwrap_or_default();\nprintln!("result: {}", number);\n// result: 0\n')),(0,i.kt)("h3",{id:"-method-unwrap_or"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"unwrap_or")),(0,i.kt)("p",null,"Method ini mengembalikan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ketika data berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>"),", namun jika data ternyata isinya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", maka nilai yang dikembalikan adalah argument pemanggilan method tersebut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result2 = divider(10, 0);\nlet number = result2.unwrap_or(0);\nprintln!("result: {}", number);\n// result: 0\n')),(0,i.kt)("p",null,"Pada contoh di atas argument pemanggilan method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap_or")," adalah angka ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", artinya ketika ",(0,i.kt)("inlineCode",{parentName:"p"},"result2")," isinya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," maka angka ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," adalah return value pengaksesan method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap_or"),"."),(0,i.kt)("h3",{id:"-method-unwrap_or_else"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"unwrap_or_else")),(0,i.kt)("p",null,"Method ini mengembalikan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ketika data berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"Some<T>"),", namun jika data isinya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", maka nilai yang dikembalikan adalah hasil eksekusi closure yang disisipkan saat memanggil method ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap_or_else"),". Contoh pengaplikasiannya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let result2 = divider(10, 0);\nlet number = result2.unwrap_or_else(|| 0);\nprintln!("result: {}", number);\n// result: 0\n')),(0,i.kt)("p",null,"Closure harus dalam notasi ",(0,i.kt)("inlineCode",{parentName:"p"},"FnOnce() -> T")," dimana ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," pada konteks ini adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Closure ",(0,i.kt)("inlineCode",{parentName:"p"},"|| 0")," adalah kependekan dari ",(0,i.kt)("inlineCode",{parentName:"p"},"|| -> i32 { 0 }"),"."),(0,i.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai closure dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/closures"},"Closures"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/option_type"},"github.com/novalagung/dasarpemrogramanrust-example/../option_type")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/generics"},"Generics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/pattern-matching"},"Pattern Matching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/closures"},"Closures"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html"},"https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/option/index.html"},"https://doc.rust-lang.org/std/option/index.html"))),(0,i.kt)("hr",null))}u.isMDXComponent=!0},1384:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAB/CAIAAADzWVUNAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMTlUMTY6Mjg6NDgrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIxVDE1OjAwOjM2KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIxVDE1OjAwOjM2KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE5NGQ1MGI1LThiMmIt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"},4890:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAB8CAIAAACZuEK1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMTlUMTY6NDA6MjIrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIxVDE1OjAxOjI2KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIxVDE1OjAxOjI2KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFiNTc0MTQ0LTliOWQt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"},5499:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/option-type-3-e2943c7c0a60b13cd69ce8461805846c.png"}}]);